const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const formEmail = form.email.value;
  const formPassword = form.password.value;
  const formData = { formEmail, formPassword };

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(formData);

  event.currentTarget.reset();
}
