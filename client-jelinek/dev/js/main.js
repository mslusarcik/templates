function replaceImageOnHover(){
  $(".change-image").mouseover(function() {
    var originalLink = $(this).attr("src");
    $(this).attr("src", $(this).attr("change-image-holder"));
    $(this).attr("change-image-holder", originalLink);
  })
  .mouseout(function() {
    var hoverLink = $(this).attr("src");
    $(this).attr("src", $(this).attr("change-image-holder"));
    $(this).attr("change-image-holder", hoverLink);
  });
}

$(function() {
  jQuery("body").addClass("jquery-loaded");
  replaceImageOnHover();
});