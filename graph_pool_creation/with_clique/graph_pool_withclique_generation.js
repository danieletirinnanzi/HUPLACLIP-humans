//FUNCTION THAT GENERATES GRAPHS WITH CLIQUE
function generateGraphsWithClique(cliqueSize) {
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

    // empty array that will contain all the graphs without the clique for the current clique size
    let graphsWithClique = [];

    // graphs for a single clique size:
    for (let graphIndex = 0; graphIndex < graphPoolObject.numberOfGraphsPerCliqueSize; graphIndex++) {

        //empty object (the properties will be the nodes and the values will be the arrays that indicate the existing connections)
        let singleGraph = {};
        // randomly extracting the nodes that will be part of the clique
        let cliqueArray = [];
        cliqueArray = createClique(currentExperiment.standardOrderOfNodes, cliqueSize)
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
            singleGraph[currentExperiment.graphSize] = { 'graph_name': `${(graphIndex + 1).toString().padStart(4, '0')}_N${currentExperiment.graphSize}_K${cliqueSize.toString().padStart(3, '0')}_CLIQUE`, 'clique_size': cliqueArray.length, 'clique_array': cliqueArray }

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