function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input[type="number"]');
const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");

console.dir(inputRef);

const createBoxes = function (amount) {
  let size = 20;
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");

    const color = getRandomHexColor();

    size += 10;
    box.setAttribute(
      "style",
      `width:${size}px; height:${size}px; background-color: ${color};`
    );

    boxesRef.appendChild(box);
  }

  return boxesRef;
};

// console.log(createBoxes(3));

const handleRenderBtnRef = () => {
  const boxesAmountInput = inputRef.valueAsNumber;
  createBoxes(boxesAmountInput);
  inputRef.value = "";
};

const handleDestroyBtnRef = () => {
  boxesRef.innerHTML = "";
};

createBtnRef.addEventListener("click", handleRenderBtnRef);
destroyBtnRef.addEventListener("click", handleDestroyBtnRef);
