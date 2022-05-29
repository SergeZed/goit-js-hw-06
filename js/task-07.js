const refs = {
  input: document.querySelector("input#font-size-control"),
  span: document.querySelector("span#text"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  const style = `font-size: ${event.currentTarget.value}px`;
  refs.span.setAttribute("style", style);
}
