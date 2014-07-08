
// HEX TO RGB
function hexToRgb(hex, alpha) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var toString = function () {
        if (this.alpha == undefined) {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
        }
        if (this.alpha > 1) {
            this.alpha = 1;
        } else if (this.alpha < 0) {
            this.alpha = 0;
        }
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
    } 
    if (alpha == undefined) {
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
            toString: toString
        } : null;
    }
    if (alpha > 1) {
        alpha = 1;
    } else if (alpha < 0) {
        alpha = 0;
    }
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        alpha: alpha,
        toString: toString
    } : null;
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
