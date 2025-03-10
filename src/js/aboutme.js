import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

export function initializeAccordion() {
  document.addEventListener("DOMContentLoaded", function () {
    const accordion = new Accordion(".accordion", {
      duration: 400,
      showMultiple: false,
      openOnInit: [0],
      collapse: true,
    });

    setTimeout(() => {
      const firstItem = document.querySelector(".accordion-item");
      if (firstItem && !firstItem.classList.contains("is-open")) {
        firstItem.classList.add("is-open");
      }
    }, 100);

    const firstItem = document.querySelector(".accordion-item");
    if (firstItem) {
      if (!firstItem.classList.contains("is-open")) {
        firstItem.classList.add("is-open");
        
        const content = firstItem.querySelector(".accordion-content");
        if (content) {
          content.style.height = content.scrollHeight + "px";
        }
      }
    }

    const accordionItems = document.querySelectorAll(".accordion-item");
    accordionItems.forEach(item => {
      const toggleButton = item.querySelector(".accordion-toggle");
      
      toggleButton.addEventListener("click", () => {
        if (item.classList.contains("is-open")) {
          item.classList.remove("is-open");
          const content = item.querySelector(".accordion-content");
          if (content) {
            content.style.height = "0";
          }
        } else {
          item.classList.add("is-open");
          const content = item.querySelector(".accordion-content");
          if (content) {
            content.style.height = content.scrollHeight + "px";
          }
        }
      });
    });
  });
  
}

export function skillSwiper() {
  document.addEventListener("DOMContentLoaded", function () {
    skillSwiper();

    const swiper = new Swiper(".skills-sld", {
        slidesPerView: 1, // Динамічне оновлення
        spaceBetween: 16,
        loop: true, // Для безкінечної прокрутки
        navigation: {
            nextEl: ".swiper-btn-next",
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        a11y: {
          enabled: true, // Доступність
      },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 5,
            },
        }
    });
  });
}