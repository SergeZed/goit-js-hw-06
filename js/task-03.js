const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesEl = images.map((option) => {
  const listEl = `<li class="gallery__list"><img class="gallery__img" src="${option.url}" alt="${option.alt}"/></li>`;
  return listEl;
});

// const imagesEl = images.map((option) => {\
//   const listEl = `<li class="gallery__list"><img class="gallery__img" src="${option.url}" alt="${option.alt}"/></li>`

//   const listEl = document.createElement("li");
//   listEl.classList.add("gallery__list");

//   const imgEl = document.createElement("img");
//   imgEl.classList.add("gallery__img");
//   imgEl.src = option.url;
//   imgEl.alt = option.alt;
//   listEl.appendChild(imgEl);
//   console.log(listEl.outerHTML);
//   return listEl.outerHTML;
// });

const extImagesEl = imagesEl.join("");
// console.log(extImagesEl);

const imagesContainerEl = document.querySelector("ul.gallery");

// imagesContainerEl.append(...imagesEl);

imagesContainerEl.insertAdjacentHTML("afterbegin", extImagesEl);
