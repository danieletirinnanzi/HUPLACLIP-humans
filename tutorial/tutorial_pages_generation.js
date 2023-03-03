// PENSA AL MODO MIGLIORE PER COLLEGARE OGNI IMMAGINE ALLA RELATIVA DIDASCALIA (inizia studiando i parametri del plugin https://www.jspsych.org/7.0/plugins/instructions/ )

const tutorialObject = {
    // THINK ABOUT THE MORE EFFICIENT WAY OF ENCODING IT 
    // - saving images in a folder with names that can be accessed through a for loop
}


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
