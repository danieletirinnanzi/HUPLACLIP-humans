// PENSA AL MODO MIGLIORE PER COLLEGARE OGNI IMMAGINE ALLA RELATIVA DIDASCALIA (inizia studiando i parametri del plugin https://www.jspsych.org/7.0/plugins/instructions/ )

const tutorialObject = {
    // checkerboard familiarization
    1: "Image you have a black and white checkerboard.",
    2: "Checkerboards can have various dimensions.",
    3: "Checkerboards can have various dimensions.",
    // swaps in squares
    // 6x6
    4: "Now let's consider a 6 by 6 checkerboard.",
    5: "In this checkerboard it is possible to switch rows and columns.",
    6: "If one does so, this is the resulting checkerboard.",
    7: "We have transformed the original checkerboard.",
    // 10x10
    8: "Let's do the same thing with a bigger checkerboard.",
    9: "Let's switch these rows and columns.",
    10: "We obtain a different checkerboard.",
    11: "We have transformed the original checkerboard.",
    // 16x16
    12: "Let's see it one more time, with a bigger checkerboard.",   
    13: "Let's switch rows and columns.",
    14: "We obtain a different checkerboard.",
    15: "We have transformed the original checkerboard.",
    // square - triangle transition
    16: "Checkerboards are squares.",
    17: "But if we cover one half, they become triangles.",
    18: "If we do so, this is the resulting checkerboard.",
    19: "We can do this for different checkerboards.",
    20: "By covering one half.",
    21: "And obtaining a triangle.",
    22: "We can do this for different checkerboards.",
    23: "By covering one half.",
    24: "And obtaining a triangle.",
    25: "We can do this for different checkerboards.",
    26: "By covering one half.",
    27: "And obtaining a triangle.",
    // swaps in triangles
    // 6x6    
    28: "We can transform also triangles.",
    29: "By selecting the rows and columns to switch.",
    30: "And obtaining a different triangle.",
    31: "We have transformed the original triangle.",
    // 10x10 
    32: "We can transform also bigger triangles.",
    33: "By selecting the rows and columns to switch.",
    34: "And obtaining a different triangle.", 
    35: "We have transformed the original triangle.",
    // 16x16    
    36: "We can transform also bigger triangles.",
    37: "By selecting the rows and columns to switch.",
    38: "And obtaining a different triangle.", 
    39: "We have transformed the original triangle.",
    // horizontal - vertical transition
    // swaps in vertical triangles
    // 6x6        
    40: "Triangles can also be seen vertically.",
    41: "And we can transform them in the same way." ,
    42: "To obtain a different triangle.",  
    43: "We have transformed the original triangle.",
    // 10x10     
    44: "We can transform also bigger triangles.",
    45: "By selecting the rows and columns to switch.",
    46: "And obtaining a different triangle.", 
    47: "Once again, we have transformed the original triangle.",
    // 16x16     
    48: "Let's see the last example.",
    49: "Where we select the rows and columns to switch.",
    50: "And obtain a different triangle.", 
    51: "To transform the original triangle.",
    // spreading clique (color coded)    
    // N20_K13
    52: "If we imagine to spread a group of tiles inside the triangle.",
    53: "This is what we obtain.",
    54: "It is the same triangle, but shuffled.",
    // N40_K18
    55: "Let's see the same thing with bigger triangles.",
    56: "By spreading the group of tiles.",
    57: "And obtaining the same triangle, but shuffled.",    
    // N70_K30

    // N100_K50

    // N120_K45

    // N200_K80
}

// Python script to list all the images and associate them with the corresponding element of the object?

//funzione "generateHTML(imageNumber)" -> in un for che viene ripetuto tante volte quante le immagini da mostrare, e scorre un oggetto in cui sono salvate le immagini ognuna con le istruzioni come proprieta'


/* FUNCTION TO GENERATE THE INTRODUCTION PAGES ARRAY */
function generateInstructionsPages() {
    /* INPUT: none

    OUTPUT:
    - array of instructions pages that will be shown one after the other
    */ 

    let instructionsPagesArray = []   

    // page 1: tutorial   
    let tutorial1 = `<font size="+2"><b> TUTORIAL </b></font><br><br>
    The comments to each image can go above it <br><br>
    <img src="tutorial/images_sequence/96 N40_K18_red_clique_left.PNG" alt="Girl in a jacket" width="500" height="500"><br><br>
    But also below it <br><br>
    <i><b>Press right arrow to go forward ></b></i>
    `
    instructionsPagesArray.push(tutorial1)
    
    // page 2: tutorial   
    let tutorial2 = `<font size="+2"><b> TUTORIAL </b></font><br><br>
    The comments to each image can go above it <br><br>
    <img src="tutorial/images_sequence/26 masked_swapped_square_chessboard_N16_1.png" alt="Girl in a jacket" width="500" height="500"><br><br>
    But also below it <br><br>
    <i><b>< Press left arrow to go back <br></b></i>
    <i><b>Press right arrow to go forward ></b></i>
    `
    instructionsPagesArray.push(tutorial2)

    return instructionsPagesArray
    
}
