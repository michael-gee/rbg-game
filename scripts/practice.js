// Stores the number RBG values of generated number
var correctColor;
var colorHexVal;
var currentMode = 'hard';

// function that generated the red, green, and blue values for the rbg color
function colorVal(){
  return Math.round(Math.random() * 255);
}

function generateColor(currentMode, colorGen) {

  for(let d = 0; d <= 5; d++){
    document.getElementById(d.toString()).className = "color";
  }

  // instatiating variables and assigning them to their rgb color value and hex values
  let red, green, blue;
  red = colorVal();
  green = colorVal();
  blue = colorVal();

  correctColor = "rgb(" + red + ", " + green + ", " + blue + ")";

  // Update HTML of Header Section to display color to guess
  document.querySelector("h1").textContent = correctColor.toUpperCase();
  document.querySelector(".status").className = "status none";

  if(currentMode === 'easy'){
    // C LOOP
    for(let c = 0; c <= 2; c++){
      document.getElementById(c.toString()).style.backgroundColor = "rgb(" + colorVal() + ", " + colorVal() + ", " + colorVal() + ")";
    }
    generateCorrectColor(3);
  }else {
    // A LOOP
    for(let a = 0; a <= 5; a++){
      document.getElementById(a.toString()).style.backgroundColor = "rgb(" + colorVal() + ", " + colorVal() + ", " + colorVal() + ")";
    }
    generateCorrectColor(6);
  }

}// generateColor() bracket end

function easyMode(){
  if(currentMode !== "easy"){
    // sets current mode to EASY and changes html and css class styles accordingly
    currentMode = "easy";
    //udates nav bar button styles
    document.querySelector('.easy').className += ' active';
    document.querySelector('.hard').className += 'nav-text hard';

    // updates tiles display to only display 3
    document.querySelector('#row2').className += 'row none';

    //make it to where correct panel is within the first three tiles
      // B LOOP
    for(let b = 0; b <= 2; b++){
      if(document.getElementById(b.toString()).style.backgroundColor === correctColor){
        return false;
      }else if(document.getElementById(b.toString()).style.backgroundColor !== correctColor && b === 2){
        generateCorrectColor(3);
      }
    }
  } // top IF bracket end
}// easyMode() bracket end

function hardMode(){
  if(currentMode !== "hard"){
    // sets current mode to HARD and changes html and css class styles accordingly
    currentMode = "hard";
    document.querySelector('.hard').className += ' active';
    document.querySelector('.easy').className += 'nav-text easy';

    // updates tiles display to display all 6 tiles
    document.querySelector('#row2').className += 'row';
  }
}// hardMode() bracket end

function generateCorrectColor(num){
  // Generates Number Between 1 and 6 and displays background of correct color to that div with the id of the number generated
  let correctPanel = Math.floor(Math.random() * num).toString();

  document.getElementById(correctPanel).style.backgroundColor = correctColor;
}

generateColor(currentMode, colorVal);

function guessColor(id){
  let idNum = id;
  id = document.getElementById(id).style.backgroundColor;

if(id !== correctColor) {
    document.querySelector(".status").className = "status";
    document.querySelector(".status").innerHTML = "Try Again!";

    document.getElementById(idNum).className = "color none";
  }

  if(id === correctColor){
    document.querySelector(".status").className = "status";
    document.querySelector(".status").innerHTML = "<strong>Correct!</strong>";
    alert("Correct! Click 'NEW COLORS to play again!'");
  }
}
