const burgerMenu = document.querySelector(".hamburger-menu");
const hiddenMenu = document.querySelector(".nav-links");
const hideX = document.querySelector(".exit-icon");

burgerMenu.addEventListener("click", function(){
    hiddenMenu.classList.toggle("shown");
    console.log("clicked!");
})

hideX.addEventListener("click", function(){
    hiddenMenu.classList.toggle("shown");
    console.log("hide Clicked!");
})