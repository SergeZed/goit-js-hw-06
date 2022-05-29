const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const listIngredientsEL = document.createElement('ul')

// let ingredientEl;
// let ingredientsEL = document.querySelector("ul#ingredients");
// for (let i = 0; i < ingredients.length; i++) {
//   ingredientEl = document.createElement("li");
//   ingredientEl.classList.add("item");
//   ingredientEl.textContent = ingredients[i];
//   ingredientsEL.appendChild(ingredientEl);
// }

// const ingredEl = ingredients.map((ingred) => {
//   const newListItem = document.createElement("li");
//   newListItem.classList.add("item");
//   newListItem.textContent = ingred;
//   return newListItem;
// });

// const ingredientsEL = document.querySelector("ul#ingredients");
// ingredientsEL.append(...ingredEl);

// const ingredient1 = document.createElement("li");
// ingredient1.classList.add("item");
// ingredient1.textContent = ingredients[0];

// const ingredient2 = document.createElement("li");
// ingredient2.classList.add("item");
// ingredient2.textContent = ingredients[1];

// const ingredient3 = document.createElement("li");
// ingredient3.classList.add("item");
// ingredient3.textContent = ingredients[2];

// const ingredient4 = document.createElement("li");
// ingredient4.classList.add("item");
// ingredient4.textContent = ingredients[3];

// const ingredient5 = document.createElement("li");
// ingredient5.classList.add("item");
// ingredient5.textContent = ingredients[4];

// const ingredient6 = document.createElement("li");
// ingredient6.classList.add("item");
// ingredient6.textContent = ingredients[5];

const ingredientsEL = document.querySelector("ul#ingredients");
const ingredient = ingredients.map((option) => {
  console.log(option);
  const ingredientListEl = document.createElement("li");
  ingredientListEl.classList.add("item");
  ingredientListEl.textContent = option;

  return ingredientListEl;
});

console.log(ingredient);

ingredientsEL.append(...ingredient);

// const ingredientsEL = document.querySelector("ul#ingredients");

// const array = [];
// for (let i = 0; i < ingredients.length; i++) {
//   const ingredientEl = document.createElement("li");
//   ingredientEl.classList.add("item");
//   ingredientEl.textContent = ingredients[i];
//   array.push(ingredientEl);
// }
// console.log(...array);
// ingredientsEL.appendChild(...array);
