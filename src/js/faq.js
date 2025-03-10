export function initializeFAQAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");
    const isDesktop = window.innerWidth >  1440; 

    faqItems.forEach((item, index) => {
        const toggleButton = item.querySelector(".faq-btn");
        const content = item.querySelector(".faq-answer");

        if (isDesktop || index < 3) {
            item.classList.add("is-open");
            content.style.height = content.scrollHeight + "px";
        } else {
            content.style.height = "0";
            content.style.overflow = "hidden";
            content.style.transition = "height 0.3s ease";
        }

        toggleButton.addEventListener("click", () => {
            const isOpen = item.classList.contains("is-open");

            if (isOpen) {
                item.classList.remove("is-open");
                content.style.height = "0";
            } else {
                item.classList.add("is-open");
                content.style.height = content.scrollHeight + "px";
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", initializeFAQAccordion);