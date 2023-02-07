var jsPsychInstructions = (function (e) {
  "use strict";
  function t(e, t) {
    for (var a = 0; a < t.length; a++) {
      var s = t[a];
      (s.enumerable = s.enumerable || !1),
        (s.configurable = !0),
        "value" in s && (s.writable = !0),
        Object.defineProperty(e, s.key, s);
    }
  }
  var a = {
      name: "instructions",
      parameters: {
        pages: {
          type: e.ParameterType.HTML_STRING,
          pretty_name: "Pages",
          default: void 0,
          array: !0,
        },
        key_forward: {
          type: e.ParameterType.KEY,
          pretty_name: "Key forward",
          default: "ArrowRight",
        },
        key_backward: {
          type: e.ParameterType.KEY,
          pretty_name: "Key backward",
          default: "ArrowLeft",
        },
        allow_backward: {
          type: e.ParameterType.BOOL,
          pretty_name: "Allow backward",
          default: !0,
        },
        allow_keys: {
          type: e.ParameterType.BOOL,
          pretty_name: "Allow keys",
          default: !0,
        },
        show_clickable_nav: {
          type: e.ParameterType.BOOL,
          pretty_name: "Show clickable nav",
          default: !1,
        },
        show_page_number: {
          type: e.ParameterType.BOOL,
          pretty_name: "Show page number",
          default: !1,
        },
        page_label: {
          type: e.ParameterType.STRING,
          pretty_name: "Page label",
          default: "Page",
        },
        button_label_previous: {
          type: e.ParameterType.STRING,
          pretty_name: "Button label previous",
          default: "Previous",
        },
        button_label_next: {
          type: e.ParameterType.STRING,
          pretty_name: "Button label next",
          default: "Next",
        },
      },
    },
    s = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.jsPsych = t);
      }
      var a, s, n;
      return (
        (a = e),
        (s = [
          {
            key: "trial",
            value: function (e, t) {
              var a = this,
                s = 0,
                n = [],
                i = performance.now(),
                r = i;
              function l(e) {
                e.target.removeEventListener("click", l),
                  "jspsych-instructions-back" === this.id
                    ? y()
                    : "jspsych-instructions-next" === this.id && c();
              }

              // !!!!!!!!!!!!!!! Questa funzione crea una lista (DOM_tree) di tutte le pagine delle istruzioni insieme
              function create_DOM_tree() {
                // RIMUOVO TUTTA LA ROBA ESISTENTE
                if (e.hasChildNodes()) {
                    while (e.firstChild) {
                        e.removeChild(e.firstChild);
                    }
                }
                var ctx = Array(t.pages.length)
                for (let pag = 0; pag < t.pages.length; pag++) {
                    const div = document.createElement("div");
                    div.id = "pag" + pag;
                    e.appendChild(div);
                    div.insertAdjacentHTML("beforeend", "<p>" + t.pages[pag]);
                }
              console.log(e)
              }
              create_DOM_tree()
              // !!!!!!!!!!!!!! In questa versione o() semplicemente trasforma l'elemento da mostrare da nascosto a visibile
              function o(){
                for(let j = 0; j < t.pages.length; j++){
                    var identity = "pag" + j;
                    var divv = document.getElementById(identity)
                    divv.hidden = true
                    if (j==s) {divv.hidden=false}
                }
              }
              function c() {
                p(), ++s >= t.pages.length ? u() : o();
              }
              function y() {
                p(), s--, o();
              }
              function p() {
                var e = performance.now(),
                  t = Math.round(e - r);
                n.push({ page_index: s, viewing_time: t }), (r = e);
              }
              var u = function () {
                t.allow_keys && a.jsPsych.pluginAPI.cancelKeyboardResponse(_),
                  (e.innerHTML = "");
                var s = {
                  view_history: n,
                  rt: Math.round(performance.now() - i),
                };
                a.jsPsych.finishTrial(s);
              };
              if ((o(), t.allow_keys))
                var _ = this.jsPsych.pluginAPI.getKeyboardResponse({
                  callback_function: function e(n) {
                    (_ = a.jsPsych.pluginAPI.getKeyboardResponse({
                      callback_function: e,
                      valid_responses: [t.key_forward, t.key_backward],
                      rt_method: "performance",
                      persist: !1,
                      allow_held_key: !1,
                    })),
                      a.jsPsych.pluginAPI.compareKeys(n.key, t.key_backward) &&
                        0 !== s &&
                        t.allow_backward &&
                        y(),
                      a.jsPsych.pluginAPI.compareKeys(n.key, t.key_forward) &&
                        c();
                  },
                  valid_responses: [t.key_forward, t.key_backward],
                  rt_method: "performance",
                  persist: !1,
                });
            },
          },
          {
            key: "simulate",
            value: function (e, t, a, s) {
              "data-only" == t && (s(), this.simulate_data_only(e, a)),
                "visual" == t && this.simulate_visual(e, a, s);
            },
          },
          {
            key: "create_simulation_data",
            value: function (e, t) {
              for (var a = 0, s = 0, n = []; a !== e.pages.length; ) {
                var i = this.jsPsych.randomization.sampleExGaussian(
                  3e3,
                  300,
                  1 / 300
                );
                n.push({ page_index: a, viewing_time: i }),
                  (s += i),
                  0 != a && e.allow_backward
                    ? 1 == this.jsPsych.randomization.sampleBernoulli(0.9)
                      ? a++
                      : a--
                    : a++;
              }
              var r = { view_history: n, rt: s },
                l = this.jsPsych.pluginAPI.mergeSimulationData(r, t);
              return (
                this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e, l), l
              );
            },
          },
          {
            key: "simulate_data_only",
            value: function (e, t) {
              var a = this.create_simulation_data(e, t);
              this.jsPsych.finishTrial(a);
            },
          },
          {
            key: "simulate_visual",
            value: function (e, t, a) {
              var s = this,
                n = this.create_simulation_data(e, t),
                i = this.jsPsych.getDisplayElement();
              this.trial(i, e), a();
              for (
                var r,
                  l = function (t) {
                    e.allow_keys
                      ? s.jsPsych.pluginAPI.pressKey(e.key_forward, t)
                      : e.show_clickable_nav &&
                        s.jsPsych.pluginAPI.clickTarget(
                          i.querySelector("#jspsych-instructions-next"),
                          t
                        );
                  },
                  o = 0,
                  c = 0,
                  y = 0;
                y < n.view_history.length;
                y++
              )
                y == n.view_history.length - 1
                  ? l(c + n.view_history[y].viewing_time)
                  : (n.view_history[y + 1].page_index > o &&
                      l(c + n.view_history[y].viewing_time),
                    n.view_history[y + 1].page_index < o &&
                      ((r = c + n.view_history[y].viewing_time),
                      e.allow_keys
                        ? s.jsPsych.pluginAPI.pressKey(e.key_backward, r)
                        : e.show_clickable_nav &&
                          s.jsPsych.pluginAPI.clickTarget(
                            i.querySelector("#jspsych-instructions-back"),
                            r
                          )),
                    (c += n.view_history[y].viewing_time),
                    (o = n.view_history[y + 1].page_index));
            },
          },
        ]),
        s && t(a.prototype, s),
        n && t(a, n),
        Object.defineProperty(a, "prototype", { writable: !1 }),
        e
      );
    })();
  return (s.info = a), s;
})(jsPsychModule);
//# sourceMappingURL=index.browser.min.js.map
