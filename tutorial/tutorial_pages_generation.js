/* INTRODUCTIVE PAGES */
// OBJECT THAT CONTAINS INSTRUCTIONS TEXT AND RELATIVE IMAGES:
const instructionsObject = {
    // checkerboard familiarization
    1: ["Imagine you have a black and white checkerboard.", "1 square_chessboard_N6_2"],
    2: ["Checkerboards come in different sizes.", "2 square_chessboard_N10_1"],
    3: ["Checkerboards come in different sizes.", "3 square_chessboard_N16_1"],
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
    75: ["In this case, the right triangle contains the group of tiles.", "75 N40_K18_2"],
    76: ["If you press the spacebar, you can see different shuffled versions of the same two triangles.", "76 N40_K18_3"],
    77: ["In the real experiment, this is what you will see. In this case, given that the right triangle contained the group of tiles, the correct answer is right.", "77 N40_K18_black&white"],
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
    91: ["In this case, the left triangle contains the group of tiles.", "91 N200_K80_2"],
    92: ["If you press the spacebar, you can see different shuffled versions of the same two triangles.", "92 N200_K80_3"],
    93: ["In the real experiment, this is what you will see. In this case, given that the left triangle contained the group of tiles, the correct answer is left.", "93 N200_K80_black&white"],
    // examples (b/w version -> corresponding color coded version)
    // N20_K13   
    94: ["Let's see some examples: try to guess which triangle contains the group of tiles.", "94 N20_K13_black_clique_right_3"],
    95: ["In this case, it was the right one.", "95 N20_K13_red_clique_right"],
    // N40_K18
    96: ["Let's see another example: try to guess which triangle contains the group of tiles.", "96 N40_K18_black_clique_left_3"],
    97: ["In this case, it was the left one.", "97 N40_K18_red_clique_left"],
    // N70_K30
    98: ["Let's see another example: try to guess which triangle contains the group of tiles.", "98 N70_K30_black_clique_right_3"],
    99: ["In this case, it was the right one.", "99 N70_K30_red_clique_right"],
    // N100_K50
    100: ["Let's see another example: try to guess which triangle contains the group of tiles.", "100 N100_K50_black_clique_left_3"],
    101: ["In this case, it was the left one.", "101 N100_K50_red_clique_left"],
    // N120_K45
    102: ["Let's see another example: try to guess which triangle contains the group of tiles.", "102 N120_K45_black_clique_left_3"],
    103: ["In this case, it was the left one.", "103 N120_K45_red_clique_left"],
    // N200_K80
    104: ["Let's see one last example: try to guess which triangle contains the group of tiles.", "104 N200_K80_black_clique_right_3"],
    105: ["In this case, it was the right one.", "105 N200_K80_red_clique_right"],
}


/* FUNCTION TO GENERATE THE INTRODUCTION PAGES ARRAY */
function generateInstructionsPages() {
    /* INPUT: none ("instructionsObject" is global)

    OUTPUT:
    - array of instructions pages that will be shown one after the other
    */ 

    let instructionsPagesArray = []

    for (let index = 0; index < Object.keys(instructionsObject).length; index++) {
        let singleHTML =  `<font size="+2"><b> INSTRUCTIONS </b></font><br><br>
        <img src="tutorial/instructions_images/${instructionsObject[index+1][1]}.PNG" alt="Could not upload image" height="500"><br><br>
        ${instructionsObject[index+1][0]}<br><br>
        <i><b>< Press left arrow to go back <br></b></i>
        <i><b>Press right arrow to go forward ></b></i>
        `    
        // POSSIBLE IMPROVEMENT:
        // ADDING THE PAGE NUMBER AT THE BOTTOM/AT THE TOP NEXT TO "INSTRUCTIONS" (number/total)

        instructionsPagesArray.push(singleHTML)
    }

    return instructionsPagesArray
    
}




/* TASK FAMILIARIZATION */

// PART 1: without background information
let taskFamiliarizationObject_part1 = {
    /* 
    In every group of four images:
    1: visualization trial n.1,
    2: visualization trial n.2,
    3: choice trial,
    4: feedback trial.
    */

    // without background information
    // N20_K13
    1: ["Now it's your turn: <br> Press space to shuffle the two triangles.", "1 N20_K13_cliqueRight_question1"],
    2: ["To see a different version of the same two triangles,<br> Press space again.", "2 N20_K13_cliqueRight_question2"],
    3: ["To indicate which of the two triangles has the group of tiles,<br> Press the right or left arrow.", "3 N20_K13_cliqueRight_question3"],
    4: ["ArrowRight", "<b>Correct!</b> <br>Press space to move on.", "<b>Wrong!</b> The triangle was the other one.<br>Press space to move on.", "4 N20_K13_cliqueRight_solution"], // correct answer: ArrowRight
    // N40_K18
    5: ["Let's see other examples with bigger triangles.<br> Press space to shuffle the two triangles.", "5 N40_K18_cliqueLeft_question1"],
    6: ["To see a different version of the same two triangles,<br> Press space again.", "6 N40_K18_cliqueLeft_question2"],
    7: ["To indicate which of the two triangles has the group of tiles,<br> Press the right or left arrow.", "7 N40_K18_cliqueLeft_question3"],
    8: ["ArrowLeft", "<b>Correct!</b> <br>Press space to move on.", "<b>Wrong!</b> The triangle was the other one.<br>Press space to move on.", "8 N40_K18_cliqueLeft_solution"], // correct answer: ArrowLeft
    // N70_K30
    9: ["Let's see other examples with bigger triangles.<br> Press space to shuffle the two triangles.", "9 N70_K30_cliqueRight_question1"],
    10: ["To see a different version of the same two triangles,<br> Press space again.", "10 N70_K30_cliqueRight_question2"],
    11: ["To indicate which of the two triangles has the group of tiles,<br> Press the right or left arrow.", "11 N70_K30_cliqueRight_question3"],
    12: ["ArrowRight", "<b>Correct!</b> <br>Press space to move on.", "<b>Wrong!</b> The triangle was the other one.<br>Press space to move on.", "12 N70_K30_cliqueRight_solution"], // correct answer: ArrowRight
    // N100_K50
    13: ["Let's see other examples with bigger triangles.<br> Press space to shuffle the two triangles.", "13 N100_K50_cliqueLeft_question1"],
    14: ["To see a different version of the same two triangles,<br> Press space again.", "14 N100_K50_cliqueLeft_question2"],
    15: ["To indicate which of the two triangles has the group of tiles,<br> Press the right or left arrow.", "15 N100_K50_cliqueLeft_question3"],
    16: ["ArrowLeft", "<b>Correct!</b> <br>Press space to move on.", "<b>Wrong!</b> The triangle was the other one.<br>Press space to move on.", "16 N100_K50_cliqueLeft_solution"], // correct answer: ArrowLeft
    // N120_K45
    17: ["Let's see other examples with bigger triangles.<br> Press space to shuffle the two triangles.", "17 N120_K45_cliqueLeft_question1"],
    18: ["To see a different version of the same two triangles,<br> Press space again.", "18 N120_K45_cliqueLeft_question2"],
    19: ["To indicate which of the two triangles has the group of tiles,<br> Press the right or left arrow.", "19 N120_K45_cliqueLeft_question3"],
    20: ["ArrowLeft", "<b>Correct!</b> <br>Press space to move on.", "<b>Wrong!</b> The triangle was the other one.<br>Press space to move on.", "20 N120_K45_cliqueLeft_solution"], // correct answer: ArrowLeft
    // N140_K60
    21: ["Let's see other examples with bigger triangles.<br> Press space to shuffle the two triangles.", "21 N140_K60_cliqueRight_question1"],
    22: ["To see a different version of the same two triangles,<br> Press space again.", "22 N140_K60_cliqueRight_question2"],
    23: ["To indicate which of the two triangles has the group of tiles,<br> Press the right or left arrow.", "23 N140_K60_cliqueRight_question3"],
    24: ["ArrowRight", "<b>Correct!</b> <br>Press space to move on.", "<b>Wrong!</b> The triangle was the other one.<br>Press space to move on.", "24 N140_K60_cliqueRight_solution"], // correct answer: ArrowRight      
    // N150_K100
    25: ["Let's see other examples with bigger triangles.<br> Press space to shuffle the two triangles.", "25 N150_K100_cliqueLeft_question1"],
    26: ["To see a different version of the same two triangles,<br> Press space again.", "26 N150_K100_cliqueLeft_question2"],
    27: ["To indicate which of the two triangles has the group of tiles,<br> Press the right or left arrow.", "27 N150_K100_cliqueLeft_question3"],
    28: ["ArrowLeft", "<b>Correct!</b> <br>Press space to move on.", "<b>Wrong!</b> The triangle was the other one.<br>Press space to move on.", "28 N150_K100_cliqueLeft_solution"], // correct answer: ArrowLeft
    // N180_K60
    29: ["Let's see other examples with bigger triangles.<br> Press space to shuffle the two triangles.", "29 N180_K60_cliqueLeft_question1"],
    30: ["To see a different version of the same two triangles,<br> Press space again.", "30 N180_K60_cliqueLeft_question2"],
    31: ["To indicate which of the two triangles has the group of tiles,<br> Press the right or left arrow.", "31 N180_K60_cliqueLeft_question3"],
    32: ["ArrowLeft", "<b>Correct!</b> <br>Press space to move on.", "<b>Wrong!</b> The triangle was the other one.<br>Press space to move on.", "32 N180_K60_cliqueLeft_solution"], // correct answer: ArrowLeft
    // N200_K80
    33: ["Let's see other examples with bigger triangles.<br> Press space to shuffle the two triangles.", "33 N200_K80_black_clique_right_1"],
    34: ["To see a different version of the same two triangles,<br> Press space again.", "34 N200_K80_black_clique_right_2"],
    35: ["To indicate which of the two triangles has the group of tiles,<br> Press the right or left arrow.", "35 N200_K80_black_clique_right_3"],
    36: ["ArrowRight", "<b>Correct!</b> <br>Press space to move on.", "<b>Wrong!</b> The triangle was the other one.<br>Press space to move on.", "36 N200_K80_red_clique_right"], // correct answer: ArrowRight  
}


// PART 2: with background information
let taskFamiliarizationObject_part2 = {
    /* 
    In every group of four images:
    1: visualization trial n. 1 (image: 3 moves left; orange score)
    2: visualization trial n. 2 (image: 2 moves left; orange score)
    3: choice trial (image: 1 move left; orange score)
    4: solution trial (image: 1 move left; orange score; red clique)
    5: feedback trial (image: 3 moves left; red/green score)
    */

    // with background information
    // N150_K70
    1: ["During the real experiment, you will see your score on the top-right, and the moves on the top-left.<br> By pressing space, you use one move.", "1 150_70_cliqueRight_withFeedback_1"],
    2: ["You will have a limited number of moves.<br> Press space again to shuffle the triangles and use another move.", "2 150_70_cliqueRight_withFeedback_2"],
    3: ["To indicate which of the two triangles has the group of tiles,<br> Press the right or left arrow.", "3 150_70_cliqueRight_withFeedback_3"],
    4: ["This was the triangle that contained the trial.<br> Press space to see the feedback for your response.", "4 150_70_cliqueRight_withFeedback_solution"], 
    5: ["ArrowRight", // correct answer: ArrowRight
        //PROMPT:
        //correct answer
        "Your answer was <b>correct!</b>, the score has increased and has turned green.<br> Press space to start a new trial.", 
        //wrong answer
        "Your answer was <b>wrong!</b>, the score has not increased and has turned red.<br> Press space to start a new trial.",
        //IMAGE:
        //correct answer
        "5 150_40_cliqueLeft_withFeedback_correctAnswer", 
        //wrong answer
        "5 150_40_cliqueLeft_withFeedback_wrongAnswer",
        ],
    // N170_K50
    6: ["During the real experiment, you will see your score on the top-right, and the moves on the top-left.<br> By pressing space, you use one move.", "6 170_50_cliqueLeft_withFeedback_1"],
    7: ["You will have a limited number of moves.<br> Press space again to shuffle the triangles and use another move.", "7 170_50_cliqueLeft_withFeedback_2"],
    8: ["To indicate which of the two triangles has the group of tiles,<br> Press the right or left arrow.", "8 170_50_cliqueLeft_withFeedback_3"],
    9: ["This was the triangle that contained the trial.<br> Press space to see the feedback for your response.", "9 170_50_cliqueLeft_withFeedback_solution"], 
    10: ["ArrowLeft", // correct answer: ArrowLeft
        //PROMPT:
        //correct answer
        "Your answer was <b>correct!</b>, the score has increased and has turned green.<br> Press space to end the training phase.", 
        //wrong answer
        "Your answer was <b>wrong!</b>, the score has not increased and has turned red.<br> Press space to end the training phase.",
        //IMAGE:
        //correct answer
        "10 170_50_cliqueLeft_withFeedback_correctAnswer", 
        //wrong answer
        "10 170_50_cliqueLeft_withFeedback_wrongAnswer",
        ]   
        
        // GENERATE OTHER IMAGES AND ADD THEM???

}


// FUNCTION THAT GENERATES THE FAMILIARIZATION TRIALS FOR PART 1 AND PART 2 (all except feedback trial, added from main)
function generateBlockOfFamiliarizationTrials(part,index,taskFamiliarizationObject) {
    /* INPUT:
    - part: identifies if the familiarization trials are produced for part 1 (3 trials for each block) or 2 (4 trials for each block)
    - index: identifies the number of the block of trials (first call: trials 1-3 (part 1) / 1-4 (part 2); second call: trials 5-7 (part 1) / 6...)
    - taskFamiliarizationObject: taskFamiliarizationObject_part1/_part2

    OUTPUT:
    - array of trials for the current block (part 1: visualization 1, visualization 2, choice; part 2: visualization 1, visualization 2, choice, solution)
    (NB: the feedback trial is added from the main script since it requires to access global jsPsych variable)
    */ 

    // empty array that will be filled with the different trials:
    let currentBlockOfTrialsArray = []

    // creating the trials and adding them to the array
    let visualization_1_trial = {
        type: jsPsychImageKeyboardResponse,
        stimulus: `tutorial/task_familiarization_images/part ${part}/${taskFamiliarizationObject[index+1][1]}.PNG`,
        prompt: `<br><br><br> ${taskFamiliarizationObject[index+1][0]}`,
        choices: [' '],
        stimulus_height: 500,
    };
    currentBlockOfTrialsArray.push(visualization_1_trial)
    
    let visualization_2_trial = {
        type: jsPsychImageKeyboardResponse,
        stimulus: `tutorial/task_familiarization_images/part ${part}/${taskFamiliarizationObject[index+2][1]}.PNG`,
        prompt: `<br><br><br> ${taskFamiliarizationObject[index+2][0]}`,
        choices: [' '],
        stimulus_height: 500,
    };
    currentBlockOfTrialsArray.push(visualization_2_trial)
    
    let choice_trial = {
        type: jsPsychImageKeyboardResponse,
        stimulus: `tutorial/task_familiarization_images/part ${part}/${taskFamiliarizationObject[index+3][1]}.PNG`,
        prompt: `<br><br><br> ${taskFamiliarizationObject[index+3][0]}`,
        choices: ['ArrowLeft', 'ArrowRight'],
        stimulus_height: 500,
    };
    currentBlockOfTrialsArray.push(choice_trial)

    // if function is called for part 2, the solution trial has to be added to the array
    if (part == 2) {
        let solution_trial = {
            type: jsPsychImageKeyboardResponse,
            stimulus: `tutorial/task_familiarization_images/part ${part}/${taskFamiliarizationObject[index+4][1]}.PNG`,
            prompt: `<br><br><br> ${taskFamiliarizationObject[index+4][0]}`,
            choices: [' '],
            stimulus_height: 500,
        };   
        currentBlockOfTrialsArray.push(solution_trial)           
    }
    //returning the array 
    return currentBlockOfTrialsArray
}