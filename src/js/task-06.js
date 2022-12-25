const inputRef = document.querySelector('input[type="text"]');

console.log(inputRef);
console.log(inputRef.dataset.length);

inputRef.addEventListener("blur", inputHandler);

function inputHandler(event) {
  if (event.target.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");

    inputRef.classList.add("invalid");
  }
}
