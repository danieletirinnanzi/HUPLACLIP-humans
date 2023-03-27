/* FUNCTION TO DRAW SINGLE STIMULUS ON CANVAS */
function drawStimuli(ctx,presentationIndex,currentTrialOrder) {
    /* INPUT: 
    - ctx (reference to the canvas on which stimuli will be drawn)
    - presentationIndex (the number that identifies the couple of graphs that is being displayed)
    - currentTrialOrder (order in which the nodes are displayed on the screen)

    OUTPUT:
    - display of the two stimuli on the screen
    */

    //NB: coordinates for where to draw the stimuli are calculated in "experiment_parameters.js"

    // Drawing stimulus on LEFT SIDE:
    // accessing the graph that will appear on the left side of the screen:
    let leftGraph = currentExperiment.graphsToDisplay[presentationIndex][0]  

    for (let firstIndex = 0; firstIndex < currentExperiment.numberOfIterations; firstIndex++) {
        for (let secondIndex = 0; secondIndex < firstIndex+1; secondIndex++) {
            // drawing the square
            ctx.beginPath();
            ctx.moveTo(currentExperiment.xStartingPointLeft-currentExperiment.singleStepSize*(firstIndex-secondIndex+1),currentExperiment.yStartingPoint+currentExperiment.singleStepSize*(firstIndex+secondIndex)); //starting point (top angle)
            ctx.lineTo(currentExperiment.xStartingPointLeft-currentExperiment.singleStepSize*(firstIndex-secondIndex),currentExperiment.yStartingPoint+currentExperiment.singleStepSize*(firstIndex+secondIndex+1)); //going left-right (right angle)
            ctx.lineTo(currentExperiment.xStartingPointLeft-currentExperiment.singleStepSize*(firstIndex-secondIndex+1),currentExperiment.yStartingPoint+currentExperiment.singleStepSize*(firstIndex+secondIndex+2)); //going down-left (bottom angle)
            ctx.lineTo(currentExperiment.xStartingPointLeft-currentExperiment.singleStepSize*(firstIndex-secondIndex+2),currentExperiment.yStartingPoint+currentExperiment.singleStepSize*(firstIndex+secondIndex+1)); //going up-left (left angle)
            ctx.lineTo(currentExperiment.xStartingPointLeft-currentExperiment.singleStepSize*(firstIndex-secondIndex+1),currentExperiment.yStartingPoint+currentExperiment.singleStepSize*(firstIndex+secondIndex)); //closing square (top angle) (same coordinates of starting point)

            // defining the outline
            ctx.lineWidth = .8;
            ctx.strokeStyle = '#000000';
            ctx.stroke();

            ctx.fillStyle = "#FFFFFF";
            ctx.fill();   

            // Determining whether the two nodes are associated:
            let presentAssociation = false // will be changed to "true" if association is present in the considered instance 
            // dealing with associations for node "0":
            if (currentTrialOrder[firstIndex+1] == 0 ) {
                //first node was zero, reading 0th column of element
                if(leftGraph[(currentTrialOrder[secondIndex])][0] == 1 )
                    presentAssociation = true
            } else if (currentTrialOrder[secondIndex] == 0) {
                //second node was zero, reading 0th column of element
                if(leftGraph[(currentTrialOrder[firstIndex+1])][0] == 1 )            
                    presentAssociation = true
            } else {
                // when dealing with non-zero nodes, always reading the value from bigger node (constraint since matrix is triangular)
                if (currentTrialOrder[firstIndex+1] < currentTrialOrder[secondIndex]) {
                    //second element is bigger
                    if(leftGraph[currentTrialOrder[secondIndex]][currentTrialOrder[firstIndex+1]] == 1)
                        presentAssociation = true
                } else {
                    //second element is smaller
                    if(leftGraph[currentTrialOrder[firstIndex+1]][currentTrialOrder[secondIndex]] == 1)
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
            }
            
        }

        
    // Drawing stimulus on RIGHT SIDE:
    // accessing the graph that will appear on the left side of the screen:
    let rightGraph = currentExperiment.graphsToDisplay[presentationIndex][1]
                        
    for (let firstIndex = 0; firstIndex < currentExperiment.numberOfIterations; firstIndex++) {
        for (let secondIndex = 0; secondIndex < firstIndex+1; secondIndex++) {
            // drawing the square
            ctx.beginPath();
            ctx.moveTo(currentExperiment.xStartingPointRight+currentExperiment.singleStepSize*(firstIndex-secondIndex+1),currentExperiment.yStartingPoint+currentExperiment.singleStepSize*(firstIndex+secondIndex)); //starting point (top angle)
            ctx.lineTo(currentExperiment.xStartingPointRight+currentExperiment.singleStepSize*(firstIndex-secondIndex),currentExperiment.yStartingPoint+currentExperiment.singleStepSize*(firstIndex+secondIndex+1)); //going left-right (right angle)
            ctx.lineTo(currentExperiment.xStartingPointRight+currentExperiment.singleStepSize*(firstIndex-secondIndex+1),currentExperiment.yStartingPoint+currentExperiment.singleStepSize*(firstIndex+secondIndex+2)); //going down-left (bottom angle)
            ctx.lineTo(currentExperiment.xStartingPointRight+currentExperiment.singleStepSize*(firstIndex-secondIndex+2),currentExperiment.yStartingPoint+currentExperiment.singleStepSize*(firstIndex+secondIndex+1)); //going up-left (left angle)
            ctx.lineTo(currentExperiment.xStartingPointRight+currentExperiment.singleStepSize*(firstIndex-secondIndex+1),currentExperiment.yStartingPoint+currentExperiment.singleStepSize*(firstIndex+secondIndex)); //closing square (top angle) (same coordinates of starting point)

            // defining the outline
            ctx.lineWidth = .8;
            ctx.strokeStyle = '#666666';
            ctx.stroke();

            ctx.fillStyle = "#FFFFFF";
            ctx.fill();   

            // Determining whether the two nodes are associated:
            let presentAssociation = false // will be changed to "true" if association is present in the considered instance 
            // dealing with associations for node "0":
            if (currentTrialOrder[firstIndex+1] == 0 ) {
                //first node was zero, reading 0th column of element
                if(rightGraph[(currentTrialOrder[secondIndex])][0] == 1 )
                    presentAssociation = true
            } else if (currentTrialOrder[secondIndex] == 0) {
                //second node was zero, reading 0th column of element
                if(rightGraph[(currentTrialOrder[firstIndex+1])][0] == 1 )            
                    presentAssociation = true
            } else {
                // when dealing with non-zero nodes, always reading the value from bigger node (constraint because of triangular matrix)
                if (currentTrialOrder[firstIndex+1] < currentTrialOrder[secondIndex]) {
                    //second element is bigger
                    if(rightGraph[currentTrialOrder[secondIndex]][currentTrialOrder[firstIndex+1]] == 1)
                        presentAssociation = true
                } else {
                    //second element is smaller
                    if(rightGraph[currentTrialOrder[firstIndex+1]][currentTrialOrder[secondIndex]] == 1)
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
        }
            
    }

}


/* FUNCTION TO DRAW FEEDBACK ON THE CANVAS*/
function drawFeedback(ctx,presentationIndex,currentTrialsArray) {
    /* INPUT: 
    - ctx (reference to the canvas on which feedback will be drawn)
    - presentationIndex (the number that identifies the couple of graphs that is being displayed)
    - currentTrialsArray (the array that stores all the data produced up to now)

    OUTPUT:
    - display of remaining shuffles and accuracy on the screen
    */   

    // temporary variables
    let randomizationsPerformed = 0 // shuffles left
    let arrayOfResponses = []   // score
    
    // looping through all the elements to check which trials have a final response (arrow press):
    currentTrialsArray.forEach(element => {

        // SHUFFLES LEFT: isolating the canvas-keyboard-response trials for the current presentation were space-bar presses were done
        if(element.trial_type == "canvas-keyboard-response" && element.presentationNumber == presentationIndex && element.response == " ")
            // increasing the number of randomizations already performed
            randomizationsPerformed += 1

        // SCORE: isolating the trials were arrow press was done (they have the "correctnessOfResponse" property)
        if(element.hasOwnProperty('correctnessOfResponse') )
            arrayOfResponses.push(element.correctnessOfResponse)

    });
    
    // SHUFFLES LEFT:
    // computing the number of randomizations left:
    let remainingRandomizations = currentExperiment.maximumNumberOfRandomizations - randomizationsPerformed
    //creating string to be displayed as feedback:
    let feedbackStringShuffle = "SHUFFLES LEFT: " + remainingRandomizations
    // text on canvas (increasing red hue when the remaining randomizations decrease. No randomization requested -> black; no randomizations left -> red ):
    ctx.fillStyle = `rgb(${255 - Math.floor(255/currentExperiment.maximumNumberOfRandomizations)*remainingRandomizations},0,0)`;
    ctx.font = "bold 1.7em system-ui";
    ctx.fillText(feedbackStringShuffle, 0, (currentExperiment.canvasDimensions[0])/7.5);    
    
    // SCORE:
    let numberOfCorrectResponses = arrayOfResponses.reduce((a, b) => a + b, 0)
    //creating string to be displayed as feedback:
    let feedbackStringScore = "SCORE: " + numberOfCorrectResponses +"/"+ presentationIndex
    //rect (differentiating color (green / red) based on correctness / incorrectness of last response)
    if(arrayOfResponses.length == 0)
        // if no response has been given, choosing a "neutral" color
        ctx.fillStyle = "orange";
    else 
        if(arrayOfResponses[arrayOfResponses.length-1] == true)
            ctx.fillStyle = "lawngreen";
        else
            ctx.fillStyle = "red";
    ctx.fillRect((currentExperiment.canvasDimensions[1]-(currentExperiment.canvasDimensions[1]/5.5)), (currentExperiment.canvasDimensions[0])/16, 300, 80);
    // text on the canvas:
    ctx.fillStyle = "black"
    ctx.font = "bold 1.7em system-ui";
    ctx.fillText(feedbackStringScore, (currentExperiment.canvasDimensions[1]-(currentExperiment.canvasDimensions[1]/6.5)), (currentExperiment.canvasDimensions[0])/7.5);    
    
}