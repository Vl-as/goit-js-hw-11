import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const searchValue = event.target.elements['search-text'].value.trim();

  if (!searchValue) return;

  clearGallery();
  showLoader();

  getImagesByQuery(searchValue)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topCenter',
          backgroundColor: '#cb534a',
        });
        return;
      }

      createGallery(hits);
    })
    .catch(() => {
      iziToast.show({
        message: 'Something went wrong. Please try again later.',
        position: 'topCenter',
        backgroundColor: '#cb534a',
      });
    })
    .finally(() => {
      hideLoader();
    });
}
