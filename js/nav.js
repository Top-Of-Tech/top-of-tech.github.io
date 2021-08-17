const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", function() {
    this.classList.toggle("is-active");
    menu.classList.toggle("is-in-hamburger");
    nav.classList.toggle("border-gone");
});