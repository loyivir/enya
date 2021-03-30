$(document).ready(function() {
  
// Mobile menu
let menuButton = document.querySelector(".header__menu");
menuButton.addEventListener("click", function(){  
  document.querySelector(".header__nav").classList.toggle("header__nav_visible");
});
});
