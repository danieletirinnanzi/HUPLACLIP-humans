# Explanation of visual rendering logic:
- Setting initial canvas dimensions in experiment_parameters.js (line 9)
```javascript
canvasDimensions: [screen.height, screen.width]
```
This canvas is used for scaling the dimension of the images used during instructions and tutorials, and is resized before drawing each stimulus during the experiment.

- "device_check" jsPsychCallFunction plugin in index.html (lines 221-272):
1. Retrieving physical screen dimensions;
2. Check that vertical resolution is an accepted one (EXPLAIN WHY THE LIST OF ACCEPTED VALUES IS NEEDED? CHECK BEHAVIOR ON MACs);
3. Calculating (physical) drawing parameters and coordinates of stimuli;
4. Storing all relevant variables in "currentExperiment" object.
 
 - Canvas resizing function:
 ```javascript
 
 ```