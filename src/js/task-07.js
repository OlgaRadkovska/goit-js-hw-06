const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const ChangeFontSize = (event) => {
  const fontSize = event.currentTarget.value;
  text.style.fontSize = `${fontSize}px`;
};

input.addEventListener("input", ChangeFontSize);
