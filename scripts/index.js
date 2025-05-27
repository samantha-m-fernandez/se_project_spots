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

  function fillEditProfileForm() {
    inputName.value = profileNameDisplay.textContent;
    inputDescription.value = profileDescriptionDisplay.textContent;
  }

  editProfileBtn.addEventListener("click", () => {
    fillEditProfileForm();
    editProfileModal.classList.add("modal_is-opened");
  });

  editProfileClose.addEventListener("click", () => {
    editProfileModal.classList.remove("modal_is-opened");
  });

  editProfileForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    profileNameDisplay.textContent = inputName.value;
    profileDescriptionDisplay.textContent = inputDescription.value;
    editProfileModal.classList.remove("modal_is-opened");
  });

  newPostBtn.addEventListener("click", () => {
    newPostModal.classList.add("modal_is-opened");
  });

  newPostClose.addEventListener("click", () => {
    newPostModal.classList.remove("modal_is-opened");
  });

  newPostForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const imageLink = newPostForm.querySelector("#post-image-input").value;
    const caption = newPostForm.querySelector("#post-caption-input").value;
    console.log({ imageLink, caption });
    newPostModal.classList.remove("modal_is-opened");
  });
});
