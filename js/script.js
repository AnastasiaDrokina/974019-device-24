var linkContact = document.querySelector(".button-modal-contact");
var modalContact = document.querySelector(".modal-contact");
var closeModal = modalContact.querySelector(".modal-close");
var fullname = modalContact.querySelector('[name="fullname-field"]');
var email = modalContact.querySelector('[name="email-field"]');
var message = modalContact.querySelector('[name="message-field"]');
var modalForm = modalContact.querySelector(".modal-form");

linkContact.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalContact.classList.add("show");
  fullname.focus();
});

closeModal.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalContact.classList.remove("show");
  modalContact.classList.remove("modal-error");
  fullname.classList.remove("error");
  email.classList.remove("error");
  message.classList.remove("error");
});

modalForm.addEventListener("submit", function(evt) {
  if (!fullname.value || !email.value || !message.value) {
    evt.preventDefault();
    console.log("Нужно ввести имя и email");
    modalContact.classList.add("modal-error");
  }

  if (!fullname.value) {
    fullname.classList.add("error");
  }
  if (!email.value) {
    email.classList.add("error");
  }
  if (!message.value) {
    message.classList.add("error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalContact.classList.contains("show")) {
      modalContact.classList.remove("show");
      modalContact.classList.remove("modal-error");
      fullname.classList.remove("error");
      email.classList.remove("error");
      message.classList.remove("error");
    }
  }
});

var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("show")) {
      mapPopup.classList.remove("show");
    }
  }
});
