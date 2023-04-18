/* FUNCTION TO GENERATE THE INTRODUCTION PAGES ARRAY */
function generateIntroductionPages() {
    /* INPUT: none

    OUTPUT:
    - array of pages that will be shown one after the other
    */

    let introductionPagesArray = []

    // page 1: welcome   
    let page1 = `<font size="+2"><b> Welcome to the experiment. </b></font><br><br>
    Use the <b>left</b> and <b>right</b> arrow to move across pages. <br><br>
    <i><b>Press right arrow to go forward > </b></i>`
    introductionPagesArray.push(page1)

    // page 2: informed consent + aim + privacy
    let page2 = `
    <b> Informative page and informed consent form to take part in the study: </b><br>
    <font size="-0.5">During the experiment, you will see images containing two stimuli, and you will have to choose one of them. In the following pages you will receive indications on how to make a choice.
    The experiment will approximately last 30 minutes.<br>
    Before freely deciding whether you want to take part in the sudy, CAREFULLY READ this informed consent form and get in touch with the experimenter 
    (<a href="mailto:dtirinna@sissa.it">dtirinna@sissa.it</a>) in case you had questions regarding the aims, the modalities of execution of the experiment and its potential risks.
    We would also like to remind you that this is a research project and that your participation is completely voluntary. You have the possibility to withdraw from the experiment at any moment, without having to provide any explanation.</font><br><br>
    <b> Aim of the study: </b><br>
    <font size="-0.5"> The aim of the study is to investigate humans' ability of solving statistical inference tasks regarding the presence of hidden structures in graphs and matrices.</font>
    <br><br>
    <b> Privacy:</b><br>
    <font size="-0.5">All the data collected through your participation and the one of the other volunteers will be stored in the servers of the Neuroscience Department of SISSA (Trieste)
    and in the ones located inside the European Union. Accessing the data will not be possible for unauthorized people.
    Your personal information will be stored separately from the results of the current research, to which they will be associated only through an arbitrary ID.
    Thanks to this anonymization procedure, it will be impossible for any researcher to know which participant produced the analyzed data.
    Furthermore, this procedure will make your identification impossible also in the case in which results were published on scientific journals, presented in conferences or in any other public event.
    More generally, the data will be handled according to the national privacy regulation (Decreto Legislativo 30 giugno 2003 n. 196 'Codice in
    materia di protezione dei dati personali') and the European General Data Protection Regulation (2016/679 - GDPR).The person responsible for Data Protection is lwy. Valentina Carollo ( <a href="mailto:dpo@sissa.it">dpo@sissa.it</a> or <a href="rpd@sissa.it">rpd@sissa.it</a>. PEC: <a href="protocollo@pec.sissa.it">protocollo@pec.sissa.it</a> )
    Before expressing your consent to participate, we remind you again that in case you needed clarifications on any aspect of the current research, the experimenter is fully available to provide it.<br><br>
    Go to the next page to visualize the <b>instructions</b> for the experiment. </font> <br><br>
    <i><b>< Press left arrow to go back <br></b></i>
    <i><b>Press right arrow to go forward > </b></i>
    `
    introductionPagesArray.push(page2)


    return introductionPagesArray

}
