This markdown explains the visual rendering logic of the HUPLACLIP-human experiment.
## Browser and device checks:
1. **Browser check**: first of all we check that the experiment is opened on a supported browser, on a desktop device (not mobile, not tablet) and that full-screen is supported. This is accomplished through jsPsych browser-check plugin (https://www.jspsych.org/v7/plugins/browser-check/). The subject is redirected to Prolific if these requirements are not met.
	- `index.html` (lines 194-228):
	```javascript
	
	// ...
	
	var browser_check = {
	
	    type: jsPsychBrowserCheck,
	
	    inclusion_function: (data) => {      
	
	        console.log("Browser is: " + data.browser)
	
	        let acceptedBrowsers = ['chrome', 'firefox', 'edge', 'edge-chromium', 'edge-ios']        
	
	        return acceptedBrowsers.includes(data.browser) === true && data.mobile === false;
	
	        console.log(data.browser)
	
	        return data.fullscreen === true
	
	        },
	
	    exclusion_message: (data) => {
	
	        if(data.browser !== 'chrome' && data.browser !== 'firefox' && data.browser !== 'edge' && data.browser !== 'edge-chromium' && data.browser !== 'edge-ios') {
	
	            return `<p>Your current browser is not supported. Please use <b>Chrome</b>, <b>Firefox</b> or <b>Edge</b> to participate in this experiment.</p><br>
	
	                    Click the button below to be redirected to Prolific:
	
	                    <button style="font-size: 18px; padding: 10px 20px;" onclick="window.location.href='https://google.com'">Return to Prolific</button>
	
	                    <br> <br>
	
	                    <p style="font-size: 15px;">To report any issues, please contact the experimenter at <a href="mailto:dtirinna@sissa.it">dtirinna@sissa.it</a></p>
	
	                `;
	
	        } else if(data.mobile){
	
	            return `<p>You must use a <b>desktop/laptop computer</b> to participate in this experiment.</p><br>
	
	                    Click the button below to be redirected to Prolific:
	
	                    <button style="font-size: 18px; padding: 10px 20px;" onclick="window.location.href='https://google.com'">Return to Prolific</button>
	
	                    <br> <br>
	
	                    <p style="font-size: 15px;">To report any issues, please contact the experimenter at <a href="mailto:dtirinna@sissa.it">dtirinna@sissa.it</a></p>
	
	                    `;
	
	        } else if(data.fullscreen === false){
	
	            return `<p>Your current browser does not support Fullscreen, please <b>open the experiment with a different browser</b>.</p><br>
	
	                    Click the button below to be redirected to Prolific:
	
	                    <button style="font-size: 18px; padding: 10px 20px;" onclick="window.location.href='https://google.com'">Return to Prolific</button>
	
	                    <br> <br>
	
	                    <p style="font-size: 15px;">To report any issues, please contact the experimenter at <a href="mailto:dtirinna@sissa.it">dtirinna@sissa.it</a></p>
	
	                    `;
	
	        }
	
	    },
	
	}
	
	timeline.push(browser_check)
	
	// ...
	
	```
2. **Device check**: to enable the presentation of the stimuli and regulate the dimension of the single squares on the screen without any interpolation and blurring effects, it is essential to reliably retrieve the physical screen resolution.
	This is accomplished through jsPsych call-function plugin (https://www.jspsych.org/v7/plugins/call-function/).
	The function that is called:
	- calculates the physical screen dimensions multiplying the `window.screen.width/height` by `window.devicePixelRatio`.
	- calculates the resulting dimension of the single square on the screen.
	  
	A device is accepted if:
	- the physical height of the screen is sufficient to perform the experiment at the current N value;
	- the dimension of the single square is at least 1 pixel;
	- `window.devicePixelRatio` is an integer value. When the browser's zoom is not set to 100%, this value is fractional, and the retrieved dimensions of the screen are incorrect.
	  
	When a device is accepted, the drawing coordinates are calculated and stored in the `currentExperiment` object;
	
	When a device is not accepted, the user is asked to set the browser zoom to 100% and reload the page. If the user is using a device that is not supported, is redirected to Prolific.
	- `index.html` (lines 231-313):
	```javascript
	
	var device_check = {
	
	    type: jsPsychCallFunction,
	
	    func: function () {
	
	        // - calling function to retrieve the physical screen dimensions
	
	        let physicalScreenDimensions = {
	
	            width: window.screen.width * window.devicePixelRatio | 0,
	
	            height: window.screen.height * window.devicePixelRatio | 0
	
	        };
	
	  
	
	        console.log(devicePixelRatio)
	
	  
	
	        //TODO (optional): add additional warning for cases where devicePixelRatio is integer and > 2 (zoom 200% for instance)  
	
	        // TO REMOVE
	
	        console.log("True Physical Screen Width:", physicalScreenDimensions.width);
	
	        console.log("True Physical Screen Height:", physicalScreenDimensions.height);
	
	  
	
	        // - defining valid vertical resolutions based on the graph size:
	
	        // NOTE: the list of vertical resolutions is needed because if the browser's zoom is not set to 100%, the retrieved resolution might be different from the physical one
	
	        switch (currentExperiment.graphSize) {
	
	            case 100:
	
	            case 150:
	
	            case 200:
	
	            case 300:
	
	            case 400:
	
	            case 480:
	
	            case 600:
	
	                var validVerticalResolutions = [720, 768, 864, 900, 1024, 1050, 1080, 1152, 1200, 1344, 1392, 1400, 1440, 1504, 1536, 1600, 1664, 1800, 1824, 1864, 1920, 1964, 2160, 2234, 2304, 2400, 2520, 2880, 3200, 3328, 3384, 3600, 3840, 4000, 4320, 4468, 5760];
	
	                break;
	
	            case 800:
	
	                var validVerticalResolutions = [864, 900, 1024, 1050, 1080, 1152, 1200, 1344, 1392, 1400, 1440, 1504, 1536, 1600, 1664, 1800, 1824, 1864, 1920, 1964, 2160, 2234, 2304, 2400, 2520, 2880, 3200, 3328, 3384, 3600, 3840, 4000, 4320, 4468, 5760];
	
	                break;
	
	            case 1000:
	
	                var validVerticalResolutions = [1024, 1050, 1080, 1152, 1200, 1344, 1392, 1400, 1440, 1504, 1536, 1600, 1664, 1800, 1824, 1864, 1920, 1964, 2160, 2234, 2304, 2400, 2520, 2880, 3200, 3328, 3384, 3600, 3840, 4000, 4320, 4468, 5760];
	
	                break;
	
	            default:
	
	                alert("Invalid graph size. Accepted graph size values for human experiments are: 100, 150, 200, 300, 400, 480, 600, 800, 1000.");
	
	                break;
	
	        }                
	
	        // - if dimension of single square is < 1 pixel, asking user to set zoom to 100%
	
	        // number of squares to be drawn in the two directions (2 squares are for the diagonal):
	
	        let numberOfSquares = currentExperiment.graphSize + 2
	
	        // resulting square side dimension
	
	        let squareSideDimensionPhysical = Math.floor(physicalScreenDimensions.height / numberOfSquares)                
	
	  
	
	        // checking if the vertical resolution is valid, if the square side dimension is >= 1 pixel and if devicePixelRatio is an integer
	
	        if (validVerticalResolutions.includes(physicalScreenDimensions.height) && squareSideDimensionPhysical >= 1 && Number.isInteger(window.devicePixelRatio)) {
	
	            // valid resolution -> storing it in the currentExperiment object
	
	            currentExperiment.screenWidth = physicalScreenDimensions.width;
	
	            currentExperiment.screenHeight = physicalScreenDimensions.height;
	
	            //- calling function to calculate drawing parameters and storing them in the currentExperiment object:
	
	            currentExperiment.fixedDrawingParameters = calculateFixedDrawingParameters(physicalScreenDimensions.width, physicalScreenDimensions.height, currentExperiment.graphSize);
	
	            //- calling function to calculate coordinates of left and right triangles and storing them in the currentExperiment object:
	
	            let leftAndRightTriangleCoordinates = calculateTrianglesCoordinates(currentExperiment.fixedDrawingParameters, currentExperiment.graphSize);
	
	            currentExperiment.stimuliCoordinates = {};
	
	            currentExperiment.stimuliCoordinates.leftTriangle = leftAndRightTriangleCoordinates[0];
	
	            currentExperiment.stimuliCoordinates.rightTriangle = leftAndRightTriangleCoordinates[1];            
	
	            return; // Stop further execution
	
	        } else {
	
	            // invalid resolution -> redirect to Prolific
	
	            document.body.innerHTML = `
	
	            <div style="text-align: left; margin-top: 50px;">
	
	                <p>If you are reading this message, make sure to:
	
	  
	
	                    <ul>
	
	                        <li><b>Set your browser zoom to 100%</b> (you can change it in the browser options or by pressing "Ctrl +" / "Ctrl -" (Windows) or "⌥ ⌘ =" / "⌥ ⌘ -" (Mac) ) and click on the "Reload Page" button below. The page will reload and this page should not be shown anymore.</p></li>
	
	                        <button style="font-size: 18px; padding: 10px 20px;" onclick="window.location.reload()">Reload Page</button><br><br>
	
	  
	
	                        <li>If you have set you browser zoom to 100% but this message does not disappear, you <b>might be using an incompatible device</b>. A vertical resolution of at least <b>${validVerticalResolutions[0]}</b> is required to run the experiment (you can check the resolution of your device in the device settings). If your current device does not meet this requirement, please open the experiment on a device with a higher vertical resolution.<br>
	
	                            Click the button below to be redirected to Prolific:</li>
	
	                        <button style="font-size: 18px; padding: 10px 20px;" onclick="window.location.href='https://google.com'">Return to Prolific</button>
	
	                    </ul>
	
	  
	
	                <p><strong></strong></p>
	
	                <br>
	
	                <p style="font-size: 15px;">To report any issues, please contact the experimenter at <a href="mailto:dtirinna@sissa.it">dtirinna@sissa.it</a></p>
	
	            </div>
	
	        `;                      
	
	        }
	
	    }
	
	}
	
	timeline.push(device_check)
	
	```

## Canvas resizing steps:
If the device is accepted, the following logic is used to ensure that physical pixels are used to represent the stimuli on screen and avoid interpolation and blurring:
1. **Starting canvas dimensions**: the starting canvas dimensions are set in `experiment_parameters.js` (line 9). These dimensions are just used as initial dimensions for the canvas where the two stimuli will be drawn during the experiment.
	- `experiment_parameters.js` (line 9)
	```javascript
	
	canvasDimensions: [screen.height, screen.width]
	
	```
	- `index.html` (lines 766-782)
	```javascript
	
	// ...
	
	// defining the current trial
	
	let currentTrial = {
	
	    type: jsPsychCanvasKeyboardResponse,
	
	    canvas_size: [currentExperiment.canvasDimensions[0], currentExperiment.canvasDimensions[1]], // LOGICAL COORDINATES [height,width]
	
	    choices: [' ', 'ArrowLeft', 'ArrowRight'],
	
	    response_ends_trial: true,
	
	    // adding the stimuli and the audio feedback to the timeline of the trial
	
	    timeline: [{ stimulus: generateDrawCanvas(blockIndex, presentationIndex) }, feedbackAudio],
	
	// ...
	
	```
2. **Full-screen**: after completing instructions and task familiarization (right before starting the real experiment), full-screen visualization is activated and scrolling is disabled.
	- `index.html` (lines 642-654)
	```javascript
	
	// ...
	
	/* ENTERING FULLSCREEN (and disabling scrolling) */
	
	var enter_fullscreen = {
	
	    type: jsPsychFullscreen,
	
	    fullscreen_mode: true,
	
	    message: `<p>The experiment will switch to full screen mode when you press the button below</p><br>`,
	
	    on_start: function () {
	
	        // Select the element with class "jspsych-display-element"
	
	        var displayElement = document.querySelector('.jspsych-display-element');
	
	        // Add the style attribute with overflow:hidden to prevent subject from scrolling during experiment
	
	        displayElement.style.overflow = 'hidden';
	
	    }
	
	}
	
	timeline.push(enter_fullscreen)
	
	// ...
	
	```
3. **Canvas resizing**: in jsPsych canvas-keyboard-response (https://www.jspsych.org/v7/plugins/canvas-keyboard-response/), a new canvas is created at every stimulus presentation. The function that triggers drawing on the canvas is `generateDrawCanvas` (see second code snippet of step 1). Before drawing the stimuli, the `resizeCanvas` function is called, that uses the `devicePixelRatio` to adjust the canvas dimensions and scaling the context accordingly.
	- `canvas_drawing.js` (lines 310-338)
	```javascript
	
	/* FUNCTION TO RESIZE THE CANVAS (called before drawing, a new canvas is re-created at every trial) */
	
	// adapted from: https://stackoverflow.com/questions/47696956/display-pixel-perfect-canvas-on-all-devices -> last code snippet reported
	
	  
	
	// Helper function to convert a numeric value to a pixel string (e.g., 100 -> "100px")
	
	const px = v => `${v}px`;
	
	  
	
	// Resizing canvas using devicePixelRatio:
	
	function resizeCanvas(canvas) {
	
	    // Get the dimensions of the canvas's parent element in CSS (logical) pixels.
	
	    const rect = canvas.parentElement.getBoundingClientRect();
	
	  
	
	    // Convert the CSS (logical) dimensions to device (physical) pixels by multiplying with devicePixelRatio (rounding down).
	
	    const deviceWidth = rect.width * window.devicePixelRatio | 0;
	
	    const deviceHeight = rect.height * window.devicePixelRatio | 0;
	
	  
	
	    // Set the canvas element's CSS size (display size) to match the parent element,
	
	    // compensating for devicePixelRatio to ensure proper scaling.
	
	    canvas.style.width = px(rect.width);
	
	    canvas.style.height = px(rect.height);
	
	  
	
	    // Set the actual canvas resolution to match the calculated device pixels.
	
	    // This ensures the canvas is drawn at the correct resolution internally.
	
	    canvas.width = deviceWidth;
	
	    canvas.height = deviceHeight;
	
	  
	
	    // Scaling the context to ensure proper rendering.
	
	    const ctx = canvas.getContext('2d');
	
	    ctx.scale(window.devicepixelRatio, window.devicepixelRatio);
	
	}
	
	```

## Robustness when browser's zoom $\neq 100$ %:
- The logic described above is completely robust and reliable if the browser's zoom is set to 100%;
- When browser's zoom $\neq 100$ %, there are some cases where this logic fails. The occurrence of these failures depends on the *browser* and on the *device* where the experiment is running. The table below reports the device and browser configurations that have been extensively tested. The configuration where the logic fails are marked with an X, the browser's zoom values at which the rendering is not correct are reported in the parentheses, together with the retrieved vertical resolution. This value is accepted according to the logic above, but the canvas is drawn "outside" of the available space on screen, resulting in an incorrect visualization. Safari support hasn't been tested yet.

| **Screen dimensions**                 | **Device-pixel-ratio** |                                                                **Chrome**                                                                 |                                                                 **Edge**                                                                  | **Firefox** | **Notes on device**                               |
| ------------------------------------- | :--------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: | :---------: | ------------------------------------------------- |
| 1024x768                              |           1            |                            X (zoom 200% resolution 1536; zoom 300% resolution 2304, zoom 500% resolution 3840)                            |                            X (zoom 200% resolution 1536; zoom 300% resolution 2304; zoom 500% resolution 3840)                            |      V      | Older laptops, legacy devices                     |
| 1280×720 (HD)                         |           1            | X (zoom 125%, resolution 900; zoom 200% resolution 1440; zoom 300% resolution 2160; zoom 400% resolution 2880; zoom 500% resolution 3600) | X (zoom 125%, resolution 900; zoom 200% resolution 1440; zoom 300% resolution 2160; zoom 400% resolution 2880; zoom 500% resolution 3600) |      V      | Budget laptops, entry-level screens               |
| 1440x900                              |           1            |                                         X (zoom 200% resolution 1800; zoom 400% resolution 3600)                                          |                                         X (zoom 200% resolution 1800; zoom 400% resolution 3600)                                          |      V      | Older MacBooks, some business laptops             |
| 1920x1080 (Full HD)                   |           1            |                                        X (zoom 200%,  resolution 2160; zoom 400% resolution 4320)                                         |                                         X (zoom 200%, resolution 2160; zoom 400%, resolution 4320                                         |      V      | Most modern laptops, standard resolution          |
| 1920x1080 (Full HD with 125% scaling) |          1.25          |                                         X (zoom 80%, resolution 864; zoom 400%, resolution 4320)                                          |                                         X (zoom 80%, resolution 864; zoom 400%, resolution 4320)                                          |      V      |                                                   |
| 2560×1440                             |           1            |             X (zoom 125%, resolution 1800; zoom 200%,  resolution 2880; zoom 300% resolution 4320; zoom 400% resolution 5760)             |             X (zoom 125%, resolution 1800; zoom 200%,  resolution 2880; zoom 300% resolution 4320; zoom 400% resolution 5760)             |      V      | High-end ultrabooks, gaming laptops               |
| 1280x800                              |           2            |                            X (zoom 150% resolution 2400; zoom 200% resolution 3200; zoom 250% resolution 4000)                            |                            X (zoom 150% resolution 2400; zoom 200% resolution 3200; zoom 250% resolution 4000)                            |      V      | MacBook Air (old models)                          |
| 1440x900                              |           2            |                                          X (zoom 50% resolution 900; zoom 200%, resolution 3600)                                          |                                          X (zoom 50% resolution 900; zoom 200%, resolution 3600)                                          |      V      | MacBook Air (older Retina models)                 |
| 2304×1440                             |           2            |                           X (zoom 50%, resolution 1440; zoom 150%, resolution 4320; zoom 200%, resolution 5760)                           |                           X (zoom 50%, resolution 1440; zoom 150%, resolution 4320; zoom 200%, resolution 5760)                           |      V      | MacBook 12-inch Retina                            |
| 3840×2160 (4K UHD)                    |           2            |                                                       X (zoom 50%, resolution 2160)                                                       |                                                                     V                                                                     |      V      | Premium Windows laptops (Lenovo, Dell XPS, Razer) |
