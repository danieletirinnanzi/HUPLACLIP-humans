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
    let graphToDraw = side === "left" ? currentExperiment.graphsToDisplay[blockIndex][presentationIndex][0] : currentExperiment.graphsToDisplay[blockIndex][presentationIndex][1];
    console.log("retrieved graph")

    // for loops that draw the squares and color them
    let squareIndex = 0   //to correctly identify which square is being drawn and filling it correctly
    for (let firstIndex = 0; firstIndex < (currentExperiment.windowSize - 1); firstIndex++) {
        let maxSecondIndex = firstIndex + 1
        for (let secondIndex = 0; secondIndex < maxSecondIndex; secondIndex++) {
            // drawing the square
            ctx.beginPath();
            switch (side) {
                case "left":
                    // drawing left square
                    ctx.fillRect(currentExperiment.stimuliCoordinates.leftTriangle[squareIndex][0], currentExperiment.stimuliCoordinates.leftTriangle[squareIndex][1], currentExperiment.stimuliCoordinates.leftTriangle[squareIndex][2], currentExperiment.stimuliCoordinates.leftTriangle[squareIndex][2])
                    break;
                case "right":
                    // drawing right square
                    ctx.fillRect(currentExperiment.stimuliCoordinates.rightTriangle[squareIndex][0], currentExperiment.stimuliCoordinates.rightTriangle[squareIndex][1], currentExperiment.stimuliCoordinates.rightTriangle[squareIndex][2], currentExperiment.stimuliCoordinates.rightTriangle[squareIndex][2])
                    break;
            }

            // Determining whether the two nodes are associated:
            let presentAssociation = false // will be changed to "true" if association is present in the considered instance 
            // dealing with associations for node "0":
            if (currentTrialOrder[firstIndex + 1] == 0) {
                //first node was zero, reading 0th column of element
                if (graphToDraw[(currentTrialOrder[secondIndex])][0] == 1)
                    presentAssociation = true
            } else if (currentTrialOrder[secondIndex] == 0) {
                //second node was zero, reading 0th column of element
                if (graphToDraw[(currentTrialOrder[firstIndex + 1])][0] == 1)
                    presentAssociation = true
            } else {
                // when dealing with non-zero nodes, always reading the value from bigger node (constraint since matrix is triangular)
                if (currentTrialOrder[firstIndex + 1] < currentTrialOrder[secondIndex]) {
                    //second element is bigger
                    if (graphToDraw[currentTrialOrder[secondIndex]][currentTrialOrder[firstIndex + 1]] == 1)
                        presentAssociation = true
                } else {
                    //second element is smaller
                    if (graphToDraw[currentTrialOrder[firstIndex + 1]][currentTrialOrder[secondIndex]] == 1)
                        presentAssociation = true
                }
            }

            //filling the square according to the choice just made
            if (presentAssociation) {
                // black if nodes are associated
                ctx.fillStyle = "#000000";
                ctx.fill();
            } else {
                // white if nodes are unassociated
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
            }

            // incrementing squareIndex:
            squareIndex += 1

        }

    }

    //DEBUG
    console.log("finished drawing graph on the: " + side)

}

/* FUNCTION TO DRAW THE RED DIAGONAL THAT SEPARATES THE TWO MATRICES*/
function drawDiagonal(ctx) {
    /* INPUT: 
    - ctx (reference to the canvas on which the diagonal will be drawn)

    OUTPUT:
    - display of red diagonal between the two matrices
    */

    // for loop to generate the diagonal:
    for (let index = 0; index < (currentExperiment.windowSize); index++) {
        // drawing square of diagonal (x, y, width, height)
        ctx.fillRect(currentExperiment.fixedDrawingParameters[0] + (currentExperiment.fixedDrawingParameters[2] * index), currentExperiment.fixedDrawingParameters[1] + (currentExperiment.fixedDrawingParameters[2] * index), currentExperiment.fixedDrawingParameters[2], currentExperiment.fixedDrawingParameters[2])
        // filling square in red
        ctx.fillStyle = "#ff0000";
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
    ctx.fillText(feedbackStringShuffle, 0, (currentExperiment.canvasDimensions[0]) / 7.5);

    // TRIAL NUMBER (right side of screen):
    let numberOfFinalResponses = arrayOfResponses.length + 1
    //creating string to be displayed as feedback:
    let feedbackStringTrials = "TRIAL: " + numberOfFinalResponses + " / " + currentExperiment.numberOfPresentationsPerBlock
    // text on the canvas:
    ctx.fillStyle = "black"
    ctx.font = "bold 2rem system-ui";
    ctx.fillText(feedbackStringTrials, (currentExperiment.canvasDimensions[1] - (currentExperiment.canvasDimensions[1] / 4.8)), (currentExperiment.canvasDimensions[0]) / 8.5);

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
    ctx.fillRect((currentExperiment.canvasDimensions[1] - (currentExperiment.canvasDimensions[1] / 4.8)), (currentExperiment.canvasDimensions[0]) / 6.7, (currentExperiment.canvasDimensions[1] / 8.5), (currentExperiment.canvasDimensions[0]) / 14);
    // text on the canvas:
    ctx.fillStyle = "black"
    ctx.font = "bold 2rem system-ui";
    ctx.fillText(feedbackStringScore, (currentExperiment.canvasDimensions[1] - (currentExperiment.canvasDimensions[1] / 5)), (currentExperiment.canvasDimensions[0]) / 5);
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
    ctx.fillText(reminderString_arrows_label, 0, (currentExperiment.canvasDimensions[0]) / 4.5);
    // description string:
    let reminderString_arrows_description = "To choose the triangle with the hidden red tiles."
    // text specs (not bold)
    ctx.font = "1.1rem system-ui";
    ctx.fillText(reminderString_arrows_description, 0, (currentExperiment.canvasDimensions[0]) / 4.1);

    // SPACE:
    // key label:
    let reminderString_space_label = "SPACE"
    // text specs (not bold)
    ctx.font = "italic small-caps bold 1.3rem system-ui";
    ctx.fillText(reminderString_space_label, 0, (currentExperiment.canvasDimensions[0]) / 3.5);
    // description string:
    let reminderString_space_description = "To shuffle the triangles."
    // text specs (not bold)
    ctx.font = "1.1rem system-ui";
    ctx.fillText(reminderString_space_description, 0, (currentExperiment.canvasDimensions[0]) / 3.25);
}