import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const imageListArr = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");

list.insertAdjacentHTML("beforeend", imageListArr);
list.addEventListener("click", showLargeImage);
let instance;

function modalClose(event) {
  if (event.code === "Escape") {
    instance.close();
    document.removeEventListener("keydown", modalClose);
  }
}

function showLargeImage(event) {
  event.preventDefault();
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}" width="100%" height="100%">
    </div>
`);
    instance.show();
    document.addEventListener("keydown", modalClose);
  }
}
