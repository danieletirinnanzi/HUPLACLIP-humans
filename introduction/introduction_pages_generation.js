
const tutorialObject = {
    // THINK ABOUT THE MORE EFFICIENT WAY OF ENCODING IT 
    // - saving images in a folder with names that can be accessed through a for loop)
}


/* FUNCTION TO GENERATE THE INTRODUCTION PAGES ARRAY */
function generateIntroductionPages() {
    /* INPUT: none

    OUTPUT:
    - array of pages that will be shown one after the other
    */ 
    
    // page 1: welcome   
    let page1 = `<font size="+2"><b> Welcome to the experiment. </b></font><br><br>
    Press the buttons below or use the left and right arrow to move across pages. <br><br>
    <i><b>Press right arrow to move on > </b></i>`
    introductionPagesArray.push(page1)

    // page 2: informed consent + aim + privacy
    let page2 = `
    <font size="+2"><b> Informative page and informed consent form to take part in the study: </b></font><br>
    Before freely deciding whether you want to take part in this sudy, CAREFULLY READ this informed consent form and get in touch with the experimenter (<a href="mailto:dtirinna@sissa.it">dtirinna@sissa.it</a>)
    in case you had questions that you think are useful in order to clarify the aims, the modalities of execution of the experiment and its potential risks.
    We would also like to remind you that this is a research project and that your participation is completely voluntary.<br>
    You will have the possibility to withdraw from the experiment at any moment, without having to provide any reason. <br><br>
    <font size="+2"><b> Aim of the study: </b></font><br>
    The aim of the study is to investigate humans' ability of solving certain statistical inference tasks regarding the presence of hidden structures in graphs and matrices.
    <br><br>
    <font size="+2"><b> Privacy: (RISISTEMA!!) </font></b><br>
    All the data collected through your participation and the one of the other volunteers will be stored in the servers of the Neuroscience Department of SISSA (Trieste)
    and in the ones located inside the European Union. Accessing the data will not be possible for unauthorized people.
    Your personal information will be stored separately from the results of the current research, to which they will be associated only through an arbitrary ID.
    Thanks to this anonymization procedure, it will be impossible for any researcher to know which participant produced the data he/she is analyzing.
    Furthermore this procedure will make your identification impossible also in the case in which the results were published on scientific journals, presented in conferences or in any other public event.
    More generally, the collected data will be handled according to the privacy regulation and in compliance with the Decreto Legislativo 30 giugno 2003 n. 196 “Codice in
    materia di protezione dei dati personali” e al Regolamento Europeo 2016/679 (General Data Protection Regulation - GDPR).
    (PEDICE: Il Responsabile della protezione dei dati (RPD) è l'Avv. Valentina Carollo che
    può essere contattato ai seguenti indirizzi email: dpo@sissa.it oppure rpd@sissa.it - PEC: protocollo@pec.sissa.it )
    Before expressing your consent to participate, we remind you again that in case you needed clarifications on any aspect of the current research, the experimenter is fully available to provide it.<br><br>
    Go to the next page to start the tutorial. <br><br>
    <i><b>< Press left arrow to go back <br></b></i>
    <i><b>Press right arrow to go forward > </b></i>
    `
    introductionPagesArray.push(page2)  
    
    // page 3: tutorial   
    let tutorial1 = `<font size="+2"><b> TUTORIAL </b></font><br><br>
    The tutorial will be here <br>
    <img src="tutorial/task_screenshots/1_standard_page_N150_K100.JPG" alt="Girl in a jacket" width="500" height="500"><br><br>
    <i><b>< Press left arrow to go back <br></b></i>
    <i><b>Press right arrow to go forward ></b></i>
    `
    introductionPagesArray.push(tutorial1)    
    

    // GENERATE STRINGS FOR TUTORIAL with formatted string (keep buttons "left/right arrow press" below):
    // Possibility:
    // - create object outside function with arrays inside (element 0: instruction text; element 1: corresponding instruction image)


    /*
    TUTORIAL STRUCTURE:
    1. Show square chessboard (N<10);
    2. Illustrate swapping (highlight corresponding rows and columns with colors) in square chessboard (repeat 2/3 times (increasing N)):
        - standard chessboard,
        - highlighted rows and columns,
        - modified chessboard,
        - visual comparison of standard / highlighted / modified chessboards next to each other;
    3. Depict passage from square to triangular chessboard (opacity on half of the chessboard -> triangular version. Do it for all 3 versions (6 - 10 - 16 nodes) );
    4. Illustrate swapping in triangular chessboard (same as point 2. Same N and same visualizations/repetitions);
    5. 45 degree rotation of triangular chessboard (as in scribble at the top of page 3. Repeat for all different values of N):
        - vertical triangular standard chessboards (left/right)
        - highlighted vertical triangular chessboards (left/right)
        - swapped triangular vertical chessboard (left + right) 
    6. Illustrate idea of clique in (vertical) triangular (left/right, change) chessboard with color coding (repeat increasing N, gradually >10) (as in scribble in the middle of page 3):
        - single triangular chessboard with clique "clustered" and with different color,
        - spreading the clique in the chessboard,
        - visual comparison of "clustered" and randomized version (maintaining color coding),
    7. Show "paired" stimuli like in task (one with clique, one without) maintaining color coding (repeat 2/3 times, increasing difficulty (increasing N & decreasing K) ). Introduce with: "In the task, you will see two triangular chessboards next to each other, like this: ". Also underline which is the correct answer (change color of clique) and what happens if one presses the spacebar ( = 1 "move") in this version (maintaining color coding);
    8. Show "paired" stimuli like in task (one with clique, one without) in B/W. Same as point 6., so both underlining correct answer (make it "appear" in the graph with the clique to show that it was the correct one, like in Francesco's task) and effect of spacebar press.
    9. Final familiarization with moves and responses (give feedback after every trial completed, by coloring the clique in the correct stimulus): perform final simulation before starting the experiment OR trash the first 2/3 trials of experiment.
    */


    return introductionPagesArray
    
}
