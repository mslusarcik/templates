$(function() {
  jQuery("body").addClass("jquery-loaded");
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
});