import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');

const createGalleryItemMarkup = ({ description, original, preview }) => {
  return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
};
const renderGalleryMarkup = () => {
  galleryContainerEl.innerHTML = galleryItems.map(createGalleryItemMarkup).join('');
};

renderGalleryMarkup();
new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
