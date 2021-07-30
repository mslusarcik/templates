jQuery(function () {
  if (jQuery("body").hasClass("in-vlastni-design-krytu")) {
    var showFpdButtonHtml = `<a href="#" class="btn btn-primary text-center" id="show-fpd">Navrhnout motiv</a>`
    jQuery("showFpdButtonHtml").insertAfter(jQuery("body .p-to-cart-block"));
    jQuery("body").addClass("fpd-loaded");
  }
});