let menu = document.querySelector(".menu-icon");

menu.onclick = () => {
  menu.classList.toggle("move");
};

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("move");
  navbar.classList.toggle("active");
});

const hearts = document.querySelectorAll(".rental-top .bx");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("bxs-heart");
    heart.classList.toggle("bx-heart");
    heart.style.color = heart.classList.contains("bxs-heart")
      ? "#fa7014"
      : "#818181";
  });
});

const startDate = document.getElementById("start-date");
const returnDate = document.getElementById("return-date");

startDate.addEventListener("change", () => {
  returnDate.min = startDate.value;
});

const searchIcon = document.querySelector(".bx-search");
const userIcon = document.querySelector(".user-icon");

const searchModal = document.getElementById("searchModal");
const profileModal = document.getElementById("profileModal");

const closeSearch = document.getElementById("closeSearch");
const closeProfile = document.getElementById("closeProfile");

searchIcon.addEventListener("click", (e) => {
  e.preventDefault();
  searchModal.style.display = "flex";
});

userIcon.addEventListener("click", (e) => {
  e.preventDefault();
  profileModal.style.display = "flex";
});

closeSearch.addEventListener("click", () => {
  searchModal.style.display = "none";
});

closeProfile.addEventListener("click", () => {
  profileModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === searchModal) searchModal.style.display = "none";
  if (e.target === profileModal) profileModal.style.display = "none";
});

const createProfileBtn = document.getElementById("createProfileBtn");
const profileModalBox = document.getElementById("profileModal");
const profileIcon = document.querySelector(".profile-circle");

createProfileBtn.addEventListener("click", () => {
  const nameInput = profileModalBox.querySelector("input[type='text']");
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter your name");
    return;
  }

  const firstLetter = name.charAt(0).toUpperCase();

  profileIcon.textContent = firstLetter;

  profileModalBox.style.display = "none";

  alert("Your Profile Has Been Created Successfully ✅");
});
