var tabbedContent = function () {
  //get all tab link elements
  var tab = document.getElementsByClassName("tab-list-item");
  //get all tab content elements
  var tabContent = document.getElementsByClassName("tab-pane");
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
        //add current class to the tabContent element thats id matches the data-tab of the clicked tab
        document.getElementById(matchingTab).className += " active";
      },
      false
    );
  }
};

tabbedContent();

//Open collapsible
var elements = document.querySelectorAll(".collapse-link");
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

//Scroll on element
const links = document.querySelectorAll(".js-scroll");

for (const link of links) {
  link.addEventListener("click", clickElemHandler);
}

function clickElemHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("data-anchor");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}
