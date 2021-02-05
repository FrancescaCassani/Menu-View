// Vars
var navbar = document.querySelector(".navbar");
var menu = document.querySelector(".menu");

//Toggle function
function toggleHamb() {
    navbar.classList.toggle("showNav");
}

//Assegnazione funzione
menu.addEventListener("click", toggleHamb);





