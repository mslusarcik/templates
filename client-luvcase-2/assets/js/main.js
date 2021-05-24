setTimeout(function () {
  const uploadsFolder = "https://shoptetdoplnky.cz/dapfresh/uploads/";

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

  let designerInitialized = false;

  $.getJSON("/assets/json/designerProducts.json", function (data) {
    let prodJson = data;
    $("#show-fpd").click(() => {
      /*
        if ($("body").hasClass("disabled-add-to-cart")) {
          $(".add-to-cart-button").trigger("click");
          return;
        }
        */
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
            editorBoxParameters: [
              "left",
              "top",
              "angle",
              "fill",
              "width",
              "height",
              "fontSize",
              "scaleX",
              "scaleY",
            ],
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
              url: "https://slusarcik.cz/shoptet/luvcase/custom-image-handler.php",
              data: {
                saveOnServer: 1,
                uploadsDir: "/data/web/virtuals/90306/virtual/www/domains/slusarcik.cz/shoptet/luvcase/images",
                uploadsDirURL: "https://slusarcik.cz/shoptet/luvcase/images/",
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
        /*
        $(".band-designer-action>button").click(() => {
          $(".band-designer-modal").hide();
          let print = fancyInit.getPrintOrderData();
          print.preview = fancyInit.getViewsDataURL();
          fancyInit.getProductDataURL(function (preview) {
            print.preview = preview;
            $.ajax({
              url: "",
              type: "POST",
              contentType: "application/json",
              data: JSON.stringify(print),
              success: function (data) {
                if (JSON.stringify(localVar) == "{}") {
                  $(".add-to-cart-button").click(h);

                  function h(e) {
                    e.preventDefault();
                    if (localStorage.getItem("designs") == null) {
                      let _0x3955xe = [];
                      _0x3955xe.push(localVar);
                      localStorage.setItem("designs", JSON.stringify(_0x3955xe));
                    } else {
                      let _0x3955xe = JSON.parse(localStorage.getItem("designs"));
                      _0x3955xe.push(localVar);
                      localStorage.setItem("designs", JSON.stringify(_0x3955xe));
                    }
                    $(this).unbind("click").trigger("click");
                    $(this).click(h);
                  }
                }
                localVar = {
                  svgUrl: uploadsFolder + data + ".svg",
                  preview: uploadsFolder + data + ".png",
                  fonts: print.used_fonts,
                };
                $(".p-image.image > a.p-main-image").attr("href", uploadsFolder + data + ".png");
                $(".p-image.image > a.p-main-image > img").attr("src", uploadsFolder + data + ".png");
                $(".p-image.image > a.p-main-image > img").addClass("designer-preview-img");
              },
              error: function () {
                console.log("Cannot upload SVG to server..");
              },
            });
            $("#show-fpd").text("UPRAVIT NÁVRH");
            $(".add-to-cart").show();
          });
        });*/
      }
    });
  });
  console.log("Loaded.");
}, 3000);
