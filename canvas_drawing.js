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
    (console.log("entered graph drawing function"))
    // Drawing stimulus:
    // retrieving graph to draw:
    let graphToDraw = side === "left" ?
        currentExperiment.graphsToDisplay[blockIndex][presentationIndex][0] :
        currentExperiment.graphsToDisplay[blockIndex][presentationIndex][1];
    console.log(graphToDraw[currentExperiment.graphSize].graph_name)
    // retrieving coordinates:
    let triangleCoordinates = side === "left" ?
        currentExperiment.stimuliCoordinates.leftTriangle :
        currentExperiment.stimuliCoordinates.rightTriangle;
    console.log("retrieved graph and coordinates")

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

    console.log("finished drawing graph")

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
        // drawing square of diagonal (x, y, width, height)
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

        // SCORE: isolating the trials for current block where arrow press was done (they have the "accuracy" property and are used to determine the number of completed trials and the score)
        if (element.block_index == blockIndex && element.hasOwnProperty('accuracy'))
            arrayOfResponses.push(element.accuracy)

    });

    // SHUFFLES LEFT (left side of screen):
    // computing the number of shuffles left:
    let remainingShuffles = currentExperiment.maximumNumberOfShuffles - shufflesPerformed
    //creating string to be displayed as feedback:
    let feedbackStringShuffle = "SHUFFLES LEFT: " + remainingShuffles
    // text on canvas (increasing red hue when the remaining shuffles decrease. No randomization requested -> black; no shuffles left -> red ):
    ctx.fillStyle = `rgb(${255 - Math.floor(255 / currentExperiment.maximumNumberOfShuffles) * remainingShuffles},0,0)`;
    ctx.font = "bold 2rem system-ui";
    ctx.fillText(feedbackStringShuffle, 0, (physicalScreenHeight) / 7.5);

    // TRIAL NUMBER (right side of screen):
    let numberOfFinalResponses = arrayOfResponses.length + 1
    //creating string to be displayed as feedback:
    let feedbackStringTrials = "TRIAL: " + numberOfFinalResponses + " / " + currentExperiment.numberOfPresentationsPerBlock
    // text on the canvas:
    ctx.fillStyle = "black"
    ctx.font = "bold 2rem system-ui";
    ctx.fillText(feedbackStringTrials, (physicalScreenWidth - (physicalScreenWidth / 5.8)), (physicalScreenHeight) / 8.5);

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
    ctx.fillRect((physicalScreenWidth - (physicalScreenWidth / 5.8)), (physicalScreenHeight) / 6.7, (physicalScreenWidth / 8.5), (physicalScreenHeight) / 14);
    // text on the canvas:
    ctx.fillStyle = "black"
    ctx.font = "bold 2rem system-ui";
    ctx.fillText(feedbackStringScore, (physicalScreenWidth - (physicalScreenWidth / 6.5)), (physicalScreenHeight) / 5);
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
    ctx.fillText(reminderString_arrows_label, 0, (physicalScreenHeight) / 4.5);
    // description string:
    let reminderString_arrows_description = "To choose the triangle with the hidden red tiles."
    // text specs (not bold)
    ctx.font = "1.1rem system-ui";
    ctx.fillText(reminderString_arrows_description, 0, (physicalScreenHeight) / 4.1);

    // SPACE:
    // key label:
    let reminderString_space_label = "SPACE"
    // text specs (not bold)
    ctx.font = "italic small-caps bold 1.3rem system-ui";
    ctx.fillText(reminderString_space_label, 0, (physicalScreenHeight) / 3.5);
    // description string:
    let reminderString_space_description = "To shuffle the triangles."
    // text specs (not bold)
    ctx.font = "1.1rem system-ui";
    ctx.fillText(reminderString_space_description, 0, (physicalScreenHeight) / 3.25);
}


/* FUNCTION TO RESIZE THE CANVAS (called before drawing, a new canvas is re-created at every trial) */
// from: https://stackoverflow.com/questions/47696956/display-pixel-perfect-canvas-on-all-devices 

const px = v => `${v}px`;

function resizeCanvas(canvas) {
    // how many devicePixels per pixel in the canvas we want
    // you can set this to 1 if you always want 1 device pixel to 1 canvas pixel
    const pixelSize = Math.max(1, devicePixelRatio) | 0;

    const rect = canvas.parentElement.getBoundingClientRect();
    const deviceWidth = rect.width * devicePixelRatio | 0;
    const deviceHeight = rect.height * devicePixelRatio | 0;
    const pixelsAcross = deviceWidth / pixelSize | 0;
    const pixelsDown = deviceHeight / pixelSize | 0;
    const devicePixelsAcross = pixelsAcross * pixelSize;
    const devicePixelsDown = pixelsDown * pixelSize;
    canvas.style.width = px(devicePixelsAcross / devicePixelRatio);
    canvas.style.height = px(devicePixelsDown / devicePixelRatio);
    canvas.width = pixelsAcross;
    canvas.height = pixelsDown;
}