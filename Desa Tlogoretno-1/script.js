// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
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

// Carousel

const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
  slides[currentIndex].classList.remove("active");
  slides[index].classList.add("active");
  currentIndex = index;
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

// Ganti slide setiap 3 detik
const interval = setInterval(nextSlide, 3000);

// // Berhenti interval saat mouse masuk carousel
// const carousel = document.querySelector(".carousel");
// carousel.addEventListener("mouseenter", () => {
//   clearInterval(interval);
// });

// // Mulai interval lagi saat mouse keluar dari carousel
// carousel.addEventListener("mouseleave", () => {
//   interval = setInterval(nextSlide, 5000);
// });
