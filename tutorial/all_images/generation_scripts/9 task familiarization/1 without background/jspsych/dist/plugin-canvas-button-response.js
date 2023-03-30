var jsPsychCanvasButtonResponse = (function (jspsych) {
  'use strict';

  const info = {
      name: "canvas-button-response",
      parameters: {
          /** The drawing function to apply to the canvas. Should take the canvas object as argument. */
          stimulus: {
              type: jspsych.ParameterType.FUNCTION,
              pretty_name: "Stimulus",
              default: undefined,
          },
          /** Array containing the label(s) for the button(s). */
          choices: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Choices",
              default: undefined,
              array: true,
          },
          /** The html of the button. Can create own style. */
          button_html: {
              type: jspsych.ParameterType.HTML_STRING,
              pretty_name: "Button HTML",
              default: '<button class="jspsych-btn">%choice%</button>',
              array: true,
          },
          /** Any content here will be displayed under the button. */
          prompt: {
              type: jspsych.ParameterType.HTML_STRING,
              pretty_name: "Prompt",
              default: null,
          },
          /** How long to hide the stimulus. */
          stimulus_duration: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Stimulus duration",
              default: null,
          },
          /** How long to show the trial. */
          trial_duration: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Trial duration",
              default: null,
          },
          /** The vertical margin of the button. */
          margin_vertical: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Margin vertical",
              default: "0px",
          },
          /** The horizontal margin of the button. */
          margin_horizontal: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Margin horizontal",
              default: "8px",
          },
          /** If true, then trial will end when user responds. */
          response_ends_trial: {
              type: jspsych.ParameterType.BOOL,
              pretty_name: "Response ends trial",
              default: true,
          },
          /** Array containing the height (first value) and width (second value) of the canvas element. */
          canvas_size: {
              type: jspsych.ParameterType.INT,
              array: true,
              pretty_name: "Canvas size",
              default: [500, 500],
          },
      },
  };
  /**
   * **canvas-button-response**
   *
   * jsPsych plugin for displaying a canvas stimulus and getting a button response
   *
   * @author Chris Jungerius (modified from Josh de Leeuw)
   * @see {@link https://www.jspsych.org/plugins/jspsych-canvas-button-response/ canvas-button-response plugin documentation on jspsych.org}
   */
  class CanvasButtonResponsePlugin {
      constructor(jsPsych) {
          this.jsPsych = jsPsych;
      }
      trial(display_element, trial) {
          // create canvas
          var html = '<div id="jspsych-canvas-button-response-stimulus">' +
              '<canvas id="jspsych-canvas-stimulus" height="' +
              trial.canvas_size[0] +
              '" width="' +
              trial.canvas_size[1] +
              '"></canvas>' +
              "</div>";
          //display buttons
          var buttons = [];
          if (Array.isArray(trial.button_html)) {
              if (trial.button_html.length == trial.choices.length) {
                  buttons = trial.button_html;
              }
              else {
                  console.error("Error in canvas-button-response plugin. The length of the button_html array does not equal the length of the choices array");
              }
          }
          else {
              for (var i = 0; i < trial.choices.length; i++) {
                  buttons.push(trial.button_html);
              }
          }
          html += '<div id="jspsych-canvas-button-response-btngroup">';
          for (var i = 0; i < trial.choices.length; i++) {
              var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
              html +=
                  '<div class="jspsych-canvas-button-response-button" style="display: inline-block; margin:' +
                      trial.margin_vertical +
                      " " +
                      trial.margin_horizontal +
                      '" id="jspsych-canvas-button-response-button-' +
                      i +
                      '" data-choice="' +
                      i +
                      '">' +
                      str +
                      "</div>";
          }
          html += "</div>";
          //show prompt if there is one
          if (trial.prompt !== null) {
              html += trial.prompt;
          }
          display_element.innerHTML = html;
          //draw
          let c = document.getElementById("jspsych-canvas-stimulus");
          trial.stimulus(c);
          // start time
          var start_time = performance.now();

          // add event listeners to buttons
          for (var i = 0; i < trial.choices.length; i++) {
              display_element
                  .querySelector("#jspsych-canvas-button-response-button-" + i)
                  .addEventListener("click", (e) => {
                  var btn_el = e.currentTarget;
                  var choice = btn_el.getAttribute("data-choice"); // don't use dataset for jsdom compatibility
                  let visualizedOrder = this.jsPsych.data.orderOfNodes
                  after_response(choice,"final answer","final answer",visualizedOrder);
              });
          }

          
          // add event listener to clicks in the canvas
          c.addEventListener("click", (e) => {
            // addressing the canvas:
            let c = document.getElementById("jspsych-canvas-stimulus")
            let ctx = c.getContext("2d");

            // coordinates of the buttons ("numberOfStimuli" arrays of 4 numbers, each indicating a point of the button. NB: coordinates are relative to canvas element)
            let buttonsCoordinatesArray = this.jsPsych.data.buttonsCoordinates            

            // array of pressed buttons (will be filled):
            // console.log(this.jsPsych.data.pressedButtons)    // ADDING A PROPERTY TO THE DATA?? Se esiste già -> .push, altrimenti crea (creare / gestire come "buttonsCoordinates???")

            // until 2 clicks are done on 2 different buttons, keep listening to the clicks:
            //checking if click happened inside one of the buttons area by building an "invisible" polygon and checking if the click was inside:
            for (let singleButtonIndex = 0; singleButtonIndex < buttonsCoordinatesArray.length; singleButtonIndex++) {
                // building polygon corresponding to buttons:
                ctx.beginPath();
                ctx.moveTo(buttonsCoordinatesArray[singleButtonIndex][0], buttonsCoordinatesArray[singleButtonIndex][1]); //right angle
                ctx.lineTo(buttonsCoordinatesArray[singleButtonIndex][2], buttonsCoordinatesArray[singleButtonIndex][3]); //bottom angle
                ctx.lineTo(buttonsCoordinatesArray[singleButtonIndex][4], buttonsCoordinatesArray[singleButtonIndex][5]); //left angle
                ctx.lineTo(buttonsCoordinatesArray[singleButtonIndex][6], buttonsCoordinatesArray[singleButtonIndex][7]); //upper angle
                ctx.closePath();
                //checking if click happened in just defined path and in button different from the (eventual) previous one:
                if (ctx.isPointInPath( e.offsetX,e.offsetY) && !(this.jsPsych.data.pressedButtons.includes(singleButtonIndex))) {

                    // adding the button to the pressedButtons array (for the current trial) 
                    this.jsPsych.data.pressedButtons.push(singleButtonIndex)

                    // changing the color of the buttons as they are pressed:
                    for (let pressedButtonCoordinateIndex = 0; pressedButtonCoordinateIndex < buttonsCoordinatesArray[singleButtonIndex].length; pressedButtonCoordinateIndex++) {
                        ctx.beginPath();
                        ctx.lineTo(buttonsCoordinatesArray[singleButtonIndex][0],buttonsCoordinatesArray[singleButtonIndex][1]); //right angle
                        ctx.lineTo(buttonsCoordinatesArray[singleButtonIndex][2], buttonsCoordinatesArray[singleButtonIndex][3]); //bottom angle
                        ctx.lineTo(buttonsCoordinatesArray[singleButtonIndex][4], buttonsCoordinatesArray[singleButtonIndex][5]); //left angle
                        ctx.lineTo(buttonsCoordinatesArray[singleButtonIndex][6], buttonsCoordinatesArray[singleButtonIndex][7]); //upper angle
                        ctx.lineTo(buttonsCoordinatesArray[singleButtonIndex][0],buttonsCoordinatesArray[singleButtonIndex][1]); //closing square (right angle) (same coordinates of starting point)
                        // defining the fill color
                        ctx.fillStyle = "#009900";
                        ctx.fill(); 
                        // defining the outline
                        ctx.strokeStyle = '#009933'; // green outline
                        ctx.stroke();

                        // NB:
                        // The second color change is not visible because the code keeps running and the next canvas is presented. For it to be visible, one should create a "sleep" function (not recommended)
                    }

                    //DEBUG
                    console.log("pressedButtons array: "+ this.jsPsych.data.pressedButtons)
                    // if 2 buttons have already been pressed, go to next trial
                    if (this.jsPsych.data.pressedButtons.length == 2) {
                        var choice = "2 buttons pressed, moving to next visualization"
                        let button1 = this.jsPsych.data.pressedButtons[0]
                        let button2 = this.jsPsych.data.pressedButtons[1]
                        let visualizedOrder = this.jsPsych.data.orderOfNodes
                        console.log("setting value of visualizedOrder for this trial to: ")
                        console.log(visualizedOrder)
                        after_response(choice,button1,button2,visualizedOrder)
                    }
                };
            } 
        
          });


          // store response
          var response = {
              rt: null,
              button: null,
              button1: null,
              button2: null,
              visualizedOrder: null
          };
          // function to end trial when it is time
          const end_trial = () => {
              // kill any remaining setTimeout handlers
              this.jsPsych.pluginAPI.clearAllTimeouts();
              // gather the data to store for the trial
              var trial_data = {
                  rt: response.rt,
                  response: response.button,
                  button1: response.button1,
                  button2: response.button2,
                  visualizedOrder: response.visualizedOrder
              };
              // clear the display
              display_element.innerHTML = "";
              // move on to the next trial
              this.jsPsych.finishTrial(trial_data);
          };
          // function to handle responses by the subject
          function after_response(choice,button1,button2,visualizedOrder) {
              // measure rt
              var end_time = performance.now();
              var rt = Math.round(end_time - start_time);
              response.button = parseInt(choice);
              response.rt = rt;
              response.button1 = button1
              response.button2 = button2
              response.visualizedOrder = visualizedOrder
              // after a valid response, the stimulus will have the CSS class 'responded'
              // which can be used to provide visual feedback that a response was recorded
              display_element.querySelector("#jspsych-canvas-button-response-stimulus").className +=
                  " responded";
              // disable all the buttons after a response
              var btns = document.querySelectorAll(".jspsych-canvas-button-response-button button");
              for (var i = 0; i < btns.length; i++) {
                  //btns[i].removeEventListener('click');
                  btns[i].setAttribute("disabled", "disabled");
              }
              if (trial.response_ends_trial) {
                  end_trial();
              }

          }

          // hide image if timing is set
          if (trial.stimulus_duration !== null) {
              this.jsPsych.pluginAPI.setTimeout(() => {
                  display_element.querySelector("#jspsych-canvas-button-response-stimulus").style.visibility = "hidden";
              }, trial.stimulus_duration);
          }
          // end trial if time limit is set
          if (trial.trial_duration !== null) {
              this.jsPsych.pluginAPI.setTimeout(() => {
                  end_trial();
              }, trial.trial_duration);
          }
      }


      simulate(trial, simulation_mode, simulation_options, load_callback) {
          if (simulation_mode == "data-only") {
              load_callback();
              this.simulate_data_only(trial, simulation_options);
          }
          if (simulation_mode == "visual") {
              this.simulate_visual(trial, simulation_options, load_callback);
          }
      }
      create_simulation_data(trial, simulation_options) {
          const default_data = {
              rt: this.jsPsych.randomization.sampleExGaussian(500, 50, 1 / 150, true),
              response: this.jsPsych.randomization.randomInt(0, trial.choices.length - 1),
          };
          const data = this.jsPsych.pluginAPI.mergeSimulationData(default_data, simulation_options);
          this.jsPsych.pluginAPI.ensureSimulationDataConsistency(trial, data);
          return data;
      }
      simulate_data_only(trial, simulation_options) {
          const data = this.create_simulation_data(trial, simulation_options);
          this.jsPsych.finishTrial(data);
      }
      simulate_visual(trial, simulation_options, load_callback) {
          const data = this.create_simulation_data(trial, simulation_options);
          const display_element = this.jsPsych.getDisplayElement();
          this.trial(display_element, trial);
          load_callback();
          if (data.rt !== null) {
              this.jsPsych.pluginAPI.clickTarget(display_element.querySelector(`div[data-choice="${data.response}"] button`), data.rt);
          }
      }
  }
  CanvasButtonResponsePlugin.info = info;

  return CanvasButtonResponsePlugin;

})(jsPsychModule);
