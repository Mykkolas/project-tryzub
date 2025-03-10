
document.addEventListener("DOMContentLoaded", function () {
  const projectsSection = document.querySelector("#projects");
  if (!projectsSection) return;
  const projectsSwiperContainer = projectsSection.querySelector(".projects-swiper");
  const projectsPrevButton = projectsSection.querySelector(".projects-swiper-button-prev");
  const projectsNextButton = projectsSection.querySelector(".projects-swiper-button-next");
    
  const projectsSwiper = new Swiper(projectsSwiperContainer, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    effect: "slide",
    speed: 600,
    allowTouchMove: true,
    navigation: {
      nextEl: projectsNextButton,
      prevEl: projectsPrevButton,
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
    projectsPrevButton.disabled = swiper.isBeginning;
    projectsNextButton.disabled = swiper.isEnd;
  }
});
