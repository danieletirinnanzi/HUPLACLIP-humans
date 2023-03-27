/* INTRODUCTIVE PAGES */
// OBJECT THAT CONTAINS INSTRUCTIONS TEXT AND RELATIVE IMAGES:
const instructionsObject = {
    // checkerboard familiarization
    1: ["Imagine you have a black and white checkerboard.", "1_square_chessboard_N10_1"],
    2: ["Checkerboards come in different sizes.", "2_square_chessboard_N16_1"],
    // swaps in 20x20 square
    // first swap:
    3: ["Now let's consider a 20 by 20 checkerboard.", "3_standard_square_chessboard_N20_1"],
    4: ["In this checkerboard, if we switch these rows and columns...", "4_highlighted_square_chessboard_N20_1_firstSwap"],
    5: ["...we obtain a different checkerboard.", "5_swapped_square_chessboard_N20_1"],
    6: ["By swapping the two rows and the two columns, we transformed the original checkerboard.<br>Remember that you can move through the images using the arrows.", "6_20nodes_square_sidebyside_firstSwap"],
    // second swap:
    7: ["Let's consider again our standard 20x20 checkerboard.", "7_standard_square_chessboard_N20_1"],
    8: ["Now let's switch two different rows and columns...", "8_highlighted_square_chessboard_N20_1_secondSwap"],
    9: ["...we obtain a different checkerboard.", "9_swapped_square_chessboard_N20_1_secondSwap"],
    10: ["By swapping the two rows and the two columns, we have transformed the original checkerboard.<br>Remember that you can move through the images using the arrows.", "10_20nodes_square_sidebyside_secondSwap"],

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
    20: ["We can switch rows and columns also in triangles.", "20_triangular_chessboard_N20_1_firstSwap"],
    21: ["For example, if we switch these rows and columns...", "21_highlighted_triangular_chessboard_N20_1_firstSwap"],
    22: ["..we obtain a different triangle.", "22_swapped_triangular_chessboard_N20_1_firstSwap"],
    23: ["By swapping the two rows and columns, we transformed the original triangle.<br>Remember that you can move through the images using the arrows.", "23_20nodes_triangular_firstSwap"],
    // second swap:    
    24: ["Let's consider again the initial triangle.", "24_triangular_chessboard_N20_1_secondSwap"],
    25: ["If we switch two different rows and columns...", "25_highlighted_triangular_chessboard_N20_1_secondSwap"],
    26: ["...we obtain another different triangle.", "26_swapped_triangular_chessboard_N20_1_secondSwap"],
    27: ["By swapping the two rows and columns, we transformed the original triangle.<br>Remember that you can move through the images using the arrows.", "27_20nodes_triangular_secondSwap"],

    // horizontal - vertical transition 
    // first swap 
    28: ["The same triangle can also be represented vertically.", "28_vertical_standard_triangular_chessboard_N20_1_firstSwap"],
    29: ["We can transform the triangle similarly: by switching rows and columns...", "29_vertical_highlighted_triangular_chessboard_N20_1_firstSwap"],
    30: ["...we obtain a different triangle.", "30_vertical_swapped_triangular_chessboard_N20_1_firstSwap"],
    31: ["Swapping two rows and columns transformed the original triangle.<br>Remember that you can move through the images using the arrows.", "31_20nodes_vertical_firstSwap"],
    // second swap:     
    32: ["Let's consider again the initial vertical triangle.", "32_vertical_standard_triangular_chessboard_N20_1_secondSwap"],
    33: ["If we switch two different rows and columns...", "33_vertical_highlighted_triangular_chessboard_N20_1_secondSwap"],
    34: ["...we obtain another different triangle.", "34_vertical_swapped_triangular_chessboard_N20_1_secondSwap"], 
    35: ["Also in this case, swapping two rows and columns transformed the original triangle.<br>Remember that you can move through the images using the arrows.", "35_20nodes_vertical_secondSwap"],
    
    // spreading clique (color coded)    
    // N20_K14 (regular chessboard - progression)
    36: ["Now let's imagine you have a triangular chessboard where some tiles are colored in red.", "36_N20_K14_regular_1standard"],
    37: ["If you switch two rows and columns as we have seen before, the red tiles change their location in the triangle.", "37_N20_K14_regular_swap1"],
    38: ["If you make another switch, the red tiles will spread even more inside the triangle.", "38_N20_K14_regular_swap2"], 
    39: ["With a third switch, they will keep spreading.", "39_N20_K14_regular_swap3"],
    40: ["After many single switches, the red tiles will spread inside the triangle, and they will look like this.", "40_N20_K14_regular_visualization5_shuffled"],
    41: ["Repeating single switches of rows and columns shuffles the original triangle.<br>A <b>shuffle</b> is the passage from a standard triangle to its shuffled version.", "41_N20_K14_progression"],
    // N20_K14 (irregular chessboard)
    42: ["It is possible to shuffle also triangles where the black and white tiles are not regular.", "42_N20_K14_irregular_standard"],  
    43: ["This is how a shuffle of the previous triangle looks like.", "43_N20_K14_irregular_shuffled"],  
    44: ["A <b>shuffle</b> is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "44_N20_K14_sidebyside"],
    // N40_K24
    45: ["It is possible to shuffle also bigger triangles. Let's see some examples.", "45_N40_K24_grouped"],
    46: ["This is how a shuffle of the previous triangle looks like.", "46_N40_K24_shuffled"], 
    47: ["A <b>shuffle</b> is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "47_N40_K24_sidebyside"],
    // N70_K30   
    48: ["Let's see an example of a shuffle in a bigger triangle.", "48_N70_K30_grouped"],
    49: ["This is how a shuffle of the previous triangle looks like.", "49_N70_K30_shuffled"],
    50: ["A <b>shuffle</b> is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "50_N70_K30_sidebyside"], 
    // N100_K50
    51: ["Let's see an example of a shuffle in a bigger triangle.", "51_N100_K50_grouped"],  
    52: ["This is how a shuffle of the previous triangle looks like.", "52_N100_K50_shuffled"],
    53: ["A <b>shuffle</b> is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "53_N100_K50_sidebyside"],
    // N120_K45
    54: ["Let's see an example of a shuffle in a bigger triangle.", "54_N120_K45_grouped"],
    55: ["This is how a shuffle of the previous triangle looks like.", "55_N120_K45_shuffled"],
    56: ["A <b>shuffle</b> is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "56_N120_K45_sidebyside"],
    // N200_K110
    57: ["Let's see an example of a shuffle in a bigger triangle.", "57_N200_K110_grouped"],    
    58: ["This is how a shuffle of the previous triangle looks like.", "58_N200_K110_shuffled"],
    59: ["A <b>shuffle</b> is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "59_N200_K110_sidebyside"],
    // N200_K80
    60: ["Let's see an example of a shuffle in another triangle.", "60_N200_K80_grouped"], 
    61: ["This is how a shuffle of the previous triangle looks like.", "61_N200_K80_shuffled"],
    62: ["A <b>shuffle</b> is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "62_N200_K80_sidebyside"],
    // N250_K110
    63: ["Let's see an example of a shuffle in a bigger triangle.", "63_N250_K110_grouped"], 
    64: ["This is how a shuffle of the previous triangle looks like.", "64_N250_K110_shuffled"],
    65: ["A <b>shuffle</b> is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "65_N250_K110_sidebyside"],
    // N300_K120
    66: ["Let's see an example of a shuffle in a bigger triangle.", "66_N300_K120_grouped"], 
    67: ["This is how a shuffle of the previous triangle looks like.", "67_N300_K120_shuffled"],
    68: ["A <b>shuffle</b> is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "68_N300_K120_sidebyside"],
    // N300_K80
    69: ["Let's see the last example of a shuffle.", "69_N300_K80_grouped"], 
    70: ["This is how a shuffle of the previous triangle looks like.", "70_N300_K80_shuffled"],
    71: ["A <b>shuffle</b> is the passage from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "71_N300_K80_sidebyside"],
    
    // stimuli without (B/W) and with clique (color coded) side by side (3 shuffled versions color coded + corresponding b/w version)
    // N300_K130
    72: ["During the experiment, you will see two triangles next to each other. In one of the triangles, a group of tiles has been spread through a shuffle. Move on to see a different shuffle of the same two triangles.", "72_N300_K130_1"],
    73: ["In this case, the left triangle contains the tiles. Press the left and right arrow to see different shuffles of the same two triangles", "73_N300_K130_2"],
    74: ["In this case, the left triangle contains the tiles.", "74_N300_K130_3"],
    75: ["In the real experiment, the tiles will not be red, but black. Your task is to indicate which of the two triangles contains the group of tiles. In this case, the correct answer is <b>left</b>.", "75_N300_K130_black&white"],
    // N300_K90
    76: ["Let's see another couple of stimuli. This time the tiles are in the right triangle.", "76_N300_K90_1"],
    77: ["Press the left and right arrow to see different shuffles of the same two triangles.", "77_N300_K90_2"],
    78: ["In this case, the right triangle contains the tiles.", "78_N300_K90_3"],
    79: ["Your task is to indicate which of the two triangles contains the group of tiles. In this case, the correct answer is <b>right</b>.", "79_N300_K90_black&white"],
    // N300_K60    
    80: ["Let's see the last couple of stimuli. This time the tiles are in the right triangle.", "80_N300_K60_1"],
    81: ["Press the left and right arrow to see different shuffles of the same two triangles.", "81_N300_K60_2"],
    82: ["In this case, the right triangle contains the tiles.", "82_N300_K60_3"],
    83: ["Your task is to indicate which of the two triangles contains the group of tiles. In this case, the correct answer is <b>right</b>.", "83_N300_K60_black&white"],

    // examples (b/w version -> corresponding color coded version)
    // N300_K110    
    84: ["Let's see some examples: which of these two triangles contains the tiles?", "84_N300_K110_black_clique_left"],
    85: ["In this case, the left one does.", "85_N300_K110_red_clique_left"],
    // N300_K80
    86: ["Let's see another example: which of these two triangles contains the tiles?", "86_N300_K80_black_clique_right"],
    87: ["In this case, the right one does.", "87_N300_K80_red_clique_right"],
    // N300_K60
    88: ["Let's see this last difficult example. Which of these two triangles contains the tiles?", "88_N300_K60_black_clique_right"],
    89: ["In this case, the right one does.", "89_N300_K60_red_clique_right"],
}


/* FUNCTION TO GENERATE THE INTRODUCTION PAGES ARRAY */
function generateInstructionsPages() {
    /* INPUT: none ("instructionsObject" is global)

    OUTPUT:
    - array of instructions pages that will be shown one after the other
    */ 

    let instructionsPagesArray = []

    // first instruction page (index = 0): no 'press left arrow to go back' button
    let firstHTML =  `<font size="+2"><b> INSTRUCTIONS </b></font><br><br>
    <img src="tutorial/instructions_images/${instructionsObject[0+1][1]}.PNG" alt="Could not upload image" height="500"><br><br>
    ${instructionsObject[0+1][0]}<br><br>
    <i><b>Press right arrow to go forward ></b></i>
    ` 
    instructionsPagesArray.push(firstHTML)

    for (let index = 1; index < Object.keys(instructionsObject).length; index++) {
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
    // N300_K130
    1: ["Now it's your turn: <br> Press space to shuffle the two triangles.", "1_N300_K130_cliqueRight_question1"],
    2: ["To see a different version of the same two triangles,<br> Press space again.", "2_N300_K130_cliqueRight_question2"],
    3: ["To indicate which of the two triangles has the group of tiles,<br> Press the right or left arrow.", "3_N300_K130_cliqueRight_question3"],
    4: ["ArrowRight", "<b>Correct!</b> <br>Press space to move on.", "<b>Wrong!</b> The triangle was the other one.<br>Press space to move on.", "4_N300_K130_cliqueRight_solution"], // correct answer: ArrowRight
    // N300_K90
    5: ["Let's see other examples with bigger triangles.<br> Press space to shuffle the two triangles.", "5_N300_K90_cliqueLeft_question1"],
    6: ["To see a different version of the same two triangles,<br> Press space again.", "6_N300_K90_cliqueLeft_question2"],
    7: ["To indicate which of the two triangles has the group of tiles,<br> Press the right or left arrow.", "7_N300_K90_cliqueLeft_question3"],
    8: ["ArrowLeft", "<b>Correct!</b> <br>Press space to move on.", "<b>Wrong!</b> The triangle was the other one.<br>Press space to move on.", "8_N300_K90_cliqueLeft_solution"], // correct answer: ArrowLeft
    // N300_K100
    9: ["Let's see other examples with bigger triangles.<br> Press space to shuffle the two triangles.", "9_N300_K100_cliqueLeft_question1"],
    10: ["To see a different version of the same two triangles,<br> Press space again.", "10_N300_K100_cliqueLeft_question2"],
    11: ["To indicate which of the two triangles has the group of tiles,<br> Press the right or left arrow.", "11_N300_K100_cliqueLeft_question3"],
    12: ["ArrowLeft", "<b>Correct!</b> <br>Press space to move on.", "<b>Wrong!</b> The triangle was the other one.<br>Press space to move on.", "12_N300_K100_cliqueLeft_solution"], // correct answer: ArrowLeft
    // N300_K70
    13: ["Let's see other examples with bigger triangles.<br> Press space to shuffle the two triangles.", "13_N300_K70_cliqueRight_question1"],
    14: ["To see a different version of the same two triangles,<br> Press space again.", "14_N300_K70_cliqueRight_question2"],
    15: ["To indicate which of the two triangles has the group of tiles,<br> Press the right or left arrow.", "15_N300_K70_cliqueRight_question3"],
    16: ["ArrowRight", "<b>Correct!</b> <br>Press space to move on.", "<b>Wrong!</b> The triangle was the other one.<br>Press space to move on.", "16_N300_K70_cliqueRight_solution"], // correct answer: ArrowRight

    // GENERATE OTHER IMAGES AND ADD THEM???

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
    // N300_K100
    1: ["During the real experiment, you will see your score on the top-right, and the remaining shuffles on the top-left.<br> By pressing space, you use one move.", "1_300_100_cliqueLeft_withFeedback_1"],
    2: ["You will have a limited number of moves.<br> Press space again to shuffle the triangles and use another move.", "2_300_100_cliqueLeft_withFeedback_2"],
    3: ["To indicate which of the two triangles has the group of tiles,<br> Press the right or left arrow.", "3_300_100_cliqueLeft_withFeedback_3"],
    4: ["This was the triangle that contained the trial.<br> Press space to see the feedback for your response.", "4_300_100_cliqueLeft_withFeedback_solution"], 
    5: ["ArrowLeft", // correct answer: ArrowLeft
        //PROMPT:
        //correct answer
        "Your answer was <b>correct!</b>, the score has increased and has turned green.<br> Press space to start a new trial.", 
        //wrong answer
        "Your answer was <b>wrong!</b>, the score has not increased and has turned red.<br> Press space to start a new trial.",
        //IMAGE:
        //correct answer
        "5_300_100_cliqueLeft_withFeedback_correctAnswer", 
        //wrong answer
        "5_300_100_cliqueLeft_withFeedback_wrongAnswer",
        ],
    // N300_K75
    6: ["During the real experiment, you will see your score on the top-right, and the moves on the top-left.<br> By pressing space, you use one move.", "6_300_75_cliqueRight_withFeedback_1"],
    7: ["You will have a limited number of moves.<br> Press space again to shuffle the triangles and use another move.", "7_300_75_cliqueRight_withFeedback_2"],
    8: ["To indicate which of the two triangles has the group of tiles,<br> Press the right or left arrow.", "8_300_75_cliqueRight_withFeedback_3"],
    9: ["This was the triangle that contained the trial.<br> Press space to see the feedback for your response.", "9_300_75_cliqueRight_withFeedback_solution"], 
    10: ["ArrowRight", // correct answer: ArrowRight
        //PROMPT:
        //correct answer
        "Your answer was <b>correct!</b>, the score has increased and has turned green.<br> Press space to end the training phase.", 
        //wrong answer
        "Your answer was <b>wrong!</b>, the score has not increased and has turned red.<br> Press space to end the training phase.",
        //IMAGE:
        //correct answer
        "10_300_75_cliqueRight_withFeedback_correctAnswer", 
        //wrong answer
        "10_300_75_cliqueRight_withFeedback_wrongAnswer",
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