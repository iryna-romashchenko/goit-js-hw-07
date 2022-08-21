import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const imagesContainer = document.querySelector(".gallery");
const imageCard = onCreateGalleryItem(galleryItems);
let openOriginalImage;

imagesContainer.insertAdjacentHTML("beforeend", imageCard);
imagesContainer.addEventListener("keydown", onEscToCloseImage);

function onCreateGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <div class ="gallery__item">
            <a class ="gallery__link" href='${original}'>
            <img
            class ="gallery__image lazyload"

            data-src = "${preview}"
            data-source = "${original}"
            alt = "${description}"
            />
            </a>
            </div>
        `;
    })
    .join("");
}
imagesContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  openOriginalImage = basicLightbox.create(`
    <img src = "${event.target.dataset.source}" width="1280" height ="900">`);
  openOriginalImage.show();
});
function onEscToCloseImage(event) {
  if (event.code !== "Escape") {
    return;
  }
  openOriginalImage.close();
}
