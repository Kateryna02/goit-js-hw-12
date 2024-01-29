// Описаний в документації
import SimpleLightbox from "simplelightbox";

// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const modal = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captions: true,
    captionsData: "alt",
    captionPosition: 'bottom',


});

const galleryContainer = document.querySelector('.gallery');



const galleryItem = ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" data-test="${largeImageURL}">
        </a>
        <div class="image-details">
           
            <div class="info-container">
                <span class="info-label">Likes:</span>
                <span class="info-value">${likes}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Views:</span>
                <span class="info-value">${views}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Comments:</span>
                <span class="info-value">${comments}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Downloads:</span>
                <span class="info-value">${downloads}</span>
            </div>
        </div>
    </li>`;
const gallery = (hits) => {
    console.log(hits);
    const galleryItemHtml = hits.map(galleryItem).join('');
    galleryContainer.innerHTML = galleryItemHtml;
    modal.refresh();

};


const form = document.getElementById('form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onSubmit)
function onSubmit(e) {

    e.preventDefault();
    loader.classList.remove('is-hidden');
    galleryContainer.innerHTML = "";
    const keyword = e.currentTarget.elements.search.value.trim();
    if (keyword !== '') {
        fetchImages(keyword);
    } else {


    }

};

function fetchImages(keyword) {
    const key = '42039867-09e41a1320e593858871044dc';
    const params = new URLSearchParams({
        key: key,
        q: keyword,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true'
    })
    const url = `https://pixabay.com/api/?${params}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.hits);
            if (data.hits.length > 0) {
                gallery(data.hits);
            } else {
                iziToast.error({
                    title: 'error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    messageColor: 'white',
                    backgroundColor: '#EF4040',

                })
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        }).finally(() => {
            loader.classList.add('is-hidden');
        });
}
