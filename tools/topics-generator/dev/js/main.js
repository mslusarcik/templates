var topics = [];

function loadJson() {
  var request = new XMLHttpRequest();
  request.open('GET', '../../assets/data/data.json', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
      $.each(data.mix, function(i, v) { // <-- line changed
        topics.push(v);
      });
      clickHandler();
    } else {
      // We reached our target server, but it returned an error
      console.log("Something bad happened");
    }
  };

  request.send();
}

function getTopic(){
  var randomTopic = topics[Math.floor(Math.random()*topics.length)];
  var btn = document.querySelector(".js-topic-generator-button");
  var placeForTopic = document.querySelector(".js-place-for-topic > span");
  placeForTopic.classList.add("js-loading");
  setTimeout(function() {
    placeForTopic.innerHTML = randomTopic;
    placeForTopic.classList.remove("js-loading");
  }, 500);
  btn.innerHTML = "Nelíbí? Zkuste to znovu.";
  btn.classList.add("js-topic-generated");
}

function clickHandler(){
  const form = document.querySelector('.js-topic-generator');
  form.addEventListener("click", function(event){
    getTopic();
    event.preventDefault()
  });
}

loadJson();