import axios from "axios";

const orderForm = document.querySelector("form")
const emailInput = document.querySelector(".email-input")
const commentInput = document.querySelector(".comment-input")

const modalOverlay = document.querySelector(".modal-overlay")
const modalMessage = document.querySelector(".modal-message")
const closeModal = document.querySelector(".close-modal")
const emailContainer = document.querySelector(".email-container")

const feedbackMessage = document.createElement("span")
feedbackMessage.classList.add("status-span")
feedbackMessage.style.display = "none"
emailContainer.appendChild(feedbackMessage)

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email)
}

emailInput.addEventListener("input", function () {
    const emailValue = emailInput.value.trim()

    if (emailValue === "") {
        emailInput.classList.remove("error", "success")
        feedbackMessage.style.display = "none"
    } else if (validateEmail(emailValue)) {
        emailInput.classList.add("success")
        emailInput.classList.remove("error")
        feedbackMessage.style.color = "#4CAF50"
        feedbackMessage.textContent = ""
    } else {
        emailInput.classList.add("error")
        emailInput.classList.remove("success")
        feedbackMessage.style.color = "#ED3B44"
        feedbackMessage.textContent = ""
    }
});

emailInput.addEventListener("blur", function () {
    const emailValue = emailInput.value.trim()

    if (emailValue === "") {
        feedbackMessage.style.display = "none"
        emailInput.classList.remove("error", "success")
    } else if (validateEmail(emailValue)) {
        feedbackMessage.style.color = "#4CAF50"
        feedbackMessage.textContent = "Success!"
        feedbackMessage.style.display = "block"
        emailInput.classList.add("success")
        emailInput.classList.remove("error")
    } else {
        feedbackMessage.style.color = "#ED3B44"
        feedbackMessage.textContent = "Invalid input, try again"
        feedbackMessage.style.display = "block"
        emailInput.classList.add("error")
        emailInput.classList.remove("success")
    }
});

export default async function handleSubmit(e) {
    e.preventDefault();
    const email = emailInput.value.trim()
    const comment = commentInput.value.trim()

    if (!email || !comment) {
        showModal(`<h2>PLEASE FILL ALL THE FIELDS</h2>`)
        return
    }

    if (!validateEmail(email)) {
        feedbackMessage.style.color = "#ED3B44"
        feedbackMessage.textContent = "Invalid input!"
        feedbackMessage.style.display = "block"
        emailInput.classList.add("error")
        emailInput.classList.remove("success")
        return;
    }

    try {
        const response = await axios.post("https://portfolio-js.b.goit.study/api/requests", {
            email,
            comment,
        });
        const { title, message } = response.data;
        showModal(`<h2>${title}</h2> <p>${message}</p>`);

        emailInput.value = "";
        commentInput.value = ""
        emailInput.classList.remove("error", "success");
        feedbackMessage.style.display = "none"
    } catch (err) {
        showModal(`<p>Error: ${err.response?.data?.message || "Something went wrong. Please try again!"}</p>`);
    }
}

function showModal(message) {
    modalMessage.innerHTML = message;
    modalOverlay.style.display = "flex"
    document.body.classList.add("modal-open")

    document.addEventListener("keydown", closeOnEscape)
    modalOverlay.addEventListener("click", backdropClose)
}

function closeModalFunction() {
    modalOverlay.style.display = "none";
    document.body.classList.remove("modal-open");

    document.removeEventListener("keydown", closeOnEscape);
    modalOverlay.removeEventListener("click", backdropClose);
}

function closeOnEscape(e) {
    if (e.key === "Escape") {
        closeModalFunction();
    }
}

function backdropClose(e) {
    if (e.target === modalOverlay) {
        closeModalFunction();
    }
}

orderForm.addEventListener("submit", handleSubmit);
closeModal.addEventListener("click", closeModalFunction);
