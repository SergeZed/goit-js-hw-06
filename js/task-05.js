const refs = {
  input: document.querySelector("input#name-input"),
  span: document.querySelector("span#name-output"),
};

// const input = document.querySelector("input#name-input");
// const span = document.querySelector("span#name-output");

// refs.input.addEventListener("change", onInputChange);

// function onInputChange(event) {
//   console.log(event.currentTarget.value);
// }

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    refs.span.textContent = "Anonymous";
  } else {
    refs.span.textContent = event.currentTarget.value;
  }
}
