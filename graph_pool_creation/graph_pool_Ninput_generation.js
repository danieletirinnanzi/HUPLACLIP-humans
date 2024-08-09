// FUNCTION THAT ASSOCIATES THE NODES THAT WILL BE PART OF THE CLIQUE (adapted from: https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array)
// (Note: called when generating graph pool with clique)
function createClique(nodesArray, singleCliqueSize) {
    /* INPUT:
    - array that contains all the nodes in the graph
    - size of the clique

    OUTPUT:
    - array of nodes that will be part of the clique
    */

    // RIVEDI E CAPISCI UN PO' MEGLIO / RISCRIVI?

    let result = new Array(singleCliqueSize),
        len = nodesArray.length,
        taken = new Array(len);
    while (singleCliqueSize--) {
        let x = Math.floor(Math.random() * len);
        result[singleCliqueSize] = nodesArray[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}


//FUNCTION THAT GENERATES GRAPHS WITHOUT CLIQUE
function generateGraphsWithOutClique(graphSize, cliqueSize) {
    /* INPUT:
    - graphSize: the size of the graphs
    - cliqueSize: the size of the clique that will be absent in the graphs (clique size is needed for the p correction)

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
        let correctedProbabilityForCurrentGraph = graphPoolObject.probabilityOfAssociation + (((cliqueSize * (cliqueSize - 1)) / (graphPoolObject.graphSize * (graphPoolObject.graphSize - 1))) * (1 - graphPoolObject.probabilityOfAssociation))

        // defining the values of the triangular adjacency matrix:
        for (let rowIndex = 1; rowIndex < graphPoolObject.graphSize; rowIndex++) {
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
            singleGraph[graphPoolObject.graphSize] = { 'graph_name': `${(graphIndex + 1).toString().padStart(4, '0')}_N${graphPoolObject.graphSize}_K${cliqueSize.toString().padStart(4, '0')}_NOCLIQUE`, 'clique_size': cliqueSize, 'clique_array': "clique is absent" }
            //adding to the object the property (the connections of the current node in the triangular matrix)
            singleGraph[rowIndex] = currentRowAssociations;
        }

        // adding the graph to the array:
        graphsWithoutClique.push(singleGraph)

        //printing progress:
        console.log('added graph number: ' + graphIndex)

    }

    return graphsWithoutClique

}


//FUNCTION THAT GENERATES GRAPHS WITH CLIQUE
function generateGraphsWithClique(graphSize, cliqueSize) {
    /* INPUT:
    - graphSize: the size of the graphs
    - cliqueSize: the size of the clique that will be present in the graphs

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

    // empty array that will contain all the graphs without the clique for the current clique size
    let graphsWithClique = [];

    // graphs for a single clique size:
    for (let graphIndex = 0; graphIndex < graphPoolObject.numberOfGraphsPerCliqueSize; graphIndex++) {

        //empty object (the properties will be the nodes and the values will be the arrays that indicate the existing connections)
        let singleGraph = {};
        // randomly extracting the nodes that will be part of the clique
        let cliqueArray = [];
        cliqueArray = createClique(graphPoolObject.standardOrderOfNodes, cliqueSize)
        // defining the values of the triangular adjacency matrix:
        for (let rowIndex = 1; rowIndex < graphPoolObject.graphSize; rowIndex++) {
            //defining empty array that will contain the connections for the current row
            let currentRowAssociations = [];
            for (let columnIndex = 0; columnIndex < rowIndex; columnIndex++) {
                if (cliqueArray.includes(rowIndex) && cliqueArray.includes(columnIndex)) {
                    //if current two nodes are part of the clique, inserting 1 in the matrix:
                    currentRowAssociations.push(1)
                }
                //if the current two nodes are not part of the clique, associating them with probability indicated in "graphPoolObject.probabilityOfAssociation"
                else {
                    let randomValue = Math.random(); //MORE CORRECT WAY OF GENERATING? NON-UNIFORM DISTRIBUTION?
                    if (randomValue < graphPoolObject.probabilityOfAssociation) {
                        currentRowAssociations.push(1);
                    } else {
                        currentRowAssociations.push(0);
                    }
                }
            }
            //adding to the matrix information about the clique: size and array of nodes that are part of it
            singleGraph[graphPoolObject.graphSize] = { 'graph_name': `${(graphIndex + 1).toString().padStart(4, '0')}_N${graphPoolObject.graphSize}_K${cliqueSize.toString().padStart(4, '0')}_CLIQUE`, 'clique_size': cliqueArray.length, 'clique_array': cliqueArray }

            //adding to the object the property (the connections of the current node in the triangular matrix)
            singleGraph[rowIndex] = currentRowAssociations;
        }

        // adding the graph to the array:
        graphsWithClique.push(singleGraph)

        //printing progress:
        console.log('added graph number: ' + graphIndex)
    }

    return graphsWithClique

}