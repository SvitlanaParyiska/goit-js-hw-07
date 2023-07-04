import { galleryItems } from "./gallery-items.js";

// Change code below this line

const list = document.querySelector(".gallery");

const imageListArr = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
   </a>
</li>`;
  })
  .join("");

list.insertAdjacentHTML("beforeend", imageListArr);
list.addEventListener("click", stopDownload);

function stopDownload(event) {
  event.preventDefault();
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
