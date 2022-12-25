// const counterRef = document.querySelector("#counter");
const incremenBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector("#value");

let counterValue = 0;

incremenBtnRef.addEventListener("click", incrementHandler);
decrementBtnRef.addEventListener("click", decrementHandler);

function incrementHandler() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

function decrementHandler() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}
