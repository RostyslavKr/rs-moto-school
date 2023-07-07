const closeButton = document.querySelector("[closeBtn]");
const btnHaveCerteficate = document.querySelector("[isCertificate]");

const backDropHaveCertificate = document.querySelector(
  ".backdrop-modal-have-certificate"
);

closeButton.addEventListener("click", closeModal);
btnHaveCerteficate.addEventListener("click", openModal);

function closeModal(e) {
  console.log("close");
  backDropHaveCertificate.classList.add("is-hidden");
}
function openModal(e) {
  console.log("start");
  backDropHaveCertificate.classList.remove("is-hidden");
}
