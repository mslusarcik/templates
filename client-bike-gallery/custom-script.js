if ($("body").hasClass("type-category")) {
  var productsObj = $("#products");
}

function productAvailabilitiesHandler() {
  var productsAll = [];
  var successCustomCallback = function (response) {
    var stockCodes = (shoptet.stockAvailabilities.content = response.getPayload());
    var stockCodes = stockCodes.products;
    renameStockAvailability(stockCodes);
  };

  $(productsObj.find(".product .p")).each(function (i) {
    productsAll.push($(this).data("micro-product-id"));
  });

  shoptet.ajax.makeAjaxRequest(
    shoptet.config.stockAmountUrl + "?ids[]=" + productsAll.join("&ids[]="),
    shoptet.ajax.requestTypes.get,
    "",
    {
      success: successCustomCallback,
    },
    {
      "X-Shoptet-XHR": "Shoptet_Coo7ai",
    }
  );
}
function renameStockAvailability(stockCodes) {
  $.each(stockCodes, function (key) {
    var changeItSwitcher = false;
    //console.log("Key: " + key);
    var stockVariants = stockCodes[key].codes;
    $.each(stockVariants, function () {
      if (this["amount"] == "1") {
        //console.log('Has amount 1!');
        changeItSwitcher = true;
        return false;
      }
    });
    if (changeItSwitcher) {
      var targetProduct = jQuery(".product .p[data-micro-product-id='" + key + "']");
      var targetProductAvailability = targetProduct.find(".availability > span");
      if (targetProductAvailability.text().indexOf("dodavatele") > -1) {
        console.log("Přepsáno!");
        targetProductAvailability.text("Skladem na prodejně");
      }
    }
  });
}
function addHeadlineToFilter() {
  var stockInput = jQuery(".filter-sections input#stock");
  if (stockInput !== null) {
    jQuery("<h4><span>Dostupnost</span></h4>").insertBefore(stockInput);
  }
}

$(function () {
  if ($("body").hasClass("type-category")) {
    if (productsObj !== null) {
      productAvailabilitiesHandler();
    }
    addHeadlineToFilter();
  }
});

document.addEventListener("ShoptetDOMPageContentLoaded", function () {
  console.log("ShoptetDOMPageContentLoaded called!");
  if ($("body").hasClass("type-category")) {
    if (productsObj !== null) {
      console.log("TRUE DOMPAGECONTENT");
      productAvailabilitiesHandler();
    }
  }
});

document.addEventListener("ShoptetDOMPageMoreProductsLoaded", function () {
  console.log("ShoptetDOMPageMoreProductsLoaded called!");
  if ($("body").hasClass("type-category")) {
    if (productsObj !== null) {
      console.log("TRUE PAGEMORE");
      productAvailabilitiesHandler();
    }
  }
});

document.addEventListener("ShoptetDOMContentLoaded", function () {
  console.log("ShoptetDOMContentLoaded called!");
  if ($("body").hasClass("type-category")) {
    if (productsObj !== null) {
      console.log("TRUE DOMCONTENT");
      productAvailabilitiesHandler();
    }
  }
});
