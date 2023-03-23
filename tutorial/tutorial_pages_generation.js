/* INTRODUCTIVE PAGES */
// OBJECT THAT CONTAINS INSTRUCTIONS TEXT AND RELATIVE IMAGES:
const instructionsObject = {
    // checkerboard familiarization
    1: ["Imagine you have a black and white checkerboard.", "1_square_chessboard_N10_1"],
    2: ["Checkerboards come in different sizes.", "2_square_chessboard_N16_1"],
    // swaps in 20x20 square
    // first swap:
    3: ["Now let's consider a 20 by 20 checkerboard.", "3_standard_square_chessboard_N20_1"],
    4: ["In this checkerboard, if we switch these rows and columns.", "4_highlighted_square_chessboard_N20_1_firstSwap"],
    5: ["We obtain a different checkerboard.", "5_swapped_square_chessboard_N20_1"],
    6: ["By swapping the two rows and the two columns, we transformed the original checkerboard.<br>Remember that you can always visualize the previous images by pressing the left arrow.", "6_20nodes_square_sidebyside_firstSwap"],
    // second swap:
    7: ["Let's consider again our standard 20x20 checkerboard.", "7_standard_square_chessboard_N20_1"],
    8: ["Now let's switch two different rows and columns.", "8_highlighted_square_chessboard_N20_1_secondSwap"],
    9: ["We obtain a different checkerboard.", "9_swapped_square_chessboard_N20_1_secondSwap"],
    10: ["By swapping the two rows and the two columns, we have transformed the original checkerboard.<br>Remember that you can always visualize the previous images by pressing the left arrow.", "10_20nodes_square_sidebyside_secondSwap"],

    // square - triangle transition
    11: ["Until now, we have seen square checkerboards.", "11_standard_square_chessboard_N20_1_without_frame"],
    12: ["But if we cover one half, they become triangles.", "12_masked_triangular_chessboard_N20_1_standard"],   
    13: ["And this is the resulting checkerboard.", "13_solid_triangular_chessboard_N20_1_standard"],
    14: ["Let's see the same thing with a different checkerboard.", "14_swapped_square_chessboard_N20_1_firstSwap_withoutFrame"],
    15: ["By covering one half of the checkerboard.", "15_masked_triangular_chessboard_N20_1_firstSwap"],
    16: ["And obtaining a triangle", "16_solid_triangular_chessboard_N20_1_firstSwap"],
    17: ["Let's see one last example.", "17_swapped_square_chessboard_N20_1_secondSwap_withoutFrame"],
    18: ["Where we cover one half of the checkerboard.", "18_masked_triangular_chessboard_N20_1_secondSwap"],
    19: ["And obtain a triangle.", "19_solid_triangular_chessboard_N20_1_secondSwap"],

    // swaps in triangles   
    // first swap 
    20: ["We can switch rows and columns also triangles.", "20_triangular_chessboard_N20_1_firstSwap"],
    21: ["For example, if we switch these rows and columns.", "21_highlighted_triangular_chessboard_N20_1_firstSwap"],
    22: ["We obtain a different triangle.", "22_swapped_triangular_chessboard_N20_1_firstSwap"],
    23: ["By swapping the two rows and columns, we have transformed the original triangle.<br>Remember that you can always visualize the previous images by pressing the left arrow.", "23_20nodes_triangular_firstSwap"],
    // second swap:    
    24: ["Let's consider again the initial triangle.", "24_triangular_chessboard_N20_1_secondSwap"],
    25: ["If we switch two different rows and columns.", "25_highlighted_triangular_chessboard_N20_1_secondSwap"],
    26: ["We obtain another different triangle.", "26_swapped_triangular_chessboard_N20_1_secondSwap"],
    27: ["By swapping the two rows and columns, we have transformed the original triangle.<br>Remember that you can always visualize the previous images by pressing the left arrow.", "27_20nodes_triangular_secondSwap"],

    // horizontal - vertical transition 
    // first swap 
    28: ["The same triangle can also be represented vertically.", "28_vertical_standard_triangular_chessboard_N20_1_firstSwap"],
    29: ["We can transform the triangle similarly, by switching specific rows and columns.", "29_vertical_highlighted_triangular_chessboard_N20_1_firstSwap"],
    30: ["To obtain a different triangle.", "30_vertical_swapped_triangular_chessboard_N20_1_firstSwap"],
    31: ["Swapping two rows and columns transforms the original triangle.<br>Remember that you can always visualize the previous images by pressing the left arrow.", "31_20nodes_vertical_firstSwap"],
    // second swap:     
    32: ["Let's consider again the initial vertical triangle.", "32_vertical_standard_triangular_chessboard_N20_1_secondSwap"],
    33: ["If we switch two different rows and columns.", "33_vertical_highlighted_triangular_chessboard_N20_1_secondSwap"],
    34: ["We obtain another different triangle.", "34_vertical_swapped_triangular_chessboard_N20_1_secondSwap"], 
    35: ["Also in this case, swapping two rows and columns transforms the original triangle.<br>Remember that you can always visualize the previous images by pressing the left arrow.", "35_20nodes_vertical_secondSwap"],
    
    // spreading clique (color coded)    
    // N20_K14 (regular chessboard - progression)
    36: ["Now let's imagine you have a regular triangular chessboard where some tiles are colored in red.", "36_N20_K14_regular_1standard"],
    37: ["If you switch two rows and columns, the red tiles change their location in the triangle", "37_N20_K14_regular_swap1"],
    38: ["If you make another switch, the red tiles will spread even more inside the triangle.", "38_N20_K14_regular_swap2"], 
    39: ["With a third switch, they will keep spreading inside the triangle.", "39_N20_K14_regular_swap3"],
    40: ["After many single switches, the red tiles will be distributed inside the triangle, and they will look like this.", "40_N20_K14_regular_visualization5_shuffled"],
    41: ["Repeating single switches of rows and columns shuffles the original triangle.<br>A 'shuffle' is the passage from a standard triangle to its shuffled version.", "41_N20_K14_progression"],
    // N20_K14 (irregular chessboard)
    42: ["It is possible to shuffle also triangles where the black and white tiles are not regular.", "42_N20_K14_irregular_standard"],  
    43: ["This is how a shuffle of the previous triangle looks like.", "43_N20_K14_irregular_shuffled"],  
    44: ["A 'shuffle' is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "44_N20_K14_sidebyside"],
    // N40_K24
    45: ["It is possible to shuffle also bigger triangles. Let's see some examples.", "45_N40_K24_grouped"],
    46: ["This is how a shuffle of the previous triangle looks like.", "46_N40_K24_shuffled"], 
    47: ["A 'shuffle' is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "47_N40_K24_sidebyside"],
    // N70_K30   
    48: ["Let's see an example of a shuffle in a bigger triangle.", "48_N70_K30_grouped"],
    49: ["This is how a shuffle of the previous triangle looks like.", "49_N70_K30_shuffled"],
    50: ["A 'shuffle' is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "50_N70_K30_sidebyside"], 
    // N100_K50
    51: ["Let's see an example of a shuffle in a bigger triangle.", "51_N100_K50_grouped"],  
    52: ["This is how a shuffle of the previous triangle looks like.", "52_N100_K50_shuffled"],
    53: ["A 'shuffle' is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "53_N100_K50_sidebyside"],
    // N120_K45
    54: ["Let's see an example of a shuffle in a bigger triangle.", "54_N120_K45_grouped"],
    55: ["This is how a shuffle of the previous triangle looks like.", "55_N120_K45_shuffled"],
    56: ["A 'shuffle' is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "56_N120_K45_sidebyside"],
    // N200_K110
    57: ["Let's see an example of a shuffle in a bigger triangle.", "57_N200_K110_grouped"],    
    58: ["This is how a shuffle of the previous triangle looks like.", "58_N200_K110_shuffled"],
    59: ["A 'shuffle' is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "59_N200_K110_sidebyside"],
    // N200_K80
    60: ["Let's see an example of a shuffle in another triangle.", "60_N200_K80_grouped"], 
    61: ["This is how a shuffle of the previous triangle looks like.", "61_N200_K80_shuffled"],
    62: ["A 'shuffle' is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "62_N200_K80_sidebyside"],
    // N250_K110
    63: ["Let's see an example of a shuffle in a bigger triangle.", "63_N250_K110_grouped"], 
    64: ["This is how a shuffle of the previous triangle looks like.", "64_N250_K110_shuffled"],
    65: ["A 'shuffle' is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "65_N250_K110_sidebyside"],
    // N300_K120
    66: ["Let's see an example of a shuffle in a bigger triangle.", "66_N300_K120_grouped"], 
    67: ["This is how a shuffle of the previous triangle looks like.", "67_N300_K120_shuffled"],
    68: ["A 'shuffle' is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "68_N300_K120_sidebyside"],
    // N300_K80
    69: ["Let's see the last example of a shuffle.", "69_N300_K80_grouped"], 
    70: ["This is how a shuffle of the previous triangle looks like.", "70_N300_K80_shuffled"],
    71: ["A 'shuffle' is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "71_N300_K80_sidebyside"],
    
    // stimuli without (B/W) and with clique (color coded) side by side (3 shuffled versions color coded + corresponding b/w version)
    // N300_K130
    72: ["During the experiment, you will see two triangles next to each other. In one of the triangles a group of tiles has been spread through a shuffle. Move on to see a different shuffle of the same triangle.", "72_N300_K130_1"],
    73: ["In this case, the left triangle contains the tiles.", "73_N300_K130_2"],
    74: ["Your task is to determine which of the two triangles contains the group of tiles.", "74_N300_K130_3"],
    75: ["In the real experiment, the tiles will not be red, but black. In this case, given that the left triangle contained the group of tiles, the correct answer is left.", "75_N300_K130_black&white"],
    // N300_K90
    76: ["If you press the spacebar, you can see different shuffled versions of the same two triangles.", "76_N300_K90_1"],
    77: ["In the real experiment, this is what you will see. In this case, given that the right triangle contained the group of tiles, the correct answer is right.", "77_N300_K90_2"],
    78: ["Let's see the same thing with two bigger triangles.", "78_N300_K90_3"],
    79: ["In this case, the left triangle contains the group of tiles.", "79_N300_K90_black&white"],
    // N300_K60    
    80: ["If you press the spacebar, you can see different shuffled versions of the same two triangles.", "80_N300_K60_1"],
    81: ["In the real experiment, this is what you will see. In this case, given that the left triangle contained the group of tiles, the correct answer is left.", "81_N300_K60_2"],
    82: ["Let's see the same thing with a bigger triangle.", "82_N300_K60_3"],
    83: ["In this case, the right triangle contains the group of tiles.", "83_N300_K60_black&white"],

    // examples (b/w version -> corresponding color coded version)
    // N300_K110    
    84: ["Let's see some examples: try to guess which triangle contains the group of tiles.", "84_N300_K110_black_clique_left"],
    85: ["In this case, it was the left one.", "85_N300_K110_red_clique_left"],
    // N300_K80
    86: ["Let's see another example: try to guess which triangle contains the group of tiles.", "86_N300_K80_black_clique_right"],
    87: ["In this case, it was the right one.", "87_N300_K80_red_clique_right"],
    // N300_K60
    88: ["Let's see another example: try to guess which triangle contains the group of tiles.", "88_N300_K60_black_clique_right"],
    89: ["In this case, it was the right one.", "89_N300_K60_red_clique_right"],
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