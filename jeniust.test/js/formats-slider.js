const swiper = new Swiper('.swiper-container', {
  loop: true,
  
  slidesPerView: 1,
  spaceBetween: 20,
  
  breakpoints: {
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: '.pagination',
    bulletactivecllass: 'pagination-button-active',
  },
  navigation: {
    nextEl: '."carousel-button next',
    prevEl: '."carousel-button prev',
  },
});