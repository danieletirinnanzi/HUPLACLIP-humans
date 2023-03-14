/* FUNCTION TO DRAW SINGLE STIMULUS ON CANVAS */
function drawStimuli(ctx,presentationIndex,currentTrialOrder) {
    /* INPUT: 
    - ctx (reference to the canvas on which stimuli will be drawn)
    - presentationIndex (the number that identifies the couple of graphs that is being displayed)
    - currentTrialOrder (order in which the nodes are displayed on the screen)

    OUTPUT:
    - display of the two stimuli on the screen
    */

    // calculating step size for the figure (each square contains two "steps", for this reason multiplying the number of nodes by 2):
    let singleStepSize = ((9/10)*(currentExperiment.canvasDimensions[0]))/(((Object.keys(currentExperiment.standardOrderOfNodes).length)*2)) // Object.keys(currentExperiment.standardOrderOfNodes).length --> number of squares
    // calculating starting points (for right and left stimulus) on x axis (considering the space to be left in the middle):
    let xStartingPointLeft = (currentExperiment.canvasDimensions[1]/2 ) - currentExperiment.canvasDimensions[1]/20
    let xStartingPointRight = (currentExperiment.canvasDimensions[1]/2 ) + currentExperiment.canvasDimensions[1]/20
    let yStartingPoint = (1/20)*(currentExperiment.canvasDimensions[0])  //NB: starting to draw not from top of window, but leaving (1/20*c.height) above (and consequently below). For this reason, singleStepSize is calculated dividing not (c.height) but (9/10*canvas.height)

    // Drawing stimulus on LEFT SIDE:
    // accessing the graph that will appear on the left side of the screen:
    let leftGraph = currentExperiment.graphsToDisplay[presentationIndex][0]  

    for (let firstIndex = 0; firstIndex < ((currentExperiment.standardOrderOfNodes.length)-1); firstIndex++) {
        for (let secondIndex = 0; secondIndex < firstIndex+1; secondIndex++) {
            // drawing the square
            ctx.beginPath();
            ctx.moveTo(xStartingPointLeft-singleStepSize*(firstIndex-secondIndex+1),yStartingPoint+singleStepSize*(firstIndex+secondIndex)); //starting point (top angle)
            ctx.lineTo(xStartingPointLeft-singleStepSize*(firstIndex-secondIndex),yStartingPoint+singleStepSize*(firstIndex+secondIndex+1)); //going left-right (right angle)
            ctx.lineTo(xStartingPointLeft-singleStepSize*(firstIndex-secondIndex+1),yStartingPoint+singleStepSize*(firstIndex+secondIndex+2)); //going down-left (bottom angle)
            ctx.lineTo(xStartingPointLeft-singleStepSize*(firstIndex-secondIndex+2),yStartingPoint+singleStepSize*(firstIndex+secondIndex+1)); //going up-left (left angle)
            ctx.lineTo(xStartingPointLeft-singleStepSize*(firstIndex-secondIndex+1),yStartingPoint+singleStepSize*(firstIndex+secondIndex)); //closing square (top angle) (same coordinates of starting point)

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
                //console.log("no zeros between the two nodes. Is the association present? ")
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
                        
    for (let firstIndex = 0; firstIndex < ((currentExperiment.standardOrderOfNodes.length)-1); firstIndex++) {
        for (let secondIndex = 0; secondIndex < firstIndex+1; secondIndex++) {
            // drawing the square
            ctx.beginPath();
            ctx.moveTo(xStartingPointRight+singleStepSize*(firstIndex-secondIndex+1),yStartingPoint+singleStepSize*(firstIndex+secondIndex)); //starting point (top angle)
            ctx.lineTo(xStartingPointRight+singleStepSize*(firstIndex-secondIndex),yStartingPoint+singleStepSize*(firstIndex+secondIndex+1)); //going left-right (right angle)
            ctx.lineTo(xStartingPointRight+singleStepSize*(firstIndex-secondIndex+1),yStartingPoint+singleStepSize*(firstIndex+secondIndex+2)); //going down-left (bottom angle)
            ctx.lineTo(xStartingPointRight+singleStepSize*(firstIndex-secondIndex+2),yStartingPoint+singleStepSize*(firstIndex+secondIndex+1)); //going up-left (left angle)
            ctx.lineTo(xStartingPointRight+singleStepSize*(firstIndex-secondIndex+1),yStartingPoint+singleStepSize*(firstIndex+secondIndex)); //closing square (top angle) (same coordinates of starting point)

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
                //console.log("no zeros between the two nodes. Is the association present? ")
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

    
/* FUNCTION TO DRAW ACCURACY ON CANVAS */
function drawAccuracy(ctx,presentationIndex,currentTrialsArray) {
    /* INPUT: 
    - ctx (reference to the canvas on which stimuli will be drawn)
    - presentationIndex (the number that identifies the couple of graphs that is being displayed)
    - currentTrialsArray (the array that stores all the data produced up to now)

    OUTPUT:
    - display of the accuracy on the screen
    */         
    
    let arrayOfResponses = []
    // looping through all the elements to check which trials have a final response (arrow press):
    currentTrialsArray.forEach(element => {
        // only the trials were arrow press was done have the "correctnessOfResponse" property
        if(element.hasOwnProperty('correctnessOfResponse') )
            arrayOfResponses.push(element.correctnessOfResponse)
    });
    let numberOfCorrectResponses = arrayOfResponses.reduce((a, b) => a + b, 0)
    //creating string to be displayed as feedback:
    let feedbackString = "SCORE: " + numberOfCorrectResponses +"/"+ presentationIndex
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
    ctx.fillText(feedbackString, (currentExperiment.canvasDimensions[1]-(currentExperiment.canvasDimensions[1]/6.5)), (currentExperiment.canvasDimensions[0])/7.5);

}


/* FUNCTION TO PRINT THE NUMBER OF REMAINING RANDOMIZATIONS FOR THE CURRENT PRESENTATION ON THE CANVAS */
function drawRemainingRandomizations(ctx,presentationIndex,currentTrialsArray) {
    /* INPUT: 
    - ctx (reference to the canvas on which stimuli will be drawn)
    - presentationIndex (the number that identifies the couple of graphs that is being displayed)
    - currentTrialsArray (the array that stores all the data produced up to now)

    OUTPUT:
    - display of the remaining randomizations for the current presentation on the screen
    */ 

    let randomizationsPerformed = 0
    // looping through all the trials to check how many times a randomization was already performed:
    currentTrialsArray.forEach(element => {
        // isolating the canvas-keyboard-response trials for the current presentation were space-bar presses were done
        if(element.trial_type == "canvas-keyboard-response" && element.presentationNumber == presentationIndex && element.response == " ")
            // increasing the number of randomizations already performed
            randomizationsPerformed += 1
    });
    // computing the number of randomizations left:
    let remainingRandomizations = currentExperiment.maximumNumberOfRandomizations - randomizationsPerformed
    //creating string to be displayed as feedback:
    let feedbackString = "MOVES LEFT: " + remainingRandomizations
    // text on canvas (increasing red hue when the remaining randomizations decrease. No randomization requested -> black; no randomizations left -> red ):
    ctx.fillStyle = `rgb(${255 - Math.floor(255/currentExperiment.maximumNumberOfRandomizations)*remainingRandomizations},0,0)`;
    ctx.font = "bold 1.7em system-ui";
    ctx.fillText(feedbackString, 0, (currentExperiment.canvasDimensions[0])/7.5);
    
}
