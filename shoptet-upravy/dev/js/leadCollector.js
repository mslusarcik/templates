function showLead(){
  var phoneName = "entry.1682784041";
  var formAction = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfMz67y20ZLUU1KUOfTn8r9smwcRZJBYOS_QSyK82otdHZyKw/formResponse";
  var successAlert = "Skvělá práce! Brzy se vám ozvu <i class='icofont-simple-smile'></i>";
  var LCHeadline = "Spěcháte? <i class='icofont-clock-time'></i>";
  var LCSubheadline = "Můžeme to probrat po telefonu. <br />Ten můj je <strong>731 326 653</strong>. A váš?";
  var closedText = "Kontakt";

  jQuery("body").prepend('<div class="lead-wrapper" style="display:none;"> <div class="lead-inner"> <h2>'+LCHeadline+'</h2> <p>'+LCSubheadline+'</p> <form class="form custom-form lead-form-wrapper" action="'+formAction+'" method="POST" data-autosubmit="" autocomplete="off"> <input type="hidden" value="LEAD COLLECTOR FORM" name="entry.1140674996" /> <input type="tel" name="'+phoneName+'" class="lead-input" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" maxlength="9" placeholder="123456789" required> <input type="submit" class="btn btn-lead btn-lg font-medium" value="Odeslat"> </form> <div class="lead-form-success"> <p>'+successAlert+'</p> </div> <div class="lead-form-error"> <p>Někde se stala chyba. Ozvěte se nám na číslo 731 326 653.</p> </div> <a class="close-button" href="/" rel="nofollow"> <i class="icofont-close-line"></i> </a> </div> </div> <div class="lead-circle"> <a href="/" rel="nofollow" class="lead-circle-link"> <div class="lead-circle-inner"> <i class="icofont-ui-call"></i> <span> '+closedText+' </span> </div> </a> </div>');
  if (window.matchMedia("(max-width: 768px)").matches || localStorage.leadClosed === "closed") {
    jQuery(".lead-circle").fadeIn("slow");
  } else {
    jQuery(".lead-wrapper").fadeIn("slow");
    jQuery(".lead-circle").hide();
  }
  jQuery(".lead-input").prepend("<span>+420</span>");
  
  jQuery(".lead-wrapper .close-button").click(function(e) {
    e.preventDefault();
    closeLead();
  });
  jQuery(".lead-circle-link").click(function(e) {
    e.preventDefault();
    openLead();
  });
}

function closeLead(){
  jQuery(".lead-wrapper").fadeOut(300, function() { 
    jQuery(this).hide();
  });
  jQuery(".lead-circle").fadeIn("slow");
}

function openLead(){
  jQuery(".lead-circle").fadeOut(300, function() { 
    jQuery(this).hide();
  });
  jQuery(".lead-wrapper").fadeIn("slow");
}

function ajaxFormSender() {
  $("form.custom-form").submit(function (e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr("action");

    $.ajax({
      type: "POST",
      dataType: "json",
      url: url,
      data: form.serialize(), // serializes the form's elements.
      success: function (data) {
        jQuery(".lead-form-wrapper").hide();
        jQuery(".lead-form-success").fadeIn();
        fbq('track', 'Contact');
      },
      error: function () {
        jQuery(".lead-form-wrapper").hide();
        jQuery(".lead-form-success").fadeIn();
        fbq('track', 'Contact');
      }
    });
  });
}

// Restricts input for each element in the set of matched elements to the given inputFilter.
(function($) {
  $.fn.inputFilter = function(inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  };
}(jQuery));

function saveToStorage(){
  if(typeof(Storage) !== "undefined") {
    //Default
    if (localStorage.leadClosed){
      //console.log("LocalStorage leadClosed already exist.");
    } else {
      //console.log("LocalStorage leadClosed has been created.");
      localStorage.leadClosed = "open";
    }

    if (localStorage.leadClosed === "closed") {
      closeLead();
      //console.log("Lead is closed.");
      jQuery(".lead-circle-link").click(function(e) {
        e.preventDefault();
        //console.log("Storage saved. Lead keeps open");
        localStorage.leadClosed = "open";
      });
    } else if(localStorage.leadClosed === "open") {
      //console.log("Lead is open.");
      jQuery(".lead-wrapper .close-button").click(function(e) {
        localStorage.leadClosed = "closed";
        //console.log("Storage saved. Lead keeps closed.");
      });
    }
  }
}

$(function() {
  //Shows lead
  if (localStorage.leadClosed){
    //Show LC
    showLead();
    //Save localStorage
    saveToStorage();
    //Sends lead
    ajaxFormSender();
  } else {
    //console.log("Not initialized");
    $(window).scroll(function () { 
      if ($(window).scrollTop() > $('body').height() / 4) {
        //console.log("Half of screen.");
        //Show LC
        showLead();
        //Save localStorage
        saveToStorage();
        //Sends lead
        ajaxFormSender();
        $(window).unbind('scroll');
      } 
    });
  }
  //Only numbers allowed
  $(".lead-input").inputFilter(function(value) {
    return /^-?\d*$/.test(value); 
  });
});