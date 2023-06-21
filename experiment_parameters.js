/* EXPERIMENT PARAMETERS: */
// CREATING OBJECT FOR CURRENT EXPERIMENT:
let currentExperiment = {
    // experiment parameters:
    numberOfBlocks: 1,
    numberOfPresentationsPerBlock: 30, // single presentation = single couple of graphs, presented once and reordered through space bar presses)
    numberOfGraphsPerCliqueSize: 2, // number of graphs for each clique size in each block
    maximumNumberOfShuffles: 10, // maximum number of randomizations allowed for a single couple of matrices 
    canvasDimensions: [canvasHeight, canvasWidth], // [height,width]
    // graphs parameters:
    graphSize: 1000,
    probabilityOfAssociation: 0.5
}

// DEBUG
console.log(currentExperiment)

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
currentExperiment.arrayOfCliqueSizes = [1000, 1000, 512, 512, 256, 256, 128, 128, 96, 96, 64, 64, 32, 32, 27, 27, 25, 25, 22, 22];

// - UNIQUE CLIQUE SIZES:
currentExperiment.uniqueCliqueSizes = currentExperiment.arrayOfCliqueSizes.filter((x, i, a) => a.indexOf(x) == i)

// - COORDINATES OF LEFT AND RIGHT TRIANGLES
// calculating drawing parameters (LOGICAL COORDINATES):
// - square side dimension (scales with screen resolution)
let squareSideDimension = (currentExperiment.canvasDimensions[0] / (currentExperiment.graphSize + 2))
console.log("the side dimension of single squares is: " + squareSideDimension)
// - top and bottom margin (centering the square in the available space)
let topAndBottomMargin = (currentExperiment.canvasDimensions[0] - (squareSideDimension * currentExperiment.windowSize)) / 2
// - calculating starting point on x axis:
let xStartingPointLeft = (currentExperiment.canvasDimensions[1] / 2) - ((currentExperiment.canvasDimensions[0] - topAndBottomMargin * 2) / 2)
// - calculating starting point on y axis:
let yStartingPoint = topAndBottomMargin  //NB: starting to draw not from top of window, but leaving margin above and below the square
// storing the starting points and the square size in currentExperiment object (used to draw red diagonal):
currentExperiment.fixedDrawingParameters = [xStartingPointLeft, yStartingPoint, squareSideDimension]

// left triangle COORDINATES:
let leftTriangleCoordinatesArray = []
for (let firstIndex = 0; firstIndex < (currentExperiment.windowSize - 1); firstIndex++) {
    let maxSecondIndex = firstIndex + 1
    for (let secondIndex = 0; secondIndex < maxSecondIndex; secondIndex++) {
        // calculating starting points of fillRect for each square:
        let xStart = xStartingPointLeft + (squareSideDimension * secondIndex)
        let yStart = (yStartingPoint + (squareSideDimension * (firstIndex + 1))) + squareSideDimension   //leaving 1 squareSideDimension of additional space for diagonal
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
        let xStart = (xStartingPointLeft + (squareSideDimension * (firstIndex + 1))) + squareSideDimension //leaving 1 squareSideDimension of additional space for diagonal
        let yStart = yStartingPoint + (squareSideDimension * secondIndex)
        // pushing starting points of squares into array:
        rightTriangleCoordinatesArray.push([xStart, yStart, squareSideDimension]);
    }
}
// adding coordinates to currentExperiment object
currentExperiment.stimuliCoordinates = {};
currentExperiment.stimuliCoordinates.leftTriangle = leftTriangleCoordinatesArray
currentExperiment.stimuliCoordinates.rightTriangle = rightTriangleCoordinatesArray