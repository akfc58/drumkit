// Detecting click and keydown.
let buttonArray = document.querySelectorAll("button.drum");
for (let i = 0; i < buttonArray.length; i++) {
  buttonArray[i].addEventListener("click", function () {
    makeSoundByText(this.innerHTML);
    flashButton(this.innerHTML);
  });
  buttonArray[i].addEventListener("keydown", function (e) {
    makeSoundByText(e.key);
    flashButton(e.key);
  });
}
//make a sound according to html text or keydown key.
function makeSoundByText(text) {
  switch (text) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      let kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "l":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(text);
      break;
  }
}

function flashButton(key) {
  let button = document.querySelector("button." + key);
  button.classList.add("pressed");
  setTimeout(function() {
    // Code to be executed after 2 seconds
    button.classList.remove("pressed");
}, 200);
  
}
