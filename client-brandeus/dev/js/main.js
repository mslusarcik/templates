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
  // Quick & dirty toggle to demonstrate modal toggle behavior
  $('.modal-toggle').on('click', function(e) {
    e.preventDefault();
    var id = $(this).data("modal-target")
    $(id).toggleClass('is-visible');
  });
  $('.modal-close').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.modal').toggleClass('is-visible');
  });
});