// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close js code
let profileArrow = document.querySelector(".profile-arrow");
profileArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};
let servicesArrow = document.querySelector(".pelayanan-arrow");
servicesArrow.onclick = function () {
  navLinks.classList.toggle("show2");
};
let galerryArrow = document.querySelector(".galeri-arrow");
galerryArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};
