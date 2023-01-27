/* INTRODUCTION PAGES GENERATION */ 

    // POSSIBLE IMPROVEMENT: 
    // STORE INFORMED CONSENT AS .txt AND READ IT HERE AUTOMATICALLY ( FileReader() -> https://javascript.info/file )


    function generateIntroductionPages() {
        /* INPUT: none

        OUTPUT:
        - array of pages that will be shown one after the other
        */ 

        //INFORMED CONSENT:
        let introductionPagesArray = []

        // page 1: welcome    
        let page1 = `<b>Welcome to the experiment.</b><br>
        Move to the next page to read the informed consent <br>`
        introductionPagesArray.push(page1)

        // page 2: informed consent 1 (intro)
        let page2 = `<strong>Informative page and informed consent form to take part in the study:</strong><br>
        Before freely deciding whether you want to take part in this sudy, CAREFULLY READ this informed consent form and get in touch with the experimenter (TELEPHONE NUMBER / EMAIL??)
        in case you had questions that you think are useful in order to clarify the aims, the modalities of execution of the experiment and its potential risks.
        We would also like to remind you that this is a research project and that your participation is completely voluntary.<br>
        You will have the possibility to withdraw from the experiment at any moment, without having to provide any reason. <br><br>`
        introductionPagesArray.push(page2)    
        
        // page 3: informed consent 2 (aim + payment)
        let page3 = `<strong>Aim of the study:</strong> <br>
        The aim of the study is to investigate humans' ability of solving certain statistical inference tasks regarding the presence of hidden structures in graphs and matrices.
        <br><br>
        <strong> Payment:</strong><br>
        You will receive $5 through the platform Prolific. This is to reward you for the time you spent doing the task. <br><br>`
        introductionPagesArray.push(page3)    

        // page 4: informed consent 3 (description + image)
        let page4 = `<strong>Description of the experimental procedure:</strong><br>
        In this experiment you will have to choose between two alternatives that will be shown to you. On the screen of your computer you will visualize two triangles made of black and white tiles, similar to the ones of a chessboard , like the ones you are seeing below.
        By pressing the spacebar, you will be able to visualize the same two triangles but in a different way. This modification may help you in making a choice (this operation will be better explained in a tutorial preceeding the start of the real experiment).<br>
        Your goal is to guess in which one of the two visualized triangles it is possible to isolate a subset of tiles that are completely black. For each couple of triangles, this operation is possible only for one of the two triangles. Your task is to guess which one of the two triangles has this property.<br>
        For example, in the two triangles below, the left one is triangle that has this property.
        The experiment will last approximately 30 minutes. <br><br>     
        <img src="instructions/images/instruction_image_N150_K100.jpg" </img>
        <br><br>`
        introductionPagesArray.push(page4)

        // page 5: informed consent 4 (privacy)
        let page5 = `<strong>Privacy:</strong><br>
        All the data collected through your participation and the one of the other volunteers will be stored in the servers of the Neuroscience Department of SISSA (Trieste)
        and in the ones located inside the European Union. Accessing the data will not be possible for unauthorized people.
        Your personal information will be stored separately from the results of the current research, to which they will be associated only through an arbitrary ID.
        Thanks to this anonymization procedure, it will be impossible for any researcher to know which participant produced the data he/she is analyzing.
        Furthermore this procedure will make your identification impossible also in the case in which the results were published on scientific journals, presented in conferences or in any other public event.
        More generally, the collected data will be handled according to the privacy regulation and in compliance with the Decreto Legislativo 30 giugno 2003 n. 196 “Codice in
        materia di protezione dei dati personali” e al Regolamento Europeo 2016/679 (General Data Protection Regulation - GDPR).
        (PEDICE: Il Responsabile della protezione dei dati (RPD) è l'Avv. Valentina Carollo che
        può essere contattato ai seguenti indirizzi email: dpo@sissa.it oppure rpd@sissa.it - PEC: protocollo@pec.sissa.it )
        Before expressing your consent to participate, we remind you again that in case you needed clarifications on any aspect of the current research, the experimenter is fully available to provide it.<br><br>`
        introductionPagesArray.push(page5)    
            
        // page 5 (MAKE "Start" BUTTON RATHER THAN "Next"???):   
        let page6 = `By clicking the <strong>"Next"</strong> button and moving on with the procedure you are expressing your consent in taking part in the study, and you confirm to:
        <br>
        - have carefully read the explanations regarding this study and the full experimental procedure;
        <br>
        - have been informed regarding the scope and aims of the present research;
        <br>
        - have had the possibility of asking questions regarding any aspect of the experimental procedure and to have obtained satisfying answers;
        <br>
        - be aware of the possible risks related with the experiment;
        <br>
        - have received satisfying assurance regarding the confidentiality of the information collected through the testing of your data;
        <br>
        - be aware that you can withdraw in any phase of the study.<br><br>`
        introductionPagesArray.push(page6)

        //TUTORIAL?

            return introductionPagesArray
        
    }
