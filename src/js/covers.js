export function controlCoverAnimations() {
    const section = document.querySelector(".section-covers");
    if (!section) return;

    const images = document.querySelectorAll(".sliding-row img, .row-reversed img");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const playState = entry.isIntersecting ? "running" : "paused";
            images.forEach(img => img.style.animationPlayState = playState);
        });
    }, { threshold: 0.1 });

    observer.observe(section);
}
