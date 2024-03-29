import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import images from './gallery-images';

const gallery = document.querySelector('.gallery');

const markup = images
    .map(({ preview, original, description }) => {
        return `
        <li class="gallery-item">
            <a class="gallery-link" href="${original}">
                <img class="gallery-image" src="${preview}" alt="${description}" />
            </a>
        </li>
    `
    })
    .join('');

gallery.insertAdjacentHTML('afterbegin', markup);


let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsPosition: 'bottom',
    captionsDelay: 250,
});
