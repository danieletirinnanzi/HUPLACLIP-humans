// calculating dimensions of the whole screen (sizes of canvas = sizes of whole screen):
let physicalScreenHeight = screen.height * window.devicePixelRatio;  //height is the dimension that regulates the size of the stimuli (on which the "singleSquareSide" is calculated)
let physicalScreenWidth = screen.width * window.devicePixelRatio;
let logicalPhysicalFraction = 1 / window.devicePixelRatio

/* CHECKING DEVICE REQUIREMENTS and notifying user: */
// 1. vertical resolution is at least 1024px
let validVerticalResolutions = [1024, 1050, 1080, 1152, 1200, 1344, 1392, 1400, 1440, 1536, 1600, 1664, 1800, 1824, 1864, 1920, 1964, 2160, 2234, 2304, 2400, 2520, 2880, 3384] //TODO:CHANGE TO >= 1024, specifying to keep browser zoom fixed throughout the experiment
function showResolutionError() {
    document.body.innerHTML = `
        <div style="text-align: center; margin-top: 50px;">
            <p>If you are reading this message, make sure to SET YOUR BROWSER ZOOM TO 100% (you can change it in the browser options or by pressing "Ctrl +" / "Ctrl -" (Windows) or "⌥ ⌘ =" / "⌥ ⌘ -" (Mac) ) and click on "Reload Page".<br>The page will reload and this page should not be shown.</p><br>
            <p>The current vertical resolution of your device is ${physicalScreenHeight}px. A resolution of at least 1024px is required to run the experiment.</p><br><br>
            <p>To check the resolution of your device, you can go to the device settings.</p><br> 
            <p>If your current device does not meet this requirement, please open the experiment on a device with a higher vertical resolution.</p>
            <button onclick="window.location.reload()">Reload Page</button>
            <button onclick="window.location.href='https://google.com'">Abandon Experiment</button>
            <br> <br>
            <p>To report any issues, please contact the experimenter at <a href="mailto:dtirinna@sissa.it">dtirinna@sissa.it</a></p>
        </div>
    `;
}
console.log(physicalScreenHeight)

function checkVerticalResolution() {
    if (!validVerticalResolutions.includes(physicalScreenHeight)) {
        showResolutionError();
        return; // Stop further execution
    }
}

checkVerticalResolution();
// TO REMOVE
// // 2. browser is different from Safari (does not allow keboard input when in FullScreen mode) -> checked with "browser-check" plugin in index.html
// function showSafariError() {
//     document.body.innerHTML = `
//         <div style="text-align: center; margin-top: 50px;">
//             <p>Please open the experiment link in a browser different from Safari.</p><br><br>
//             <p>If you cannot use a different browser, please abandon the experiment using the button below.</p>
//             <button onclick="window.location.href='https://google.com'">Abandon Experiment</button>            
//             <br> <br>
//             <p>To report any issues, please contact the experimenter at <a href="mailto:dtirinna@sissa.it">dtirinna@sissa.it</a></p>        
//             </div>
//     `;
// }
// let isSafari = window.safari !== undefined
// if (isSafari) {
//     showSafariError();
// }