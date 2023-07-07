const closeButton = document.querySelector("[closeBtn]");
const btnOrderCertificate = document.querySelector("[btnOrderCertificate]");

const backDrop = document.querySelector(".backdrop-modal-leave-application");

closeButton.addEventListener("click", closeModal);
btnOrderCertificate.addEventListener("click", openModal);

function closeModal(e) {
  backDrop.classList.add("is-hidden");
}

function openModal(e) {
  backDrop.classList.remove("is-hidden");
}
