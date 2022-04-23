//Send form
function ajaxSendForm() {
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
  $("img.lazyload").lazyload();
  var swiper = new Swiper(".references-swiper", {
    spaceBetween: 50,
    autoHeight: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
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
    autoplay: false,
    centeredSlides: true,
    slidesPerView: 1,
    loop: false,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 1,
    },    
    breakpoints: {
      768: {
        autoHeight: false,
        loop: true,
        autoplay: {
          delay: 5000,
          pauseOnMouseEnter: true,
        },
        coverflowEffect: {
          depth: 250,
        },
        spaceBetween: 250,
      }
    }
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
  $(".focus-link").click(function(){
    setTimeout(function() {
      document.querySelector("input.focus-on-me").focus();
    }, 350);
  });

  ajaxSendForm();

  // document.querySelector('.lead-form-wrapper input[type=submit]').addEventListener('click', function() {
  //   fbq('track', 'Contact');
  //   console.log("Contact sent");
  // }, false);
  
  // document.querySelector('.ajax-form input[type=submit]').addEventListener('click', function() {
  //   fbq('track', 'Contact');
  //   console.log("Contact sent");
  // }, false);
});