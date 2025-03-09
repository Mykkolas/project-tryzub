import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

document.addEventListener("DOMContentLoaded", function () {
    const accordion = new Accordion(".accordion", {
      duration: 400,
      showMultiple: false,
      openOnInit: [0],
    });
  

    setTimeout(() => {
      const firstItem = document.querySelector(".accordion-item");
      if (firstItem && !firstItem.classList.contains("is-active")) {
        firstItem.classList.add("is-active");
      }
    }, 100);
  });
