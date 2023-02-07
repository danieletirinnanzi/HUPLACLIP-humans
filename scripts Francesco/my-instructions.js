jsPsych.plugins.instructions = (function () {
  var plugin = {};

  // IN THE info, I ADDED: prompts, heights AND load_on_canvas
  plugin.info = {
    name: "instructions",
    description: "",
    parameters: {
      pages: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: "Pages",
        default: undefined,
        array: true,
        description:
          "Each element of the array is the image for a single page.",
      },
      key_forward: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: "Key forward",
        default: "rightarrow",
        description:
          "The key the subject can press in order to advance to the next page.",
      },
      key_backward: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: "Key backward",
        default: "leftarrow",
        description:
          "The key that the subject can press to return to the previous page.",
      },
      allow_backward: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: "Allow backward",
        default: true,
        description:
          "If true, the subject can return to the previous page of the instructions.",
      },
      allow_keys: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: "Allow keys",
        default: true,
        description:
          "If true, the subject can use keyboard keys to navigate the pages.",
      },
      show_clickable_nav: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: "Show clickable nav",
        default: false,
        description:
          'If true, then a "Previous" and "Next" button will be displayed beneath the instructions.',
      },
      show_page_number: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: "Show page number",
        default: false,
        description:
          "If true, and clickable navigation is enabled, then Page x/y will be shown between the nav buttons.",
      },
      page_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: "Page label",
        default: "Page",
        description:
          "The text that appears before x/y (current/total) pages displayed with show_page_number",
      },
      button_label_previous: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: "Button label previous",
        default: "Previous",
        description: "The text that appears on the button to go backwards.",
      },
      button_label_next: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: "Button label next",
        default: "Next",
        description: "The text that appears on the button to go forwards.",
      },
    },
  };

  plugin.trial = function (display_element, trial) {
    var current_page = 0;

    var view_history = [];

    var start_time = performance.now();

    var last_page_update_time = start_time;

    function btnListener(evt) {
      evt.target.removeEventListener("click", btnListener);
      if (this.id === "jspsych-instructions-back") {
        back();
      } else if (this.id === "jspsych-instructions-next") {
        next();
      }
    }

    // A function that creates a DOM tree with all the pages of the instructions together
    function create_DOM_tree() {
      // I remove whatever is in the display_element
      if (display_element.hasChildNodes()) {
          while (display_element.firstChild) {
              display_element.removeChild(display_element.firstChild);
          }
      }
      var ctx = Array(trial.pages.length)
      for (let pag = 0; pag < trial.pages.length; pag++) {
          const div = document.createElement("div");
          div.id = "pag" + pag;
          display_element.appendChild(div);
          div.insertAdjacentHTML("beforeend", trial.pages[pag]);
      }
    //console.log(display_element)
    }
    create_DOM_tree()

    function show_current_page() {
      for(let j = 0; j < trial.pages.length; j++){
        var identity = "pag" + j;
        var divv = document.getElementById(identity)
        divv.hidden = true
        if (j==current_page) {divv.hidden=false}
      }
    }

    function next() {
      add_current_page_to_view_history();

      current_page++;

      // if done, finish up...
      if (current_page >= trial.pages.length) {
        endTrial();
      } else {
        show_current_page();
      }
    }

    function back() {
      add_current_page_to_view_history();

      current_page--;

      show_current_page();
    }

    function add_current_page_to_view_history() {
      var current_time = performance.now();

      var page_view_time = current_time - last_page_update_time;

      view_history.push({
        page_index: current_page,
        viewing_time: page_view_time,
      });

      last_page_update_time = current_time;
    }

    function endTrial() {
      if (trial.allow_keys) {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboard_listener);
      }

      display_element.innerHTML = "";

      var trial_data = {
        view_history: JSON.stringify(view_history),
        rt: performance.now() - start_time,
      };

      jsPsych.finishTrial(trial_data);
    }

    var after_response = function (info) {
      // have to reinitialize this instead of letting it persist to prevent accidental skips of pages by holding down keys too long
      keyboard_listener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: [trial.key_forward, trial.key_backward],
        rt_method: "performance",
        persist: false,
        allow_held_key: false,
      });
      // check if key is forwards or backwards and update page
      if (jsPsych.pluginAPI.compareKeys(info.key, trial.key_backward)) {
        if (current_page !== 0 && trial.allow_backward) {
          back();
        }
      }

      if (jsPsych.pluginAPI.compareKeys(info.key, trial.key_forward)) {
        next();
      }
    };

    show_current_page();

    if (trial.allow_keys) {
      var keyboard_listener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: [trial.key_forward, trial.key_backward],
        rt_method: "performance",
        persist: false,
      });
    }
  };

  return plugin;
})();
