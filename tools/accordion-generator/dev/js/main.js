/*
 * CREATE OBJECT
 * ************* */

var faqList = []

/*
 * FILL OBJECT
 * *********** */

function fillObject(){

  $('.accordion-form').on('submit', function(e){
    e.preventDefault();

    var questionObj = $(this).find("#question");
    var answerObj = $(this).find("#answer");
    var answers = answerObj.val().split("\n");
    var answer = "";

    for (var i = 0; i < answers.length; i++) {
      $.trim(answers[i]);
      answer += "      <p>"+answers[i]+"</p>\n";
    }

    var faqContent = {}
    faqContent.question = questionObj.val(); 
    faqContent.answer = answer;
    faqList.push(faqContent);

    questionObj.val("");
    answerObj.val("");
    renderObject();
  });
}

/*
 * RENDER ACCORDION
 * OBJECT
 * **************** */

function renderObject(){
  var faqContentHtml = '';
  $.each(faqList, function( index, value ){ 
    var isFirstQ = '';
    var isFirstA = '';
    if(index === 0){
      isFirstQ = ' active';
      isFirstA = ' style="display: block;"';
    }
    faqContentHtml += 
      '  <div class="accordion-container">\n' +
      '    <button class="accordion'+isFirstQ+'">'+faqList[index].question+'</button>\n' +
      '    <div class="panel"'+isFirstA+'>\n' +
            faqList[index].answer +
      '    </div>\n' +
      '  </div>\n';
  });
  displayCode(faqContentHtml);
}

/*
 * DISPLAY CODE
 * ************ */

function displayCode(faqContentHtml){
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
  var placeForCode = $(".place-for-code > pre");
  var preview = $("section.preview-section");
  faqFullHtml = '<div class="accordion-wrapper">\n' + 
  faqContentHtml +
  '</div>';
  faqFullHtmlEscaped = escapeHTML(faqFullHtml);
  placeForCode.html(faqFullHtmlEscaped);
  preview.find(".preview-faqs").html(faqFullHtml);
  preview.css("display", "block");
  runFaqsInit();
}

/*
 * FAQ INIT
 * ********* */

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
 * OPEN FAQ
 * ********* */

function openFirstFaQ(){
  var firstAccordion =  jQuery(".accordion-wrapper > .accordion-container:first-child > .accordion");
  if(jQuery(firstAccordion).hasClass("active")){
    console.log("Already activated!");
  } else {
    jQuery(firstAccordion).click();
  }
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
  var copyButton = document.querySelector("#copyButton");
  copyButton.textContent = "Zkopírováno";
  setTimeout(() => {copyButton.textContent = "Zkopírovat kód a resetovat";}, 2000);
  clearCode();
};

/*
 * JS SCROLL
 * ********* */

// handle links with @href started with '#' only
$('a.js-scroll[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 350, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

/*
 * CLEAR CODE
 * ********** */

function clearCode(){
  jQuery(".place-for-code > pre").fadeOut(200).html("Pomocí formuláře níže vygenerujte další kód..").fadeIn(200);
  jQuery(".accordion-wrapper").fadeOut(200).remove();
  jQuery(".preview-section").hide();
  faqList = [];
}

/*
 * INIT
 * ********* */

jQuery(function() {
  jQuery("body").addClass("jquery-loaded");
  fillObject();
  if (jQuery(".accordion-wrapper").length > 0) {
    //RUN FAQ'S
    
  }
});