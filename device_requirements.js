// calculating dimensions of the whole screen (sizes of canvas = sizes of whole screen):
let physicalScreenHeight = screen.height * window.devicePixelRatio;  //height is the dimension that regulates the size of the stimuli (on which the "singleSquareSide" is calculated)
let physicalScreenWidth = screen.width * window.devicePixelRatio;
let logicalPhysicalFraction = 1 / window.devicePixelRatio

// DEBUG
console.log("DPR is: " + window.devicePixelRatio)
console.log("Logical screen height (px) is: " + screen.height)
console.log("Logical screen width (px) is: " + screen.width)
console.log("Computed screen height (px) is: " + physicalScreenHeight)
console.log("Computed screen width (px) is: " + physicalScreenWidth)
console.log("Proportion physical pixel/logical pixel: " + logicalPhysicalFraction)



/* CHECKING DEVICE REQUIREMENTS and notifying user: */

// 1. vertical resolution is at least 1080px
let validVerticalResolutions = [1024, 1080, 1440, 1964]
if (!validVerticalResolutions.includes(physicalScreenHeight)) {
    var confirmZoom = confirm("If you are reading this message, make sure to SET YOUR BROWSER ZOOM TO 100% (you can regulate it in the browser options) and click OK.\nThe page will automatically reload and the message should disappear.\n\nIf it does not, the vertical resolution of your device is probably lower than 1024px.\nPlease open the experiment with a device that has higher vertical resolution, and if you still encounter problems, get in touch with the experimenter.");
    if (confirmZoom == true)
        window.location.reload(); 0
}

// 2. browser is different from Safari (does not allow keboard input when in FullScreen mode)
let isSafari = window.safari !== undefined
if (isSafari) alert("Please open the experiment link in a browser different from Safari.")

// 3. browser supports devicePixelContentBox: (TO ADAPT)
// function hasDPCBsupport() {
//     return new Promise(resolve => {
//         if (!("ResizeObserver" in self)) {
//             return resolve(false);
//         }
//         const ro = new ResizeObserver(entries => {
//             resolve(entries.every(entry => "devicePixelContentBoxSize" in entry));
//             ro.disconnect();
//         });
//         ro.observe(document.body, { box: ["device-pixel-content-box"] });
//     });
// }

// if (!(await hasDPCBsupport())) {
//     alert("Your browser does not support the <code>devicePixelContentBox</code> property on <code>ResizeObserver</code> yet. Please try this demo in Chrome Canary.<br>")
//     return;
// }