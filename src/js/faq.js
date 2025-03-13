//@ts-nocheck
import Accordion from 'accordion-js';

new Accordion('.accordion-container', {
    showMultiple: true,
    duration: 900,
});

document.querySelector('.faq__list').addEventListener('click', event => {
    const triggerElement = event.target.closest('.ac-trigger');
    if (!triggerElement) return;
    const faqItem = triggerElement.closest('.ac');
    const arrowIconWrapper = triggerElement.querySelector('.faq__item-wrap-icon');

    arrowIconWrapper.classList.toggle('rotated', faqItem.classList.contains('is-active'));
});
