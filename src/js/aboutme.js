//@ts-nocheck
// import accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


const refs = {
    aboutAccordion: document.querySelector('.about-accordion'),
    swipSkill: document.querySelector('.about-swipe'),
    nextSlide: document.querySelector('.about-btn-next'),
    btnNext: document.querySelector('.about-btn-next'),
};

function initAccordion() {
    new accordion(refs.aboutAccordion, {
        openOnInit: [0], // first one is open
        duration: 2000,
        showMultiple: true,
    });

    const triggers = refs.aboutAccordion.querySelectorAll('.ac-trigger');

    triggers.forEach((trigger, index) => {
        const iconContainer = trigger.querySelector('.about-icon');

        if (index === 0) {

            iconContainer.classList.add('rotated'); // rotate
        }

        trigger.addEventListener('click', () => {
            const isActive = trigger.closest('.ac').classList.contains('is-active');
            iconContainer.classList.toggle('rotated', isActive);
        });
    });
}

function initSwiper() {
    const swiper = new Swiper(refs.swipSkill, {
        modules: [Navigation],
        navigation: {
            nextEl: refs.btnNext,
        },
        direction: 'horizontal',
        spaceBetween: 0,
        enabled: true,
        loop: true,
        watchOverflow: true,
        breakpoints: {
            375: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 6,
            },
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
    });

    refs.btnNext.addEventListener('click', () => swiper.slideNext());
}

export { initAccordion, initSwiper };