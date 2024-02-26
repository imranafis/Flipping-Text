const container = document.querySelector(".container");
const textField = document.querySelector(".textField");
const text = "I LOVE YOU RIVA";
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let newText = "";

let i = 0,
  j = -1;

function colorChange() {
  container.classList.add("done");
  textField.classList.add("done");
}

function flippingText() {
  j++;
  textField.textContent = newText + alphabets[j];

  if (text[i] == alphabets[j]) {
    newText += alphabets[j];
    textField.textContent = newText;
    j = -1;
    i++;
  } else if (text[i] === " ") {
    newText += " ";
    textField.textContent = newText;
    j = -1;
    i++;
  }

  if (text == newText) {
    clearInterval(inter);
    setInterval(colorChange, 250);
  }
}

let inter = setInterval(flippingText, 100);
