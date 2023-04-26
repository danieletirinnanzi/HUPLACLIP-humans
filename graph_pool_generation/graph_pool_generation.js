//FUNCTION THAT GENERATES THE GRAPH POOL (one with clique, one without) THAT WILL BE DISPLAYED
function generateGraphPool() {
    /* INPUT: none ("currentExperiment" and "graphPoolObject" can be accessed from inside functions)

    OUTPUT:
    - array that contains 100 couples of graphs with and without clique for each clique size (NB: triangular matrices are represented as objects)
    STRUCTURE: [  first clique size: [ [{graph1}{graph2}] ],
                  second block: [ [{graph1}{graph2}] [{graph1}{graph2}] [{graph1}{graph2}] ...(numberOfPresentationsPerBlock), ]
                 ...(numberOfBlocks) ]
    */

    /* Visual representation of a single triangular matrix object (example: N=5. NB: number of nodes start from zero):
    0|    -
    1|   1 -
    2|   0 1 -
    3|   1 0 0 -
    4|   0 0 1 0 -
        ___________
         0 1 2 3 4  

        Corresponding object:
        { 
            1: [1],
            2: [0 1],
            3: [1 0 0],
            4: [0 0 1 0]
        }
    */

    // empty array that will contain the couples of triangular matrices (objects) to be displayed
    let graphsToDisplay = [];

    // number of blocks:
    for (let blockIndex = 0; blockIndex < currentExperiment.numberOfBlocks; blockIndex++) {

        let graphsForCurrentBlock = []

        // couples of graphs for a single block
        for (let presentationIndex = 0; presentationIndex < currentExperiment.numberOfPresentationsPerBlock; presentationIndex++) {

            // 1. Generating graph WITH CLIQUE:
            //empty object (the properties will be the nodes and the values will be the arrays that indicate the existing connections)
            let graphWithClique = {};
            // randomly extracting the nodes that will be part of the clique
            let cliqueArray = [];
            cliqueArray = createClique(currentExperiment.standardOrderOfNodes, currentExperiment.arrayOfCliqueSizes[presentationIndex])
            // defining the values of the triangular adjacency matrix:
            for (let rowIndex = 1; rowIndex < currentExperiment.graphSize; rowIndex++) {
                //defining empty array that will contain the connections for the current row
                let currentRowAssociations = [];
                for (let columnIndex = 0; columnIndex < rowIndex; columnIndex++) {
                    if (cliqueArray.includes(rowIndex) && cliqueArray.includes(columnIndex)) {
                        //if current two nodes are part of the clique, inserting 1 in the matrix:
                        currentRowAssociations.push(1)
                    }
                    //if the current two nodes are not part of the clique, associating them with probability indicated in "currentExperiment.probabilityOfAssociation"
                    else {
                        let randomValue = Math.random(); //MORE CORRECT WAY OF GENERATING? NON-UNIFORM DISTRIBUTION?
                        if (randomValue < currentExperiment.probabilityOfAssociation) {
                            currentRowAssociations.push(1);
                        } else {
                            currentRowAssociations.push(0);
                        }
                    }
                }
                //adding to the matrix information about the clique: size and array of nodes that are part of it
                graphWithClique[currentExperiment.graphSize] = { 'clique_size': cliqueArray.length, 'clique_array': cliqueArray }
                //adding to the object the property (the connections of the current node in the triangular matrix)
                graphWithClique[rowIndex] = currentRowAssociations;
            }

            // 2. Generating graph WITHOUT CLIQUE:
            //empty object (the properties will be the nodes and the values will be the arrays that indicate the existing connections)
            let graphWithoutClique = {};
            // increasing the value of p so that the two graphs will have the same average degree (pCorr = p + (K*(K-1)/N*(N-1)) * (1-p) )
            let correctedProbabilityForCurrentGraph = currentExperiment.probabilityOfAssociation + (((currentExperiment.arrayOfCliqueSizes[presentationIndex] * (currentExperiment.arrayOfCliqueSizes[presentationIndex] - 1)) / (currentExperiment.graphSize * (currentExperiment.graphSize - 1))) * (1 - currentExperiment.probabilityOfAssociation))

            // defining the values of the triangular adjacency matrix:
            for (let rowIndex = 1; rowIndex < currentExperiment.graphSize; rowIndex++) {
                //defining empty array that will contain the connections for the current row
                let currentRowAssociations = [];
                for (let columnIndex = 0; columnIndex < rowIndex; columnIndex++) {
                    let randomValue = Math.random(); //MORE CORRECT WAY OF GENERATING? NON-UNIFORM DISTRIBUTION?
                    if (randomValue < correctedProbabilityForCurrentGraph) {
                        currentRowAssociations.push(1);
                    } else {
                        currentRowAssociations.push(0);
                    }
                }
                // adding to the matrix an indication about the absence of the clique:
                graphWithoutClique[currentExperiment.graphSize] = "clique is absent"
                //adding to the object the property (the connections of the current node in the triangular matrix)
                graphWithoutClique[rowIndex] = currentRowAssociations;
            }

            // Adding the two graphs to the array for the current trial (random choice of which one is the first in the couple) and pushing this array into the array relative to the current block
            if (Math.round(Math.random())) {
                graphsForCurrentBlock.push([graphWithClique, graphWithoutClique])
            } else {
                graphsForCurrentBlock.push([graphWithoutClique, graphWithClique])
            }
        }

        // adding array of graphs for current block to array of all graphs
        graphsToDisplay.push(graphsForCurrentBlock)

    }

    return graphsToDisplay

}