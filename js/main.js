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
// Modals
let modalBtn = $("[data-toggle=modal]");
let closeModalBtn = $(".modal__close");
closeModalBtn.on('click', closeModal);
modalBtn.on('click', openModal);
function openModal() {
  let targetModal = $(this).attr("data-href"); 
    
  $(targetModal).find(".modal__overlay").addClass("modal__overlay_visible");
  $(targetModal).find(".modal-brief").addClass("modal_visible");
}
function closeModal(event) {
  event.preventDefault();
  const modal = $(".modal");
  $(modal).find(".modal__overlay_visible").removeClass("modal__overlay_visible");
  $(modal).find(".modal_visible").removeClass("modal_visible");
  
}
     function closeAllModal() {
      const modal = $(".modal");
      $(modal).find(".modal__overlay_visible").removeClass("modal__overlay_visible");
      $(modal).find(".modal_visible").removeClass("modal_visible");
    }
$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    closeModal(event);
    
  }
});
$(".modal__overlay").click(function(event) { 
closeAllModal()
});


// Validation

$("#brief").validate({
  
  errorClass: "invalid",
  rules: {    
      brief_name: {
      required: true,
      minlength: 2,
      maxlength: 32
    },
    brief_phone: {
      required: true,
      minlength: 17,
      maxlength: 17
    },
    brief_text: {
      required: false,
      minlength: 0,
      maxlength: 1000
    },
    brief_email: {
      required: true,
      email: true,
      minlength: 6,
      maxlength: 36
    }
  },
  messages: {
    brief_name: { required: "Пожалуйста, представьтесь",
    minlength: "Пожалуйста, введите хотя бы 2 символа"
  },
    brief_phone: {
      required: "Нам нужен ваш номер для связи",
     minlength: "Пожалуйста, введите полный номер"
    },    
    brief_email: {
      required: "Нам нужен адрес вашей почты для связи",
      email: "Пожалуйста, введите адрес вашей почты в формате name@domain.ru"
    }
  }
});

// Masking

$('.modal-brief__phone').mask('+7(000) 000-00-00');
// Prevent invalid submit
    var ids = ["#brief"];
    ids.forEach(function(it, i, ids) {
      var form = $(it);
      form.on('submit', function(e) {       
        var valid = form.valid();       
        if (valid)
        {
          
          send(e, 'send.php', form.attr('id')); 
          form.trigger("reset");
        } 
      });
    });
});
