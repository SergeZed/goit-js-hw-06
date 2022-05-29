// refs.input.addEventListener("focus", onInputFocus);
// refs.input.addEventListener("blur", onInputBlur);

// function onInputFocus() {
//   console.log("ssdads");
// }

// function onInputBlur() {
//   console.log("ssdasdadadafdfsads");
// }

const input = document.querySelector("input#validation-input");
const dataLength = +input.getAttribute("data-length");

input.addEventListener("blur", onBlur);

function onBlur(event) {
  console.log(
    typeof dataLength,
    typeof event.currentTarget.value.length,
    event.currentTarget.value.length !== dataLength
  );

  if (event.currentTarget.value.length !== dataLength) {
    console.log(dataLength, event.currentTarget.value.length);
    input.className = "invalid";
  } else {
    input.className = "valid";
  }
}
