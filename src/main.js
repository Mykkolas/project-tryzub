/* import js partials */
import { } from "./js/projects";
import "./js/header";
import handleSubmit from "./js/footer";
import fetchReviews from "./js/reviews";

import { initAccordion, initSwiper } from './js/aboutme';

document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
    initSwiper();
});

import { controlCoverAnimations } from "./js/covers";

document.addEventListener("DOMContentLoaded", () => {
    controlCoverAnimations();
});

import "./js/faq"