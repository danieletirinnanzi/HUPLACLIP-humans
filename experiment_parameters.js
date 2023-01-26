/* EXPERIMENT PARAMETERS: */
    // defining canvas dimensions (positioning is defined in the CSS):
    let canvasHeight = window.innerHeight  //height is the one that regulates the size of the stimuli, width is computed to leave space between the right and the left stimulus
    let canvasWidth = canvasHeight + 4*(canvasHeight/15) // increase this fraction to separate the two stimuli and leave some margin on left and right side

    // CREATING OBJECT FOR CURRENT EXPERIMENT:
    const currentExperiment = {
        // parameters for experiment:
        numberOfPresentations: 10, // number of presentations for each experiment (single presentation = single couple of triangular matrices, presented once and reordered through space bar presses)
        maximumNumberOfRandomizations: 3, // maximum number of randomizations allowed for a single couple of matrices 
        canvasDimensions: [canvasHeight,canvasWidth], // [height,width]
        // parameters for graphs:
        numberOfNodes: 150,
        initialCliqueSize: 100,  // this is the maximum dimension of the clique, it will decrease throughout the experiment, increasing the difficulty of the task                       
        probabilityOfAssociation: 0.5
    }

    // ADDING PROPERTIES TO THE currentExperiment OBJECT:
    //creating array that contains the indices of all the nodes of the graph in the standard order
    let standardOrderOfNodes = new Array();
    for (let index = 0; index < currentExperiment.numberOfNodes; index++) {
        standardOrderOfNodes.push(index)
    }
    // adding this array as a property to the "currentExperiment" object
    currentExperiment.standardOrderOfNodes = standardOrderOfNodes

    // creating array that contains the clique sizes and adding it as a property to "currentExperiment" object
    currentExperiment.arrayOfCliqueSizes = createArrayOfCliqueSizes(currentExperiment.initialCliqueSize,currentExperiment.numberOfPresentations)

    // adding the graphs to display as a property to the "currentExperiment" object
    currentExperiment.graphsToDisplay = generateGraphs()
    console.log(currentExperiment.graphsToDisplay)