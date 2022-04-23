function loadJS(FILE_URL, async = true) {
  let scriptEle = document.createElement("script");

  scriptEle.setAttribute("src", FILE_URL);
  scriptEle.setAttribute("type", "text/javascript");
  scriptEle.setAttribute("async", async);

  document.head.appendChild(scriptEle);

  // success event 
  scriptEle.addEventListener("load", () => {
    console.warn("File loaded");
  });
   // error event
  scriptEle.addEventListener("error", (ev) => {
    console.warn("Error on loading file", ev);
  });
}

/*
 * Load jQuery
 * *********** */
loadJS("https://code.jquery.com/jquery-3.6.0.min.js", true); 

/*
 * Load Slick Slider
 * ***************** */
setTimeout(loadJS("https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", false), 1500);


function checkOneshopScripts() {
  var htmlSections = document.querySelectorAll("main .htmlTemplate");

  /*
   * SCROLL ON ELEMENT 
   * FUNCTION
   * ***************** */
  function scrollOnElement(mainObj){
    const links = mainObj.querySelectorAll(".js-scroll");

    for (const link of links) {
      link.addEventListener("click", clickElemHandler);
    }

    function clickElemHandler(e) {
      e.preventDefault();
      const href = this.getAttribute("data-anchor");

      mainObj.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  /*
   * ACCORDION 
   * FUNCTION
   * ***************** */
  function accordionHandler(mainObj){
    var elements = mainObj.querySelectorAll(".collapse-link");
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function (e) {
          var currentItem = this.getAttribute("data-target");
          console.warn(currentItem);
          var targetItem = mainObj.querySelectorAll(currentItem)[0];

          if (targetItem.classList.contains('in')) {
            console.warn("TRUE");
            this.classList.add('collapsed');
            targetItem.classList.remove('in');
          } else {
            console.warn("ELSE");
            this.classList.remove('collapsed')
            targetItem.style.maxHeight = "auto";
            targetItem.classList.add('in');
          }
          e.preventDefault();
        });
      }
  }

  /*
   * TABS 
   * FUNCTION
   * ***************** */
  function tabbedContent(mainObj){
    //get all tabs 
    var tabsWrapper = mainObj.querySelectorAll(".tabs");
    for (var t = 0; t < tabsWrapper.length; t++) {
      //get all tab link elements
      var tab = tabsWrapper[t].querySelectorAll(".tab-list-item");
      //get all tab content elements
      var tabContent = tabsWrapper[t].querySelectorAll(".tab-pane");
      //loop through each tab
      for (var i = 0; i < tab.length; i++) {
        //add click event listener to all tab links
        tab[i].addEventListener(
          "click",
          function () {
            var closestTabsObject = this.closest('.tabs');
            //each time tab clicked remove all current classes
            //remove 'active' class from all tabs
            var activeTabs = closestTabsObject.querySelectorAll(".tab-list-item");
            for (var i = 0; i < activeTabs.length; i++) {
              activeTabs[i].classList.remove("active");
            }
            //remove 'active' class from all tab content
            var activePanes = closestTabsObject.querySelectorAll(".tab-pane");
            for (var i = 0; i < activePanes.length; i++) {
              activePanes[i].classList.remove("active");
            }
            //add current class back to the clicked tab
            this.className += " active";
            //get data-tab attribute of what has been clicked
            var matchingTab = this.getAttribute("data-tab");
            console.warn(matchingTab);
            //add current class to the tabContent element thats id matches the data-tab of the clicked tab
            mainObj.querySelector("#"+matchingTab).className += " active";
          },
          false
        );
      }
    }
  }

  /*
   * TOGGLE ACTIVE HEADING 
   * FUNCTION
   * ***************** */
  function toggleActiveForSliderHeading(mainObj){
    var slideHeading = mainObj.querySelectorAll(".slick-dots");

    for (var i = 0; i < slideHeading.length; i++) {
      var slideItem = slideHeading[i].querySelectorAll(".slick-dots li");

      for (var s = 0; s < slideItem.length; s++) {
        slideItem[s].addEventListener(
          "click",
          function () {
            var closestSlickObject = this.closest('.slick-dots');
            var SlideHeadingObject = closestSlickObject.querySelectorAll("li");

            for (var i = 0; i < SlideHeadingObject.length; i++) {
              SlideHeadingObject[i].classList.remove("slick-active");
            }
            
            this.className += "slick-active";
          },
          false
        );
      }
    }
  }

  function openDifferentTab(mainObj){
    var tabLink = mainObj.querySelectorAll(".js-open-tab");
    var tab = mainObj.querySelectorAll(".tab-list-item");
    var tabContent = mainObj.querySelectorAll(".tab-pane");

    for (var i = 0; i < tabLink.length; i++) {
      tabLink[i].addEventListener(
        "click",
        function () {
          //each time tab clicked remove all current classes
          //remove 'current' class from all tabs
          for (var i = 0; i < tab.length; i++) {
            tab[i].classList.remove("active");
          }
          //remove 'current' class from all tab content
          for (var i = 0; i < tabContent.length; i++) {
            tabContent[i].classList.remove("active");
          }
          //get data-tab attribute of what has been clicked
          var matchingTab = this.getAttribute("data-tab");
          //add current class to the tabContent element thats id matches the data-tab of the clicked tab
          mainObj.getElementById(matchingTab).className += " active";
          mainObj.querySelector('[data-tab="'+ matchingTab +'"]').className += " active";
        },
        false
      );
    }
  }

  /*
   * TOGGLE CONTENT 
   * FUNCTION
   * ***************** */
  function toggleContent(mainObj){
    // Toggle element visibility
    var toggle = function (elem) {
      elem.classList.toggle('is-visible');
    };

    var toggleHandler = mainObj.querySelectorAll(".js-toggle-content");

    for (var t = 0; t < toggleHandler.length; t++) {

      toggleHandler[t].addEventListener('click', function (event) {
        // Prevent default link behavior
        event.preventDefault();
    
        // Get the content
        var content = this.getAttribute("data-target");
        content = mainObj.getElementById(content);
        if (!content) return;
    
        // Toggle the content
        toggle(content);
    
      }, false);
    }
  }

  /*
   * SWITCH BUTTONS 
   * FUNCTION
   * ***************** */
  function switchButtons(mainObj){
    var switchTvSizes = mainObj.querySelectorAll(".js-tv-switcher");
    if (switchTvSizes) {
      for (var s = 0; s < switchTvSizes.length; s++) {
        switchTvSizes[s].onclick = function (e) {
          for (var i = 0; i < switchTvSizes.length; i++) {
            switchTvSizes[i].classList.remove("active");
          }
          var tvPrice = e.target.getAttribute("data-tv-price");
          var tvDiscount = e.target.getAttribute("data-tv-discount");
          var tvTariff = e.target.getAttribute("data-tv-tarif-text");
          mainObj.querySelectorAll(".js-tv-price")[0].textContent = tvPrice;
          mainObj.querySelectorAll(".js-tv-discount")[0].textContent = tvDiscount;
          mainObj.querySelectorAll(".js-tv-tarif-text")[0].textContent = tvTariff;

          this.className += " active";
          e.preventDefault();
        }
      }
    }
  }

  /*
   * OPEN MODAL 
   * FUNCTION
   * ***************** */
  function openModalWindow(mainObj){
    var modals = mainObj.querySelectorAll(".modal");
    if (modals) {
      for (var l = 0; l < modals.length; l++) {
        // When the user clicks the button, open the modal
        modals[l].onclick = function (e) {
          var modal = mainObj.querySelector(e.target.getAttribute("data-modal-id"));
          //console.warn(modal);
          var modalCloseBtn = modal.getElementsByClassName("modal-close-button")[0];
          modal.style.display = "block";
          document.body.style.overflowY = "hidden";
          document.body.classList.add("modal-open");
          // When the user clicks the close button, close the modal
          modalCloseBtn.onclick = function () {
            modal.style.display = "none";
            document.body.style.overflowY = "auto";
            document.body.classList.remove("modal-open");
          };
        };
      }
    }
  }

  /*
   * SWITCH MODALS
   * FUNCTION
   * ***************** */
  function switchModals(mainObj){
    var switchObjects = mainObj.querySelectorAll(".js-switch-modals");
    if (switchObjects) {
      for (var s = 0; s < switchObjects.length; s++) {
        switchObjects[s].onclick = function (e) {
          var modalWrapper = this.closest('.modal-wrapper');
          var targetModal = modalWrapper.getElementsByClassName("js-switch-modals")[0].getAttribute("data-modal-id");
          console.warn(targetModal);
          if (document.body.classList.contains('modal-open')) {
            modalWrapper.getElementsByClassName("modal-close-button")[0].click();
            mainObj.querySelectorAll('.modal[data-modal-id="'+targetModal+'"]')[0].click();
          }
          e.preventDefault();
        }
      }
    }
  }

  /*
   * CLOSE ALERT 
   * FUNCTION
   * ***************** */
  function closeAlert(mainObj){
    //get all close alert buttons 
    var closeAlertButtons = mainObj.querySelectorAll(".o-close-alert");
    for (var t = 0; t < closeAlertButtons.length; t++) {
      closeAlertButtons[t].addEventListener(
        "click",
        function () {
          //find closest wrapper
          var closestAlertWrapper = this.closest('.o-alert-wrapper');
          closestAlertWrapper.style.display = 'none';
        }
      );
    }
  }

  /* SWITCH CONTENT 
   * FUNCTION
   * ***************** */
  function switchContent(mainObj){
    var contentSwitchers = mainObj.querySelectorAll(".js-switch-content");
    var currentActiveContent = mainObj.querySelector('.switch-content-target.active');
    for (var t = 0; t < contentSwitchers.length; t++) {
      contentSwitchers[t].addEventListener(
        "click",
        function () {
          //find closest wrapper
          var targetContentId = this.getAttribute("data-switch-target-id");
          console.warn(targetContentId);
          var targetContentObj = mainObj.querySelector("#" + targetContentId);
          currentActiveContent.classList.remove("active");
          currentActiveContent = targetContentObj;
          targetContentObj.classList.add("active");
        }
      );
    }
  }

  /* SWITCH CONTENT 
   * FUNCTION
   * ***************** */
  function scrollerManagment(mainObj){
    var scrollers = mainObj.querySelectorAll(".scroller-wrapper");
    for (var t = 0; t < scrollers.length; t++) {
      console.warn("Scroller found: " + t);
      var currentScroller = scrollers[t];
      var scrollerButtons = currentScroller.querySelector(".slider-navigation-buttons");
      var nameOfSlider = scrollerButtons.getAttribute("data-slider-name");
      var scrollerPrev = scrollerButtons.querySelector(".slider-prev");
      var scrollerNext = scrollerButtons.querySelector(".slider-next");
      var currentPath = window.location.pathname;
      var currentSlide = scrollerButtons.getAttribute("data-current-slide")
      
      //FIRST INIT
      var scrollNextSlide = scrollers[t].querySelector("#" + currentSlide).getAttribute("data-next"); //slider-data-4
      var scrollFirstSlide = scrollerButtons.getAttribute("data-first-slide")
      var scrollLastSlide = scrollerButtons.getAttribute("data-last-slide")

      //DEFAULT
      scrollerButtons.style.display = "flex";
      scrollerPrev.href = currentPath + "#" + scrollerButtons.getAttribute("data-prev-slide"); //SET NEXT SLIDER /index.html#slider-data-1
      scrollerNext.href = currentPath + "#" + scrollNextSlide; //SET NEXT SLIDER /index.html#slider-data-3
      scrollerPrev.style.display = "none";

      scrollerPrev.addEventListener("click", function (eventus) {
        console.warn("Prev clicked.");
        setTimeout(function() {
          //get
          clickedObj = eventus.explicitOriginalTarget || eventus.path[0];
          scrollerButtons = clickedObj.closest(".slider-navigation-buttons");
          console.warn(scrollerButtons);
          scrollerNext = scrollerButtons.querySelector(".slider-next");

          currentSlide = scrollerButtons.getAttribute("data-prev-slide");
          console.warn("Current: " + currentSlide);
          scrollPrevSlide = mainObj.querySelector("#" + currentSlide).getAttribute("data-prev");
          console.warn("Prev: " + scrollPrevSlide);
          scrollNextSlide = mainObj.querySelector("#" + currentSlide).getAttribute("data-next");
          console.warn("Next: " + scrollNextSlide);
          scrollFirstSlide = scrollerButtons.getAttribute("data-first-slide");

          //set
          scrollerButtons.setAttribute("data-current-slide", currentSlide); //slider-data-2
          scrollerButtons.setAttribute("data-prev-slide", scrollPrevSlide); //slider-data-1
          scrollerButtons.setAttribute("data-next-slide", scrollNextSlide); //slider-data-4
          scrollerNext.href = currentPath + "#" + scrollNextSlide;
          clickedObj.href = currentPath + "#" + scrollPrevSlide;

          //settings
          scrollerNext.style.display = "flex";
          if(scrollerButtons.getAttribute("data-current-slide") === scrollFirstSlide){
            clickedObj.style.display = "none";
          }
        }, 500);

        return true;
      });

      scrollerNext.addEventListener("click", function (eventus) {
        console.warn("Next clicked.");
        setTimeout(function() {
          //get
          clickedObj = eventus.explicitOriginalTarget || eventus.path[0];
          scrollerButtons = clickedObj.closest(".slider-navigation-buttons");
          console.warn(scrollerButtons);
          scrollerPrev = scrollerButtons.querySelector(".slider-prev");
          
          console.warn(scrollerButtons);
          currentSlide = scrollerButtons.getAttribute("data-next-slide");
          console.warn("Current: " + currentSlide);
          scrollPrevSlide = mainObj.querySelector("#" + currentSlide).getAttribute("data-prev");
          console.warn("Prev: " + scrollPrevSlide);
          scrollNextSlide = mainObj.querySelector("#" + currentSlide).getAttribute("data-next");
          console.warn("Next: " + scrollNextSlide);
          scrollLastSlide = scrollerButtons.getAttribute("data-last-slide");
          
          //set
          scrollerButtons.setAttribute("data-current-slide", currentSlide); //slider-data-2
          scrollerButtons.setAttribute("data-prev-slide", scrollPrevSlide); //slider-data-1
          scrollerButtons.setAttribute("data-next-slide", scrollNextSlide); //slider-data-4
          scrollerPrev.href = currentPath + "#" + scrollPrevSlide;
          clickedObj.href = currentPath + "#" + scrollNextSlide;

          //settings
          scrollerPrev.style.display = "flex";
          if(scrollerButtons.getAttribute("data-current-slide") === scrollLastSlide){
            clickedObj.style.display = "none";
          }
        }, 500);

        return true;
      });
    }
  }
  
  if (htmlSections.length > 0) {
    for (var j = 0; j < htmlSections.length; j++) {
      //FOR PROD | OS
      var mainObj = htmlSections[j].shadowRoot;
      // FOR TESTING | LOCAL:
      // var mainObj = htmlSections[j];

      /*
       * SLIDER 
       * INIT
       * ***************** */
      if (window.matchMedia("(max-width: 768px)").matches) {
        jQuery(mainObj).find(".js-grid-slider-xs-v3").slick({
          slidesToShow:1,
          slidesToScroll:1,
          variableWidth:!0,
          infinite:!1,
          speed:300
        });
        setTimeout(function(){
          jQuery(mainObj).find(".js-grid-slider-xs-v3").find(".slick-track").addClass("d-flex");
        }, 100);
      }

      /*
       * SCROLL ON ELEMENT 
       * INIT
       * ***************** */
      if (mainObj.querySelectorAll(".js-scroll")[0]) {
        scrollOnElement(mainObj);
      }

      /*
       * ACCORDION 
       * INIT
       * ***************** */
      if (mainObj.querySelectorAll(".collapse-link")[0]) {
        accordionHandler(mainObj);
      }

      /*
       * TABS 
       * INIT
       * ***************** */
      if (mainObj.querySelectorAll(".tab-list-item")[0]) {
        tabbedContent(mainObj);
      }
      
      /*
       * OPEN TAB 
       * INIT
       * ***************** */
      if (mainObj.querySelectorAll(".js-open-tab")[0]) {
        openDifferentTab(mainObj)
      }

      /*
       * TOGGLE CONTENT 
       * INIT
       * ***************** */
      if (mainObj.querySelectorAll(".js-toggle-content")[0]) {
        toggleContent(mainObj);
      }

      /*
       * SLIDER 
       * INIT
       * ***************** */
      if (mainObj.querySelectorAll(".slide-wrap")[0]) {
        //sliderBoxes(mainObj);
      }

      /*
       * MODAL WINDOW 
       * INIT
       * ***************** */
      if (mainObj.querySelectorAll(".modal")[0]) {
        openModalWindow(mainObj);
      }

      /*
       * SWITCH MODAL 
       * INIT
       * ***************** */
      if (mainObj.querySelectorAll(".js-switch-modals")[0]) {
        switchModals(mainObj);
      }

      /*
       * SLICK DOTS HEADING 
       * INIT
       * ***************** */
      if (mainObj.querySelectorAll(".slick-dots")[0]) {
        toggleActiveForSliderHeading(mainObj);
      }

      /*
       * SWITCH BUTTONS 
       * INIT
       * ***************** */
      if (mainObj.querySelectorAll(".js-tv-switcher")[0]) {
        switchButtons(mainObj);
      }
      
      /*
       * CLOSE ALERTS 
       * INIT
       * ***************** */
      if (mainObj.querySelectorAll(".o-close-alert")[0]) {
        closeAlert(mainObj);
      }

      /*
       * SWITCH CONTENT 
       * INIT
       * ***************** */
      if (mainObj.querySelectorAll(".js-switch-content")[0]) {
        switchContent(mainObj);
      }

      /*
       * SCROLLER 
       * INIT
       * ***************** */
      if (mainObj.querySelectorAll(".scroller-wrapper")[0] && window.matchMedia('(min-width: 768px)').matches) {
        scrollerManagment(mainObj);
      }
    }
  }
}

function loadFont(name, style, weight, woff2, woff){
  var newStyle = document.createElement('style');
  newStyle.appendChild(document.createTextNode('@font-face{font-family: "'+name+'"; font-style: '+style+'; font-weight:'+weight+'; src: url('+woff2+') format("woff2"), url('+woff+') format("woff");}'));
  document.body.appendChild(newStyle)
}

setTimeout(function () {
  checkOneshopScripts();
  document.body.classList.add("js-loaded");
}, 3000);

/*
 * LOAD FONTS 
 * WITH NO DELAY
 * ***************** */
loadFont("TeleNeo Regular", "normal", "300", "https://static.t-mobile.cz/cdn/fonts/teleneo/v1/teleneo-regular.woff2", "https://static.t-mobile.cz/cdn/fonts/teleneo/v1/teleneo-regular.woff");
loadFont("TeleNeo Bold", "normal", "700", "https://static.t-mobile.cz/cdn/fonts/teleneo/v1/teleneo-bold.woff2", "https://static.t-mobile.cz/cdn/fonts/teleneo/v1/teleneo-bold.woff");
loadFont("TeleNeo ExtraBold", "normal", "900", "https://static.t-mobile.cz/cdn/fonts/teleneo/v1/teleneo-extrabold.woff2", "https://static.t-mobile.cz/cdn/fonts/teleneo/v1/teleneo-extrabold.woff");
loadFont("TeleNeoMarker Bold", "normal", "700", "https://static.t-mobile.cz/cdn/fonts/teleneomarker/v1/TeleNeoMarkerWeb-Bold.woff2", "https://static.t-mobile.cz/cdn/fonts/teleneomarker/v1/TeleNeoMarkerWeb-Bold.woff");