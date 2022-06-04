const navEl = document.querySelector("ul#categories");

const navHeadEl = navEl.querySelectorAll("li.item");
console.log("Number of categories:", navHeadEl.length);
console.log("\n");

navHeadEl.forEach((elem) => {
  const navCategoryEl = elem.querySelectorAll("h2");
  console.log("Category:", navCategoryEl[0].textContent);

  const navElementCount = elem.querySelectorAll("li");
  console.log("Elements:", navElementCount.length);
  console.log("\n");
});
