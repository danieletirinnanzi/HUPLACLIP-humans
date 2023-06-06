/* EXPERIMENT PARAMETERS: */
// defining canvas dimensions (sizes of canvas = sizes of whole window):
let canvasHeight = innerHeight  //height is the dimension that regulates the size of the stimuli (on which the "step" is calculated)
let canvasWidth = innerWidth

// CREATING OBJECT FOR CURRENT EXPERIMENT:
let currentExperiment = {
    // experiment parameters:
    numberOfBlocks: 6,
    numberOfPresentationsPerBlock: 30, // single presentation = single couple of graphs, presented once and reordered through space bar presses)
    numberOfGraphsPerCliqueSize: 2, // number of graphs for each clique size in each block
    maximumNumberOfShuffles: 10, // maximum number of randomizations allowed for a single couple of matrices 
    canvasDimensions: [canvasHeight, canvasWidth], // [height,width]
    // graphs parameters:
    graphSize: 2000,
    initialCliqueSize: 1160,  // maximum dimension of the clique (will decrease within the block, increasing the difficulty of the task)
    windowSize: 700,   // dimension of the window shown on the screen                       
    probabilityOfAssociation: 0.5
}

// checking that the number of presentations is even, so that is possible to have two trials for each value of K
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

// - ARRAY OF CLIQUE SIZES
currentExperiment.arrayOfCliqueSizes = createArrayOfCliqueSizes(currentExperiment.initialCliqueSize, currentExperiment.numberOfPresentationsPerBlock)

// - UNIQUE CLIQUE SIZES:
currentExperiment.uniqueCliqueSizes = currentExperiment.arrayOfCliqueSizes.filter((x, i, a) => a.indexOf(x) == i)

// - COORDINATES OF LEFT AND RIGHT TRIANGLES
// calculating drawing parameters:
// single step size (single displacement on x or y axes. Each square spans two steps)
let singleStepSize = (currentExperiment.canvasDimensions[0] - 50) / (currentExperiment.windowSize)  // NB: browser window should be > 700px (leaving 25 px below and above the squares)
console.log(singleStepSize)
// calculating starting points on y axis:
let yStartingPoint = 25  //NB: starting to draw not from top of window, but leaving 25px above and below the squares
console.log(yStartingPoint)
// calculating starting point on x axis:
let xStartingPointLeft = (currentExperiment.canvasDimensions[1] / 2) - ((currentExperiment.canvasDimensions[0] - 50) / 2)
console.log(xStartingPointLeft)

console.log(currentExperiment.canvasDimensions)

// left triangle COORDINATES:
let leftTriangleCoordinatesArray = []
for (let firstIndex = 0; firstIndex < (currentExperiment.windowSize - 1); firstIndex++) {
    let maxSecondIndex = firstIndex + 1
    for (let secondIndex = 0; secondIndex < maxSecondIndex; secondIndex++) {
        // calculating starting points of fillRect for each square:
        let xStart = xStartingPointLeft + (singleStepSize * secondIndex)
        let yStart = yStartingPoint + (singleStepSize * (firstIndex + 1))
        // pushing starting points of squares into array:
        leftTriangleCoordinatesArray.push([xStart, yStart, singleStepSize]);
    }
}

// right triangle COORDINATES:
let rightTriangleCoordinatesArray = []
for (let firstIndex = 0; firstIndex < (currentExperiment.windowSize - 1); firstIndex++) {
    let maxSecondIndex = firstIndex + 1
    for (let secondIndex = 0; secondIndex < maxSecondIndex; secondIndex++) {
        // calculating starting points of fillRect for each square:
        let xStart = xStartingPointLeft + (singleStepSize * (firstIndex + 1))
        let yStart = yStartingPoint + (singleStepSize * secondIndex)
        // pushing starting points of squares into array:
        rightTriangleCoordinatesArray.push([xStart, yStart, singleStepSize]);
    }
}
// adding coordinates to currentExperiment object
currentExperiment.stimuliCoordinates = {};
currentExperiment.stimuliCoordinates.leftTriangle = leftTriangleCoordinatesArray
currentExperiment.stimuliCoordinates.rightTriangle = rightTriangleCoordinatesArray

console.log(currentExperiment.stimuliCoordinates)