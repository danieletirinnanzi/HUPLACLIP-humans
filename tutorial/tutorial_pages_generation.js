/* INSTRUCTIONS */
// OBJECT THAT CONTAINS INSTRUCTIONS TEXT AND RELATIVE IMAGES:
const instructionsObject = {
    // checkerboard familiarization
    1: ["Imagine you have a black and white checkerboard.", "1_square_chessboard_N10_1"],
    2: ["Checkerboards come in different sizes.", "2_square_chessboard_N16_1"],
    // switches in 20x20 square
    // first switch:
    3: ["Now let's consider a 20 by 20 checkerboard.", "3_standard_square_chessboard_N20_1"],
    4: ["In this checkerboard, if we switch these rows and columns...", "4_highlighted_square_chessboard_N20_1_firstSwap"],
    5: ["...we obtain a different checkerboard (remember that you can move through the images using the arrows).", "5_swapped_square_chessboard_N20_1"],
    6: ["By switching the two rows and the two columns, we transformed the original checkerboard.", "6_20nodes_square_sidebyside_firstSwap"],
    // second switch:
    7: ["Let's consider again our standard 20x20 checkerboard.", "7_standard_square_chessboard_N20_1"],
    8: ["Now let's switch two different rows and columns...", "8_highlighted_square_chessboard_N20_1_secondSwap"],
    9: ["...we obtain another different checkerboard (remember that you can move through the images using the arrows).", "9_swapped_square_chessboard_N20_1_secondSwap"],
    10: ["By switching the two rows and the two columns, we have transformed the original checkerboard.", "10_20nodes_square_sidebyside_secondSwap"],

    // square - triangle transition
    11: ["Until now, we have seen square checkerboards.", "11_standard_square_chessboard_N20_1_without_frame"],
    12: ["But if we cover one half, they become triangles.", "12_masked_triangular_chessboard_N20_1_standard"],
    13: ["And this is the resulting checkerboard.", "13_solid_triangular_chessboard_N20_1_standard"],
    14: ["Let's see the same thing with a different checkerboard.", "14_swapped_square_chessboard_N20_1_firstSwap_withoutFrame"],
    15: ["By covering one half.", "15_masked_triangular_chessboard_N20_1_firstSwap"],
    16: ["And obtaining a triangle", "16_solid_triangular_chessboard_N20_1_firstSwap"],
    17: ["Let's see one last example.", "17_swapped_square_chessboard_N20_1_secondSwap_withoutFrame"],
    18: ["Where we cover one half of the checkerboard.", "18_masked_triangular_chessboard_N20_1_secondSwap"],
    19: ["And obtain a triangle.", "19_solid_triangular_chessboard_N20_1_secondSwap"],

    // switches in triangles   
    // first switch 
    20: ["We can also switch rows and columns in triangles.", "20_triangular_chessboard_N20_1_firstSwap"],
    21: ["For example, if we switch these rows and columns...", "21_highlighted_triangular_chessboard_N20_1_firstSwap"],
    22: ["..we obtain a different triangle (remember that you can move through the images using the arrows).", "22_swapped_triangular_chessboard_N20_1_firstSwap"],
    23: ["By switching the two rows and columns, we transformed the original triangle.", "23_20nodes_triangular_firstSwap"],
    // second switch:    
    24: ["Let's consider again the initial triangle.", "24_triangular_chessboard_N20_1_secondSwap"],
    25: ["If we switch two different rows and columns...", "25_highlighted_triangular_chessboard_N20_1_secondSwap"],
    26: ["...we obtain another different triangle (remember that you can move through the images using the arrows).", "26_swapped_triangular_chessboard_N20_1_secondSwap"],
    27: ["By switching the two rows and columns, we transformed the original triangle.", "27_20nodes_triangular_secondSwap"],

    // horizontal - vertical transition 
    // first switch 
    28: ["The same triangle can also be represented vertically.", "28_vertical_standard_triangular_chessboard_N20_1_firstSwap"],
    29: ["We can transform a vertical triangle similarly: by switching rows and columns...", "29_vertical_highlighted_triangular_chessboard_N20_1_firstSwap"],
    30: ["...we obtain a different triangle (remember that you can move through the images using the arrows).", "30_vertical_swapped_triangular_chessboard_N20_1_firstSwap"],
    31: ["Switching two rows and columns transformed the original triangle.", "31_20nodes_vertical_firstSwap"],
    // second switch:     
    32: ["Let's consider again the initial vertical triangle.", "32_vertical_standard_triangular_chessboard_N20_1_secondSwap"],
    33: ["If we switch two different rows and columns...", "33_vertical_highlighted_triangular_chessboard_N20_1_secondSwap"],
    34: ["...we obtain another different triangle (remember that you can move through the images using the arrows).", "34_vertical_swapped_triangular_chessboard_N20_1_secondSwap"],
    35: ["Also in this case, switching two rows and columns transformed the original triangle.", "35_20nodes_vertical_secondSwap"],

    // spreading clique (color coded)    
    // N20_K14 (regular chessboard - progression)
    36: ["Now imagine you have a triangular chessboard where some tiles are colored in red.", "36_N20_K14_regular_1standard"],
    37: ["If you switch two rows and columns as we have seen before, some red tiles change their location in the triangle.", "37_N20_K14_regular_swap1"],
    38: ["If you make another single switch, some other tiles change their location in the triangle.", "38_N20_K14_regular_swap2"],
    39: ["With a third switch, they keep moving.", "39_N20_K14_regular_swap3"],
    40: ["With many single switches, the red tiles spread inside the triangle, and they look like this.", "40_N20_K14_regular_visualization5_shuffled"],
    41: ["Repeating single switches of rows and columns shuffles the original triangle.<br>A <b>shuffle</b> is the transformation from a standard triangle to its shuffled version.", "41_N20_K14_progression"],
    // N20_K14 (irregular chessboard)
    42: ["It is also possible to shuffle triangles where the black and white tiles are not regular.", "42_N20_K14_irregular_standard"],
    43: ["This is how a shuffle of the previous triangle looks like (remember that you can move through the images using the arrows).", "43_N20_K14_irregular_shuffled"],
    44: ["A <b>shuffle</b> is the transformation from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "44_N20_K14_sidebyside"],
    // N40_K24
    45: ["It is also possible to shuffle bigger triangles. Let's see some examples.", "45_N40_K24_grouped"],
    46: ["This is how a shuffle of the previous triangle looks like (remember that you can move through the images using the arrows).", "46_N40_K24_shuffled"],
    47: ["A <b>shuffle</b> is the transformation from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "47_N40_K24_sidebyside"],
    // N80_K30
    48: ["Let's see an example of a shuffle in a bigger triangle.", "48_N80_K30_grouped"],
    49: ["This is how a shuffle of the previous triangle looks like (remember that you can move through the images using the arrows).", "49_N80_K30_shuffled"],
    50: ["A <b>shuffle</b> is the transformation from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "50_N80_K30_sidebyside"],
    // N160_K70
    51: ["Let's see an example of a shuffle in an even bigger triangle.", "51_N160_K70_grouped"],
    52: ["This is how a shuffle of the previous triangle looks like (remember that you can move through the images using the arrows).", "52_N160_K70_shuffled"],
    53: ["A <b>shuffle</b> is the transformation from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "53_N160_K70_sidebyside"],
    // N300_K120
    54: ["Let's see an example of a shuffle in an even bigger triangle: you will not see bigger triangles than this.", "54_N300_K120_grouped"],
    55: ["This is how a shuffle of the previous triangle looks like (remember that you can move through the images using the arrows).", "55_N300_K120_shuffled"],
    56: ["A <b>shuffle</b> is the transformation from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "56_N300_K120_sidebyside"],
    // N300_K100
    57: ["Let's see one last example of a shuffle in a different triangle.", "57_N300_K100_grouped"],
    58: ["This is how a shuffle of the previous triangle looks like (remember that you can move through the images using the arrows).", "58_N300_K100_shuffled"],
    59: ["A <b>shuffle</b> is the transformation from an ordered triangle (left) to an unordered one (right), obtained by repeating single switches of rows and columns.", "59_N300_K100_sidebyside"],

    // single - paired stimuli transition (N=300):
    // N300_K160
    60: ["During the experiment, you will see two triangles next to each other: one on the <b>left</b>...", "60_N300_K160_grouped_red_1"],
    61: ["...and one on the <b>right</b>.", "61_N300_K160_grouped_red_2"],
    62: ["As you can see, one of the triangles contains some red tiles: in this case, the <b>left</b> one does.", "62_N300_K160_grouped_red"],
    63: ["Let's <b>shuffle</b> both triangles: <br>as we have seen before, the red tiles spread inside the left triangle.", "63_N300_K160_shuffled_red"],
    64: ["Now let's change the color of the <b>red tiles to black</b>: this is what you will see during the experiment.<br>Your task is to indicate which of the two triangles contained a group of red tiles before the shuffle and the color change.", "64_N300_K160_shuffled_black"],
    65: ["In this case, the correct answer is <b>left</b>. <br>Move on to see another example.", "65_N300_K160_correct_response"],
    // N300_K110
    66: ["During the experiment, you will see two triangles: one on the <b>left</b>...", "66_N300_K110_grouped_red_1"],
    67: ["...and one on the <b>right</b>.", "67_N300_K110_grouped_red_2"],
    68: ["In this case, the <b>right</b> triangle contains the red tiles, while the left one does not.", "68_N300_K110_grouped_red"],
    69: ["As we did before, let's <b>shuffle</b> the two triangles: <br> the red tiles spread inside the right one.", "69_N300_K110_shuffled_red"],
    70: ["If we now turn the <b>red tiles to black</b>, we see the stimuli as they will appear during the experiment.<br>Which of the two triangles contained the group of red tiles before the shuffle and the color change?", "70_N300_K110_shuffled_black"],
    71: ["In this case, the right one did, so the correct answer is <b>right</b>. <br> Move on to end the instruction phase.", "71_N300_K110_correct_response"],
}


/* FUNCTION TO GENERATE THE INTRODUCTION PAGES ARRAY */
function generateInstructionsPages() {
    /* INPUT: none ("instructionsObject" is global)

    OUTPUT:
    - array of instructions pages that will be shown one after the other
    */

    let instructionsPagesArray = []

    // first instruction page (index = 0): no 'press left arrow to go back' button
    let firstHTML = `<font size="+2"><b> INSTRUCTIONS </b></font><br><br>
    <img src="tutorial/instructions_images/${instructionsObject[0 + 1][1]}.PNG" alt="Could not upload image" height="600"><br><br>
    ${instructionsObject[0 + 1][0]}<br><br>
    <i><b>Press right arrow to go forward ></b></i>
    `
    instructionsPagesArray.push(firstHTML)

    // from second instruction page on:
    for (let index = 1; index < Object.keys(instructionsObject).length; index++) {
        let singleHTML = `<font size="+2"><b> INSTRUCTIONS </b></font><br><br>
        <img src="tutorial/instructions_images/${instructionsObject[index + 1][1]}.PNG" alt="Could not upload image" height="600"><br><br>
        ${instructionsObject[index + 1][0]}<br><br>
        <i><b>< Press left arrow to go back <br></b></i>
        <i><b>Press right arrow to go forward ></b></i>
        `
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
    // N300_K170
    1: ["Try to identify which triangle had the group of red tiles. <br> Press <b>space</b> to <b>shuffle</b> the triangles: this will help you in identifying which is the correct triangle. ", "1_N300_K170_cliqueRight_question1"],
    2: ["To <b>shuffle</b> the triangles again,<br> Press <b>space</b>.", "2_N300_K170_cliqueRight_question2"],
    3: ["To indicate which of the two triangles had the group of red tiles,<br> Press the <b>right</b> or <b>left</b> arrow.", "3_N300_K170_cliqueRight_question3"],
    4: ["ArrowRight", "<b>Correct!</b> <br>Press <b>space</b> to move to the next example.", "<b>Wrong!</b> The triangle was the <b>right</b> one.<br>Press <b>space</b> to move to the next example.", "4_N300_K170_cliqueRight_solution"], // correct answer: ArrowRight
    // N300_K120
    5: ["Try to identify which triangle had the group of tiles in this other example.<br> Press <b>space</b> to shuffle the triangles.", "5_N300_K120_cliqueRight_question1"],
    6: ["To <b>shuffle</b> the triangles again,<br> Press <b>space</b>.", "6_N300_K120_cliqueRight_question2"],
    7: ["To indicate which of the two triangles had the group of red tiles,<br> Press the <b>right</b> or <b>left</b> arrow.", "7_N300_K120_cliqueRight_question3"],
    8: ["ArrowRight", "<b>Correct!</b> <br>Press <b>space</b> to move to the next example.", "<b>Wrong!</b> The triangle was the <b>right</b> one.<br>Press <b>space</b> to move to the next example.", "8_N300_K120_cliqueRight_solution"], // correct answer: ArrowRight
    // N300_K90
    9: ["Try to identify which triangle had the group of tiles in this other example.<br> Press <b>space</b> to shuffle the triangles.", "9_N300_K90_cliqueLeft_question1"],
    10: ["To <b>shuffle</b> the triangles again,<br> Press <b>space</b>.", "10_N300_K90_cliqueLeft_question2"],
    11: ["To indicate which of the two triangles had the group of red tiles,<br> Press the <b>right</b> or <b>left</b> arrow.", "11_N300_K90_cliqueLeft_question3"],
    12: ["ArrowLeft", "<b>Correct!</b> <br>Press <b>space</b> to move to the next example.", "<b>Wrong!</b> The triangle was the <b>left</b> one.<br>Press <b>space</b> to move to the next example.", "12_N300_K90_cliqueLeft_solution"], // correct answer: ArrowLeft
    // N300_K140
    13: ["Try to identify which triangle had the group of tiles in this other example.<br> Press <b>space</b> to shuffle the triangles.", "13_N300_K140_cliqueLeft_question1"],
    14: ["To <b>shuffle</b> the triangles again,<br> Press <b>space</b>.", "14_N300_K140_cliqueLeft_question2"],
    15: ["To indicate which of the two triangles had the group of red tiles,<br> Press the <b>right</b> or <b>left</b> arrow.", "15_N300_K140_cliqueLeft_question3"],
    16: ["ArrowLeft", "<b>Correct!</b> <br>Press <b>space</b> to move to the next example.", "<b>Wrong!</b> The triangle was the <b>left</b> one.<br>Press <b>space</b> to move to the next example.", "16_N300_K140_cliqueLeft_solution"], // correct answer: ArrowLeft
    // N300_K70
    17: ["Try to identify which triangle had the group of tiles in this difficult example.<br> Press <b>space</b> to shuffle the triangles.", "17_N300_K70_cliqueRight_question1"],
    18: ["To <b>shuffle</b> the triangles again,<br> Press <b>space</b>.", "18_N300_K70_cliqueRight_question2"],
    19: ["To indicate which of the two triangles had the group of red tiles,<br> Press the <b>right</b> or <b>left</b> arrow.", "19_N300_K70_cliqueRight_question3"],
    20: ["ArrowRight", "<b>Correct!</b> <br>Press <b>space</b> to see the last example.", "<b>Wrong!</b> The triangle was the <b>right</b> one.<br>Press <b>space</b> to see the last example.", "20_N300_K70_cliqueRight_solution"], // correct answer: ArrowRight
    // N300_K100
    21: ["Let's see an easier example.<br> Press <b>space</b> to shuffle the triangles.", "21_N300_K100_cliqueLeft_question1"],
    22: ["To <b>shuffle</b> the triangles again,<br> Press <b>space</b>.", "22_N300_K100_cliqueLeft_question2"],
    23: ["To indicate which of the two triangles had the group of red tiles,<br> Press the <b>right</b> or <b>left</b> arrow.", "23_N300_K100_cliqueLeft_question3"],
    24: ["ArrowLeft", "<b>Correct!</b> <br>Press <b>space</b> to move to the next phase.", "<b>Wrong!</b> The triangle was the <b>left</b> one.<br>Press <b>space</b> to move to the next phase.", "24_N300_K100_cliqueLeft_solution"], // correct answer: ArrowLeft    
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
    // N300_K120
    1: ["During the real experiment, you will see the remaining <b>shuffles</b> on the top-left and your <b>score</b> on the top-right.<br> By pressing <b>space</b>, you use one shuffle.", "1_300_120_cliqueLeft_withFeedback_1"],
    2: ["<b>Shuffles</b> will help you in the task, but they will be limited: you have to give an answer before they are over, otherwise you will be penalized.<br> Press <b>space</b> again to use another shuffle", "2_300_120_cliqueLeft_withFeedback_2"],
    3: ["When you are ready to indicate which of the triangles had the group of tiles,<br> Press the <b>right</b> or <b>left</b> arrow.", "3_300_120_cliqueLeft_withFeedback_3"],
    4: ["As you can see, the <b>left</b> triangle contained the red tiles.<br> Press <b>space</b> to see the feedback for your response.", "4_300_120_cliqueLeft_withFeedback_solution"],
    5: ["ArrowLeft", // correct answer: ArrowLeft
        //PROMPT:
        //correct answer
        "Since your answer was <b>correct</b>, the score has increased and has turned green.<br> Press <b>space</b> to try another example.",
        //wrong answer
        "Since your answer was <b>wrong</b>, the score has not increased and has turned red.<br> Press <b>space</b> to try another example.",
        //IMAGE:
        //correct answer
        "5_300_120_cliqueLeft_withFeedback_correctAnswer",
        //wrong answer
        "5_300_120_cliqueLeft_withFeedback_wrongAnswer",
    ],
    // N300_K95
    6: ["Let's re-set the remaining <b>shuffles</b> and the <b>score</b> to their initial values.<br> As we said, by pressing <b>space</b>, you use one shuffle.", "6_300_95_cliqueRight_withFeedback_1"],
    7: ["Now you only have three <b>shuffles</b>, but in the task you will have more.<br> Press <b>space</b> again to use another shuffle", "7_300_95_cliqueRight_withFeedback_2"],
    8: ["When you have taken a decision and before the shuffles are over, indicate which triangle contained the red tiles.<br> Press the <b>right</b> or <b>left</b> arrow to do so.", "8_300_95_cliqueRight_withFeedback_3"],
    9: ["As you can see, the <b>right</b> triangle contained the red tiles.<br> Press <b>space</b> to see the feedback for your response.", "9_300_95_cliqueRight_withFeedback_solution"],
    10: ["ArrowRight", // correct answer: ArrowRight
        //PROMPT:
        //correct answer
        "Since your answer was <b>correct</b>, the score has increased and has turned green.<br> Press <b>space</b> to try one last example.",
        //wrong answer
        "Since your answer was <b>wrong</b>, the score has not increased and has turned red.<br> Press <b>space</b> to try one last example.",
        //IMAGE:
        //correct answer
        "10_300_95_cliqueRight_withFeedback_correctAnswer",
        //wrong answer
        "10_300_95_cliqueRight_withFeedback_wrongAnswer",
    ],
    // N300_K100
    11: ["This is the last example before the real experiment starts. Same as before: <b>shuffles</b> on the top left, score on the top right.<br> Press <b>space</b> to use one shuffle.", "11_300_100_cliqueLeft_withFeedback_1"],
    12: ["As you <b>shuffle</b> the triangles, try to identify which one had the group of red tiles.<br> Press <b>space</b> again to use another shuffle", "12_300_100_cliqueLeft_withFeedback_2"],
    13: ["When you are ready to indicate which of the triangles had the group of tiles,<br> Press the <b>right</b> or the <b>left</b> arrow.", "13_300_100_cliqueLeft_withFeedback_3"],
    14: ["In this case, the <b>left</b> triangle contained the red tiles.<br> Press <b>space</b> to see the feedback for your response.", "14_300_100_cliqueLeft_solution"],
    15: ["ArrowLeft", // correct answer: ArrowLeft
        //PROMPT:
        //correct answer
        "Since your answer was <b>correct</b>, the score has increased and has turned green.<br> Press <b>space</b> to end the trial run of the experiment.",
        //wrong answer
        "Since your answer was <b>wrong</b>, the score has not increased and has turned red.<br> Press <b>space</b> to end the trial run of the experiment.",
        //IMAGE:
        //correct answer
        "15_300_100_cliqueLeft_correctAnswer",
        //wrong answer
        "15_300_100_cliqueLeft_wrongAnswer",
    ]

}


// FUNCTION THAT GENERATES THE FAMILIARIZATION TRIALS FOR PART 1 AND PART 2 (all except feedback trial, added from main)
function generateBlockOfFamiliarizationTrials(part, index, taskFamiliarizationObject) {
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
        stimulus: `tutorial/task_familiarization_images/part ${part}/${taskFamiliarizationObject[index + 1][1]}.PNG`,
        prompt: `<br><br><br> ${taskFamiliarizationObject[index + 1][0]}`,
        choices: [' '],
        stimulus_height: 600,
    };
    currentBlockOfTrialsArray.push(visualization_1_trial)

    let visualization_2_trial = {
        type: jsPsychImageKeyboardResponse,
        stimulus: `tutorial/task_familiarization_images/part ${part}/${taskFamiliarizationObject[index + 2][1]}.PNG`,
        prompt: `<br><br><br> ${taskFamiliarizationObject[index + 2][0]}`,
        choices: [' '],
        stimulus_height: 600,
    };
    currentBlockOfTrialsArray.push(visualization_2_trial)

    let choice_trial = {
        type: jsPsychImageKeyboardResponse,
        stimulus: `tutorial/task_familiarization_images/part ${part}/${taskFamiliarizationObject[index + 3][1]}.PNG`,
        prompt: `<br><br><br> ${taskFamiliarizationObject[index + 3][0]}`,
        choices: ['ArrowLeft', 'ArrowRight'],
        stimulus_height: 600,
    };
    currentBlockOfTrialsArray.push(choice_trial)

    // if function is called for part 2, the solution trial has to be added to the array
    if (part == 2) {
        let solution_trial = {
            type: jsPsychImageKeyboardResponse,
            stimulus: `tutorial/task_familiarization_images/part ${part}/${taskFamiliarizationObject[index + 4][1]}.PNG`,
            prompt: `<br><br><br> ${taskFamiliarizationObject[index + 4][0]}`,
            choices: [' '],
            stimulus_height: 600,
        };
        currentBlockOfTrialsArray.push(solution_trial)
    }
    //returning the array 
    return currentBlockOfTrialsArray
}



/* PRELOADING IMAGES */
// FUNCTION THAT RETURNS AN ARRAY OF ALL THE FILEPATHS OF THE IMAGES (for instructions + task familiarization) -> will be the argument of preload plugin trial
function createArrayOfFilePaths(objectToScan, phaseIndex) {
    /* INPUT:
    - objectToScan: object that contains the filepaths for the images (instructionsObject / taskFamiliarizationObject)
    - phaseIndex: indicates whether the function has been called for instructions (phaseIndex = 0), familiarization 1 (phaseIndex = 1) or familiarization 2 (phaseIndex = 2)

    OUTPUT:
    - filepathsArray: array of filepaths of all the images
    (NB: images are recognized in the object because of the presence of "_" in the file name
    */

    let filepathsArray = []

    for (let index = 1; index <= Object.keys(objectToScan).length; index++) {
        // addressing current line of object
        let currentLineOfObject = objectToScan[index]
        currentLineOfObject.forEach(element => {
            // if element of array is a filepath, creating the correct path for the image and adding it to the array
            if (element.includes("_")) {
                switch (phaseIndex) {
                    case 0:
                        //instructions images
                        filepathsArray.push(`tutorial/instructions_images/${element}.PNG`)
                        break;
                    case 1:
                    case 2:
                        //familiarization 1 / 2
                        filepathsArray.push(`tutorial/task_familiarization_images/part ${phaseIndex}/${element}.PNG`)
                        break;
                }

            }
        });
    }

    return filepathsArray

}