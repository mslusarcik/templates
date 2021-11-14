$(function() {
  jQuery("body").addClass("jquery-loaded");
  $('.basic-carousel').slick({
    dots: true,
    infinite: true,
    autoplay: true
  });
  $('.mobile-basic-carousel').slick({
    dots: true,
    infinite: true,
    autoplay: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick"
      }
    ]
  });
});