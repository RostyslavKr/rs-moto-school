const closeButton = document.querySelector("[closeBtn]");
const btnApplication = document.querySelector("[btnApplication]");

const backDropApplication = document.querySelector(
  ".backdrop-modal-leave-application"
);

closeButton.addEventListener("click", closeModal);
btnApplication.addEventListener("click", openModal);

function closeModal(e) {
  backDropApplication.classList.add("is-hidden");
}

function openModal(e) {
  backDropApplication.classList.remove("is-hidden");
}
