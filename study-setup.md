# Study Setup

## Thesis data (Pilot mode on Pavlovia, no Prolific Integration):
### Message to participants:
"This time you will complete two experiments. If you already did my previous experiment, these two are very similar to the one you performed last time, only the stimuli will be represented differently on the screen, as you will read in the tutorial.
- Open both links with a browser different from Safari.
- Make sure your eyes are not further than 50cm from the screen.
- If you can, raise the volume of your device: the experiment includes audio feedback.
- You can do the experiments in the order that you prefer.
- Remember that there is no time limit for completing each experiment.
- Once you have completed each experiment, please send the output file here.
These are the links to the experiments:
- **First Link**:  
  [https://run.pavlovia.org/danieletirinnanzi/huplaclip_300/?__pilotToken=3c59dc048e8850243be8079a5c74d079&__oauthToken=011d09d12f1b5d96ccba2020a32daad7db375c3b0d11f43c8e3f6fe0e50de3cb](https://run.pavlovia.org/danieletirinnanzi/huplaclip_300/?__pilotToken=3c59dc048e8850243be8079a5c74d079&__oauthToken=011d09d12f1b5d96ccba2020a32daad7db375c3b0d11f43c8e3f6fe0e50de3cb)
- **Second Link**:  
  *(In this experiment, it might take a moment for the stimulus to change once you press a key: please be patient)*  
  [https://run.pavlovia.org/danieletirinnanzi/huplaclip_1000/?__pilotToken=3c59dc048e8850243be8079a5c74d079&__oauthToken=011d09d12f1b5d96ccba2020a32daad7db375c3b0d11f43c8e3f6fe0e50de3cb](https://run.pavlovia.org/danieletirinnanzi/huplaclip_1000/?__pilotToken=3c59dc048e8850243be8079a5c74d079&__oauthToken=011d09d12f1b5d96ccba2020a32daad7db375c3b0d11f43c8e3f6fe0e50de3cb)

In case you encountered any problems or you think you are not seeing the stimuli properly, don't hesitate to tell me!  
Thank you for your time!!"

### NOTE:
The links above are currently not valid.

---
## N-grid Pilot (Running mode on Pavlovia, Prolific integration)

### Study Description
"In this study, we are measuring the sensitivity of humans in **visual regularity detection**. You will be first instructed to recognize a type of visual pattern in a stimulus, and in the task you will indicate which one of two stimuli has this pattern by pressing the left and right arrows.
The study consists of 6 blocks of 30 trials each, and takes around **45 minutes**.
Before starting the experiment, please **ensure you meet these requirements**:
- A **Desktop device** is needed to perform the experiment
- Use **Chrome**, **Firefox** or **Edge** to open the experiment (Safari is not supported);
- From the browser settings, make sure your **browser's zoom is set to 100%**;
- From the device settings, go to "Display" or "Display settings" and check that the **vertical resolution** (second number in "Width x Height" format) **of your device is at least 1024 pixels**. This is a strict requirement to perform the experiment;
- The experiment includes audio feedback: please **raise the volume of your device**.
In case of doubts, issues or general feedback on the experiment, please write an email to dtirinna@sissa.it.
Thank you for your time!"
### IMPORTANT:
The vertical resolution value has to be adapted to the N value of the experiment.

### Creating study for new N value:
- Adapt code:
	- "index.html" page title
	- "experiment_parameters.js" graph_size
  - Commit and push "Prolific version for first N-grid pilot"
- "Duplicate study" on Prolific
	- Adapt study name and description
- Gitlab: add "ncl-sissa-shareduser" as Maintainer
- Set experiment to "Running", adding necessary credits
- Copy experiment link in Study draft

---

## Useful Links
- [Loading Resources (could be outdated)](https://pavlovia.org/docs/experiments/resources)
- [JSPsych Integration with Prolific](https://www.jspsych.org/v7/overview/prolific/)
- [Prolific/Pavlovia Integration](https://researcher-help.prolific.com/en/article/a39cac)
- [Screening Participants Based on Device](https://researcher-help.prolific.com/en/article/4ae222)  
+ [Custom Screening with Different Completion Codes](https://researcher-help.prolific.com/en/article/6bad1f)
- [Participants That Took the Study with an Incompatible Device](https://researcher-help.prolific.com/en/article/b3bc18)
- https://researcher-help.prolific.com/en/article/7d6cb3#:~:text=You%20can%20duplicate%20studies%20from,as%20in%20the%20original%20study.
- **Francesco OCCABS Experiment**:  
  [GitLab Link](https://gitlab.pavlovia.org/frinaldi/occabs/-/blob/master/index.html)  
  [Prolific Study](https://app.prolific.com/researcher/workspaces/studies/6627e11c1336a7f1aec891b0)