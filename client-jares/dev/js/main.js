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
        jQuery(".form-success").css("display", "flex").hide().delay(600).fadeIn();
      },
      error: function () {
        jQuery("form.ajax-form").fadeOut(500);
        jQuery(".form-success").css("display", "flex").hide().delay(600).fadeIn();
      }
    });
  });
}

$(function() {
  jQuery("body").addClass("jquery-loaded");
  $(".navbar-toggler-icon").click(function(){
    $("body").toggleClass("menu-opened");
  });
  $(".js-scroll").click(function(e){
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    e.preventDefault();
  });
  ajaxSendForm();
});