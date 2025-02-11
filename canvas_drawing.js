/* FUNCTION TO RETRIEVE TRUE SCREEN HEIGHT using WebGL */
function getTrueScreenDimensions() {
    /* INPUT: none

    OUTPUT:
    - the true physical screen height and width (in pixels) of the device on which the experiment is run
    */

    // Create an invisible <canvas> element
    let canvas = document.createElement("canvas");

    // Try to get a WebGL rendering context from the canvas
    let gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (gl) {
        // WebGL successfully initialized, attempt to get GPU info
        let debugInfo = gl.getExtension("WEBGL_debug_renderer_info");

        // Retrieve the GPU renderer name (optional, but useful for debugging)
        let renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : "Unknown";
        console.log("GPU Renderer:", renderer);

        // Return the true physical screen width and height using devicePixelRatio
        return {
            width: window.screen.width * window.devicePixelRatio,
            height: window.screen.height * window.devicePixelRatio
        };
    } else {
        // Fallback: if WebGL is unavailable, use the standard screen.width/height * devicePixelRatio
        console.warn("WebGL not supported. Falling back to screen dimensions * devicePixelRatio.");
        return {
            width: window.screen.width * window.devicePixelRatio,
            height: window.screen.height * window.devicePixelRatio
        };
    }
}


/* FUNCTION TO CALCULATE fixedDrawingParameters (based on screen height and width) */
function calculateFixedDrawingParameters(width, height, graphSize) {
    /* INPUT:     
    - width (width of the screen)
    - height (height of the screen)
    - graphSize (size of the graph to be drawn)

    OUTPUT:
    - array containing the starting x coordinate, starting y coordinate, and the physical dimension of a single square
    */

    // calculating drawing parameters:
    // - number of squares to be drawn in the two directions (2 squares are for the diagonal):
    let numberOfSquares = graphSize + 2
    // - square side dimension (scales with screen resolution)
    let squareSideDimensionPhysical = Math.floor(height / numberOfSquares)
    
    // TO REMOVE
    console.log("the physical single square dimension is: " + squareSideDimensionPhysical)
    
    // - top and bottom margin (centering the square in the available space)
    let topAndBottomMarginPhysical = Math.floor((height - (squareSideDimensionPhysical * numberOfSquares)) / 2)
    // - calculating starting point on x axis:
    let xStartingPointLeft = (width / 2) - ((height - (topAndBottomMarginPhysical * 2)) / 2)
    // - calculating starting point on y axis:
    let yStartingPoint = topAndBottomMarginPhysical  //NB: starting to draw not from top of window, but leaving margin above and below the square
    
    // returning array with fixed drawing parameters
    return [xStartingPointLeft, yStartingPoint, squareSideDimensionPhysical]
    
}

/* FUNCTION TO CALCULATE THE COORDINATES OF LEFT AND RIGHT TRIANGLE */
function calculateTrianglesCoordinates(fixedDrawingParameters, graphSize) {
    /* INPUT:     
    - fixedDrawingParameters (array containing the starting x coordinate, starting y coordinate, and the physical dimension of a single square)
    - graphSize (size of the graph to be drawn)

    OUTPUT:
    - array containing the coordinates of the left and right triangles
    */

    // unpacking fixedDrawingParameters
    let xStartingPointLeft = fixedDrawingParameters[0]
    let yStartingPoint = fixedDrawingParameters[1]
    let squareSideDimensionPhysical = fixedDrawingParameters[2]

    // left triangle COORDINATES:
    let leftTriangleCoordinatesArray = []
    for (let firstIndex = 0; firstIndex < (graphSize - 1); firstIndex++) {
        let maxSecondIndex = firstIndex + 1
        for (let secondIndex = 0; secondIndex < maxSecondIndex; secondIndex++) {
            // calculating starting points of fillRect for each square (starting from xStartingPoint, then moving it down 2 squares to leave space for diagonal)
            let xStart = xStartingPointLeft + (squareSideDimensionPhysical * secondIndex)
            let yStart = (yStartingPoint + (squareSideDimensionPhysical * (firstIndex))) + 2 * squareSideDimensionPhysical   //leaving 2 squareSideDimension of additional space for diagonal
            // pushing starting points of squares into array:
            leftTriangleCoordinatesArray.push([xStart, yStart, squareSideDimensionPhysical]);
        }
    }

    // right triangle COORDINATES:
    let rightTriangleCoordinatesArray = []
    for (let firstIndex = 0; firstIndex < (graphSize - 1); firstIndex++) {
        let maxSecondIndex = firstIndex + 1
        for (let secondIndex = 0; secondIndex < maxSecondIndex; secondIndex++) {
            // calculating starting points of fillRect for each square (starting from xStartingPoint, then moving it right 2 squares to leave space for diagonal):
            let xStart = (xStartingPointLeft + (squareSideDimensionPhysical * (firstIndex))) + 2 * squareSideDimensionPhysical //leaving 2 squareSideDimension of additional space for diagonal
            let yStart = yStartingPoint + (squareSideDimensionPhysical * secondIndex)
            // pushing starting points of squares into array:
            rightTriangleCoordinatesArray.push([xStart, yStart, squareSideDimensionPhysical]);
        }
    }

    // returning left and right triangle coordinates
    return [leftTriangleCoordinatesArray, rightTriangleCoordinatesArray]

}


/* FUNCTION TO DETERMINE COLOR OF SINGLE SQUARE */
function determineAssociation(firstNode, secondNode, graphToDraw) {
    /* INPUT:     
    - firstNode (first node considered)
    - secondNode (second node considered)
    - graphToDraw (original graph to be displayed)

    OUTPUT:
    - color of the current square representing the edge between firstNode and secondNode
    */

    // Determining whether the two nodes are associated and changing the color accordingly:
    // - dealing with associations for node "0":
    if (firstNode == 0) {
        // - first node was zero, reading 0th column of element (if associated, color is black, otherwise white)
        return graphToDraw[secondNode][0] === 1 ? "#000000" : "#FFFFFF";
    } else if (secondNode == 0) {
        // - second node was zero, reading 0th column of element (if associated, color is black, otherwise white)
        return graphToDraw[firstNode][0] === 1 ? "#000000" : "#FFFFFF";
    }
    // - when dealing with non-zero nodes, always reading the value from bigger node (constraint since matrix is triangular)
    return graphToDraw[Math.max(firstNode, secondNode)][Math.min(firstNode, secondNode)] === 1 ? "#000000" : "#FFFFFF";
}



/* FUNCTION TO DRAW SINGLE STIMULUS ON CANVAS */
function drawStimulus(side, ctx, blockIndex, presentationIndex, currentTrialOrder) {
    /* INPUT: 
    - side (left/right: indication of which stimulus has to be drawn, whether the left one or the right one)
    - ctx (reference to the canvas on which stimuli will be drawn)
    - blockIndex (the number that identifies the current block)
    - presentationIndex (the number that identifies the couple of graphs that is being displayed)    
    - currentTrialOrder (order in which the 1000 nodes are displayed on the screen for the current trial)

    OUTPUT:
    - display of single stimulus on the screen
    NB: coordinates for where to draw the stimuli are calculated in "experiment_parameters.js"
    */
    // Drawing stimulus:
    // retrieving graph to draw:
    let graphToDraw = side === "left" ?
        currentExperiment.graphsToDisplay[blockIndex][presentationIndex][0] :
        currentExperiment.graphsToDisplay[blockIndex][presentationIndex][1];
    // retrieving coordinates:
    let triangleCoordinates = side === "left" ?
        currentExperiment.stimuliCoordinates.leftTriangle :
        currentExperiment.stimuliCoordinates.rightTriangle;

    // for loops that draw the squares and color them
    let squareIndex = 0   //to correctly identify which square is being drawn and filling it correctly
    for (let firstIndex = 0; firstIndex < (currentExperiment.graphSize - 1); firstIndex++) {
        let maxSecondIndex = firstIndex + 1
        for (let secondIndex = 0; secondIndex < maxSecondIndex; secondIndex++) {

            // calling function to determine fill color (has to be determined before calling fillRect() ):
            ctx.fillStyle = determineAssociation(currentTrialOrder[firstIndex + 1], currentTrialOrder[secondIndex], graphToDraw)

            // drawing left square
            ctx.fillRect(
                triangleCoordinates[squareIndex][0],
                triangleCoordinates[squareIndex][1],
                triangleCoordinates[squareIndex][2],
                triangleCoordinates[squareIndex][2]
            );

            // filling the square with the color just defined:
            ctx.fill();

            // incrementing squareIndex:
            squareIndex += 1

        }

    }

}

/* FUNCTION TO DRAW THE RED DIAGONAL THAT SEPARATES THE TWO MATRICES*/
function drawDiagonal(ctx) {
    /* INPUT: 
    - ctx (reference to the canvas on which the diagonal will be drawn)

    OUTPUT:
    - display of red diagonal between the two matrices (2 pixels wide)
    */

    // for loop to generate the diagonal:
    for (let index = 0; index < (currentExperiment.graphSize); index++) {
        // setting color to red:
        ctx.fillStyle = "#ff0000";
        // drawing square of diagonal (x, y, width, height) -> 2x2 dimension of diagonal is regulated in (width, height) terms (the red squares forming the diagonal partially overlap)
        ctx.fillRect(currentExperiment.fixedDrawingParameters[0] + (currentExperiment.fixedDrawingParameters[2] * index), currentExperiment.fixedDrawingParameters[1] + (currentExperiment.fixedDrawingParameters[2] * index), currentExperiment.fixedDrawingParameters[2] * 2, currentExperiment.fixedDrawingParameters[2] * 2)
        ctx.fill();
    }

}


/* FUNCTION TO DRAW FEEDBACK ON THE CANVAS*/
function drawFeedback(ctx, blockIndex, presentationIndex, currentTrialsArray) {
    /* INPUT: 
    - ctx (reference to the canvas on which feedback will be drawn)
    - blockIndex (the number that identifies the current block)    
    - presentationIndex (the number that identifies the couple of graphs that is being displayed)
    - currentTrialsArray (the array that stores all the data produced up to now)

    OUTPUT:
    - display of remaining shuffles and accuracy on the screen
    */

    // temporary variables
    let shufflesPerformed = 0 // shuffles left
    let arrayOfResponses = []   // score

    // looping through all the elements to check which trials have a final response (arrow press):
    currentTrialsArray.forEach(element => {

        // SHUFFLES LEFT: isolating the canvas-keyboard-response trials for the current block and presentation were space-bar presses were done
        if (element.trial_type == "canvas-keyboard-response" && element.block_index == blockIndex && element.presentation_index == presentationIndex && element.response == " ")
            // increasing the number of shuffles already performed
            shufflesPerformed += 1

        // SCORE: isolating the trials for current block where arrow press was done (they have the "correct" property and are used to determine the number of completed trials and the score)
        if (element.block_index == blockIndex && element.hasOwnProperty('correct'))
            arrayOfResponses.push(element.correct)

    });

    // SHUFFLES LEFT (left side of screen):
    // computing the number of shuffles left:
    let remainingShuffles = currentExperiment.maximumNumberOfShuffles - shufflesPerformed
    //creating string to be displayed as feedback:
    let feedbackStringShuffle = "SHUFFLES LEFT: " + remainingShuffles
    // text on canvas (increasing red hue when the remaining shuffles decrease. No randomization requested -> black; no shuffles left -> red ):
    ctx.fillStyle = `rgb(${255 - Math.floor(255 / currentExperiment.maximumNumberOfShuffles) * remainingShuffles},0,0)`;
    ctx.font = "bold 2rem system-ui";
    ctx.fillText(feedbackStringShuffle, 0, (currentExperiment.screenHeight) / 7.5);

    // TRIAL NUMBER (right side of screen):
    let numberOfFinalResponses = arrayOfResponses.length + 1
    //creating string to be displayed as feedback:
    let feedbackStringTrials = "TRIAL: " + numberOfFinalResponses + " / " + currentExperiment.numberOfPresentationsPerBlock
    // text on the canvas:
    ctx.fillStyle = "black"
    ctx.font = "bold 2rem system-ui";
    ctx.fillText(feedbackStringTrials, (currentExperiment.screenWidth - (currentExperiment.screenWidth / 5)), (currentExperiment.screenHeight) / 8.5);

    // SCORE (right side of screen):
    let numberOfCorrectResponses = arrayOfResponses.reduce((a, b) => a + b, 0)
    //creating string to be displayed as feedback:
    let feedbackStringScore = "SCORE: " + numberOfCorrectResponses
    //rect (differentiating color (green / red) based on correctness / incorrectness of last response)
    if (arrayOfResponses.length == 0)
        // if no response has been given, choosing a "neutral" color
        ctx.fillStyle = "orange";
    else
        if (arrayOfResponses[arrayOfResponses.length - 1] == true)
            ctx.fillStyle = "lawngreen";
        else
            ctx.fillStyle = "red";
    ctx.fillRect((currentExperiment.screenWidth - (currentExperiment.screenWidth / 5)), (currentExperiment.screenHeight) / 6.7, (currentExperiment.screenWidth / 8.5), (currentExperiment.screenHeight) / 14);
    // text on the canvas:
    ctx.fillStyle = "black"
    ctx.font = "bold 2rem system-ui";
    ctx.fillText(feedbackStringScore, (currentExperiment.screenWidth - (currentExperiment.screenWidth / 5.5)), (currentExperiment.screenHeight) / 5);
}


/* FUNCTION TO DRAW INSTRUCTIONS REMINDER ON THE CANVAS*/
function drawInstructionsReminder(ctx) {
    /* INPUT: 
    - ctx (reference to the canvas on which feedback will be drawn)

    OUTPUT:
    - reminder of the keyboard actions that can be performed displayed on the screen
    (NB: carefully control coordinates of the text on the screen)
    */

    // ARROWS:
    // key label:
    let reminderString_arrows_label = "LEFT / RIGHT ARROW"
    // text specs (not bold)
    ctx.font = "italic bold 1.3rem system-ui";
    ctx.fillText(reminderString_arrows_label, 0, (currentExperiment.screenHeight) / 4.5);
    // description string:
    let reminderString_arrows_description = "To choose the triangle with the hidden red tiles."
    // text specs (not bold)
    ctx.font = "1.1rem system-ui";
    ctx.fillText(reminderString_arrows_description, 0, (currentExperiment.screenHeight) / 4.1);

    // SPACE:
    // key label:
    let reminderString_space_label = "SPACE"
    // text specs (not bold)
    ctx.font = "italic small-caps bold 1.3rem system-ui";
    ctx.fillText(reminderString_space_label, 0, (currentExperiment.screenHeight) / 3.5);
    // description string:
    let reminderString_space_description = "To shuffle the triangles."
    // text specs (not bold)
    ctx.font = "1.1rem system-ui";
    ctx.fillText(reminderString_space_description, 0, (currentExperiment.screenHeight) / 3.25);
}


/* FUNCTION TO RESIZE THE CANVAS (called before drawing, a new canvas is re-created at every trial) */
// from: https://stackoverflow.com/questions/47696956/display-pixel-perfect-canvas-on-all-devices 

// Helper function to convert a numeric value to a pixel string (e.g., 100 -> "100px")
const px = v => `${v}px`;

// Resizing canvas using devicePixelRatio:
function resizeCanvas_DPR(canvas) {
    // Determine the scaling factor based on the device's pixel ratio.
    // This ensures sharp rendering on high-DPI (Retina) displays.
    // If devicePixelRatio < 1, we default to 1 to avoid downscaling issues.
    const pixelSize = Math.max(1, devicePixelRatio) | 0;

    // Get the dimensions of the canvas's parent element in CSS pixels.
    const rect = canvas.parentElement.getBoundingClientRect();

    // Convert the CSS dimensions to device pixels by multiplying with devicePixelRatio.
    const deviceWidth = rect.width * devicePixelRatio | 0;
    const deviceHeight = rect.height * devicePixelRatio | 0;

    // Calculate the number of logical pixels the canvas should have.
    const pixelsAcross = deviceWidth / pixelSize | 0;
    const pixelsDown = deviceHeight / pixelSize | 0;

    // Convert back to device pixels to ensure alignment with screen rendering.
    const devicePixelsAcross = pixelsAcross * pixelSize;
    const devicePixelsDown = pixelsDown * pixelSize;

    // Set the canvas element's CSS size (display size) to match the parent element,
    // compensating for devicePixelRatio to ensure proper scaling.
    canvas.style.width = px(devicePixelsAcross / devicePixelRatio);
    canvas.style.height = px(devicePixelsDown / devicePixelRatio);

    // Set the actual canvas resolution to match the calculated logical pixels.
    // This ensures the canvas is drawn at the correct resolution internally.
    canvas.width = pixelsAcross;
    canvas.height = pixelsDown;
}