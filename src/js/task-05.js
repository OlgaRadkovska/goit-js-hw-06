const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const inputHandler = (event) => {
  //   console.log(textInput.value);
  //   if (textInput.value === "") {
  //     output.textContent = "Anonymous";
  //   }
  output.textContent =
    textInput.value === "" ? "Anonymous" : event.currentTarget.value;
};

textInput.addEventListener("input", inputHandler);
