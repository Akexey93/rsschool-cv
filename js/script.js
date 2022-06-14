const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".header__nav");
const bgOverlay = document.querySelector(".header__overlay");
const body = document.querySelector("body");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
  bgOverlay.classList.toggle("active");
  body.classList.toggle("active");
});

bgOverlay.addEventListener("click", () => {
  menuBtn.classList.remove("active");
  nav.classList.remove("active");
  bgOverlay.classList.remove("active");
  body.classList.remove("active");
});

document.querySelectorAll(".header__nav-item").forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    nav.classList.remove("active");
    bgOverlay.classList.remove("active");
    body.classList.remove("active");
  });
});
