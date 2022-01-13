function fancyDesignerHandler(){

  const uploadsFolder = "https://slusarcik.cz/shoptet/luvcase/images/";

  $("body").append(`
  <div class="band-designer-modal" style="display: none;">
    <div class="band-designer-close"></div>
    <div class="band-designer-wrapper">
      <div id="band-designer"
      class="fpd-container fpd-shadow-1 fpd-bottom-actions-centered fpd-clearfix fpd-sidebar-right fpd-tabs fpd-tabs-side fpd-grid-columns-2 fpd-views-arrowed fpd-views-inside-left fpd-ui-theme- fpd-sidebar fpd-module-visible fpd-device-desktop">
      </div>
    </div>
    <div class="band-designer-action">
      <button class="btn btn-conversion">Uložit a pokračovat</button>
    </div>
  </div>`);

  $(".add-to-cart .add-to-cart-button").attr('style','display:none !important');

  let designerInitialized = false;

  $.getJSON("assets/json/designerProducts.json", function (data) {
    let prodJson = data;
    $("#show-fpd").click(() => {
      if ($("body").hasClass("disabled-add-to-cart")) {
        $(".add-to-cart-button").trigger("click");
        return;
      }
      $(".band-designer-modal").show();
      let def = "default";
      if (!designerInitialized) {
        var bandDesignerObj = $("#band-designer"),
          designerSetup = {
            templatesDirectory: "assets/html/",
            langJSON: "lang/default.json",
            productsJSON: prodJson[def].productJson,
            stageWidth: 1200,
            editorMode: false,
            editorBoxParameters: ["left", "top", "angle", "fill", "width", "height", "fontSize", "scaleX", "scaleY"],
            smartGuides: true,
            hideDialogOnAdd: true,
            mobileGesturesBehaviour: "pinchImageScale",
            fabricCanvasOptions: {
              allowTouchScrolling: 1,
              perPixelTargetFind: 0,
            },
            fonts: [
              {
                name: "Times New Roman",
              },
              {
                name: "Pacifico",
                url: "google",
              },
              {
                name: "Arial",
              },
              {
                name: "Lobster",
                url: "google",
              },
            ],
            customTextParameters: {
              colors: true,
              removable: true,
              resizable: true,
              draggable: true,
              rotatable: true,
              autoCenter: true,
              autoSelect: true,
              boundingBox: "Plate",
              boundingBoxMode: "clipping",
              fontFamily: "Arial",
              fontSize: 36,
            },
            customImageParameters: {
              draggable: true,
              removable: true,
              resizable: true,
              rotatable: true,
              autoCenter: true,
              autoSelect: true,
              minH: 500,
              minW: 350,
              maxH: 5000,
              maxW: 5000,
              minDPI: 0,
              boundingBox: "Plate",
              boundingBoxMode: "clipping",
            },
            actions: {
              top: ["download", "snap"],
              right: ["reset-product", "ruler"],
              bottom: ["undo", "redo"],
              left: ["manage-layers"],
            },
            customImageAjaxSettings: {
              //url: "https://slusarcik.cz/shoptet/luvcase/custom-image-handler.php",
              data: {
                saveOnServer: 1,
                //uploadsDir: "/data/web/virtuals/90306/virtual/www/domains/slusarcik.cz/shoptet/luvcase/images",
                //uploadsDirURL: "https://slusarcik.cz/shoptet/luvcase/images/",
              },
            },
          },
          fancyInit = new FancyProductDesigner(bandDesignerObj, designerSetup);
        console.log(bandDesignerObj);
        designerInitialized = true;
        $(".band-designer-close").click(() => {
          $(".band-designer-modal").hide();
        });
        let localVar = {};
        $(".band-designer-action>button").click(() => {
          $(".band-designer-modal").hide();
          let print = fancyInit.getPrintOrderData();
          print.preview = fancyInit.getViewsDataURL();
          /*
          fancyInit.getProductDataURL(function (preview) {
            print.preview = preview;
            $.ajax({
              url: "https://slusarcik.cz/shoptet/luvcase/save-svg.php",
              type: "POST",
              contentType: "application/json",
              data: JSON.stringify(print),
              success: function (data) {
                console.log(data);
                if (data.status == "success") {
                  console.log("Success AJAX");
                }

                if (JSON.stringify(localVar) == "{}") {
                  $(".add-to-cart-button").click(h);
                  function h(e) {
                    e.preventDefault();
                    if (localStorage.getItem("designs") == null) {
                      let storageDesigns = [];
                      storageDesigns.push(localVar);
                      localStorage.setItem("designs", JSON.stringify(storageDesigns));
                    } else {
                      let storageDesigns = JSON.parse(localStorage.getItem("designs"));
                      storageDesigns.push(localVar);
                      localStorage.setItem("designs", JSON.stringify(storageDesigns));
                    }
                    $(this).unbind("click").trigger("click");
                    $(this).click(h);
                  }
                }
                var ajaxData = JSON.parse(data);
                localVar = {
                  svgUrl: ajaxData.SVGurl,
                  preview: ajaxData.PNGurl,
                  fonts: print.used_fonts,
                };

                $(".p-image > a.p-main-image").attr("href", ajaxData.PNGurl);
                $(".p-image > a.p-main-image > img").attr("src", ajaxData.PNGurl);
                $(".p-image > a.p-main-image > img").addClass("designer-preview-img");
                //alert("Toto okno je pouze pro testovací účely. Váš design najdete na adrese: " + ajaxData.PNGurl);
              },
              error: function () {
                console.log("Cannot upload SVG to server..");
              },
            });
            $("#show-fpd").text("Upravit design");
            $(".add-to-cart").show();
          });
          */
        });
      }
    });
  });
}

jQuery(function () {
  if (jQuery("body").hasClass("fpd-loaded")) {
    //fancyDesignerHandler();
  }
  console.log("WORKS");
});