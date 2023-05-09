/* INSTRUCTIONS */
// OBJECT THAT CONTAINS INSTRUCTIONS TEXT AND RELATIVE IMAGES:
const instructionsObject = {
    // checkerboard familiarization
    1: ["Imagine you have a black and white checkerboard.", "01_square_chessboard_N10_1"],
    2: ["Checkerboards come in different sizes.", "02_square_chessboard_N16_1"],
    // switches in 20x20 square
    // first switch:
    3: ["Now let's consider a 20 by 20 checkerboard.", "03_standard_square_chessboard_N20_1"],
    4: ["In this checkerboard, if we switch these rows and columns...", "04_highlighted_square_chessboard_N20_1_firstSwap"],
    5: ["...we obtain a different checkerboard (remember that you can flick through the images using the arrows).", "05_swapped_square_chessboard_N20_1"],
    6: ["Switching the two rows and the two columns transforms the initial checkerboard.", "06_20nodes_square_sidebyside_firstSwap"],
    // second switch:
    7: ["Let's consider again our standard 20x20 checkerboard.", "07_standard_square_chessboard_N20_1"],
    8: ["Now let's switch two different rows and columns...", "08_highlighted_square_chessboard_N20_1_secondSwap"],
    9: ["...we obtain another different checkerboard (remember that you can flick through the images using the arrows).", "09_swapped_square_chessboard_N20_1_secondSwap"],
    10: ["Switching the two rows and the two columns transforms the initial checkerboard.", "10_20nodes_square_sidebyside_secondSwap"],

    // square - triangle transition
    11: ["Until now, we have seen square checkerboards.", "11_standard_square_chessboard_N20_1_without_frame"],
    12: ["But if we cover one part...", "12_masked_triangular_chessboard_N20_1_standard"],
    13: ["..they become triangles, and this is the resulting checkerboard.", "13_solid_triangular_chessboard_N20_1_standard"],
    14: ["Let's see the same thing with a different checkerboard.", "14_swapped_square_chessboard_N20_1_firstSwap_withoutFrame"],
    15: ["Where we cover one part...", "15_masked_triangular_chessboard_N20_1_firstSwap"],
    16: ["...and obtain a triangle.", "16_solid_triangular_chessboard_N20_1_firstSwap"],
    17: ["Let's see one last example.", "17_swapped_square_chessboard_N20_1_secondSwap_withoutFrame"],
    18: ["Where we cover one part of the checkerboard...", "18_masked_triangular_chessboard_N20_1_secondSwap"],
    19: ["...and obtain a triangle.", "19_solid_triangular_chessboard_N20_1_secondSwap"],

    // switches in triangles   
    // first switch 
    20: ["We can also switch rows and columns in triangles.", "20_triangular_chessboard_N20_1_firstSwap"],
    21: ["For example, if we switch these rows and columns...", "21_highlighted_triangular_chessboard_N20_1_firstSwap"],
    22: ["..we obtain a different triangle (remember that you can flick through the images using the arrows).", "22_swapped_triangular_chessboard_N20_1_firstSwap"],
    23: ["Switching the two rows and columns transforms the initial triangle.", "23_20nodes_triangular_firstSwap"],
    // second switch:    
    24: ["Let's consider again the initial triangle.", "24_triangular_chessboard_N20_1_secondSwap"],
    25: ["If we switch two different rows and columns...", "25_highlighted_triangular_chessboard_N20_1_secondSwap"],
    26: ["...we obtain another different triangle (remember that you can flick through the images using the arrows).", "26_swapped_triangular_chessboard_N20_1_secondSwap"],
    27: ["Switching the two rows and columns transforms the initial triangle.", "27_20nodes_triangular_secondSwap"],

    // horizontal - vertical transition 
    // first switch 
    28: ["The same triangle can also be represented vertically.", "28_vertical_standard_triangular_chessboard_N20_1_firstSwap"],
    29: ["We can transform a vertical triangle similarly: if we switch these two rows and columns...", "29_vertical_highlighted_triangular_chessboard_N20_1_firstSwap"],
    30: ["...we obtain a different triangle (remember that you can flick through the images using the arrows).", "30_vertical_swapped_triangular_chessboard_N20_1_firstSwap"],
    31: ["Switching two rows and columns transforms the initial triangle.", "31_20nodes_vertical_firstSwap"],
    // second switch:     
    32: ["Let's consider now a flipped version of the initial vertical triangle.", "32_vertical_standard_triangular_chessboard_N20_1_secondSwap"],
    33: ["Again, if we switch two rows and columns...", "33_vertical_highlighted_triangular_chessboard_N20_1_secondSwap"],
    34: ["...we obtain a different triangle (remember that you can flick through the images using the arrows).", "34_vertical_swapped_triangular_chessboard_N20_1_secondSwap"],
    35: ["Also in this case, switching two rows and columns transforms the initial triangle.", "35_20nodes_vertical_secondSwap"],

    // spreading clique (color coded)    
    // N20_K14 (regular checkerboard - progression)
    36: ["Now let's imagine we have a triangular chessboard where some tiles are colored in red.", "36_N20_K14_regular_1standard"],
    37: ["If we switch two rows and columns as we have seen before, some red tiles change their location in the triangle.", "37_N20_K14_regular_swap1"],
    38: ["If we make another switch, some other tiles change their location in the triangle.", "38_N20_K14_regular_swap2"],
    39: ["With a third switch, they keep moving.", "39_N20_K14_regular_swap3"],
    40: ["If we perform many switches, the red tiles spread inside the triangle, and they look like this.", "40_N20_K14_regular_visualization5_shuffled"],
    41: ["Repeating switches of rows and columns shuffles the initial triangle.<br>A <b>shuffle</b> is the transformation from a standard triangle to its shuffled version, obtained by repeating switches of rows and columns.", "41_N20_K14_progression"],
    // N20_K14 (irregular chessboard)
    42: ["It is also possible to shuffle triangles where the black and white tiles are not regular.", "42_N20_K14_irregular_standard"],
    43: ["This is how a shuffle of the previous triangle looks like (remember that you can flick through the images using the arrows).", "43_N20_K14_irregular_shuffled"],
    44: ["Also in this case, a <b>shuffle</b> is the transformation from an ordered triangle (left) to an unordered one (right), obtained by repeating switches of rows and columns.", "44_N20_K14_sidebyside"],
    // N80_K30
    45: ["Let's see an example of a <b>shuffle</b> in a triangle that has more tiles.", "45_N80_K30_grouped"],
    46: ["This is how a shuffle of the previous triangle looks like (remember that you can flick through the images using the arrows).", "46_N80_K30_shuffled"],
    47: ["Again, a <b>shuffle</b> is the transformation from an ordered triangle (left) to an unordered one (right), as shown before.", "47_N80_K30_sidebyside"],
    // N160_K70
    48: ["Let's see an example of a <b>shuffle</b> in a triangle having even more tiles.", "48_N160_K70_grouped"],
    49: ["This is how a shuffle of the previous triangle looks like (remember that you can flick through the images using the arrows).", "49_N160_K70_shuffled"],
    50: ["Again, a <b>shuffle</b> is the transformation from an ordered triangle (left) to an unordered one (right), as shown before.", "50_N160_K70_sidebyside"],
    // N300_K120
    51: ["Let's see one last example of a <b>shuffle</b> in a triangle having even more tiles. Triangles in the experiment will look like this.", "51_N300_K120_grouped"],
    52: ["This is how a shuffle of the previous triangle looks like (remember that you can flick through the images using the arrows).", "52_N300_K120_shuffled"],
    53: ["Again, a <b>shuffle</b> is the transformation from an ordered triangle (left) to an unordered one (right), as shown before.", "53_N300_K120_sidebyside"],
    // single - paired stimuli transition (N=300):
    // N300_K160
    54: ["During the experiment, you will see two triangles next to each other:<br>one on the <b>left</b>...", "54_N300_K160_grouped_red_1"],
    55: ["...and one on the <b>right</b>.<br>One of the triangles contains some red tiles: in this case, the <b>left</b> one does.", "55_N300_K160_grouped_red"],
    56: ["Let's <b>shuffle</b> both triangles: <br>as we have seen before, the red tiles spread inside the left one.", "56_N300_K160_shuffled_red"],
    57: ["Now let's change the color of the <b>red tiles to black</b>: this is what you will see during the experiment.<br>Your task is to indicate which of the two triangles contained a group of red tiles before the shuffle and the color change.", "57_N300_K160_shuffled_black"],
    58: ["In this case, the correct answer is <b>left</b>. <br>Move on to see another example.", "58_N300_K160_correct_response"],
    // N300_K110    
    59: ["During the experiment, you will see two triangles:<br>one on the <b>left</b>...", "59_N300_K110_grouped_red_1"],
    60: ["...and one on the <b>right</b>.<br>In this case, the <b>right</b> triangle contains the red tiles, while the left one does not.", "60_N300_K110_grouped_red"],
    61: ["As we did before, let's <b>shuffle</b> the two triangles: <br> the red tiles spread inside the right one.", "61_N300_K110_shuffled_red"],
    62: ["If we now turn the <b>red tiles to black</b>, we see the stimuli as they will appear during the experiment.<br>Which of the two triangles contained the group of red tiles before the shuffle and the color change?", "62_N300_K110_shuffled_black"],
    63: ["In this case, the right one did, so the correct answer is <b>right</b>. <br> Move on to end the instructions phase: if you do so, <b>it will not be possible to go back to the instructions</b>.", "63_N300_K110_correct_response"],
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
    <img src="tutorial/instructions_images/${instructionsObject[0 + 1][1]}.PNG" alt="Could not upload image" height="${currentExperiment.canvasDimensions[0] / 2}"><br><br>
    ${instructionsObject[0 + 1][0]}<br><br>
    <i><b>Press right arrow to go forward ></b></i>
    `
    instructionsPagesArray.push(firstHTML)

    // from second instruction page on (adding max-width property to avoid large images to exit the screen):
    for (let index = 1; index < Object.keys(instructionsObject).length; index++) {
        let singleHTML = `<font size="+2"><b> INSTRUCTIONS </b></font><br><br>
        <img src="tutorial/instructions_images/${instructionsObject[index + 1][1]}.PNG" alt="Could not upload image" max-width: "${currentExperiment.canvasDimensions[1]}" height="${currentExperiment.canvasDimensions[0] / 2}" ><br><br>
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
    1: ["Try to identify which triangle had the group of red tiles. <br> Press <b>space</b> to <b>shuffle</b> the triangles: this will help you in identifying which is the correct triangle. ", "01_N300_K170_cliqueRight_question1"],
    2: ["To <b>shuffle</b> the triangles again,<br> Press <b>space</b>.", "02_N300_K170_cliqueRight_question2"],
    3: ["To indicate which of the two triangles had the group of red tiles,<br> Press the <b>left</b> or <b>right</b> arrow.", "03_N300_K170_cliqueRight_question3"],
    4: ["ArrowRight", "<b>Correct!</b> <br>Press <b>space</b> to move to the next example.", "<b>Wrong!</b> The triangle was the <b>right</b> one.<br>Press <b>space</b> to move to the next example.", "04_N300_K170_cliqueRight_solution"], // correct answer: ArrowRight
    // N300_K120
    5: ["Try to identify which triangle had the group of tiles in this other example.<br> Press <b>space</b> to shuffle the triangles.", "05_N300_K120_cliqueRight_question1"],
    6: ["To <b>shuffle</b> the triangles again,<br> Press <b>space</b>.", "06_N300_K120_cliqueRight_question2"],
    7: ["To indicate which of the two triangles had the group of red tiles,<br> Press the <b>left</b> or <b>right</b> arrow.", "07_N300_K120_cliqueRight_question3"],
    8: ["ArrowRight", "<b>Correct!</b> <br>Press <b>space</b> to move to the next example.", "<b>Wrong!</b> The triangle was the <b>right</b> one.<br>Press <b>space</b> to move to the next example.", "08_N300_K120_cliqueRight_solution"], // correct answer: ArrowRight
    // N300_K90
    9: ["Try to identify which triangle had the group of tiles in this other example.<br> Press <b>space</b> to shuffle the triangles.", "09_N300_K90_cliqueLeft_question1"],
    10: ["To <b>shuffle</b> the triangles again,<br> Press <b>space</b>.", "10_N300_K90_cliqueLeft_question2"],
    11: ["To indicate which of the two triangles had the group of red tiles,<br> Press the <b>left</b> or <b>right</b> arrow.", "11_N300_K90_cliqueLeft_question3"],
    12: ["ArrowLeft", "<b>Correct!</b> <br>Press <b>space</b> to move to the next example.", "<b>Wrong!</b> The triangle was the <b>left</b> one.<br>Press <b>space</b> to move to the next example.", "12_N300_K90_cliqueLeft_solution"], // correct answer: ArrowLeft
    // N300_K140
    13: ["Try to identify which triangle had the group of tiles in this other example.<br> Press <b>space</b> to shuffle the triangles.", "13_N300_K140_cliqueLeft_question1"],
    14: ["To <b>shuffle</b> the triangles again,<br> Press <b>space</b>.", "14_N300_K140_cliqueLeft_question2"],
    15: ["To indicate which of the two triangles had the group of red tiles,<br> Press the <b>left</b> or <b>right</b> arrow.", "15_N300_K140_cliqueLeft_question3"],
    16: ["ArrowLeft", "<b>Correct!</b> <br>Press <b>space</b> to move to the next example.", "<b>Wrong!</b> The triangle was the <b>left</b> one.<br>Press <b>space</b> to move to the next example.", "16_N300_K140_cliqueLeft_solution"], // correct answer: ArrowLeft
    // N300_K70
    17: ["This is a <b>more difficult</b> example: try to identify which triangle had the group of tiles.<br> Press <b>space</b> to shuffle the triangles.", "17_N300_K70_cliqueRight_question1"],
    18: ["To <b>shuffle</b> the triangles again,<br> Press <b>space</b>.", "18_N300_K70_cliqueRight_question2"],
    19: ["To indicate which of the two triangles had the group of red tiles,<br> Press the <b>left</b> or <b>right</b> arrow.", "19_N300_K70_cliqueRight_question3"],
    20: ["ArrowRight", "<b>Correct!</b> <br>Press <b>space</b> to see the last example.", "<b>Wrong!</b> The triangle was the <b>right</b> one.<br>Press <b>space</b> to see the last example.", "20_N300_K70_cliqueRight_solution"], // correct answer: ArrowRight
    // N300_K100
    21: ["Let's see an easier example.<br> Press <b>space</b> to shuffle the triangles.", "21_N300_K100_cliqueLeft_question1"],
    22: ["To <b>shuffle</b> the triangles again,<br> Press <b>space</b>.", "22_N300_K100_cliqueLeft_question2"],
    23: ["To indicate which of the two triangles had the group of red tiles,<br> Press the <b>left</b> or <b>right</b> arrow.", "23_N300_K100_cliqueLeft_question3"],
    24: ["ArrowLeft", "<b>Correct!</b> <br>Press <b>space</b> to move to the next phase.", "<b>Wrong!</b> The triangle was the <b>left</b> one.<br>Press <b>space</b> to move to the next phase.", "24_N300_K100_cliqueLeft_solution"], // correct answer: ArrowLeft    
}


// PART 2: with background information
let taskFamiliarizationObject_part2 = {
    /* 
    In every group of four images:
    1: visualization trial n. 1 (image: 2 moves left; orange score)
    2: visualization trial n. 2 (image: 1 moves left; orange score)
    3: choice trial (image: no moves left; orange score)
    4: feedback trial (image: 0 moves left; red/green score)
    */

    // with background information
    // N300_K120
    1: ["During the real experiment, you will see: the remaining <b>shuffles</b> on the top-left; the <b>trial counter</b> and your <b>score</b> on the top-right.<br> By pressing <b>space</b>, you use one shuffle.", "01_300_120_cliqueLeft_withFeedback_1"],
    2: ["<b>Shuffles</b> will help you in the task, but will be limited. When you run out of them, you will be forced to give an answer.<br> Press <b>space</b> again to use the last shuffle of the trial.", "02_300_120_cliqueLeft_withFeedback_2"],
    3: ["To indicate which of the triangles had the group of tiles,<br> Press the <b>left</b> or <b>right</b> arrow.", "03_300_120_cliqueLeft_withFeedback_3"],
    4: ["ArrowLeft", // correct answer: ArrowLeft
        //PROMPT:
        //correct answer
        "As you can see, the <b>left</b> triangle contained the red tiles. When your answer is <b>correct</b>, the score increases and turns green.<br> Press <b>space</b> to start a new example.",
        //wrong answer
        "As you can see, the <b>left</b> triangle contained the red tiles. When your answer is <b>wrong</b>, the score does not increase and turns red.<br> Press <b>space</b> to start a new example.",
        //IMAGE:
        //correct answer
        "04_300_120_cliqueLeft_withFeedback_correct",
        //wrong answer
        "04_300_120_cliqueLeft_withFeedback_wrong",
    ],
    // N300_K95
    5: ["Let's re-set the remaining <b>shuffles</b> and the <b>score</b> to their initial values and colors.<br> As we said, by pressing <b>space</b>, you use one shuffle.", "05_300_95_cliqueRight_withFeedback_1"],
    6: ["Now you only have <b>2 shuffles per trial</b>, but in the real experiment you will have <b>10</b>.<br> Press <b>space</b> again to use the last shuffle of the trial.", "06_300_95_cliqueRight_withFeedback_2"],
    7: ["When you have taken a decision, indicate which triangle contained the red tiles.<br> Press the <b>left</b> or <b>right</b> arrow to do so.", "07_300_95_cliqueRight_withFeedback_3"],
    8: ["ArrowRight", // correct answer: ArrowRight
        //PROMPT:
        //correct answer
        "In this case, the <b>right</b> triangle contained the red tiles. When your answer is <b>correct</b>, the score increases and turns green.<br> Press <b>space</b> to start the last example.",
        //wrong answer
        "In this case, the <b>right</b> triangle contained the red tiles. When your answer is <b>wrong</b>, the score does not increase turns red.<br> Press <b>space</b> to start the last example.",
        //IMAGE:
        //correct answer
        "08_300_95_cliqueRight_withFeedback_correct",
        //wrong answer
        "08_300_95_cliqueRight_withFeedback_wrong",
    ],
    // N300_K100
    9: ["This is the last example. Same as before: <b>shuffles</b> on the top left, <b>trial counter</b> and <b>score</b> on the top right.<br> Press <b>space</b> to use one shuffle.", "09_300_100_cliqueLeft_withFeedback_1"],
    10: ["As you <b>shuffle</b> the triangles, try to identify which one had the group of red tiles.<br> Press <b>space</b> again to use the last shuffle of the trial.", "10_300_100_cliqueLeft_withFeedback_2"],
    11: ["When you are ready to indicate which of the triangles had the group of tiles,<br> Press the <b>left</b> or <b>right</b> arrow.", "11_300_100_cliqueLeft_withFeedback_3"],
    12: ["ArrowLeft", // correct answer: ArrowLeft
        //PROMPT:
        //correct answer
        "In this case, the <b>left</b> triangle contained the red tiles. When your answer is <b>correct</b>, the score increases and turns green.<br> Press <b>space</b> to end the trial run of the experiment.",
        //wrong answer
        "In this case, the <b>left</b> triangle contained the red tiles. When your answer is <b>wrong</b>, the score does not increase and turns red.<br> Press <b>space</b> to end the trial run of the experiment.",
        //IMAGE:
        //correct answer
        "12_300_100_cliqueLeft_withFeedback_correct",
        //wrong answer
        "12_300_100_cliqueLeft_withFeedback_wrong",
    ]
}


// FUNCTION THAT GENERATES THE FAMILIARIZATION TRIALS FOR PART 1 AND PART 2 (all except feedback trial, added from main)
function generateBlockOfFamiliarizationTrials(part, index, taskFamiliarizationObject) {
    /* INPUT:
    - part: identifies if the familiarization trials are produced for part 1 or 2
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
        stimulus_height: currentExperiment.canvasDimensions[0] / 1.6,
    };
    currentBlockOfTrialsArray.push(visualization_1_trial)

    let visualization_2_trial = {
        type: jsPsychImageKeyboardResponse,
        stimulus: `tutorial/task_familiarization_images/part ${part}/${taskFamiliarizationObject[index + 2][1]}.PNG`,
        prompt: `<br><br><br> ${taskFamiliarizationObject[index + 2][0]}`,
        choices: [' '],
        stimulus_height: currentExperiment.canvasDimensions[0] / 1.6,
    };
    currentBlockOfTrialsArray.push(visualization_2_trial)

    let choice_trial = {
        type: jsPsychImageKeyboardResponse,
        stimulus: `tutorial/task_familiarization_images/part ${part}/${taskFamiliarizationObject[index + 3][1]}.PNG`,
        prompt: `<br><br><br> ${taskFamiliarizationObject[index + 3][0]}`,
        choices: ['ArrowLeft', 'ArrowRight'],
        stimulus_height: currentExperiment.canvasDimensions[0] / 1.6,
    };
    currentBlockOfTrialsArray.push(choice_trial)

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