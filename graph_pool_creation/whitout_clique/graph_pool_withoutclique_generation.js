//FUNCTION THAT GENERATES GRAPHS WITHOUT CLIQUE
function generateGraphsWithOutClique(cliqueSize) {
    /* INPUT: none ("currentExperiment" and "graphPoolObject" can be accessed from inside functions)

    OUTPUT:
    - array that has 100 graphs withOUT clique for the indicated clique size

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

    // empty array that will contain all the graphs without the clique for the current clique size
    let graphsWithoutClique = [];

    // graphs for a single clique size:
    for (let graphIndex = 0; graphIndex < graphPoolObject.numberOfGraphsPerCliqueSize; graphIndex++) {

        //empty object (the properties will be the nodes and the values will be the arrays that indicate the existing connections)
        let singleGraph = {};
        // increasing the value of p so that the two graphs will have the same average degree (pCorr = p + (K*(K-1)/N*(N-1)) * (1-p) )
        let correctedProbabilityForCurrentGraph = currentExperiment.probabilityOfAssociation + (((cliqueSize * (cliqueSize - 1)) / (currentExperiment.graphSize * (currentExperiment.graphSize - 1))) * (1 - currentExperiment.probabilityOfAssociation))

        console.log(cliqueSize)

        // defining the values of the triangular adjacency matrix:
        for (let rowIndex = 1; rowIndex < currentExperiment.graphSize; rowIndex++) {
            //defining empty array that will contain the connections for the current row
            let currentRowAssociations = [];
            for (let columnIndex = 0; columnIndex < rowIndex; columnIndex++) {
                let randomValue = Math.random();
                if (randomValue < correctedProbabilityForCurrentGraph) {
                    currentRowAssociations.push(1);
                } else {
                    currentRowAssociations.push(0);
                }
            }
            // adding to the matrix the name of the graph and indications about the absence of the clique:
            singleGraph[currentExperiment.graphSize] = { 'graph_name': `${(graphIndex + 1).toString().padStart(4, '0')}_N${currentExperiment.graphSize}_K${cliqueSize.toString().padStart(3, '0')}_NOCLIQUE`, 'clique_size': cliqueSize, 'clique_array': "clique is absent" }
            //adding to the object the property (the connections of the current node in the triangular matrix)
            singleGraph[rowIndex] = currentRowAssociations;
        }

        // adding the graph to the array:
        graphsWithoutClique.push(singleGraph)
    }

    return graphsWithoutClique

}