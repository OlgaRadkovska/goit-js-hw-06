function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const colorCode = document.querySelector(".color");

function ChangeBgColor(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorCode.textContent = color;
}

button.addEventListener("click", ChangeBgColor);
