document.addEventListener("DOMContentLoaded", function () {
    const coversSection = document.querySelector(".covers");

    if (coversSection) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    coversSection.classList.add("animate"); 
                }
            });
        }, { threshold: 0.3 });

        observer.observe(coversSection);
    }
});