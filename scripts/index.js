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
