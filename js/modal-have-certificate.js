const closeButton = document.querySelector("#closeBtn");
const btnApplication = document.querySelector("#btnApplication");

const backDropHaveCertificate = document.querySelector(
  ".backdrop-modal-have-certificate"
);

closeButton.addEventListener("click", closeModal);
btnApplication.addEventListener("click", modalSendAplication);
function closeModal(e) {
  console.log("close");
  backDropApplication.classList.toggle("is-hidden");
}
function modalSendAplication(e) {
  console.log("start");
  backDropApplication.classList.remove("is-hidden");
}
