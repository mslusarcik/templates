$(function() {
  jQuery("body").addClass("jquery-loaded");
  var swiper = new Swiper(".references-swiper", {
    spaceBetween: 250,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 250,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
  });
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    // Optional parameters
    loop: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var smoothScroll = new SmoothScroll('a[href*="#"]', {
    speed: 500
  });
});