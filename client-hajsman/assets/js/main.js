$(function() {
  jQuery("body").addClass("jquery-loaded");
  jQuery(".site-msg.information").hide().insertAfter(jQuery("#header")).show();
  jQuery(".navigation-in ul").css("justify-content","center");
  jQuery(".p-thumbnails-wrapper").insertBefore(jQuery(".p-image"));
  jQuery(".p-final-price-wrapper").insertBefore(jQuery(".p-short-description"));
  $(".menu-level-2 li.has-third-level").on({
    mouseenter: function () {
      jQuery(this).find(".menu-level-3").addClass("visible-item")
    },
    mouseleave: function () {
      jQuery(this).find(".menu-level-3").removeClass("visible-item");
    }
  });
});