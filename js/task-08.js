const refs = {
  email: document.querySelector("input[type=email]"),
  password: document.querySelector("input[type=password]"),
  button: document.querySelector("button[type=submit]"),
};

const form = document.querySelector(".login-form");

// refs.email.addEventListener("blur", onBlur);
// refs.password.addEventListener("blur", onBlur);
// refs.button.addEventListener("click", onClick);
form.addEventListener("submit", onSubmit);

// function onSubmit(event) {
//   event.preventDefault();

//   //   console.log(
//   //     typeof dataLength,
//   //     typeof event.currentTarget.value.length,
//   //     event.currentTarget.value.length !== dataLength
//   //   );

//   //   if (event.currentTarget.value.length !== dataLength) {
//   //     console.log(dataLength, event.currentTarget.value.length);
//   //     input.className = "invalid";
//   //   } else {
//   //     input.className = "valid";
//   //   }
// }

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const result = {
    email: email.value,
    password: password.value,
  };
  if (result.email === "" || result.password === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(result);
  event.currentTarget.reset();
}
