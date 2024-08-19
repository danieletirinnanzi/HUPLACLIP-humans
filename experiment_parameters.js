/* EXPERIMENT PARAMETERS: */
// CREATING OBJECT FOR CURRENT EXPERIMENT:
let currentExperiment = {
    // experiment parameters:
    numberOfBlocks: 1,
    numberOfPresentationsPerBlock: 30, // single presentation = single couple of graphs, presented once and reordered through space bar presses)
    numberOfGraphsPerCliqueSize: 2, // number of graphs for each clique size in each block
    maximumNumberOfShuffles: 10, // maximum number of randomizations allowed for a single couple of matrices 
    canvasDimensions: [screen.height, screen.width], // [height,width]
    // graphs parameters:
    graphSize: 150,
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

        break;
    case 600:

        break;
    case 800:

        break;
    case 1000:

        break;
    default:
        alert("Invalid graph size. Accepted graph size values for human experiments are: 100, 150, 200, 300, 400, 480, 600, 800, 1000.");
        break;
}


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
// - calculating starting point on x axis:
let xStartingPointLeft = (physicalScreenWidth / 2) - ((physicalScreenHeight - (topAndBottomMarginPhysical * 2)) / 2)
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