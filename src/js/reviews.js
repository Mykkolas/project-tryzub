import axios from "axios";

const reviewsList = document.querySelector(".reviews-list");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn ");

export default async function fetchReviews() {
    try {
        const response = await axios.get("https://portfolio-js.b.goit.study/api/reviews");
        const reviews = response.data;

        if (reviews.length === 0) {
            reviewsList.innerHTML = "<li class='error'>Not found</li>";
            return;
        }

        reviewsList.innerHTML = reviews.map(review => `
            <li class="swiper-slide sliding-sw">
                <div class="review-item">    
                <img src="${review.avatar_url}" alt="${review.author}'s avatar" class="review-avatar" />
                  <p class="review-author">${review.author}</p>
                <p class="review-text">${review.review}</p>
                </div>
            </li>
        `).join("");

        initSwiper();
    } catch (error) {
        reviewsList.innerHTML = "<li class='error'>Not found</li>";
        console.error("Error fetching reviews:", error);
    }
}

function initSwiper() {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 1,// change dynamically
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1440: {
                slidesPerView: 4,
            },
        },
        on: {
            slideChange: function () {
                prevButton.disabled = this.isBeginning;
                nextButton.disabled = this.isEnd;
            }
        }
    });

    prevButton.disabled = swiper.isBeginning;
    nextButton.disabled = swiper.isEnd;
}

fetchReviews();
