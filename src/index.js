import axios from "axios";

const AUTH_TOKEN = '24563783-7735736dbbde04e1573f56d07';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const refs = {
    form: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
};


 
function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
            return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
            </div>`;
        })
        .join('');
}