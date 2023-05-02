/* EXPERIMENT PARAMETERS: */
// defining canvas dimensions (sizes of canvas = sizes of whole window):
let canvasHeight = window.innerHeight  //height is the dimension that regulates the size of the stimuli (on which the "step" is calculated)
let canvasWidth = window.innerWidth

// CREATING OBJECT FOR CURRENT EXPERIMENT:
let currentExperiment = {
    // experiment parameters:
    numberOfBlocks: 4,
    numberOfPresentationsPerBlock: 30, // single presentation = single couple of graphs, presented once and reordered through space bar presses)
    maximumNumberOfShuffles: 20, // maximum number of randomizations allowed for a single couple of matrices 
    canvasDimensions: [canvasHeight, canvasWidth], // [height,width]
    // graphs parameters:
    graphSize: 300,
    initialCliqueSize: 175,  // maximum dimension of the clique (will decrease within the block, increasing the difficulty of the task)                       
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


// - COORDINATES OF LEFT AND RIGHT TRIANGLES
// calculating drawing parameters:
// single step size (single displacement on x or y axes. Each square spans two steps)
let singleStepSize = ((9 / 10) * (currentExperiment.canvasDimensions[0])) / (((currentExperiment.graphSize) * 2))
// starting points (for right and left stimulus) on x axis (considering the space to be left in the middle):
let xStartingPointLeft = (currentExperiment.canvasDimensions[1] / 2) - currentExperiment.canvasDimensions[1] / 20
let xStartingPointRight = (currentExperiment.canvasDimensions[1] / 2) + currentExperiment.canvasDimensions[1] / 20
// calculating starting points on y axis:
let yStartingPoint = (1 / 20) * (currentExperiment.canvasDimensions[0])  //NB: starting to draw not from top of window, but leaving (1/20*c.height) above (and consequently below). For this reason, singleStepSize is calculated dividing not (c.height) but (9/10*canvas.height)

// left triangle COORDINATES:
let leftTriangleCoordinatesArray = []
for (let firstIndex = 0; firstIndex < (currentExperiment.graphSize - 1); firstIndex++) {
    let maxSecondIndex = firstIndex + 1
    for (let secondIndex = 0; secondIndex < maxSecondIndex; secondIndex++) {
        // calculating coordinates:
        let topAngleStart = [xStartingPointLeft - singleStepSize * (firstIndex - secondIndex + 1), yStartingPoint + singleStepSize * (firstIndex + secondIndex)]; //starting point (top angle)
        let rightAngle = [xStartingPointLeft - singleStepSize * (firstIndex - secondIndex), yStartingPoint + singleStepSize * (firstIndex + secondIndex + 1)]; //going left-right (right angle)
        let bottomAngle = [xStartingPointLeft - singleStepSize * (firstIndex - secondIndex + 1), yStartingPoint + singleStepSize * (firstIndex + secondIndex + 2)]; //going down-left (bottom angle)
        let leftAngle = [xStartingPointLeft - singleStepSize * (firstIndex - secondIndex + 2), yStartingPoint + singleStepSize * (firstIndex + secondIndex + 1)]; //going up-left (left angle)
        let topAngleFinish = [xStartingPointLeft - singleStepSize * (firstIndex - secondIndex + 1), yStartingPoint + singleStepSize * (firstIndex + secondIndex)]; //closing square (top angle) (same coordinates of starting point)        
        // pushing coordinates into array:
        leftTriangleCoordinatesArray.push([topAngleStart, rightAngle, bottomAngle, leftAngle, topAngleFinish]);
    }
}

// right triangle COORDINATES:
let rightTriangleCoordinatesArray = []
for (let firstIndex = 0; firstIndex < (currentExperiment.graphSize - 1); firstIndex++) {
    let maxSecondIndex = firstIndex + 1
    for (let secondIndex = 0; secondIndex < maxSecondIndex; secondIndex++) {
        // calculating coordinates:
        let topAngleStart = [xStartingPointRight + singleStepSize * (firstIndex - secondIndex + 1), yStartingPoint + singleStepSize * (firstIndex + secondIndex)]; //starting point (top angle)
        let rightAngle = [xStartingPointRight + singleStepSize * (firstIndex - secondIndex), yStartingPoint + singleStepSize * (firstIndex + secondIndex + 1)]; //going left-right (right angle)
        let bottomAngle = [xStartingPointRight + singleStepSize * (firstIndex - secondIndex + 1), yStartingPoint + singleStepSize * (firstIndex + secondIndex + 2)]; //going down-left (bottom angle)
        let leftAngle = [xStartingPointRight + singleStepSize * (firstIndex - secondIndex + 2), yStartingPoint + singleStepSize * (firstIndex + secondIndex + 1)] //going up-left (left angle)
        let topAngleFinish = [xStartingPointRight + singleStepSize * (firstIndex - secondIndex + 1), yStartingPoint + singleStepSize * (firstIndex + secondIndex)]; //closing square (top angle) (same coordinates of starting point)        
        // pushing coordinates into array:
        rightTriangleCoordinatesArray.push([topAngleStart, rightAngle, bottomAngle, leftAngle, topAngleFinish]);
    }
}
// adding coordinates to currentExperiment object
currentExperiment.stimuliCoordinates = {};
currentExperiment.stimuliCoordinates.leftTriangle = leftTriangleCoordinatesArray
currentExperiment.stimuliCoordinates.rightTriangle = rightTriangleCoordinatesArray