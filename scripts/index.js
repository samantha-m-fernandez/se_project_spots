const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];
document.addEventListener("DOMContentLoaded", () => {
  const profileNameDisplay = document.querySelector(".profile__name");
  const profileDescriptionDisplay = document.querySelector(
    ".profile__description"
  );

  const editProfileBtn = document.querySelector(".profile__edit-btn");
  const editProfileModal = document.querySelector("#edit-profile-modal");
  const editProfileClose = editProfileModal.querySelector(".modal__close-btn");
  const editProfileForm = editProfileModal.querySelector("form");
  const inputName = editProfileModal.querySelector("#profile-name-input");
  const inputDescription = editProfileModal.querySelector(
    "#profile-description-input"
  );

  const newPostBtn = document.querySelector(".profile__add-btn");
  const newPostModal = document.querySelector("#new-post-modal");
  const newPostClose = newPostModal.querySelector(".modal__close-btn");
  const newPostForm = newPostModal.querySelector("form");

  function openModal(modal) {
    modal.classList.add("modal_is-opened");
  }

  function closeModal(modal) {
    modal.classList.remove("modal_is-opened");
  }

  function fillEditProfileForm() {
    inputName.value = profileNameDisplay.textContent;
    inputDescription.value = profileDescriptionDisplay.textContent;
  }

  editProfileBtn.addEventListener("click", () => {
    fillEditProfileForm();
    openModal(editProfileModal);
  });

  editProfileClose.addEventListener("click", () => {
    closeModal(editProfileModal);
  });

  editProfileForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    profileNameDisplay.textContent = inputName.value;
    profileDescriptionDisplay.textContent = inputDescription.value;
    closeModal(editProfileModal);
  });

  newPostBtn.addEventListener("click", () => {
    openModal(newPostModal);
  });

  newPostClose.addEventListener("click", () => {
    closeModal(newPostModal);
  });

  newPostForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const imageLink = newPostForm.querySelector("#post-image-input").value;
    const caption = newPostForm.querySelector("#post-caption-input").value;
    console.log({ imageLink, caption });
    closeModal(newPostModal);
    newPostForm.reset();
  });
});
initialCards.forEach(function (card) {
  console.log("Name:", card.name);
  console.log("Link:", card.link);
});
