/*  //= components/script2.js - это для подключение дргуих файлов js  */

const popularSlider = new Swiper('.popular-slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
        nextEl: '.popular-slider-next',
        prevEl: '.popular-slider-prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        660: {
            slidesPerView: 2,
        }
    }
});

const reviewsSlider = new Swiper('.slider-reviews', {
    spaceBetween: 20,
    slidesPerView: 1,
    autoHeight: true,
    // Navigation arrows
    navigation: {
        nextEl: '.slider-reviews-next',
        prevEl: '.slider-reviews-prev',
    },
});
const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.querySelector.body;

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock');
    })
}
const filter = document.querySelector('.filter');

if (filter) {
    const items = document.querySelectorAll('.block-filter');

    items.forEach(item => {
        item.addEventListener('click', event => {
            console.log('gg')
            item.querySelector('.block-filter__dropdown').classList.toggle('_active');
            item.querySelector('.block-filter__icon').classList.toggle('_active');

            if (event.target.classList.contains('block-filter__item')) {
                item.querySelector('.block-filter__value').textContent = event.target.textContent;
            }
        })
    })
}
const galleryItems = document.querySelectorAll('.gallery__item');

if (galleryItems.length > 0) {
    galleryItems.forEach(item => {
        new Swiper(item, {
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
            },
            effect: 'fade',
        })
    })
}