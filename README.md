# Hex to RGB Conversion Functions

This is a small set of Javascript functions that can be used for converting CSS strings back and forth from hex and RGB/RGBA.


## Usage

There are two functions: `hexToRgb` and `rgbToHex`.


### `hexToRgb`

`hexToRgb` returns an object with `r`, `g`, and `b` properties.

```javascript
var color = hexToRgb("#1fbcff");

color.toString();  // rgb(31, 188, 255)

color.r;  // 31
color.g;  // 188
color.b;  // 255
```

`hexToRgb` can also accept an `alpha` value has a second parameter.  This allows the output of `rgba` strings.

```javascript
var color = hexToRgb("#1fbcff", 0.5);

color.toString();  // rgba(31, 188, 255, 0.5)

color.r;      // 31
color.g;      // 188
color.b;      // 255
color.alpha;  // 0.5
```


### `rgbToHex`

`rgbToHex` returns a hex string in the format `#ffffff`.  It can accept a wide variety of inputs.

```javascript
rgbToHex(31, 188, 255);  // #1fbcff

rgbToHex("rgb(31, 188, 255)");        // #1fbcff
rgbToHex("rgba(31, 188, 255, 0.5)");  // #1fbcff

```

`rgbToHex` can also accept the color objects produced by `hexToRgb`.

```javascript
var color = hexToRgb("#1fbcff");
rgbToHex(color);   //  #1fbcff


var color2 = hexToRgb("#1fbcff", 0.5);
rgbToHex(color2);  //  #1fbcff
```

Notice in the above examples that the alpha value is stripped since the hex strings don't support 
