let menu = document.querySelector(".menu");
let navUl = document.querySelector("nav ul");
menu.addEventListener("click", () => {
    navUl.classList.toggle("active");
menu.classList.toggle("active");
})