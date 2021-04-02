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
  slidesPerGroup: 4,  
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
           centeredSlides: true,
           slidesPerGroupSkip: 0,
             slidesPerGroup: 1, 
        },
         870: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          direction: 'horizontal',
           centeredSlides: true,
           slidesPerGroupSkip: 0,
             slidesPerGroup: 1, 
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          direction: 'horizontal',            
             slidesPerGroupSkip: 0,
             slidesPerGroup: 1,  
             centeredSlides: true,
        },
      }
});
portfolioSwiper.slideNext(0, false);
// Initialize portfolio slider
  const feedbacksSwiper = new Swiper('.feedbacks-swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,   
  slidesPerGroup: 1,  
    
  keyboard: {        
        enabled: true,
        onlyInViewport: true,
      },
  // Navigation arrows
  navigation: {
    nextEl: '.feedbacks__button_next',
    prevEl: '.feedbacks__button_prev',
  },
  breakpoints:     
       {
          1200: {
          slidesPerView: 2,     
          slidesPerGroup: 2, 
          spaceBetween: 30,
        },

        992: {
          slidesPerView: 1,        
          slidesPerGroup: 1, 
        },
         870: {
          slidesPerView: 1,         
           slidesPerGroup: 1, 
        },
        768: {
          slidesPerView: 1,        
          slidesPerGroup: 1,  
            
        },
      }
});
// Initialize feedbacks slider
});
