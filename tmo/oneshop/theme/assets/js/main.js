function checkOneshopScripts() {
  var htmlSections = document.querySelectorAll("main .htmlTemplate");

  /*
   * CAROUSEL/SLIDER 
   * FUNCTION
   * ***************** */
  function carouselv1(mainObj){

    // Select the carousel you'll need to manipulate and the buttons you'll add events to
    const carouselWrapper = mainObj.querySelector(".carousel-wrapper");
    const carousel = mainObj.querySelector("#carousel-slider");
    const cardsObj = carousel.querySelectorAll(".card");
    const card = cardsObj[0];
    const leftButton = carouselWrapper.querySelectorAll("#control-prev")[0];
    const rightButton = carouselWrapper.querySelectorAll("#control-next")[0];

    // Prepare to limit the direction in which the carousel can slide,
    // and to control how much the carousel advances by each time.
    // In order to slide the carousel so that only three cards are perfectly visible each time,
    // you need to know the carousel width, and the margin placed on a given card in the carousel
    const carouselWidth = carousel.offsetWidth;
    const cardWidth = card.offsetWidth;
    const cardStyle = card.currentStyle || window.getComputedStyle(card);
    const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

    // Count the number of total cards you have
    const cardCount = carousel.querySelectorAll("[data-target='card']").length;

    // Define width of device
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    // Define an offset property to dynamically update by clicking the button controls
    // as well as a maxX property so the carousel knows when to stop at the upper limit
    let offset = 0;
    let maxX;
    if (viewportWidth > 993) {
      maxX = -(
        (cardCount - 2) * cardWidth + (cardMarginRight * (cardCount - 2))
      );
    } else {
      maxX = -(
        (cardCount -1) * cardWidth + (cardMarginRight * (cardCount - 1))
      );
    }
    
    console.log(carouselWidth, cardWidth, cardMarginRight, maxX);

    // Add the click events
    leftButton.addEventListener("click", function () {
      if (offset !== 0) {
        offset += cardWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
      }
    });

    rightButton.addEventListener("click", function () {
      if (offset !== maxX) {
        offset -= cardWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
      }
    });
  }

  /*
   * CAROUSEL/SLIDER 
   * FUNCTION
   * ***************** */
  function carouselV2MobileOnly(mainObj){

    // Define width of device
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth < 993) {

      // Select the carousel you'll need to manipulate and the buttons you'll add events to
      const carouselWrapperMobile = mainObj.querySelector("#carousel-wrapper-mobile");
      const carouselMobile = mainObj.querySelector("#carousel-slider-mobile");
      const cardsObj = carouselMobile.querySelectorAll(".grid-slider-item");
      const card = cardsObj[0];
      const leftButton = mainObj.querySelectorAll("#control-prev-mobile")[0];
      const rightButton = mainObj.querySelectorAll("#control-next-mobile")[0];

      // Prepare to limit the direction in which the carousel can slide,
      // and to control how much the carousel advances by each time.
      // In order to slide the carousel so that only three cards are perfectly visible each time,
      // you need to know the carousel width, and the margin placed on a given card in the carousel
      const carouselWidth = carouselMobile.offsetWidth;
      const cardWidth = card.offsetWidth;
      const cardStyle = card.currentStyle || window.getComputedStyle(card);
      const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

      // Count the number of total cards you have
      const cardCount = carouselMobile.querySelectorAll("[data-target='grid-slider-item']").length;

      // Define an offset property to dynamically update by clicking the button controls
      // as well as a maxX property so the carousel knows when to stop at the upper limit
      let offset = 0;
      const  maxX = -(
          ((cardCount -1) * cardWidth + (cardMarginRight * (cardCount - 1)))
        );
      
      console.log(carouselWidth, cardWidth, cardMarginRight, maxX);

      // Add the click events
      leftButton.addEventListener("click", function () {
        if (offset !== 0) {
          offset += cardWidth + cardMarginRight;
          carouselMobile.style.transform = `translateX(${offset}px)`;
        }
      });

      rightButton.addEventListener("click", function () {
        if (offset !== maxX) {
          offset -= cardWidth + cardMarginRight;
          carouselMobile.style.transform = `translateX(${offset}px)`;
        }
      });
    }
  }

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
          console.log(currentItem);
          var targetItem = mainObj.querySelectorAll(currentItem)[0];

          if (targetItem.classList.contains('in')) {
            console.log("TRUE");
            this.classList.add('collapsed');
            targetItem.classList.remove('in');
          } else {
            console.log("ELSE");
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
    //get all tab link elements
    var tab = mainObj.querySelectorAll(".tab-list-item");
    //get all tab content elements
    var tabContent = mainObj.querySelectorAll(".tab-pane");
    //loop through each tab
    for (var i = 0; i < tab.length; i++) {
      //add click event listener to all tab links
      tab[i].addEventListener(
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
          //add current class back to the clicked tab
          this.className += " active";
          //get data-tab attribute of what has been clicked
          var matchingTab = this.getAttribute("data-tab");
          console.log(matchingTab);
          //add current class to the tabContent element thats id matches the data-tab of the clicked tab
          mainObj.querySelector("#"+matchingTab).className += " active";
        },
        false
      );
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
          var modalCloseBtn = modal.getElementsByClassName("modal-close-button")[0];
          modal.style.display = "block";
          document.body.style.overflowY = "hidden";
          // When the user clicks the close button, close the modal
          modalCloseBtn.onclick = function () {
            modal.style.display = "none";
            document.body.style.overflowY = "auto";
          };
        };
      }
    }
  }
  
  if (htmlSections.length > 0) {
    for (var j = 0; j < htmlSections.length; j++) {
      //FOR PROD | OS
      //var mainObj = htmlSections[j].shadowRoot;
      // FOR TESTING | LOCAL:
      var mainObj = htmlSections[j];

      /*
       * SLIDER 
       * INIT
       * ***************** */
      if (mainObj.querySelectorAll("#carousel-slider")[0]) {
        carouselv1(mainObj);
        carouselV2MobileOnly(mainObj)
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
    }
  }
  /*
   * CONNECT CSS 
   * INIT
   * ***************** */
  //connectCSS();
  //glideJS();
}

setTimeout(function () {
  checkOneshopScripts();
}, 3000);