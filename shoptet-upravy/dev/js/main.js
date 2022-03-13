//Send form
function ajaxFormSender() {
  console.log("ajaxFormSender is running.");
  $("form.ajax-form").submit(function (e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr("action");

    $.ajax({
      type: "POST",
      dataType: "json",
      url: url,
      data: form.serialize(), // serializes the form's elements.
      success: function (data) {
        jQuery("form.ajax-form").fadeOut(500);
        jQuery(".make-first-step").fadeOut(500);
        jQuery(".form-success").css("display", "flex").hide().delay(600).fadeIn();
      },
      error: function () {
        jQuery("form.ajax-form").fadeOut(500);
        jQuery(".make-first-step").fadeOut(500);
        jQuery(".form-success").css("display", "flex").hide().delay(600).fadeIn();
      }
    });
  });
}

$(function() {
  jQuery("body").addClass("jquery-loaded");
  var swiper = new Swiper(".references-swiper", {
    spaceBetween: 250,
    autoHeight: false,
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
    autoHeight: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var smoothScroll = new SmoothScroll('a[href*="#"]', {
    speed: 600
  });
  // Focus on input
  var focusOnForm = function (event) {
    setTimeout(function() {
      document.querySelector("input.focus-on-me").focus();
    }, 350);
  };

  // Listen for scroll event
  document.addEventListener('scrollStop', focusOnForm, false);

  ajaxFormSender();
});