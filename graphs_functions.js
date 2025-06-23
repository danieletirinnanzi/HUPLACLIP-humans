// FUNCTION THAT SHUFFLES THE NODES OF AN ARRAY, PASSED IN STANDARD ORDER
function shuffleNodes(nodesArray) {
    /*
    Implementation of the Fisher-Yates shuffle: walk the array in reverse order and swap each element with a random one before it.
    
    INPUT:
    - array that contains all the nodes in the graph (already sliced to avoid modifying the original array)

    OUTPUT:
    - array that contains the nodes but shuffled
    */
    let shuffledArray = nodesArray
    // Loop through the array in reverse order (from the last element to the first)
    for (let i = nodesArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];  // same can be written as: let t = nodesArray[i]; nodesArray[i] = nodesArray[j]; nodesArray[j] = t
    }
    return shuffledArray
};


// GRAPHS INDICES EXTRACTION:
function extractIndices() {
    /* INPUT:
    - none

    OUTPUT:
    - array of the indices of the graphs that will be shown during the experiment

    ARRAY STRUCTURE: 
    [ experiment
        [  block1: [ trial1 {graph1} {graph2} ] [ trial 2 {graph1} {graph2} ] ... [trial 30 {graph1} {graph2} ] ]
        [  block2: [ trial1 {graph1} {graph2} ] [ trial 2 {graph1} {graph2} ] ... [trial 30 {graph1} {graph2} ] ]
        ...
        [  block6: [ trial1 {graph1} {graph2} ] [ trial 2 {graph1} {graph2} ] ... [trial 30 {graph1} {graph2}] ]        
    ]

    */

    // objects that will contain the indices of the graphs to show for each clique size
    let graphsIndices = {}

    // in the whole exp: for each clique size, 12 graphs with clique and 12 without (2 graphs per block * 6 blocks)
    currentExperiment.uniqueCliqueSizes.forEach(element => {
        // creating array of numbers from 1 to 100:
        let arr = Array.from(
            { length: 100 },
            (_, index) => index + 1
        );

        // for each clique size, shuffling the array, extracting the first 12 indices and inserting them in the object:
        graphsIndices[element] = shuffleNodes(arr.slice()).slice(0, 12)

    });

    return graphsIndices

}