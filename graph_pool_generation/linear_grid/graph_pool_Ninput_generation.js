// FUNCTION THAT ASSOCIATES THE NODES THAT WILL BE PART OF THE CLIQUE
function createClique(nodesArray, singleCliqueSize) {
    /*
    Adapted from https://stackoverflow.com/a/19270021
    
    Description:
    Called when generating graph pool with clique. Selects "singleCliqueSize" elements from "nodesArray" uniformly at random.
    Uses a partial Fisher-Yates shuffle to avoid duplicates and maintain uniform probability.

    INPUT:
    - "nodesArray": array that contains all nodes in the graph
    - "singleCliqueSize": number of nodes to select (size of the clique)

    OUTPUT:
    - array containing the nodes that will be part of the clique
    */

    // Initializations (three in one go):
    let result = new Array(singleCliqueSize),   // empty array that will contain the nodes that will be part of the clique
        len = nodesArray.length,    // initial length of the array, will be decremented as elements are selected
        taken = new Array(len);     // empty array that will contain the indices of the nodes that have been already selected (sparse map, not all indices will be filled)
    // Filling the "taken" array with "singleCliqueSize" elements (loop will run "singleCliqueSize" times, filling the "result" array from back to front):
    while (singleCliqueSize--) {
        let x = Math.floor(Math.random() * len);    // random index from 0 to len-1 (inclusive)
        result[singleCliqueSize] = nodesArray[x in taken ? taken[x] : x];   // if the index is already taken, use the value from "taken", otherwise use the index itself ("result" array is filled from back to front)
        // Shrink the pool and remap index x to avoid repeats:
        // 1. Decrease 'len' to shrink the pool (removes the last available index).
        // 2. Check if 'len' was previously used (i.e. remapped in 'taken').
        //    - If yes, reuse its mapped value.
        //    - If no, use 'len' itself as the replacement.        
        // 3. Store this replacement in 'taken[x]' so that if x is picked again, we use the new (last) available value instead of a duplicate.
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

    // defining probability of association based on p-correction type and clique size:
    let probabilityForCurrentCliqueSize;
    if (graphPoolObject.pCorrectionType == 'p_increase') {
        // in p_increase, the probability of association is increased in the graph without clique to match the average degree of the graph where the clique is added [ pCorr = p + (K*(K-1)/N*(N-1)) * (1-p) ) ]
        probabilityForCurrentCliqueSize = graphPoolObject.probabilityOfAssociation + (((cliqueSize * (cliqueSize - 1)) / (graphSize * (graphSize - 1))) * (1 - graphPoolObject.probabilityOfAssociation))
    }
    else if (graphPoolObject.pCorrectionType == 'p_reduce') {
        // in p_decrease, the probability of association is decreased in the graph where the clique is added -> NOTHING IS DONE IN THE GRAPH WITHOUT CLIQUE
        probabilityForCurrentCliqueSize = graphPoolObject.probabilityOfAssociation
    }
    else {
        alert('Invalid p-correction type. Accepted values are: "p_increase" and "p_reduce"')
    }

    // graphs for a single clique size:
    for (let graphIndex = 0; graphIndex < graphPoolObject.numberOfGraphsPerCliqueSize; graphIndex++) {

        //empty object (the properties will be the nodes and the values will be the arrays that indicate the existing connections)
        let singleGraph = {};

        // defining the values of the triangular adjacency matrix:
        for (let rowIndex = 1; rowIndex < graphSize; rowIndex++) {
            //defining empty array that will contain the connections for the current row
            let currentRowAssociations = [];
            for (let columnIndex = 0; columnIndex < rowIndex; columnIndex++) {
                let randomValue = Math.random();
                if (randomValue < probabilityForCurrentCliqueSize) {
                    currentRowAssociations.push(1);
                } else {
                    currentRowAssociations.push(0);
                }
            }
            // adding to the matrix the name of the graph and indications about the absence of the clique:
            singleGraph[graphSize] = { 'graph_name': `${(graphIndex + 1).toString().padStart(4, '0')}_N${graphSize.toString().padStart(4, '0')}_K${cliqueSize.toString().padStart(4, '0')}_NOCLIQUE`, 'clique_size': cliqueSize, 'clique_array': "clique is absent", 'p_correction_type': graphPoolObject.pCorrectionType, 'p_correction_value': probabilityForCurrentCliqueSize }
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

    // defining probability of association of nodes that are not part of the clique based on p-correction type and clique size:
    let probabilityForCurrentCliqueSize;
    if (graphPoolObject.pCorrectionType == 'p_increase') {

        console.log('entered p_increase')

        // in p_increase, the probability of association is increased in the graph without clique (NOTHING IS DONE IN THE GRAPH WITH CLIQUE)
        probabilityForCurrentCliqueSize = graphPoolObject.probabilityOfAssociation

        console.log(probabilityForCurrentCliqueSize)
    }
    else if (graphPoolObject.pCorrectionType == 'p_reduce') {

        console.log('entered p_reduce')
        console.log('cliqueSize:', cliqueSize, 'Type:', typeof cliqueSize);
        console.log('graphSize:', graphSize, 'Type:', typeof graphSize);
        console.log('probabilityOfAssociation:', graphPoolObject.probabilityOfAssociation, 'Type:', typeof graphPoolObject.probabilityOfAssociation);

        // in p_decrease, the probability of association is decreased in the graph with the clique (NOTHING IS DONE IN THE GRAPH WITHOUT CLIQUE)

        // - making sure that the "p_reduce" corrected probability of association will be positive for requested clique size
        if (cliqueSize > (1 + Math.sqrt(1 + 4 * graphPoolObject.probabilityOfAssociation * graphSize * (graphSize - 1))) / 2) {
            let cliqueLimit = Math.floor((1 + Math.sqrt(1 + 4 * graphPoolObject.probabilityOfAssociation * graphSize * (graphSize - 1))) / 2);
            alert(`Clique size ${cliqueSize} in a graph of size ${graphSize} leads to a negative corrected probability of association between nodes. Please choose a clique size smaller than ${cliqueLimit}`);
        }
        // - defining the corrected probability of association for the graph with the clique
        probabilityForCurrentCliqueSize = (
            graphPoolObject.probabilityOfAssociation * graphSize * (graphSize - 1)
            - cliqueSize * (cliqueSize - 1)
        ) / ((graphSize - cliqueSize) * (graphSize + cliqueSize - 1))

        console.log('probabilityForCurrentCliqueSize:', probabilityForCurrentCliqueSize, 'Type:', typeof probabilityForCurrentCliqueSize);

    }
    else {
        alert('Invalid p-correction type. Accepted values are: "p_increase" and "p_reduce"')
    }

    // graphs for a single clique size:
    for (let graphIndex = 0; graphIndex < graphPoolObject.numberOfGraphsPerCliqueSize; graphIndex++) {

        //empty object (the properties will be the nodes and the values will be the arrays that indicate the existing connections)
        let singleGraph = {};

        // randomly extracting the nodes that will be part of the clique
        let cliqueArray = [];
        cliqueArray = createClique(graphPoolObject.standardOrderOfNodes, cliqueSize)

        // defining the values of the triangular adjacency matrix:
        for (let rowIndex = 1; rowIndex < graphSize; rowIndex++) {
            //defining empty array that will contain the connections for the current row
            let currentRowAssociations = [];
            for (let columnIndex = 0; columnIndex < rowIndex; columnIndex++) {
                if (cliqueArray.includes(rowIndex) && cliqueArray.includes(columnIndex)) {
                    //if current two nodes are part of the clique, inserting 1 in the matrix:
                    currentRowAssociations.push(1)
                }
                //if the current two nodes are not part of the clique, associating them with the defined probability
                else {
                    let randomValue = Math.random();
                    if (randomValue < probabilityForCurrentCliqueSize) {
                        currentRowAssociations.push(1);
                    } else {
                        currentRowAssociations.push(0);
                    }
                }
            }
            //adding to the matrix information about the clique: size and array of nodes that are part of it
            singleGraph[graphSize] = { 'graph_name': `${(graphIndex + 1).toString().padStart(4, '0')}_N${graphSize.toString().padStart(4, '0')}_K${cliqueSize.toString().padStart(4, '0')}_CLIQUE`, 'clique_size': cliqueArray.length, 'clique_array': cliqueArray, 'p_correction_type': graphPoolObject.pCorrectionType, 'p_correction_value': probabilityForCurrentCliqueSize }

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