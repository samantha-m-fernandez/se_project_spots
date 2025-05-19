document.addEventListener("DOMContentLoaded", () => {
  console.log("scripts/index.js loaded");

  const editProfileBtn = document.querySelector(".profile__edit-btn");
  const editProfileModal = document.querySelector("#edit-profile-modal");
  const editProfileClose = editProfileModal.querySelector(".modal__close-btn");

  const newPostBtn = document.querySelector(".profile__add-btn");
  const newPostModal = document.querySelector("#new-post-modal");
  const newPostClose = newPostModal.querySelector(".modal__close-btn");

  editProfileBtn.addEventListener("click", () => {
    console.log("Edit Profile clicked");
    editProfileModal.classList.add("modal_is-opened");
  });

  editProfileClose.addEventListener("click", () => {
    console.log("Edit Profile close clicked");
    editProfileModal.classList.remove("modal_is-opened");
  });

  newPostBtn.addEventListener("click", () => {
    console.log("New Post clicked");
    newPostModal.classList.add("modal_is-opened");
  });

  newPostClose.addEventListener("click", () => {
    console.log("New Post close clicked");
    newPostModal.classList.remove("modal_is-opened");
  });
});
