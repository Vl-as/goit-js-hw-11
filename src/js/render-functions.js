import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a');

const loader = document.querySelector('.loader');

export function createGallery(images) {
  const markupGallery = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
    <li class="gallery-item">
        <a class="gallery-item-media" href="${largeImageURL}"><img class="gallery-item-img" src="${webformatURL}" alt="${tags}" title=""></a>
        <div class="gallery-item-description">
            <div class="gallery-item-param"><h3 class="gallery-item-property">Likes</h3><p class="gallery-item-value">${likes}</p></div>
            <div class="gallery-item-param"><h3 class="gallery-item-property">Views</h3><p class="gallery-item-value">${views}</p></div>
            <div class="gallery-item-param"><h3 class="gallery-item-property">Comments</h3><p class="gallery-item-value">${comments}</p></div>
            <div class="gallery-item-param"><h3 class="gallery-item-property">Downloads</h3><p class="gallery-item-value">${downloads}</p></div>
        </div>
    </li>
        `;
      }
    )
    .join('');

  gallery.innerHTML = markupGallery;
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-open');
}

export function hideLoader() {
  loader.classList.remove('is-open');
}
