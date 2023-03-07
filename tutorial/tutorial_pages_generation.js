// POSSIBLE IMPROVEMENT:
// COSTRUZIONE DINAMICA di tutorialObject, quantomeno l'aggiunta dei nomi delle immagini (FUNZIONE/SCRIPT PER LISTARE TUTTE LE IMMAGINI PRESENTI NELLA CARTELLA (in ordine alfabetico) )

const tutorialObject = {
    // checkerboard familiarization
    1: ["Image you have a black and white checkerboard.", "1 square_chessboard_N6_2"],
    2: ["Checkerboards can have various dimensions.", "2 square_chessboard_N10_1"],
    3: ["Checkerboards can have various dimensions.", "3 square_chessboard_N16_1"],
    // swaps in squares
    // 6x6
    4: ["Now let's consider a 6 by 6 checkerboard.", "4 square_chessboard_N6_2"],
    5: ["In this checkerboard, if we switch these rows and columns.", "5 highlighted_square_chessboard_N6_2"],
    6: ["We obtain a different checkerboard.", "6 swapped_square_chessboard_N6_2"],
    7: ["We have transformed the original checkerboard.", "7 6nodes_square_sidebyside"],
    // 10x10
    8: ["Let's see the same thing with a bigger checkerboard.", "8 square_chessboard_N10_1"],
    9: ["Here, if we switch these rows and columns.", "9 highlighted_square_chessboard_N10_1"],
    10: ["We obtain a different checkerboard.", "10 swapped_square_chessboard_N10_1"],
    11: ["Again, we have transformed the original checkerboard.", "11 10nodes_square_sidebyside"],
    // 16x16
    12: ["Let's see it one last time, with an even bigger checkerboard.", "12 square_chessboard_N16_1"],   
    13: ["If we switch these rows and columns.", "13 highlighted_square_chessboard_N16_1"],
    14: ["We obtain a different checkerboard.", "14 swapped_square_chessboard_N16_1"],
    15: ["Also in this case, we have transformed the original checkerboard.", "15 16nodes_square_sidebyside"],
    // square - triangle transition
    16: ["Until now, we have seen square checkerboards.", "16 swapped_square_chessboard_N10_1"],
    17: ["But if we cover one half, they become triangles.", "17 masked_swapped_square_chessboard_N10_1"],
    18: ["And this is the resulting checkerboard.", "18 swapped_triangular_chessboard_N10_1"],
    19: ["Let's see the same thing with different checkerboards.", "19 square_chessboard_N16_1"],
    20: ["By covering one half of the checkerboard.", "20 masked_triangular_chessboard_N16_1"],
    21: ["And obtaining a triangle.", "21 triangular_chessboard_N16_1"],
    22: ["Let's see another example.", "22 swapped_square_chessboard_N6_2"],
    23: ["Where we cover one half of the checkerboard.", "23 masked_swapped_square_chessboard_N6_2"],
    24: ["And obtain a triangle.", "24 swapped_triangular_chessboard_N6_2"],
    25: ["Let's see one last example.", "25 swapped_square_chessboard_N16_1"],
    26: ["Where we cover one half of the checkerboard.", "26 masked_swapped_square_chessboard_N16_1"],
    27: ["And obtain a triangle.", "27 swapped_triangular_chessboard_N16_1"],
    // swaps in triangles
    // 6x6    
    28: ["We can transform also triangles.", "28 triangular_chessboard_N6_2"],
    29: ["If we switch these rows and columns.", "29 highlighted_triangular_chessboard_N6_2"],
    30: ["We obtain a different triangle.", "30 swapped_triangular_chessboard_N6_2"],
    31: ["As done before, we have transformed the original triangle.", "31 6nodes_triangular"],
    // 10x10 
    32: ["We can transform also bigger triangles.", "32 triangular_chessboard_N10_1"],
    33: ["If we switch these rows and columns.", "33 highlighted_triangular_chessboard_N10_1"],
    34: ["We obtain a different triangle.", "34 swapped_triangular_chessboard_N10_1"], 
    35: ["Again, we have transformed the original triangle.", "35 10nodes_triangular"],
    // 16x16    
    36: ["Let's see it one last time, with an even bigger triangle.", "36 triangular_chessboard_N16_1"],
    37: ["If we switch these rows and columns.", "37 highlighted_triangular_chessboard_N16_1"],
    38: ["We obtain a different triangle.", "38 swapped_triangular_chessboard_N16_1"], 
    39: ["Again, we have transformed the original triangle.", "39 16nodes_triangular"],
    // horizontal - vertical transition
    // swaps in vertical triangles
    // 6x6        
    40: ["The same triangles can also be seen vertically.", "40 vertical_standard_triangular_chessboard_N6_2"],
    41: ["And we can transform them in the same way, by switching rows and columns.", "41 vertical_highlighted_triangular_chessboard_N6_2"],
    42: ["To obtain a different triangle.", "42 vertical_swapped_triangular_chessboard_N6_2"],  
    43: ["As done before, we have transformed the original triangle.", "43 6nodes_vertical_sidebyside"],
    // 10x10     
    44: ["Also in this case, we can transform bigger triangles.", "44 vertical_standard_triangular_chessboard_N10_1"],
    45: ["If we switch these rows and columns.", "45 vertical_highlighted_triangular_chessboard_N10_1"],
    46: ["We obtain a different triangle.", "46 vertical_swapped_triangular_chessboard_N10_1"], 
    47: ["Again, we have transformed the original triangle.", "47 10nodes_vertical_sidebyside"],
    // 16x16     
    48: ["Let's see it one last time, with an even bigger triangle", "48 vertical_standard_triangular_chessboard_N16_2"],
    49: ["If we switch these rows and columns.", "49 vertical_highlighted_triangular_chessboard_N16_2"],
    50: ["We obtain a different triangle.", "50 vertical_swapped_triangular_chessboard_N16_2"], 
    51: ["Again, we have transformed the original triangle.", "51 16nodes_vertical_sidebyside"],
    // spreading clique (color coded)    
    // N20_K13
    52: ["Now, let's imagine to spread this group of red tiles inside the triangle.", "52 N20_K13_grouped"],
    53: ["This is what we obtain.", "53 N20_K13_shuffled"],
    54: ["We have the same triangle, but in the right one the red tiles are spread.", "54 N20_K13_sidebyside"],
    // N40_K18
    55: ["Let's spread the red tiles of this bigger triangle.", "55 N40_K18_grouped"],
    56: ["This is what we obtain.", "56 N40_K18_shuffled"],
    57: ["Again, we have the same triangle, but in the right one the red tiles are spread.", "57 N40_K18_sidebyside"],    
    // N70_K30
    58: ["Let's spread the red tiles of this even bigger triangle.", "58 N70_K30_grouped"],
    59: ["This is what we obtain.", "59 N70_K30_shuffled"],
    60: ["Again, we have the same triangle, but in the right one the red tiles are spread.", "60 N70_K30_sidebyside"], 
    // N100_K50
    61: ["Let's spread the red tiles of this even bigger triangle.", "61 N100_K50_grouped"],
    62: ["This is what we obtain.", "62 N100_K50_shuffled"],
    63: ["Again, we have the same triangle, but in the right one the red tiles are spread.", "63 N100_K50_sidebyside"], 
    // N120_K45
    64: ["Let's spread the red tiles of this even bigger triangle.", "64 N120_K45_grouped"],
    65: ["This is what we obtain.", "65 N120_K45_shuffled"],
    66: ["Again, we have the same triangle, but in the right one the red tiles are spread.", "66 N120_K45_sidebyside"], 
    // N200_K80
    67: ["Let's see the last example: if we spread the red tiles of this huge triangle.", "67 N200_K80_grouped"],
    68: ["This is what we obtain.", "68 N200_K80_shuffled"],
    69: ["Once again, we have the same triangle, but in the right one the red tiles are spread.", "69 N200_K80_sidebyside"], 
    // stimuli without (B/W) and with clique (color coded) side by side (3 shuffled versions color coded + corresponding b/w version)
    // N20_K13
    70: ["During the experiment, you will see two triangles next to each other. By pressing the spacebar, you can shuffle the tiles...", "70 N20_K13_1"],
    71: ["One of the two triangles contains a group of tiles that has been spread, like we have just seen. In this case, the left one does.", "71 N20_K13_2"],
    72: ["The triangle on the right, instead, does not contain the group of tiles.", "72 N20_K13_3"],
    73: ["However, during the experiment the two triangles will be all black and white. <br> Your task is to indicate in which triangle a group of tiles was spread (in this case, the left one) by pressing the corresponding arrow.", "73 N20_K13_black&white"],
    // N40_K18
    74: ["Let's see the same thing with two bigger triangles.", "74 N40_K18_1"],
    75: ["In this case, the right triangle contains the group of tiles.", "75 74 N40_K18_2"],
    76: ["If you press the spacebar, you can see different shuffled versions of the same two triangles.", "76 74 N40_K18_3"],
    77: ["In the real experiment, this is what you will see. In this case, given that the right triangle contained the group of tiles, the correct answer is right.", "77 74 N40_K18_black&white"],
    // N70_K30
    78: ["Let's see the same thing with two bigger triangles.", "78 N70_K30_1"],
    79: ["In this case, the left triangle contains the group of tiles.", "79 N70_K30_2"],
    80: ["If you press the spacebar, you can see different shuffled versions of the same two triangles.", "80 N70_K30_3"],
    81: ["In the real experiment, this is what you will see. In this case, given that the left triangle contained the group of tiles, the correct answer is left.", "81 N70_K30_black&white"],
    // N100_K50
    82: ["Let's see the same thing with a bigger triangle.", "82 N100_K50_1"],
    83: ["In this case, the right triangle contains the group of tiles.", "83 N100_K50_2"],
    84: ["If you press the spacebar, you can see different shuffled versions of the same two triangles.", "84 N100_K50_3"],
    85: ["In the real experiment, this is what you will see. In this case, given that the right triangle contained the group of tiles, the correct answer is right.", "85 N100_K50_black&white"],
    // N120_K45
    86: ["Let's see the same thing with a bigger triangle.", "86 N120_K45_6"],
    87: ["In this case, the right triangle contains the group of tiles.", "87 N120_K45_2"],
    88: ["If you press the spacebar, you can see different shuffled versions of the same two triangles.", "88 N120_K45_3"],
    89: ["In the real experiment, this is what you will see. In this case, given that the right triangle contained the group of tiles, the correct answer is right.", "89 N120_K45_black&white"],
    // N200_K80
    90: ["Let's see the same thing with a bigger triangle.", "90 N200_K80_1"],
    91: ["In this case, the right triangle contains the group of tiles.", "91 N200_K80_2"],
    92: ["If you press the spacebar, you can see different shuffled versions of the same two triangles.", "92 N200_K80_3"],
    93: ["In the real experiment, this is what you will see. In this case, given that the left triangle contained the group of tiles, the correct answer is left.", "93 N200_K80_black&white"],
    // examples (b/w version -> corresponding color coded version)
    // N20_K13   
    // N40_K18
    // N100_K50
    // N120_K45
    // N200_K80
}


/* FUNCTION TO GENERATE THE INTRODUCTION PAGES ARRAY */
function generateInstructionsPages() {
    /* INPUT: none

    OUTPUT:
    - array of instructions pages that will be shown one after the other
    */ 

    let instructionsPagesArray = []

    for (let index = 0; index < Object.keys(tutorialObject).length; index++) {
        let singleHTML =  `<font size="+2"><b> INSTRUCTIONS </b></font><br><br>
        <img src="tutorial/images_sequence_with_names/${tutorialObject[index+1][1]}.PNG" alt="Could not upload image" height="500"><br><br>
        ${tutorialObject[index+1][0]}<br><br>
        <i><b>< Press left arrow to go back <br></b></i>
        <i><b>Press right arrow to go forward ></b></i>
        `    
        // ADDING THE PAGE NUMBER AT THE BOTTOM/AT THE TOP NEXT TO "INSTRUCTIONS" (number/total)

        instructionsPagesArray.push(singleHTML)
    }

    return instructionsPagesArray
    
}


// FINAL FAMILIARIZATION:
// da fare usando canvas-keyboard-response e un conditional statement -> cambiare HTML prompt (image) in base a se l'ultima risposta data era corretta o no
// IMPORTANTE -> introdurre gli spacebar presses, andare avanti tra le visualizzazioni shuffled finchè non viene data la risposta
