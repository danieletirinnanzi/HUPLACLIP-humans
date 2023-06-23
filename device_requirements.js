// calculating dimensions of the whole screen (sizes of canvas = sizes of whole screen):
let physicalScreenHeight = screen.height * window.devicePixelRatio;  //height is the dimension that regulates the size of the stimuli (on which the "singleSquareSide" is calculated)
let physicalScreenWidth = screen.width * window.devicePixelRatio;
let logicalPhysicalFraction = 1 / window.devicePixelRatio

/* CHECKING DEVICE REQUIREMENTS and notifying user: */
// 1. vertical resolution is at least 1080px
let validVerticalResolutions = [1024, 1080, 1440, 1964]
if (!validVerticalResolutions.includes(physicalScreenHeight)) {
    var confirmZoom = confirm(`If you are reading this message, make sure to SET YOUR BROWSER ZOOM TO 100% (you can change it in the browser options or by pressing "Ctrl +" / "Ctrl -" (Windows) or "⌥ ⌘ =" / "⌥ ⌘ -" (Mac) ) and click OK.\nThe page will automatically reload and this message should disappear.\n\nIf this message does not disappear after setting the browser zoom to 100%, the vertical resolution of your device is probably lower than 1024px.\nPlease open the experiment with a higher resolution device, and if you still encounter problems, get in touch with the experimenter at dtirinna@sissa.it.`);
    if (confirmZoom == true)
        window.location.reload(); 0
}

// 2. browser is different from Safari (does not allow keboard input when in FullScreen mode)
let isSafari = window.safari !== undefined
if (isSafari) alert("Please open the experiment link in a browser different from Safari.")