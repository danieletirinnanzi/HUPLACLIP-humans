/* EXPERIMENT PARAMETERS: */
// CREATING OBJECT FOR CURRENT EXPERIMENT:
let currentExperiment = {
    // experiment parameters:
    numberOfBlocks: 1,
    numberOfPresentationsPerBlock: 10, // single presentation = single couple of graphs, presented once and reordered through space bar presses)
    numberOfGraphsPerCliqueSize: 2, // number of graphs for each clique size in each block
    maximumNumberOfShuffles: 10, // maximum number of randomizations allowed for a single couple of matrices 
    canvasDimensions: [screen.height, screen.width], // [height,width]
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
currentExperiment.arrayOfCliqueSizes = [300, 300, 267, 267, 233, 233, 217, 217, 200, 200, 183, 183, 167, 167, 150, 150, 133, 133, 117, 117, 100, 100, 83, 83, 67, 67, 50, 50, 33, 33];

// - UNIQUE CLIQUE SIZES:
currentExperiment.uniqueCliqueSizes = currentExperiment.arrayOfCliqueSizes.filter((x, i, a) => a.indexOf(x) == i)



// - COORDINATES OF LEFT AND RIGHT TRIANGLES

// PHYSICAL  COORDINATES:
// calculating drawing parameters:
// - number of squares to be drawn in the two directions (2 squares are for the diagonal):
let numberOfSquares = currentExperiment.graphSize + 2
// - square side dimension (scales with screen resolution)
let squareSideDimensionPhysical = Math.floor(physicalScreenHeight / numberOfSquares)
console.log("the physical single square dimension is: " + squareSideDimensionPhysical)
// - top and bottom margin (centering the square in the available space)
let topAndBottomMarginPhysical = Math.floor((physicalScreenHeight - (squareSideDimensionPhysical * numberOfSquares)) / 2)
console.log("top and bottom margin: " + topAndBottomMarginPhysical)
// - calculating starting point on x axis:
let xStartingPointLeft = (physicalScreenWidth / 2) - ((physicalScreenHeight - (topAndBottomMarginPhysical * 2)) / 2)
console.log("xstart:" + xStartingPointLeft)
// - calculating starting point on y axis:
let yStartingPoint = topAndBottomMarginPhysical  //NB: starting to draw not from top of window, but leaving margin above and below the square
// storing the starting points and the square size in currentExperiment object (used to draw red diagonal):
currentExperiment.fixedDrawingParameters = [xStartingPointLeft, yStartingPoint, squareSideDimensionPhysical]

// left triangle COORDINATES:
let leftTriangleCoordinatesArray = []
for (let firstIndex = 0; firstIndex < (currentExperiment.graphSize - 1); firstIndex++) {
    let maxSecondIndex = firstIndex + 1
    for (let secondIndex = 0; secondIndex < maxSecondIndex; secondIndex++) {
        // calculating starting points of fillRect for each square (starting from xStartingPoint, then moving it down 2 squares to leave space for diagonal)
        let xStart = xStartingPointLeft + (squareSideDimensionPhysical * secondIndex)
        let yStart = (yStartingPoint + (squareSideDimensionPhysical * (firstIndex))) + 2 * squareSideDimensionPhysical   //leaving 2 squareSideDimension of additional space for diagonal
        // pushing starting points of squares into array:
        leftTriangleCoordinatesArray.push([xStart, yStart, squareSideDimensionPhysical]);
    }
}

// right triangle COORDINATES:
let rightTriangleCoordinatesArray = []
for (let firstIndex = 0; firstIndex < (currentExperiment.graphSize - 1); firstIndex++) {
    let maxSecondIndex = firstIndex + 1
    for (let secondIndex = 0; secondIndex < maxSecondIndex; secondIndex++) {
        // calculating starting points of fillRect for each square (starting from xStartingPoint, then moving it right 2 squares to leave space for diagonal):
        let xStart = (xStartingPointLeft + (squareSideDimensionPhysical * (firstIndex))) + 2 * squareSideDimensionPhysical //leaving 2 squareSideDimension of additional space for diagonal
        let yStart = yStartingPoint + (squareSideDimensionPhysical * secondIndex)
        // pushing starting points of squares into array:
        rightTriangleCoordinatesArray.push([xStart, yStart, squareSideDimensionPhysical]);
    }
}
// adding coordinates to currentExperiment object
currentExperiment.stimuliCoordinates = {};
currentExperiment.stimuliCoordinates.leftTriangle = leftTriangleCoordinatesArray
currentExperiment.stimuliCoordinates.rightTriangle = rightTriangleCoordinatesArray