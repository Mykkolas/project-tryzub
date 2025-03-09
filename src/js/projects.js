
document.addEventListener("DOMContentLoaded", function () {
  const projectsSection = document.querySelector("#projects");
  if (!projectsSection) return;
  const projectsSwiperContainer = projectsSection.querySelector(".projects-swiper");
  const prevButton = projectsSection.querySelector(".swiper-button-prev");
  const nextButton = projectsSection.querySelector(".swiper-button-next");
    
  const projectsSwiper = new Swiper(projectsSwiperContainer, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    effect: "slide",
    speed: 600,
    allowTouchMove: true,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    on: {      
      init: function (swiper) {
        updateNavButtons(swiper);
      },      
      slideChange: function (swiper) {
        updateNavButtons(swiper);
      },
    },
  });

  function updateNavButtons(swiper) {
    prevButton.disabled = swiper.isBeginning;
    nextButton.disabled = swiper.isEnd;
  }
});
