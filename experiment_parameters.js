/* EXPERIMENT PARAMETERS: */
// CREATING OBJECT FOR CURRENT EXPERIMENT:
let currentExperiment = {
    // experiment parameters:
    numberOfBlocks: 6, // number of blocks in the experiment
    numberOfPresentationsPerBlock: 34, // single presentation = single couple of graphs, presented once and shuffled through space bar presses)
    numberOfGraphsPerCliqueSize: 2, // number of graphs for each clique size in each block
    maximumNumberOfShuffles: 10, // maximum number of randomizations allowed for a single couple of matrices 
    canvasDimensions: [screen.height, screen.width], // [height,width]
    // graphs parameters:
    graphSize: 200, // TO BE CHANGED IN DIFFERENT EXPERIMENTS
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
        currentExperiment.arrayOfCliqueSizes = [58, 58, 52, 52, 47, 47, 44, 44, 41, 41, 38, 38, 35, 35, 33, 33, 30, 30, 28, 28, 25, 25, 23, 23, 20, 20, 18, 18, 16, 16, 11, 11,  6, 6];
        break;
    case 150:
        currentExperiment.arrayOfCliqueSizes = [90, 90, 82, 82, 73, 73, 68, 68, 64, 64, 60, 60, 55, 55, 51, 51, 47, 47, 43, 43, 39, 39, 36, 36, 32, 32, 28, 28, 25, 25, 17, 17, 10, 10];
        break;
    case 200:
    currentExperiment.arrayOfCliqueSizes = [114, 114, 103, 103, 92, 92, 86, 86, 81, 81, 75, 75, 70, 70, 64, 64, 59, 59, 54, 54, 50, 50, 45, 45, 40, 40, 36, 36, 31, 31, 22, 22, 13, 13];
        break;
    case 300:
        currentExperiment.arrayOfCliqueSizes = [150, 150, 136, 136, 121, 121, 114, 114, 107, 107, 99, 99, 92, 92, 85, 85, 78, 78, 72, 72, 66, 66, 59, 59, 53, 53, 47, 47, 41, 41, 29, 29, 17, 17];
        break;
    case 400:
        currentExperiment.arrayOfCliqueSizes = [180, 180, 162, 162, 145, 145, 136, 136, 127, 127, 118, 118, 110, 110, 101, 101, 93, 93, 86, 86, 78, 78, 71, 71, 63, 63, 56, 56, 49, 49, 34, 34, 20, 20];
        break;
    case 480:
        currentExperiment.arrayOfCliqueSizes = [200, 200, 181, 181, 161, 161, 151, 151, 142, 142, 132, 132, 123, 123, 113, 113, 103, 103, 95, 95, 87, 87, 79, 79, 71, 71, 63, 63, 55, 55, 38, 38, 22, 22];
        break;
    case 600:
        currentExperiment.arrayOfCliqueSizes = [227, 227, 205, 205, 183, 183, 172, 172, 161, 161, 150, 150, 139, 139, 128, 128, 117, 117, 108, 108, 99, 99, 89, 89, 80, 80, 71, 71, 62, 62, 43, 43, 25, 25];
        break;
    case 800:
        currentExperiment.arrayOfCliqueSizes = [266, 266, 240, 240, 215, 215, 201, 201, 189, 189, 176, 176, 163, 163, 150, 150, 137, 137, 127, 127, 116, 116, 105, 105, 94, 94, 83, 83, 73, 73, 51, 51, 29, 29];
        break;
    case 1000:
        currentExperiment.arrayOfCliqueSizes = [300, 300, 271, 271, 242, 242, 227, 227, 213, 213, 198, 198, 184, 184, 169, 169, 155, 155, 143, 143, 131, 131, 118, 118, 106, 106, 94, 94, 82, 82, 57, 57, 33, 33];
        break;
    default:
        alert("Invalid graph size. Accepted graph size values for human experiments are: 100, 150, 200, 300, 400, 480, 600, 800, 1000.");
        break;
}


// - UNIQUE CLIQUE SIZES:
currentExperiment.uniqueCliqueSizes = currentExperiment.arrayOfCliqueSizes.filter((x, i, a) => a.indexOf(x) == i)
// checking that there are 17 unique clique sizes
if (currentExperiment.uniqueCliqueSizes.length != 17) {
    alert("There are " + currentExperiment.uniqueCliqueSizes.length + " unique clique sizes, but there should be 17.")
}