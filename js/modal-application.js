const closeButton = document.querySelector("#closeBtn");
const btnApplication = document.querySelector("#btnApplication");

const backDropApplication = document.querySelector(
  ".backdrop-modal-leave-application"
);

closeButton.addEventListener("click", closeModal);
btnApplication.addEventListener("click", modalSendAplication);

function closeModal(e) {
  console.log(e.target);
  console.log("close");
  backDropApplication.classList.toggle("is-hidden");
}
function modalSendAplication(e) {
  console.log("start");
  backDropApplication.classList.remove("is-hidden");
}
