function customFaqAndScroll() {
  var htmlSections = document.querySelectorAll("main .htmlTemplate");
  for (var j = 0; j < htmlSections.length; j++) {
    //Open collapsible handler
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
            content.classList.remove("opened");
            plusMinusButton.innerHTML = "&#43;";
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.classList.add("opened");
            plusMinusButton.innerHTML = "&#8722;";
          }
        });
      }
    }

    //Modal handler
    var modals = element.querySelectorAll(".modal");
    if (modals) {
      for (var l = 0; l < modals.length; l++) {
        // When the user clicks the button, open the modal
        modals[l].onclick = function (e) {
          var modal = element.querySelector(e.target.getAttribute("data-modal-id"));
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

    //Scroll on element handler
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
    //alert("Loaded.");
    customFaqAndScroll();
  }, 1000);
}
