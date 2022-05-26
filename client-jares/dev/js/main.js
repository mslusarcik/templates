$(function() {
  jQuery("body").addClass("jquery-loaded");
  $(".navbar-toggler-icon").click(function(){
    $("body").toggleClass("menu-opened");
  });
  $(".js-scroll").click(function(e){
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    e.preventDefault();
  });
});