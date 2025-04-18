/* EXPERIMENT PARAMETERS: */
// CREATING OBJECT FOR CURRENT EXPERIMENT:
let currentExperiment = {
    // experiment parameters:
    numberOfBlocks: 6, // number of blocks in the experiment
    numberOfPresentationsPerBlock: 30, // single presentation = single couple of graphs, presented once and reordered through space bar presses)
    numberOfGraphsPerCliqueSize: 2, // number of graphs for each clique size in each block
    maximumNumberOfShuffles: 10, // maximum number of randomizations allowed for a single couple of matrices 
    canvasDimensions: [screen.height, screen.width], // [height,width]
    // graphs parameters:
    graphSize: 1000, // TO BE CHANGED IN DIFFERENT EXPERIMENTS
    probabilityOfAssociation: 0.5,
    pCorrectionType: "p_reduce", // "p_increase" or "p_reduce"
    stimuliVerticalProportionThreshold: 0.56, // minimum proportion of the screen height that the stimuli should occupy
}

// controlling that the number of presentations is even, so that is possible to have two trials for each value of K
if (currentExperiment.numberOfPresentationsPerBlock % 2 != 0)
    alert("number of presentations for each trial must be even")


// ADDING PROPERTIES TO THE currentExperiment OBJECT:

//- ARRAY OF NODES IN STANDARD ORDER
let standardOrderOfNodes = new Array();
for (let index = 0; index < currentExperiment.graphSize; index++) {
    standardOrderOfNodes.push(index)
}
// adding this array as a property to the "currentExperiment" object
currentExperiment.standardOrderOfNodes = standardOrderOfNodes

// - ARRAY OF CLIQUE SIZES (changes based on "currentExperiment.graphSize"):
switch (currentExperiment.graphSize) {
    case 100:
        currentExperiment.arrayOfCliqueSizes = [30, 30, 27, 27, 23, 23, 22, 22, 20, 20, 18, 18, 17, 17, 15, 15, 13, 13, 12, 12, 10, 10, 8, 8, 7, 7, 5, 5, 3, 3];
        break;
    case 150:
        currentExperiment.arrayOfCliqueSizes = [45, 45, 40, 40, 35, 35, 33, 33, 30, 30, 27, 27, 25, 25, 23, 23, 20, 20, 18, 18, 15, 15, 13, 13, 10, 10, 8, 8, 5, 5];
        break;
    case 200:
        currentExperiment.arrayOfCliqueSizes = [60, 60, 53, 53, 47, 47, 43, 43, 40, 40, 37, 37, 33, 33, 30, 30, 27, 27, 23, 23, 20, 20, 17, 17, 13, 13, 10, 10, 7, 7];
        break;
    case 300:
        currentExperiment.arrayOfCliqueSizes = [90, 90, 80, 80, 70, 70, 65, 65, 60, 60, 55, 55, 50, 50, 45, 45, 40, 40, 35, 35, 30, 30, 25, 25, 20, 20, 15, 15, 10, 10];
        break;
    case 400:
        currentExperiment.arrayOfCliqueSizes = [120, 120, 107, 107, 93, 93, 87, 87, 80, 80, 73, 73, 67, 67, 60, 60, 53, 53, 47, 47, 40, 40, 33, 33, 27, 27, 20, 20, 13, 13];
        break;
    case 480:
        currentExperiment.arrayOfCliqueSizes = [144, 144, 128, 128, 112, 112, 104, 104, 96, 96, 88, 88, 80, 80, 72, 72, 64, 64, 56, 56, 48, 48, 40, 40, 32, 32, 24, 24, 16, 16];
        break;
    case 600:
        currentExperiment.arrayOfCliqueSizes = [180, 180, 160, 160, 140, 140, 130, 130, 120, 120, 110, 110, 100, 100, 90, 90, 80, 80, 70, 70, 60, 60, 50, 50, 40, 40, 30, 30, 20, 20];
        break;
    case 800:
        currentExperiment.arrayOfCliqueSizes = [240, 240, 213, 213, 187, 187, 173, 173, 160, 160, 147, 147, 133, 133, 120, 120, 107, 107, 93, 93, 80, 80, 67, 67, 53, 53, 40, 40, 27, 27];
        break;
    case 1000:
        currentExperiment.arrayOfCliqueSizes = [300, 300, 267, 267, 233, 233, 217, 217, 200, 200, 183, 183, 167, 167, 150, 150, 133, 133, 117, 117, 100, 100, 83, 83, 67, 67, 50, 50, 33, 33];
        break;
    default:
        alert("Invalid graph size. Accepted graph size values for human experiments are: 100, 150, 200, 300, 400, 480, 600, 800, 1000.");
        break;
}


// - UNIQUE CLIQUE SIZES:
currentExperiment.uniqueCliqueSizes = currentExperiment.arrayOfCliqueSizes.filter((x, i, a) => a.indexOf(x) == i)
