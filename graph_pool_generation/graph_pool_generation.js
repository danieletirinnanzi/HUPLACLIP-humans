//FUNCTION THAT GENERATES GRAPHS WITH CLIQUE
function generateGraphsWithClique() {
    /* INPUT: none ("currentExperiment" and "graphPoolObject" can be accessed from inside functions)

    OUTPUT:
    - array that has 100 graphs with clique for each clique size (NB: triangular matrices are represented as objects)
    STRUCTURE: [    [ clique size n.1 --> {graph1} {graph2} ... {graph100} ]
                    [ clique size n.2 --> {graph1} {graph2} ... {graph100} ]
                    ...
                    [ clique size n.15 --> {graph1} {graph2} ... {graph100} ] 
                ]
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

    // empty array that will contain all the graphs with the clique
    let graphsWithClique = [];

    // number of clique sizes (from 0 to 30, in steps of 2):
    for (let cliqueSizeIndex = 0; cliqueSizeIndex < (currentExperiment.arrayOfCliqueSizes.length); cliqueSizeIndex += 2) {

        let graphsForCurrentCliqueSize = []

        // graphs for a single clique size:
        for (let graphIndex = 0; graphIndex < graphPoolObject.numberOfGraphsPerCliqueSize; graphIndex++) {

            //empty object (the properties will be the nodes and the values will be the arrays that indicate the existing connections)
            let singleGraph = {};
            // randomly extracting the nodes that will be part of the clique
            let cliqueArray = [];
            cliqueArray = createClique(currentExperiment.standardOrderOfNodes, currentExperiment.arrayOfCliqueSizes[cliqueSizeIndex])
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
                singleGraph[currentExperiment.graphSize] = { 'graph_name': `${graphIndex + 1}_N${currentExperiment.graphSize}_K${currentExperiment.arrayOfCliqueSizes[cliqueSizeIndex]}_CLIQUE`, 'clique_size': cliqueArray.length, 'clique_array': cliqueArray }

                //adding to the object the property (the connections of the current node in the triangular matrix)
                singleGraph[rowIndex] = currentRowAssociations;
            }

            // adding the graph to the array:
            graphsForCurrentCliqueSize.push(singleGraph)
        }

        // adding array of graphs for current block to array of all graphs
        graphsWithClique.push(graphsForCurrentCliqueSize)

    }

    return graphsWithClique

}



//FUNCTION THAT GENERATES GRAPHS WITHOUT CLIQUE
function generateGraphsWithOutClique() {
    /* INPUT: none ("currentExperiment" and "graphPoolObject" can be accessed from inside functions)

    OUTPUT:
    - array that has 100 graphs withOUT clique for each clique size
    (indication of clique size is maintained because the probability of association is corrected in relation with to K)

    STRUCTURE: [    [ clique size n.1 --> {graph1} {graph2} ... {graph100} ]
                    [ clique size n.2 --> {graph1} {graph2} ... {graph100} ]
                    ...
                    [ clique size n.15 --> {graph1} {graph2} ... {graph100} ] 
                ]
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

    // empty array that will contain all the graphs without the clique
    let graphsWithoutClique = [];

    // number of clique sizes (from 0 to 30, in steps of 2):
    for (let cliqueSizeIndex = 0; cliqueSizeIndex < (currentExperiment.arrayOfCliqueSizes.length); cliqueSizeIndex += 2) {

        let graphsForCurrentCliqueSize = []

        // graphs for a single clique size:
        for (let graphIndex = 0; graphIndex < graphPoolObject.numberOfGraphsPerCliqueSize; graphIndex++) {

            //empty object (the properties will be the nodes and the values will be the arrays that indicate the existing connections)
            let singleGraph = {};
            // increasing the value of p so that the two graphs will have the same average degree (pCorr = p + (K*(K-1)/N*(N-1)) * (1-p) )
            let correctedProbabilityForCurrentGraph = currentExperiment.probabilityOfAssociation + (((currentExperiment.arrayOfCliqueSizes[cliqueSizeIndex] * (currentExperiment.arrayOfCliqueSizes[cliqueSizeIndex] - 1)) / (currentExperiment.graphSize * (currentExperiment.graphSize - 1))) * (1 - currentExperiment.probabilityOfAssociation))

            console.log(currentExperiment.arrayOfCliqueSizes[cliqueSizeIndex])

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
                singleGraph[currentExperiment.graphSize] = { 'graph_name': `${graphIndex + 1}_N${currentExperiment.graphSize}_K${currentExperiment.arrayOfCliqueSizes[cliqueSizeIndex]}_NOCLIQUE`, 'clique_size': currentExperiment.arrayOfCliqueSizes[cliqueSizeIndex], 'clique_array': "clique is absent" }
                //adding to the object the property (the connections of the current node in the triangular matrix)
                singleGraph[rowIndex] = currentRowAssociations;
            }

            // adding the graph to the array:
            graphsForCurrentCliqueSize.push(singleGraph)
        }

        // adding array of graphs for current block to array of all graphs
        graphsWithoutClique.push(graphsForCurrentCliqueSize)

    }

    return graphsWithoutClique

}