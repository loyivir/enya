$(document).ready(function() {
  
// Mobile menu
let menuButton = document.querySelector(".header__menu");
menuButton.addEventListener("click", function(){  
  document.querySelector(".header__nav").classList.toggle("header__nav_visible");
});

  const portfolioSwiper = new Swiper('.portfolio-swiper', {
  // Optional parameters
  loop: false,
  slidesPerView: 4,   
  slidesPerGroup: 1,  
      centeredSlides: false,
      direction: 'vertical',
      slidesPerGroupSkip: 0,
  spaceBetween: 0,
  keyboard: {        
        enabled: true,
        onlyInViewport: true,
      },
  // Navigation arrows
  navigation: {
    nextEl: '.portfolio__button_next',
    prevEl: '.portfolio__button_prev',
  },
  breakpoints:     
       {
        992: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          direction: 'horizontal',
           centeredSlides: false,
        },
         870: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          direction: 'horizontal',
           centeredSlides: false,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          direction: 'horizontal',
             centeredSlides: false,
             slidesPerGroupSkip: 1,
        },
      }
});
// Initialize portfolio slider
});
