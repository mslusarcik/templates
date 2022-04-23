$(function() {
  jQuery("body").addClass("jquery-loaded");
  $('.slider-centered-v1').slick({
    centerMode: true,
    centerPadding: '80px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});