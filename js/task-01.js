const navEl = document.querySelector("ul#categories");

const navHeadEl = navEl.querySelectorAll("li.item");
console.log("Number of categories:", navHeadEl.length);
console.log("\n");

const navCategory0El = navEl.querySelectorAll("h2");
console.log("Category:", navCategory0El[0].textContent);

const navELements = navEl.querySelectorAll("ul");
navELements.forEach((elem) => {
  const navElementCount = elem.querySelectorAll("li");
  console.log("Elements:", navElementCount.length);
  console.log("\n");
});
