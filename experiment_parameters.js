/* EXPERIMENT PARAMETERS: */
// defining canvas dimensions (sizes of canvas = sizes of whole window):
let canvasHeight = window.screen.height;  //height is the dimension that regulates the size of the stimuli (on which the "step" is calculated)
let canvasWidth = window.screen.width;

// CREATING OBJECT FOR CURRENT EXPERIMENT:
let currentExperiment = {
    // experiment parameters:
    numberOfBlocks: 6,
    numberOfPresentationsPerBlock: 20, // single presentation = single couple of graphs, presented once and reordered through space bar presses)
    numberOfGraphsPerCliqueSize: 2, // number of graphs for each clique size in each block
    maximumNumberOfShuffles: 10, // maximum number of randomizations allowed for a single couple of matrices 
    canvasDimensions: [canvasHeight, canvasWidth], // [height,width]
    // graphs parameters:
    graphSize: 2000,
    windowSize: 700,   // dimension of the window shown on the screen                       
    probabilityOfAssociation: 0.5
}

// DEBUG
console.log(currentExperiment)

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
currentExperiment.arrayOfCliqueSizes = [1000, 1000, 512, 512, 256, 256, 128, 128, 96, 96, 64, 64, 32, 32, 27, 27, 25, 25, 22, 22];

// - UNIQUE CLIQUE SIZES:
currentExperiment.uniqueCliqueSizes = currentExperiment.arrayOfCliqueSizes.filter((x, i, a) => a.indexOf(x) == i)

// - COORDINATES OF LEFT AND RIGHT TRIANGLES
// calculating drawing parameters:
let topAndBottomMargin = 5 //in pixels (CHANGE HERE TO INCREASE/DECREASE)
// - square side dimension:
let squareSideDimension = (currentExperiment.canvasDimensions[0] - topAndBottomMargin) / (currentExperiment.windowSize)
console.log("the side dimension of single squares is: " + squareSideDimension)
// - calculating starting point on x axis:
let xStartingPointLeft = (currentExperiment.canvasDimensions[1] / 2) - ((currentExperiment.canvasDimensions[0] - topAndBottomMargin * 2) / 2)
// - calculating starting points on y axis:
let yStartingPoint = topAndBottomMargin  //NB: starting to draw not from top of window, but leaving 5px above and below the squares
// storing the starting points and the square size in currentExperiment object (used to draw red diagonal):
currentExperiment.fixedDrawingParameters = [xStartingPointLeft, yStartingPoint, squareSideDimension]

// left triangle COORDINATES:
let leftTriangleCoordinatesArray = []
for (let firstIndex = 0; firstIndex < (currentExperiment.windowSize - 1); firstIndex++) {
    let maxSecondIndex = firstIndex + 1
    for (let secondIndex = 0; secondIndex < maxSecondIndex; secondIndex++) {
        // calculating starting points of fillRect for each square:
        let xStart = xStartingPointLeft + (squareSideDimension * secondIndex)
        let yStart = yStartingPoint + (squareSideDimension * (firstIndex + 1))
        // pushing starting points of squares into array:
        leftTriangleCoordinatesArray.push([xStart, yStart, squareSideDimension]);
    }
}

// right triangle COORDINATES:
let rightTriangleCoordinatesArray = []
for (let firstIndex = 0; firstIndex < (currentExperiment.windowSize - 1); firstIndex++) {
    let maxSecondIndex = firstIndex + 1
    for (let secondIndex = 0; secondIndex < maxSecondIndex; secondIndex++) {
        // calculating starting points of fillRect for each square:
        let xStart = xStartingPointLeft + (squareSideDimension * (firstIndex + 1))
        let yStart = yStartingPoint + (squareSideDimension * secondIndex)
        // pushing starting points of squares into array:
        rightTriangleCoordinatesArray.push([xStart, yStart, squareSideDimension]);
    }
}
// adding coordinates to currentExperiment object
currentExperiment.stimuliCoordinates = {};
currentExperiment.stimuliCoordinates.leftTriangle = leftTriangleCoordinatesArray
currentExperiment.stimuliCoordinates.rightTriangle = rightTriangleCoordinatesArray