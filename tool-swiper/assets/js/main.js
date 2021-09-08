jQuery(function() {
  jQuery("body").addClass("jquery-loaded");
  var customNavigationSwiper = [];
  jQuery('.custom-swiper-pagination > .swiper-label').each(function(i) {
    customNavigationSwiper.push(jQuery(this).text());
  });

  var mySwiper = new Swiper ('.multibanner', {
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (customNavigationSwiper[index]) + '</span>';
          },
      },
    })
});