
// HEX TO RGB
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function hexToRgbString(hex) {
    var result = hexToRgb(hex);
    return "rgb(" + result.r + ", " + result.g + ", " + result.b + ")";
}

function hexToRgbaString(hex, alpha) {
    if (alpha > 1) {
        alpha = 1;
    } else if (alpha < 0) {
        alpha = 0;
    }
    var result = hexToRgb(hex);
    return "rgba(" + result.r + ", " + result.g + ", " + result.b + ", " + alpha + ")";
}



// RGB TO HEX
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

/*
This function expects something in the range of

    rgba(255, 255, 0, 0.25)

This function is designed to be forgiving of rgba or rgb.
It will throw away the alpha layer.
*/
function rgbStringToHex(rgb) {
    rgbStringToHex(rgb);
}

function rgbaStringToHex(rgb) {
    var result = /^rgb[a]?\(([\d]+)[ \n]*,[ \n]*([\d]+)[ \n]*,[ \n]*([\d]+)[ \n]*,?[ \n]*([.\d]+)?[ \n]*\)$/i.exec(rgb);
    console.log(result);
    return rgbToHex(parseInt(result[1]), parseInt(result[2]), parseInt(result[3]));
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
