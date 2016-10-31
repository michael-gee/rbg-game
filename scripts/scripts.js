// Stores the number RBG values of generated number
var correctColor;
// Stores hex value of the RBG number generated
var colorHexVal;

function generateColor(mode = "hard") {

  // function that generated the red, green, and blue values for the rbg color
  function colorVal(){
    return Math.round(Math.random() * 255);
  }

  function pickNumber(){
    if(mode === "hard"){
      console.log(Math.floor(Math.random() * 6));
      return Math.floor(Math.random() * 6); // returns 0-5
    }else if(mode === "easy"){
      return Math.floor(Math.random() * 3); // returns 0-2
    }
  }

  let red, green, blue,
      redHex, greenHex, blueHex;
  
  red = colorVal();
    redHex = componentToHex(red);
  green = colorVal();
    greenHex = componentToHex(green);
  blue = colorVal(); 
    blueHex = componentToHex(blue);

  function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  colorHexVal = rgbToHex(redHex, blueHex, greenHex);

  correctColor = "rgb(" + red + ", " + green + ", " + blue + ")"; 

  document.querySelector("h1").textContent = correctColor.toUpperCase();



}

generateColor();
