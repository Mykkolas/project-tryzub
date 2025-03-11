// @ts-nocheck
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper/bundle';
/* import 'swiper/css/bundle'; */

export function initAccordion() {
    new Accordion('.about .accordion-container', {
        openOnInit: [0],
    });
}

export function initSwiper() {
    new Swiper('.about .swiper', {
        slidesPerView: 2,

        autoplay: {
            delay: 1500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
        },

        spaceBetween: 0,

        loop: true,

        mousewheel: true,

        keyboard: {
            enabled: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 6,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
        },

        speed: 1000,

        grabCursor: true,
    });
}