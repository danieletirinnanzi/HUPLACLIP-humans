/* GRAPHS GENERATION: */
    // FUNCTION THAT DEFINES THE CLIQUE SIZE FOR ALL THE TRIALS THAT WILL BE PRESENTED (implementation of "linspace", but stored in reverse order)
    function createArrayOfKvalues(maximumCliqueSize, numberOfValues) {
        /* INPUT:
        - initial clique size (maximum value of the clique, the next values will be lower)
        - number of trials for the experiment

        OUTPUT:
        - array where the dimension of the clique for each one of the trials is stored in the order of presentation
        */            
        let cliqueSizeArray = [];
        let step = maximumCliqueSize / (numberOfValues-1);
        for (let i = 0; i < numberOfValues; i++) {
            cliqueSizeArray.push(Math.round((step * i)));
        }
        return cliqueSizeArray;
    }


    // FUNCTION THAT ASSOCIATES THE NODES THAT WILL BE PART OF THE CLIQUE (adapted from: https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array)
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


    //FUNCTION THAT GENERATES THE CLIQUELESS GRAPHS WITH UNCORRECTED/CORRECTED NUMBER OF EDGES;
    function generateGraphsForComparison() {            
        /* INPUT: none ("currentComparison" is global and can be accessed from inside functions)

        OUTPUT:
        - array of a series of two triangular matrices, each corresponding to a value of K. For each value of K:
            -one matrix contains the clique;
            -one matrix does not contain the clique, and the probability of association of two nodes is corrected.
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

        // empty array that will contain the couples of triangular matrices (objects) to be evaluated:
        let arrayOfGraphs = []; //one couple (with/without clique) for each level of K
        
        for (let index = 0; index < currentComparison.numberOfKValues; index++) {

            // 1. Generating graph WITH CLIQUE:
            //empty object (the properties will be the nodes and the values will be the arrays that indicate the existing connections)
            let graphWithClique = {};
            //defining variable that will store the total number of edges as they are generated
            let totalNumberOfEdgesGraphWithClique = 0            
            // randomly extracting the nodes that will be part of the clique
            let cliqueArray = [];
            cliqueArray = createClique(currentComparison.standardOrderOfNodes,currentComparison.arrayOfCliqueSizes[index])       
            // defining the values of the triangular adjacency matrix:
            for (let rowIndex = 1; rowIndex < currentComparison.numberOfNodes; rowIndex++) {
                //defining empty array that will contain the connections for the current row
                let currentRowAssociations = [];
                for (let columnIndex = 0; columnIndex < rowIndex; columnIndex++) {  
                    if (cliqueArray.includes(rowIndex) && cliqueArray.includes(columnIndex)) {
                        //if current two nodes are part of the clique, inserting 1 in the matrix:
                        currentRowAssociations.push(1)
                        }
                    //if the current two nodes are not part of the clique, associating them with probability indicated in "currentComparison.probabilityOfAssociation"
                    else {
                        let randomValue = Math.random();
                        if(randomValue < currentComparison.probabilityOfAssociation){
                            currentRowAssociations.push(1);
                        } else {
                            currentRowAssociations.push(0);
                        }
                    }
                }
            //calculating the number of edges in the current row:
            totalNumberOfEdgesGraphWithClique += currentRowAssociations.reduce((a, b) => a + b, 0)                
            //adding to the object the property (the connections of the current node in the triangular matrix)
            graphWithClique[rowIndex] = currentRowAssociations;
            }                      
            //once the graph has been created, storing average degree in the last row of the object:
            graphWithClique[currentComparison.numberOfNodes] = totalNumberOfEdgesGraphWithClique/currentComparison.numberOfNodes
            //adding to the matrix an indication about the presence of the clique:
            graphWithClique[currentComparison.numberOfNodes + 1] = "clique array for current stimulus is: " + cliqueArray      


            // 2. Generating graph WITHOUT CLIQUE:
            //empty object (the properties will be the nodes and the values will be the arrays that indicate the existing connections)
            let graphWithoutClique = {};
            // increasing the value of p so that the two graphs will have the same average degree (pCorr = p + (K*(K-1)/N*(N-1)) * (1-p) )
            let correctedProbability = currentComparison.probabilityOfAssociation + ( ( ( currentComparison.arrayOfCliqueSizes[index] * ( currentComparison.arrayOfCliqueSizes[index] - 1 )) / ( currentComparison.numberOfNodes * ( currentComparison.numberOfNodes - 1 ))) * ( 1 - currentComparison.probabilityOfAssociation ) )
            //defining variable that will store the total number of edges as they are generated
            let totalNumberOfEdgesCorrected = 0
                 
            // defining the values of the triangular adjacency matrix:
            for (let rowIndex = 1; rowIndex < currentComparison.numberOfNodes; rowIndex++) {
                //defining empty array that will contain the connections for the current row
                let currentRowAssociations = [];
                for (let columnIndex = 0; columnIndex < rowIndex; columnIndex++) {  
                    let randomValue = Math.random();
                    if(randomValue < correctedProbability){
                        currentRowAssociations.push(1);
                    } else {
                        currentRowAssociations.push(0);
                    }
                }
                //calculating the number of edges in the current row:
                totalNumberOfEdgesCorrected += currentRowAssociations.reduce((a, b) => a + b, 0)
                //adding the current row to the graph:
                graphWithoutClique[rowIndex] = currentRowAssociations;            
            }
            //once the graph has been created, storing average degree in the last row of the object:
            graphWithoutClique[currentComparison.numberOfNodes] = totalNumberOfEdgesCorrected/currentComparison.numberOfNodes
            //adding to the matrix an indication about the presence of the clique:
            graphWithoutClique[currentComparison.numberOfNodes + 1] = "clique is absent"      

            // Adding the two graphs (uncorrected/corrected) to the array:
            arrayOfGraphs.push( [ graphWithClique, graphWithoutClique ] )

        }

    return arrayOfGraphs

    }