function loadFPD(){
  var showFpdButtonHtml = `<a href="#" class="btn btn-primary" id="show-fpd">Vytvořit design</a>`
  jQuery(jQuery(".p-detail .add-to-cart")).append(showFpdButtonHtml);
  jQuery("body").addClass("fpd-loaded");
}

/*
function saveNote(){
	if(jQuery("body").hasClass("in-krok-2")){
    var storageDesigns = JSON.parse(localStorage.getItem("designs"));
    var storageSources = JSON.parse(localStorage.getItem("fpd_uploaded_images"));
    if(storageDesigns !== null){
      var storageSourcesLooped = "";
      for (var s = 0; s < storageSources.length; s++){
        storageSourcesLooped += storageSources[s].url + " \n";
      }
      var noteOriginal = jQuery("#remark").val();
      var note = "";
      if(noteOriginal) {
      	note = "Poznámka uživatele: " + noteOriginal + " \n";
      }
      note += "Náhled: " + storageDesigns[0].preview + " \n";
      note += "Zdroje: " + "\n" + storageSourcesLooped;
      $("#remark").val(note);
    }
  }
}
*/

function changeLinkToProduct(){
	var targetProduct = jQuery("ul.menu-level-1 > .menu-item-3518 > a");
	if(targetProduct){
  	$(targetProduct).attr("href", "/vlastni-design-fotografie/");
  }
}

jQuery(function () {
  if (jQuery("body").hasClass("in-vlastna-potlac")) {
    loadFPD();
    fancyDesignerHandler();
  }
  //changeLinkToProduct();
});

/*
shoptet.custom.postSuccessfulValidation = function(form) {
  saveNote();
  return true;
}
*/