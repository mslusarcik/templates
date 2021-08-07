function customFunctions() {
  var htmlSections = document.querySelectorAll("main .htmlTemplate");
  for (var j = 0; j < htmlSections.length; j++) {
    //Open collapsible
    var element = htmlSections[j].shadowRoot;
    if (element) {
      var elements = element.querySelectorAll(".collapse-link");
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          var plusMinusButton = this.querySelectorAll(".plus-minus-symbol")[0];
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
            plusMinusButton.innerHTML = "&#43;";
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
            plusMinusButton.innerHTML = "&#8722;";
          }
        });
      }
    }

    //Tabs
    var tab = element.querySelectorAll(".tab-list-item");
    var tabContent = element.querySelectorAll(".tab-pane");
    //loop through each tab
    for (var o = 0; o < tab.length; o++) {
      tab[o].addEventListener(
        "click",
        function () {
          for (var o = 0; o < tab.length; o++) {
            tab[o].classList.remove("active");
          }

          for (var o = 0; o < tabContent.length; o++) {
            tabContent[o].classList.remove("active");
          }

          this.className += " active";
          var matchingTab = this.getAttribute("data-tab");
          element.getElementById(matchingTab).className += " active";
        },
        false
      );
    }

    //Scroll on element
    const links = element.querySelectorAll(".js-scroll");

    for (const link of links) {
      link.addEventListener("click", clickElemHandler);
    }

    function clickElemHandler(e) {
      e.preventDefault();
      const href = this.getAttribute("data-anchor");

      element.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }
  }
}

var htmlSections = document.querySelectorAll("main .htmlTemplate");
if (htmlSections !== null) {
  setTimeout(function () {
    customFunctions();
  }, 1000);
}
