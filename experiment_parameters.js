/* EXPERIMENT PARAMETERS: */
    // defining canvas dimensions (sizes of canvas = sizes of whole window):
    let canvasHeight = window.innerHeight  //height is the dimension that regulates the size of the stimuli (on which the "step" is calculated)
    let canvasWidth = window.innerWidth

    // CREATING OBJECT FOR CURRENT EXPERIMENT:
    let currentExperiment = {
        // parameters for experiment:
        numberOfPresentations: 20, // number of presentations for each experiment (single presentation = single couple of triangular matrices, presented once and reordered through space bar presses)
        maximumNumberOfRandomizations: 20, // maximum number of randomizations allowed for a single couple of matrices 
        canvasDimensions: [canvasHeight,canvasWidth], // [height,width]
        // parameters for graphs:
        numberOfNodes: 300,
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

    // calculating drawing coordinates (will be read in "drawStimuli" function)
    // calculting single step size (a step size is a single displacement on the x or y axes). Each square spans two steps:
    currentExperiment.singleStepSize = ((9/10)*(currentExperiment.canvasDimensions[0]))/(((currentExperiment.numberOfNodes)*2))
    // calculating starting points (for right and left stimulus) on x axis (considering the space to be left in the middle):
    currentExperiment.xStartingPointLeft = (currentExperiment.canvasDimensions[1]/2 ) - currentExperiment.canvasDimensions[1]/20
    currentExperiment.xStartingPointRight = (currentExperiment.canvasDimensions[1]/2 ) + currentExperiment.canvasDimensions[1]/20
    // calculating starting points on y axis:
    currentExperiment.yStartingPoint = (1/20)*(currentExperiment.canvasDimensions[0])  //NB: starting to draw not from top of window, but leaving (1/20*c.height) above (and consequently below). For this reason, singleStepSize is calculated dividing not (c.height) but (9/10*canvas.height)
    // calculating number of iterations of foor loops:
    currentExperiment.numberOfIterations = (currentExperiment.numberOfNodes)-1

    // calculating all the possible randomizations of the nodes in their standard order and storing them in the currentExperiment object:
    let randomizationsObject = {}   // object of arrays -> each array is a permutation of the standard order of nodes
    for (let presentationIndex = 0; presentationIndex < currentExperiment.numberOfPresentations; presentationIndex++) {
        randomizationsObject[presentationIndex] = []
        for (let shuffleIndex = 0; shuffleIndex < currentExperiment.maximumNumberOfRandomizations; shuffleIndex++) {
            // adding the order of nodes for a single shuffle
            randomizationsObject[presentationIndex].push(shuffleNodes(currentExperiment.standardOrderOfNodes.slice()))
        }    
    }
    // adding property to currentExperiment object:
    currentExperiment.randomizationsObject = randomizationsObject
    console.log(currentExperiment.randomizationsObject)
