$(function () {
  jQuery("body").addClass("jquery-loaded");

  var key = "AIzaSyAWbnhbm9u3tGtM50EUeDswpEJ8r_UhFR4";
  var playlistId = "PLQu8yTv1_9P_CU4q3fuB80oGiWyEGv5l9";
  var URL = "https://www.googleapis.com/youtube/v3/playlistItems";

  var options = {
    part: "snippet",
    key: key,
    maxResults: 20,
    playlistId: playlistId,
  };

  loadVids();

  function loadVids() {
    $.getJSON(URL, options, function (data) {
      resultsLoop(data);
    });
  }

  function mainVid(id) {
    $("#video").html(`
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}?&autoplay=1&mute=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `);
  }

  function resultsLoop(data) {
    var maxItems = 6;
    $.each(data.items, function (i, item) {
      if (i + 1 > maxItems) {
        return false;
      }
      var thumb = item.snippet.thumbnails.medium.url;
      var title = item.snippet.title;
      var desc = item.snippet.description.substring(0, 100);
      var vid = item.snippet.resourceId.videoId;

      $(".js-yt-vids").append(`
        <div class="col-12 col-md-4 video-item">
          <article class="item" data-key="${vid}">
            <img src="${thumb}" alt="" class="thumb icofont-play-alt-2 ico-play">
            <div class="details">
              <h4>${title}</h4>
              <p>${desc}</p>
            </div>

          </article>
        </div>
      `);
    });
  }

  // CLICK EVENT
  $(".js-yt-vids").on("click", ".item", function (e) {
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $("#video").offset().top;

    // animated top scrolling
    $("body, html").animate({ scrollTop: pos });

    // load video
    var id = $(this).attr("data-key");
    mainVid(id);
  });
});
