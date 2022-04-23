/*
 * FAQ's handler with INIT
 * ************* */
function runFaqsInit() {
  var accordion = (".accordion");
  jQuery(accordion).on("click", function(e) {
    e.preventDefault();
    jQuery(this).toggleClass("active");
    jQuery(this).next().slideToggle(200);
  });
  openFirstFaQ();
}

/*
 * FAQ's handler
 * ************* */
function runFaqsWOInit(){
  $(".accordion").on("click", function() {
    $(this).toggleClass("active");
    $(this).next().slideToggle(200);
  });
}

/*
 * Add new FAQ
 * *********** */
function addFaq(){
	var form = jQuery(".accordion-form");
  jQuery(".accordion-form").submit(function(event) {
    //Disabled button
    jQuery(".btn-add-accordion").prop('disabled', true).text("vytvářím...");
    jQuery(".ready-to-use").remove();
    //Do the magic
    var question = jQuery("#question").val();
    var answers = jQuery("#answer").val().split("\n");
    var answer = "";
    for (var i = 0; i < answers.length; i++) {
      $.trim(answers[i]);
      console.log(answers[i]);
      answer += "<p>"+answers[i]+"</p>\r";
    }
    console.log(answer);
    var accordionWrapper = jQuery(".accordion-wrapper");
    var itemHtml = '<div class="accordion-container hidden">\r' +
    '      <button class="accordion">'+question+'</button>\r' +
    '      <div class="panel">\r' +
    '        '+answer+
    '      </div>\r' +
    '    </div>\r';
    
    accordionWrapper.html($(accordionWrapper).html() + '\r' + itemHtml);
    setTimeout(function() {
      runFaqsInit();
      jQuery(".btn-add-accordion").prop('disabled', false).text("Přidat FAQ");
      accordionWrapper.find(".accordion-container.hidden").hide().removeClass("hidden").fadeIn(500);
      jQuery("#copyButton").fadeIn(300);
      const displayHtmlAfterAll = setTimeout(displayHtml, 600);
    }, 2000);
    event.preventDefault();
  });
}

function openFirstFaQ(){
  var firstAccordion =  jQuery(".accordion-wrapper > .accordion-container:first-child > .accordion");
  if(jQuery(firstAccordion).hasClass("active")){
    console.log("Already activated!");
  } else {
    jQuery(firstAccordion).click();
  }
}

function clearWrapper(){
  jQuery("#copyButton").fadeOut(200);
  jQuery(".accordion-wrapper").fadeOut(200);
  setTimeout(function() {
    jQuery(".accordion-wrapper").html("<span class='ready-to-use'>Kód zkopírován! Můžete začít generovat nové časté dotazy.<span>").fadeIn(300);
  }, 500);
}

function displayHtml(){
  const escapeHTML = str =>
  str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  );
  var accordionWrapper = jQuery(".accordion-wrapper").prop("outerHTML");
  accordionWrapper = escapeHTML(accordionWrapper);
  jQuery("pre > code").html(accordionWrapper);
}

/*
 * COPY CODE
 * ********* */

function copyToClip(str) {
  function listener(e) {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);

  clearWrapper();
};

jQuery(function() {
  jQuery("body").addClass("jquery-loaded");
  if (jQuery(".accordion-wrapper").length > 0) {
    runFaqsInit();
    addFaq();
  }
});