/* import js partials */
import { } from "./js/projects";
import "./js/header";
import "./js/covers";
import handleSubmit from "./js/footer";
import fetchReviews from "./js/reviews";

import { initAccordion, initSwiper } from './js/aboutme';

document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
    initSwiper();
});