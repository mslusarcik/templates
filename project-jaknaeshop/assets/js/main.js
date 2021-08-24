$(function () {
  jQuery("body").addClass("jquery-loaded");
  
  //AOS init
  AOS.init();

  //Date picker init
  $("#datepicker").datepicker({
    dateFormat: "d. m. yy",
    dayNamesMin: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
    monthNames: [ "Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec" ],
    firstDay: 1,
    minDate: 0
  });

  //Time picker init
  $(".timepicker").timepicker({
    timeFormat: "HH:mm",
    interval: 60,
    minTime: "10",
    maxTime: "7:00pm",
    //defaultTime: "10",
    startTime: "10:00",
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  });
    
  var pulseObj = jQuery(".form-wrapper");
  // reset the transition by...
  // credit to https://css-tricks.com/restart-css-animation/
  $(".btn-pulse-starter").click(function(e) {
    pulseObj.removeClass("animated");

    setTimeout(function(){  
      $(pulseObj.find("input").first()).focus();
      pulseObj.addClass("animated");
      navigator.vibrate(100);
    }, 100);

    e.preventDefault;
  });
});
