function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  span: document.querySelector("span.color"),
  button: document.querySelector("button.change-color"),
};

refs.button.addEventListener("click", onClick);

function onClick(event) {
  const colorizer = getRandomHexColor();

  console.log(event.currentTarget.value);
  const style = `background-color: ${colorizer}`;
  refs.body.setAttribute("style", style);
  refs.span.textContent = colorizer;
}
