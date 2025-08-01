// FUNCTION THAT SHUFFLES THE NODES OF AN ARRAY, PASSED IN STANDARD ORDER
function shuffleNodes(nodesArray) {
    /*
    Implementation of the Fisher-Yates shuffle: walk the array in reverse order and swap each element with a random one before it.
    
    INPUT:
    - array that contains all the nodes in the graph

    OUTPUT:
    - array that contains the nodes but shuffled
    */
    let shuffledArray = nodesArray.slice();
    // Loop through the array in reverse order (from the last element to the first)
    for (let i = nodesArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];  // same can be written as: let t = nodesArray[i]; nodesArray[i] = nodesArray[j]; nodesArray[j] = t
    }
    return shuffledArray
};

// Run if executed from Node.js
if (require.main === module) {
    const input = JSON.parse(process.argv[2]);
    const output = shuffleNodes(input);
    console.log(JSON.stringify(output));
}