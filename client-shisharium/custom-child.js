/*
 * Disables e-mail input
 *
 */


function disableEmailInput(){
  if(jQuery("body").hasClass("in-krok-2") || jQuery("body").hasClass("klient-centrum")){
    jQuery(".co-box input#email").attr("readonly", "readonly").addClass("custom-disabled-button");
    jQuery(".co-box input#billFullName").attr("readonly", "readonly").addClass("custom-disabled-button");
  }
  if(jQuery("body").hasClass("in-krok-2")){
  	var name = jQuery("#billFullName").val();
		jQuery("#deliveryFullName").val(name).attr("readonly", "readonly").addClass("custom-disabled-button");
    setTimeout(function(){
    	jQuery("#another-shipping").click();
    }, 500);
  }
}

/*
 * Remove note from checkout
 *
 */

function removeNoteInCheckout(){
	if(jQuery("body").hasClass("in-krok-2")){
  	jQuery("input#add-note").parent(".form-group").hide();
  }
}

/*
 * Moves category perex and clone headline
 *

function moveCategoryPerex(){
	if(jQuery("body").hasClass("type-category") && jQuery('.category-perex').length) {
  	var categoryTitle = jQuery(".category-title").clone().children().remove().end().text();
  	jQuery(".category-perex").insertAfter(jQuery(".pagination-wrapper"));
    jQuery("<h2>" + categoryTitle + "</h2>").insertAfter(jQuery(".pagination-wrapper"));
    document.addEventListener('ShoptetDOMContentLoaded', function () {
      jQuery(".category-perex").insertAfter(jQuery(".pagination-wrapper").next("h2"));
      //jQuery("<h2>" + categoryTitle + "</h2>").insertAfter(jQuery(".pagination-wrapper"));
    });
  }
}
*/

/*
 * Moves brand perex
 *
 *

function moveBrandPerex(){
	if(jQuery("body").hasClass("in-znacka")) {
  	var brandTitle = jQuery(".category-title").clone().children().remove().end().text();
    jQuery(".category-title").nextUntil(".filters-wrapper").wrapAll("<div class='brand-perex'></div>");
    jQuery("#content").append(jQuery(".brand-perex"));
    jQuery("<h2>" + brandTitle + "</h2>").insertBefore(jQuery(".brand-perex"));
    document.addEventListener('ShoptetDOMContentLoaded', function () {
      jQuery(".brand-perex").insertAfter(jQuery(".pagination-wrapper").next("h2"));
    });
  }
}
*/

/*
 * Moves copyright
 *
 */

function extendCopyright(){
	jQuery(".copyright").append("<br/><strong>Zákaz prodeje tabákových výrobků, bylinných výrobků určených ke kouření a kuřáckých pomůcek osobám mladším 18 let.</strong>");
}

/*
 * Changes text logos to images
 *
 */


function changeTextLogosToImg(){
  if(jQuery("body").hasClass("type-manufacturers-listing")){
    jQuery("ul.manufacturers > li > ul > li > a").each(function() {
      //Vars
      var brandName = jQuery(this).text().toLowerCase().split(' ').join('-');
      var brandImage = new Image();
      brandImage.src = "https://www.shisharium.cz/user/documents/upload/logos/" + brandName + ".png";
      var thus = jQuery(this);

      checkImage(brandImage, brandImage.src)
        .on("error", function(e) {
        console.log("Image url doesn't exist");
      })
        .on("load", function(e) {
        jQuery(thus).text("");
        jQuery(thus).prepend("<img src='" + brandImage.src + "' />");
      })
    });
  }
}

function checkImage(imageObj, src) {
  return jQuery(imageObj).attr('src', src);
}

/*
 * INIT
 *
 */

jQuery(function () {
  disableEmailInput();
  //moveCategoryPerex();
  //moveBrandPerex();
  extendCopyright();
  removeNoteInCheckout();
  changeTextLogosToImg();
});