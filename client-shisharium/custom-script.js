function findRightId(){
  var eminenteProducts = ["26241", "24638", "27570"];
  for (var i = 0; i < eminenteProducts.length; i++) {
    var currProduct = jQuery("#product-detail-form input[name='productId']");
    if(currProduct.val() === eminenteProducts[i]){
      //console.log("TRUE");
      jQuery("body").addClass("id-"+eminenteProducts[i]);
      jQuery("body").addClass("type-eminente");
      return false;
    } else {
      //console.log("FALSE");
    }
  }
}

function closeLead(){
  jQuery(".lead-wrapper").fadeOut(300, function() { 
    jQuery(this).hide();
  });
}

function saveToStorage(){
  if(typeof(Storage) !== "undefined") {
    //Default
    if (window.sessionStorage && window.sessionStorage.getItem('leadClosed')){
      //console.log("LocalStorage leadClosed already exist.");
    } else {
      //console.log("LocalStorage leadClosed has been created.");
      sessionStorage.setItem("leadClosed", "open");
    }

    if (window.sessionStorage && window.sessionStorage.getItem('leadClosed') === "closed") {
      //console.log("Lead is closed.");
    } else if(window.sessionStorage && window.sessionStorage.getItem('leadClosed') === "open") {
      //console.log("Lead is open.");
      openLead();
      jQuery(".lead-wrapper .close-button").click(function(e) {
        e.preventDefault();
        sessionStorage.setItem("leadClosed", "closed");
        closeLead();
        //console.log("Storage saved. Lead keeps closed.");
      });
      jQuery(".lead-wrapper .link-overlay").click(function(e) {
        e.preventDefault();
				sessionStorage.setItem("leadClosed", "closed");
        window.location.href = jQuery(this).attr('href');
			});
    }
  }
}

function openLead(){
  jQuery(".lead-wrapper").fadeIn("slow");
}

function addPopUpBanner(){
  var popUpHtml = '<div class="lead-wrapper" style="display: none;"> <div class="lead-inner"> <a class="close-button"> <i class="icofont-close-line"></i> </a> <a class="link-overlay" href="/eminente/"></a> </div> </div> </a>';
  jQuery(".overall-wrapper").prepend(popUpHtml);
}

function addIconsInDetail(){
	var benefitsHtml = '<h3 class="benefits-headline">S námi se budete mít dobře</h3> <div class="benefits-icons-wrapper"> <div class="benefit-wrapper"> <i class="icofont-ui-call"></i> <span>S výběrem vám poradíme na&nbsp;čísle +420 737 584 582</span> </div> <div class="benefit-wrapper"> <i class="icofont-soft-drinks"></i> <span>Jako vaši osobní barmani si poradíme s každým dotazem</span> </div> <div class="benefit-wrapper"> <i class="icofont-truck"></i> <span>Po Praze k vám dovezeme balíček nad 2000 Kč zdarma</span> </div> <div class="benefit-wrapper"> <i class="icofont-info"></i> <span>Přijde vám, že nám tu něco chybí? Obraťte se na nás</span> </div> </div>';
  var dkLabIkony = jQuery("#dklabBanplusIkony");
  jQuery(benefitsHtml).insertAfter(dkLabIkony);
  dkLabIkony.hide();
}

function redesignHomepage(){
  jQuery.each( slidersHomepage, function( key, value ) {
    dkLabHomeSliders[key].destroy();
    dkLabHomeSliders[key].addClass("promoted");
    jQuery(".homepage-products-heading-" + slidersHomepage[key].sectionId).addClass("promoted");
    var hpSectionHtml = '<div class="products-section-wrapper"> <div class="image"> <img src="'+ slidersHomepage[key].sectionImage +'"/> </div> <div class="place-for-products-slider place-for-products-slider-'+ slidersHomepage[key].sectionId +'" > </div> </div>';
    var productsObj = jQuery(".homepage-products-" + slidersHomepage[key].sectionId);
    jQuery(hpSectionHtml).insertBefore(productsObj);
    jQuery(productsObj).prependTo(".place-for-products-slider-" + slidersHomepage[key].sectionId);
    
    if(slidersHomepage[key].sectionSide == "reverse"){
      productsObj.closest(".products-section-wrapper").addClass("reverse");
    }
    
    jQuery(productsObj).lightSlider({
      item: 2,
      autoWidth: false,
      slideMove: 1,
      slideMargin: 0,
      addClass: "dklabSliderplusHome promoted",
      mode: "slide",
      cssEasing: "ease",
      easing: "linear",
      speed: 200,
      auto: false,
      loop: true,
      prevHtml: "", 
      nextHtml: "",
      slideEndAnimation: true,
      pause: 2500,
      keyPress: false,
      controls: true,
      currentPagerPosition: "middle",
      enableTouch: true,
      enableDrag: true,
      freeMove: true,
      responsive: [ 
        { breakpoint: 768,
          settings: { 
            item: 1
          } 
        } 
      ]
    });
    
    var productsObjParent = productsObj.parent();
    var actionObj = productsObjParent.find(".lSAction"); 
    actionObj.insertBefore(productsObjParent);
  });
}

function checkSliders() {
  if(jQuery("body").hasClass("dklab-sliderplus")){
    //console.log("Got it!");
    setTimeout(function(){
      redesignHomepage();
    }, 2500);
  } else {
    //console.log("Nothing!");
    setTimeout(checkSliders, 500); //wait 500 ms, then try again
  }
}

function moveComgate() {
  var signatureObj = jQuery("#signature");
  if(signatureObj){
    jQuery(signatureObj).hide();
    jQuery(".custom-footer__banner113").insertAfter(jQuery(signatureObj));
  }
}

jQuery(function() {
  if(jQuery("body").hasClass("type-product")){
    findRightId();
    addIconsInDetail();
  }
  if(jQuery("body").hasClass("type-index")){
    checkSliders();
  }
  if(jQuery("body").hasClass("in-index") || jQuery("body").hasClass("type-category") || jQuery("body").hasClass("type-detail") || jQuery("body").hasClass("type-manufacturer-detail")) {
    addPopUpBanner();
    saveToStorage();
  }
  moveComgate();
});