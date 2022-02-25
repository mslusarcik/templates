$(function() {
  jQuery("body").addClass("jquery-loaded");
  $(".target").toggle();
  $(".read-more-button").click(function(e){
    $(this).parent().find("span").toggle();
    e.preventDefault;
  });
  $.fn.openMobileMenu = function(){
    var thus = $(this);
    $("body").addClass("mobile-menu-triggered");
    $(thus).addClass("active");
    $(".navigation__list_close_button").click(function() {
      $("body").removeClass("mobile-menu-triggered");
      $(thus).removeClass("active");
    });
  };
  $('.navigation__menu_icon').click(function() {
    $('.navigation__items').openMobileMenu(); // would only alter div.someElement
  });
  $.fn.jsScroll = function(){
    // Select all links with hashes
    $('a.js-scroll')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 350, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
  };
  $('.js-scroll').jsScroll();
  if (window.matchMedia("(max-width: 1200px)").matches) {
    $('.homepage-type .services-slider').slick({
      dots: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      cssEase: 'linear',
      infinite: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.homepage-type .reviews-slider').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1, 
      slidesToScroll: 1, 
      infinite: true, 
    });
    $('.homepage-type .partners-slider').slick({
      slidesToShow: 2, 
      slidesToScroll: 2,
      dots: true,
      arrows: false,
    });
  }
  $('.services-type .reviews-slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    infinite: false, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
});