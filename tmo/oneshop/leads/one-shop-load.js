function loadCollectorJs(){
  var htmlSections = document.querySelectorAll("main .htmlTemplate");
  for (var j = 0; j < htmlSections.length; j++) {

    var element = htmlSections[j].shadowRoot;
    if (element) {
      
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://dtdl-static-natco.eshop.yo-digital.com/assets/cz/e9973c47-9968-441d-a8d2-0016ce7eeb25.js';
      element.appendChild(script);
    }
  }
}

setTimeout(function(){
  alert("Loaded.");
  var htmlSections = document.querySelectorAll("main .htmlTemplate");
  if(htmlSections !== null){
    loadCollectorJs();
  }
}, 1000);