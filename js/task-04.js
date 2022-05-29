const minusBtn = document.querySelector("button[data-action=decrement]");
const plusBtn = document.querySelector("button[data-action=increment]");
const counterValueEl = document.querySelector("span");

let counterValue = 0;

function handleMinusButtonClick() {
  console.log("minus");
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}

function handlePlusButtonClick() {
  console.log("plus");
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}

minusBtn.addEventListener("click", handleMinusButtonClick);
plusBtn.addEventListener("click", handlePlusButtonClick);
