function jsGridSlider() {
  $(".js-grid-slider").each(function () {
    var t = $(this),
      i = t.find(".grid-list-item:first-child").innerWidth();
    i <= 255
      ? t.slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          variableWidth: !0,
          infinite: !1,
          speed: 300,
          prevArrow: '<div class="grid-slider-navigation prev"><button type="button" class="slick-arrow slick-prev">Previous</button></div>',
          nextArrow: '<div class="grid-slider-navigation next"><button type="button" class="slick-arrow slick-next">Next</button></div>',
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
          ],
        })
      : 260 <= i && window.matchMedia("(min-width: 1645px)").matches;
  });
}
(jQuery.fn.tmCheckboxWrap = function () {
  return jQuery(this)
    .find(".js-checkbox-wrap")
    .each(function () {
      var e = jQuery(this);
      "init" !== e.data("init-checkbox-wrap") &&
        e.on("click", function () {
          var t = e.find("input[type=radio]"),
            i = $("input[type=radio]");
          t.is(":checked")
            ? setTimeout(function () {
                e.addClass("is-active");
              }, 200)
            : ($(".js-checkbox-wrap").removeClass("is-active"),
              setTimeout(function () {
                i.each(function () {
                  var t = $(this);
                  t.is(":checked") && t.closest(".js-checkbox-wrap").addClass("is-active");
                });
              }, 200));
        });
    });
}),
  $(function () {
    jQuery("body").tmCheckboxWrap(["init-checkbox-wrap"]);
  }),
  (jQuery.fn.tmCheckoutCollapse = function () {
    return jQuery(this)
      .find(".js-checkout-collapse")
      .each(function () {
        "init" !== jQuery(this).data("init-checkout-collapse") &&
          ($(".js-checkout-collapse").on("click", function () {
            var t = $(this).closest(".js-checkout-basket");
            t.hasClass("is-open")
              ? setTimeout(function () {
                  t.removeClass("is-open");
                }, 100)
              : setTimeout(function () {
                  t.addClass("is-open");
                }, 100);
          }),
          window.matchMedia("(max-width: 767.98px)").matches && $(".js-checkout-content").addClass("collapse"));
      });
  }),
  $(function () {
    jQuery("body").tmCheckoutCollapse(["init-checkout-collapse"]);
  }),
  (jQuery.fn.tmClickAnchorWithFocus = function () {
    return jQuery(this)
      .find(".js-scroll-with-focus")
      .each(function () {
        var t = jQuery(this),
          i = $(t.attr("href"));
        "init" !== t.data("init-click-anchor-with-focus") &&
          void 0 !== i &&
          i.length &&
          t.click(function (t) {
            t.preventDefault(),
              window.matchMedia("(max-width: 992px)").matches
                ? ($("html").removeClass("anchor-nav-active"),
                  $("html,body")
                    .stop()
                    .animate({ scrollTop: i.offset().top - 60 }, "fast", function () {
                      $(i)
                        .addClass("anim-pulse-v1")
                        .delay(1e3)
                        .queue(function () {
                          $(this).removeClass("anim-pulse-v1").dequeue();
                        });
                    }))
                : $("html,body")
                    .stop()
                    .animate({ scrollTop: i.offset().top }, "fast", function () {
                      $(i)
                        .addClass("anim-pulse-v1")
                        .delay(1e3)
                        .queue(function () {
                          $(this).removeClass("anim-pulse-v1").dequeue();
                        });
                    });
          });
      });
  }),
  $(function () {
    jQuery("body").tmClickAnchorWithFocus(["init-click-anchor-with-focus"]);
  }),
  (jQuery.fn.tmCollapseScrollTo = function () {
    return jQuery(this)
      .find(".js-col-scroll-to")
      .each(function () {
        "init" !== jQuery(this).data("init-collapse-scroll-to") &&
          $(".js-col-scroll-to").on("click", function () {
            var t = $(this).attr("href");
            setTimeout(function () {
              $("html, body").animate({ scrollTop: $(t).offset().top }, 2e3);
            }, 400);
          });
      });
  }),
  $(function () {
    jQuery("body").tmCollapseScrollTo(["init-collapse-scroll-to"]);
  }),
  (jQuery.fn.tmModalCollapseLink = function () {
    return jQuery(this)
      .find(".js-collapse-link")
      .each(function () {
        "init" !== jQuery(this).data("init-modal-collapse-link") &&
          $(document).on("click", ".js-collapse-link", function (t) {
            t.preventDefault(), $(this).toggleClass("collapsed");
          });
      });
  }),
  $(window).on("load", function () {
    jQuery("body").tmClickAnchorWithFocus(["init-modal-collapse-link"]);
  }),
  (jQuery.fn.tmHighlightArea = function () {
    return jQuery(this)
      .find(".js-highlight-wrap")
      .each(function () {
        var t = jQuery(this),
          i = t.find(".js-hightlight-area-input");
        "init" !== t.data("init-highlight-area") &&
          (i.data("init-highlight-area", "init").on("click", function (t) {
            $("html").addClass("ha-is-active");
          }),
          $(".js-hightlight-area-btn").on("click", function (t) {
            t.preventDefault(),
              $("html, body").animate({ scrollTop: $(".js-to-scroll").offset().top }, 500),
              setTimeout(function () {
                $("html").addClass("ha-is-active");
              }, 700);
          }),
          $(".js-switch-content-btn").on("click", function (t) {
            var i = $(this);
            $("html").hasClass("ha-is-active") && i.closest(".js-switch-content").addClass("is-hidden");
          }),
          $(document).on("click", ".js-highlight-close-btn, .js-highlight-overlay", function (t) {
            t.preventDefault(), $("html").removeClass("ha-is-active"), $(".js-switch-content").removeClass("is-hidden");
          }));
      });
  }),
  $(function () {
    jQuery("body").tmHighlightArea(["init-highlight-area"]);
  }),
  (jQuery.fn.tmGetFocusSelectAll = function () {
    return jQuery(this)
      .find(".js-focus-select-all")
      .each(function () {
        var t = jQuery(this);
        "init" !== t.data("init-get-focus-select-all") &&
          $(document).on("focus", t, function () {
            var t = $(this);
            t != this &&
              setTimeout(function () {
                t.select();
              }, 100);
          });
      });
  }),
  $(window).on("load", function () {
    jQuery("body").tmGetFocusSelectAll(["init-get-focus-select-all"]);
  }),
  (jQuery.fn.tmModalCustom = function () {
    return jQuery(this)
      .find(".lightbox")
      .each(function () {
        var e = jQuery(this);
        "init" !== e.data("init-modal-custom") &&
          e.data("init-modal-custom", "init").on("click", function (t) {
            setTimeout(function () {
              var t, i;
              1 == e.data("iframe")
                ? ((t = e.data("modal-custom-class")),
                  setTimeout(function () {
                    $(".bootbox").addClass(t);
                  }, 200))
                : ((i = $(".bootbox .js-modal-custom").data("custom-class")), $(".js-modal-custom").closest(".bootbox").addClass(i));
            }, 200);
          });
      });
  }),
  $(function () {
    jQuery("body").tmModalCustom(["init-modal-custom"]);
  }),
  (jQuery.fn.tmActiveLinkOnScroll = function () {
    return jQuery(this)
      .find(".js-scroll-nav-link")
      .each(function () {
        var t,
          i = jQuery(this),
          e = $(window).scrollTop();
        "init" !== i.data("init-active-link-on-scroll") &&
          i.closest(".js-navbar-item").hasClass("active") &&
          ((t = (i = (t = $("#" + $(this).attr("href").replace("#", ""))).closest("div").offset().top) + t.closest("div").height()),
          i <= e && e <= t
            ? ($(".js-scroll-nav-item").removeClass("active"), $(this).parent().addClass("active"))
            : e == $(document).height() - $(window).height()
            ? ($(".js-scroll-nav-item").removeClass("active"), $(".js-scroll-nav-item:last-child").addClass("active"))
            : $(this).parent().removeClass("active"));
      });
  }),
  $(function () {
    $(document).on("scroll", function () {
      jQuery("body").tmActiveLinkOnScroll(["init-active-link-on-scroll"]);
    });
  }),
  (jQuery.fn.tmOverlayComponentBackground = function () {
    return jQuery(this)
      .find(".js-overlay-component")
      .each(function () {
        var t,
          i,
          e = jQuery(this);
        "init" !== e.data("init-overlay-component-background") &&
          (window.matchMedia("(min-width: 1200px)").matches && ((t = e.data("height-xl")), e.css("height", t)),
          window.matchMedia("(max-width: 1199px)").matches && ((t = e.data("height-lg")), e.css("height", t)),
          window.matchMedia("(max-width: 991px)").matches && ((i = e.data("height-md")), e.css("height", i)),
          window.matchMedia("(max-width: 767.97px)").matches && ((i = e.data("height-xs")), e.css("height", i)));
      });
  }),
  $(function () {
    jQuery("body").tmOverlayComponentBackground(["init-overlay-component-background"]);
  }),
  $(window).on("resize", function () {
    jQuery("body").tmOverlayComponentBackground(["init-overlay-component-background"]);
  }),
  (jQuery.fn.tmPopOverCustom = function () {
    return jQuery(this)
      .find(".js-popover")
      .each(function () {
        var t = jQuery(this);
        "init" !== t.data("init-popover-custom") &&
          (t.data("init-popover-custom", "init").on("click", function (t) {
            setTimeout(function () {
              var t = $(".js-popover-custom").attr("data-custom-class");
              $(".js-popover-custom").closest(".popover").addClass(t);
            }, 100);
          }),
          setTimeout(function () {
            $(".js-popover-custom").removeClass("d-none");
          }, 200));
      });
  }),
  $(function () {
    jQuery("body").tmPopOverCustom(["init-popover-custom"]);
  }),
  $(function () {
    function i(t) {
      var i = t.val();
      5e3 <= i && i <= 7e3
        ? $(".js-range-discount").html("30")
        : 4e3 <= i && i <= 4900
        ? $(".js-range-discount").html("25")
        : 3e3 <= i && i <= 3900
        ? $(".js-range-discount").html("20")
        : 2e3 <= i && i <= 2900
        ? $(".js-range-discount").html("15")
        : 1e3 <= i && i <= 1900
        ? $(".js-range-discount").html("10")
        : 500 <= i && i <= 900 && $(".js-range-discount").html("5");
      var e = (i / 100) * $(".js-range-discount").html(),
        s = Number(e.toFixed(0)).toLocaleString("ru-RU").split(/\s/).join(" "),
        t = Number((24 * e).toFixed(0))
          .toLocaleString("ru-RU")
          .split(/\s/)
          .join(" "),
        e = 1.21 * (i / 10 + 10),
        i = 10 * Math.ceil(e / 10),
        e = Number(i.toFixed(0)).toLocaleString("ru-RU").split(/\s/).join(" "),
        i = Number((24 * i).toFixed(0))
          .toLocaleString("ru-RU")
          .split(/\s/)
          .join(" ");
      $(".js-data-after-discount").html(s), $(".js-data-discount-times-24").html(t), $(".js-data-smartphone-discount").html(e), $(".js-data-smartphone-times-24").html(i);
    }
    0 < $(".js-range-calculation-v1").length &&
      $(".js-range-calculation-v1").each(function () {
        var t = $(this);
        (targetInput = $(t.data("target-input"))),
          i(t),
          t.on("input", function () {
            i(t);
          }),
          targetInput.on("input", function () {
            t.val(targetInput.val()), i(t);
          });
      });
  }),
  $(function () {
    $(".js-range-v1").each(function () {
      function t(t) {
        var i;
        "" !== t.target.max && void 0 !== t.target.max
          ? ((i = parseFloat(t.target.max)),
            (i = Math.round(t.target.value / (i / 100))),
            e
              .parent()
              .find("style")
              .text(s + o.replace("{value}", i)))
          : console.error("Attribute max is missing in range input!"),
          n.length && ((t = +t.target.value), (t = Number(t.toFixed(0)).toLocaleString("ru-RU").split(/\s/).join(" ")), n.val(t).triggerHandler("change"));
      }
      var e, i, s, n, o;
      "init" !== $(".js-range").data("init-range") &&
        ((i = (e = $(this)).attr("id")),
        (s = ".range"),
        (n = $(e.data("target-input"))),
        (o = e.hasClass("theme-v1") ? "::-webkit-slider-runnable-track{background:linear-gradient(90deg, #E20074 {value}%, #CCCCDE 0)}" : "::-webkit-slider-runnable-track{background:linear-gradient(90deg, #64b9e4 {value}%, #e5e5e5 0)}"),
        void 0 === i ? ((i = generateID(5)), e.attr("id", "range-" + i), (s = "#range-" + i)) : (s += "#" + i),
        e.before("<style>" + s + o + "</style>"),
        n.length &&
          n.on("input", function () {
            e.val(n.val()).triggerHandler("change");
          }),
        e.on("input", t).on("change", t).triggerHandler("change"));
    });
  }),
  (jQuery.fn.tmResizableImageWidth = function () {
    return jQuery(this)
      .find(".js-resizable")
      .each(function () {
        var t,
          i,
          e = jQuery(this);
        "init" !== e.data("init-resizable-image-width") &&
          (window.matchMedia("(min-width: 1200px)").matches && ((t = e.data("width-xl")), e.attr("width", t)),
          window.matchMedia("(max-width: 1199px)").matches && ((t = e.data("width-lg")), e.attr("width", t)),
          window.matchMedia("(max-width: 991px)").matches && ((i = e.data("width-md")), e.attr("width", i)),
          window.matchMedia("(max-width: 767.97px)").matches && ((i = e.data("width-xs")), e.attr("width", i)));
      });
  }),
  $(function () {
    jQuery("body").tmResizableImageWidth(["init-resizable-image-width"]);
  }),
  $(window).on("resize", function () {
    jQuery("body").tmResizableImageWidth(["init-resizable-image-width"]);
  }),
  (jQuery.fn.tmShowMoreWrap = function () {
    return jQuery(this)
      .find(".js-show-more-button")
      .each(function () {
        var t = jQuery(this);
        "init" !== t.data("init-show-more-wrap") &&
          t.data("init-show-more-wrap", "init").on("click", function (t) {
            t.preventDefault();
            var i = $(this);
            i.closest(".js-show-more-wrap").toggleClass("is-active"),
              i.closest(".show-more-button").removeClass("d-block"),
              i.hasClass("js-no-anim")
                ? (i.closest(".show-more-button").addClass("d-block"), i.toggleClass("is-open"))
                : i.hasClass("js-onetime")
                ? i.closest(".show-more-button").addClass("d-none")
                : i.hasClass("js-show-section")
                ? setTimeout(function () {
                    $(".js-show-more-section").addClass("d-block");
                  }, 500)
                : setTimeout(function () {
                    i.closest(".show-more-button").addClass("d-block"), i.toggleClass("is-open");
                  }, 700),
              i.hasClass("to-scroll") &&
                i.hasClass("is-open") &&
                setTimeout(function () {
                  $("html, body").animate({ scrollTop: $(".js-to-scroll").offset().top }, 500);
                }, 700),
              i.hasClass("js-to-bs-section") &&
                window.matchMedia("(max-width: 767.98px)").matches &&
                setTimeout(function () {
                  i.closest(".js-bs-section").toggleClass("bg-grey-v1-xs"), i.closest(".js-bs-section").toggleClass("py-0");
                }, 100);
          });
      });
  }),
  $(function () {
    jQuery("body").tmShowMoreWrap(["init-show-more-wrap"]);
  }),
  (jQuery.fn.tmFilterSliderXS = function () {
    return jQuery(this)
      .find(".js-filter-slider-xs")
      .each(function () {
        var t = jQuery(this);
        "init" !== t.data("init-filter-slider-xs") &&
          window.matchMedia("(max-width: 767.98px)").matches &&
          t.slick({ slidesToShow: 2, slidesToScroll: 2, arrows: !1, dots: !1, accessibility: !1, variableWidth: !0, infinite: !1, speed: 300 });
      });
  }),
  (jQuery.fn.tmSliderV3 = function () {
    return jQuery(this)
      .find(".js-slider-v3")
      .each(function () {
        var t = jQuery(this);
        "init" !== t.data("init-slider-v3") &&
          (t.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: !1,
            accessibility: !1,
            infinite: !1,
            speed: 300,
            prevArrow: '<div class="slider-v3-navigation slick-prev"><button type="button" class="sl-inner-arrow sl-prev">Previous</button></div>',
            nextArrow: '<div class="slider-v3-navigation slick-next"><button type="button" class="sl-inner-arrow sl-next">Next</button></div>',
            responsive: [
              { breakpoint: 1024, settings: { slidesToShow: 3 } },
              { breakpoint: 767, settings: { slidesToShow: 1, variableWidth: !0 } },
            ],
          }),
          setTimeout(function () {
            t.find(".slick-track").addClass("d-flex");
          }, 100));
      });
  }),
  (jQuery.fn.tmSliderV4 = function () {
    return jQuery(this)
      .find(".js-slider-v4")
      .each(function () {
        var t = jQuery(this);
        "init" !== t.data("init-slider-v4") &&
          t.slick({
            slidesToShow: 3,
            variableWidth: !0,
            slidesToScroll: 1,
            dots: !1,
            accessibility: !1,
            infinite: !1,
            speed: 300,
            prevArrow: '<div class="slider-navigation slick-prev"><button type="button" class="sl-inner-arrow sl-prev">Previous</button></div>',
            nextArrow: '<div class="slider-navigation slick-next"><button type="button" class="sl-inner-arrow sl-next">Next</button></div>',
            responsive: [
              { breakpoint: 1024, settings: { slidesToShow: 3 } },
              { breakpoint: 767, settings: { slidesToShow: 1 } },
            ],
          });
      });
  }),
  $(function () {
    $(window).on("load", function () {
      setTimeout(function () {
        jQuery("body").tmFilterSliderXS(["init-filter-slider-xs"]),
          jQuery("body").tmSliderV3(["init-slider-v3"]),
          jQuery("body").tmSliderV4(["init-slider-v4"]),
          $(".js-slideshow").slick({ slidesToShow: 1, slidesToScroll: 1, dots: !1, accessibility: !1, infinite: !0, speed: 300 }),
          $(".js-slider-2").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: !1,
            accessibility: !1,
            infinite: !1,
            speed: 300,
            prevArrow: '<div class="slider-navigation slick-prev"><button type="button" class="sl-inner-arrow sl-prev">Previous</button></div>',
            nextArrow: '<div class="slider-navigation slick-next"><button type="button" class="sl-inner-arrow sl-next">Next</button></div>',
            responsive: [{ breakpoint: 767, settings: { slidesToShow: 1, variableWidth: !0, arrows: !1 } }],
          }),
          $(".js-grid-slider-v1").slick({
            infinite: !0,
            centerPadding: "0",
            slidesToShow: 1,
            variableWidth: !0,
            prevArrow: '<div class="slick-arrow-nav d-none d-md-block"><button type="button" class="sl-arrow slick-prev">Previous</button></div>',
            nextArrow: '<div class="slick-arrow-nav d-none d-md-block"><button type="button" class="sl-arrow slick-next">Next</button></div>',
            responsive: [{ breakpoint: 767, settings: "unslick" }],
          });
      }, 1e3);
    }),
      window.matchMedia("(max-width: 580px)").matches &&
        ($(".js-tab-slider-xs-v1").each(function () {
          var t = $(this),
            i = t.find(".tab-list-item"),
            e = i.length;
          i.each(function () {
            var t = $(this);
            t.is(":last-child") && t.addClass("slick-last-item");
          }),
            3 < e
              ? (t.addClass("tab-slider-xs-four-items"),
                i.each(function () {
                  var t = $(this);
                  t.is(":nth-child(3)") && t.addClass("slick-special-trigger");
                }))
              : i.each(function () {
                  var t = $(this);
                  t.is(":nth-child(2)") && t.addClass("slick-special-trigger");
                });
        }),
        $(".js-tab-slider-xs-v1").slick({ slidesToShow: 2, slidesToScroll: 1, arrows: !1, dots: !1, accessibility: !1, variableWidth: !0, infinite: !1, speed: 300, focusOnSelect: !0, draggable: !1 }),
        $(document).on("click", ".js-tab-slider-xs-v1 .tab-list-link", function () {
          var t = $(this);
          $(".js-tab-slider-xs-v1 .tab-list-link").parent("li").removeClass("active"),
            setTimeout(function () {
              t.parent("li").addClass("active");
            }, 5),
            t.parent("li").hasClass("slick-special-trigger")
              ? (t.closest(".js-tab-slider-xs-v1").addClass("slick-special"), t.closest(".js-tab-slider-xs-v1").removeClass("slick-last-item-active"))
              : t.parent("li").hasClass("slick-last-item")
              ? t.closest(".js-tab-slider-xs-v1").addClass("slick-last-item-active")
              : (t.closest(".js-tab-slider-xs-v1").removeClass("slick-special"), t.closest(".js-tab-slider-xs-v1").removeClass("slick-last-item-active"));
        })),
      window.matchMedia("(max-width: 767.98px)").matches &&
        ($(".js-grid-slider-xs").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          variableWidth: !0,
          infinite: !1,
          speed: 300,
          prevArrow: '<div class="grid-slider-navigation prev"><button type="button" class="slick-arrow slick-prev">Previous</button></div>',
          nextArrow: '<div class="grid-slider-navigation next"><button type="button" class="slick-arrow slick-next">Next</button></div>',
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
          ],
        }),
        $(".js-grid-slider-xs-v1").each(function () {
          var t,
            i = $(this);
          i.hasClass("js-custom-slider")
            ? ((t = i.attr("data-slides-to-show")), (i = i.attr("data-slides-to-scroll")), $(".js-grid-slider-xs-v1").slick({ slidesToShow: t, slidesToScroll: i, variableWidth: !0, infinite: !1, speed: 300 }))
            : $(".js-grid-slider-xs-v1").slick({ slidesToShow: 1, slidesToScroll: 1, variableWidth: !0, infinite: !1, speed: 300 });
        }),
        $(".js-tab-slider-xs-v2").slick({ slidesToShow: 1, slidesToScroll: 1, arrows: !1, dots: !0, accessibility: !1, infinite: !1, speed: 300 }),
        $(".js-grid-slider-xs-v2").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          variableWidth: !0,
          infinite: !1,
          focusOnSelect: !0,
          speed: 300,
          prevArrow: '<div class="grid-slider-navigation prev"><button type="button" class="slick-arrow slick-prev">Previous</button></div>',
          nextArrow: '<div class="grid-slider-navigation next"><button type="button" class="slick-arrow slick-next">Next</button></div>',
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
          ],
        }),
        $(".js-grid-slider-xs-v3").slick({ slidesToShow: 1, slidesToScroll: 1, variableWidth: !0, infinite: !1, speed: 300 }),
        setTimeout(function () {
          $(".js-grid-slider-xs-v3").find(".slick-track").addClass("d-flex");
        }, 100));
  }),
  (jQuery.fn.tmAnchorNavigation = function () {
    return jQuery(this)
      .find(".js-anchor-nav-btn")
      .each(function () {
        var t = jQuery(this);
        "init" !== t.data("init-anchor-navigation") &&
          (t.on("click", function (t) {
            t.preventDefault(), $("html").addClass("anchor-nav-active");
          }),
          $(document).on("click", ".js-anchor-nav-close, .js-bs-overlay", function (t) {
            t.preventDefault(), $("html").removeClass("anchor-nav-active");
          }),
          $(".js-anchor-nav").on("click", ".js-tab-link", function () {
            $("html").removeClass("anchor-nav-active");
          }));
      });
  }),
  $(function () {
    jQuery("body").tmAnchorNavigation(["init-anchor-navigation"]);
  }),
  (jQuery.fn.tmGetStickySideBar = function () {
    return jQuery(this)
      .find(".js-sticky-content")
      .each(function () {
        var t,
          i,
          e,
          s = jQuery(this);
        "init" !== s.data("init-get-sticky-bar") &&
          s.hasClass("active") &&
          ((i = s.closest(".js-sticky-wrapper").innerHeight()),
          (t = s.find(".js-sticky-sidebar-wrap")),
          (e = s.find(".js-sticky-bar").innerHeight()),
          (s = s.closest(".js-sticky-panel-wrap").find(".js-sticky-panel")),
          window.matchMedia("(min-width: 992px)").matches && ((e = (i = i - 147) - e + 87), s.css("height", e), t.css("height", i)));
      });
  }),
  $(function () {
    $(window).on("resize", function () {
      jQuery("body").tmGetStickySideBar(["init-get-sticky-bar"]);
    }),
      $(window).on("load", function () {
        jQuery("body").tmGetStickySideBar(["init-get-sticky-bar"]);
      }),
      $(document).on("click", ".js-show-more-button", function () {
        setTimeout(function () {
          jQuery("body").tmGetStickySideBar(["init-get-sticky-bar"]);
        }, 200);
      }),
      $(".js-sticky-panel").on("click", ".js-tab-link", function () {
        setTimeout(function () {
          jQuery("body").tmGetStickySideBar(["init-get-sticky-bar"]);
        }, 200),
          $("html, body").animate({ scrollTop: $(".js-sticky-panel-wrap").offset().top }, 500);
      });
  }),
  (jQuery.fn.tmSwitchContent = function () {
    return jQuery(this)
      .find(".js-switch-link")
      .each(function () {
        var i = jQuery(this);
        "init" !== i.data("init-switch-content") &&
          $(i).on("click", function (t) {
            t.preventDefault(), i.closest(".js-switch-content").addClass("is-hidden"), console.log("asdasd");
          });
      });
  }),
  $(function () {
    jQuery("body").tmSwitchContent(["init-switch-content"]);
  }),
  (jQuery.fn.tmSwitchContentAttribute = function () {
    return jQuery(this)
      .find("*[data-change-element]")
      .each(function () {
        var e = jQuery(this);
        "init" !== e.data("init-switch-content-attribute") &&
          $(e).on("click", function (t) {
            t.preventDefault();
            var i = e.data("change-element");
            $("*[data-change-target]").removeClass("collapsed").addClass("collapse"),
              setTimeout(function () {
                $("*[data-change-target = " + i + "]")
                  .addClass("collapsed")
                  .removeClass("collapse");
              }, 50);
          });
      });
  }),
  $(function () {
    jQuery("body").tmSwitchContentAttribute(["init-switch-content-attribute"]);
  }),
  (jQuery.fn.tmTabLinkActiveScroll = function () {
    return jQuery(this)
      .find(".js-tab-link")
      .each(function () {
        var t = jQuery(this);
        "init" !== t.data("init-tab-link-active-on-scroll") &&
          "scrollTop" == t.data("function") &&
          t.on("click", function () {
            window.matchMedia("(max-width: 992px)").matches
              ? setTimeout(function () {
                  $("html, body").animate({ scrollTop: $(".js-scroll-to").offset().top - 60 }, 500);
                }, 200)
              : setTimeout(function () {
                  $("html, body").animate({ scrollTop: $(".js-scroll-to").offset().top }, 500);
                }, 200);
          });
      });
  }),
  $(function () {
    jQuery("body").tmTabLinkActiveScroll(["init-tab-link-active-on-scroll"]);
  }),
  (jQuery.fn.tmTabsXsV1 = function () {
    return jQuery(this)
      .find(".js-tab-xs-v1")
      .each(function () {
        var s = jQuery(this);
        "init" !== s.data("init-tabs-xs-v1") &&
          window.matchMedia("(max-width: 767.97px)").matches &&
          (s.find(".tab-pane").removeClass("active"),
          s.find(".tab-list-item").removeClass("active"),
          s.find(".js-tab-link-v1").on("click", function (t) {
            $("html").addClass("ha-is-active"),
              setTimeout(function () {
                s.find(".tab-pane.active").find(".js-video-container").addClass("is-playing"), s.find(".tab-pane.active").find(".js-video").get(0).play();
              }, 500);
          }),
          $(document).on("click", ".js-highlight-close-btn, .js-highlight-overlay", function (t) {
            t.preventDefault(), $("html").removeClass("ha-is-active"), s.find(".tab-pane").removeClass("active"), s.find(".tab-list-item").removeClass("active");
            for (var i = $(".js-video"), e = 0; e < i.length; e++) i[e].pause();
          }));
      });
  }),
  $(function () {
    jQuery("body").tmTabsXsV1(["init-tabs-xs-v1"]);
  }),
  (jQuery.fn.tmTafirSliderV1 = function () {
    return jQuery(this)
      .find(".js-tarif-slider-v1")
      .each(function () {
        var t = jQuery(this);
        "init" !== t.data("init-tarif-slider-v1") &&
          3 < t.find(".tarif-slider-item").length &&
          (setTimeout(function () {
            t.slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: !1,
              accessibility: !1,
              infinite: !1,
              speed: 300,
              responsive: [
                { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 767, settings: { slidesToShow: 1 } },
              ],
            });
          }, 50),
          setTimeout(function () {
            t.find(".slick-track").addClass("flex row-boxes");
          }, 100));
      });
  }),
  (jQuery.fn.tmTarifSliderV2 = function () {
    return jQuery(this)
      .find(".js-tarif-slider-v2")
      .each(function () {
        var t = jQuery(this);
        "init" !== t.data("init-tarif-slider-v2") &&
          (window.matchMedia("(min-width: 768px)").matches
            ? 3 < t.find(".tarif-slider-item").length &&
              (setTimeout(function () {
                t.slick({
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: !1,
                  accessibility: !1,
                  infinite: !0,
                  autoplay: !0,
                  autoplaySpeed: 3e3,
                  speed: 300,
                  pauseOnFocus: !0,
                  responsive: [
                    { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                    { breakpoint: 767, settings: { slidesToShow: 1, variableWidth: !0, arrows: !1, autoplay: !1, infinite: !1 } },
                  ],
                });
              }, 50),
              $(".js-slick-pause").on("click", function () {
                $(".js-tarif-slider-v2").slick("slickPause").slick("slickSetOption", "autoplay", !1);
              }),
              $(document).on("hidden.bs.modal", ".js-slick-play-btn.bootbox.modal", function (t) {
                $(".js-tarif-slider-v2").slick("slickPlay").slick("slickSetOption", "autoplay", !0);
              }))
            : window.matchMedia("(max-width: 767.98px)").matches &&
              2 <= t.find(".tarif-slider-item").length &&
              (setTimeout(function () {
                t.slick({
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: !1,
                  accessibility: !1,
                  infinite: !0,
                  autoplay: !0,
                  autoplaySpeed: 3e3,
                  speed: 300,
                  pauseOnFocus: !0,
                  responsive: [
                    { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                    { breakpoint: 767, settings: { slidesToShow: 1, variableWidth: !0, arrows: !1, autoplay: !1, infinite: !1 } },
                  ],
                });
              }, 50),
              $(".js-slick-pause").on("click", function () {
                $(".js-tarif-slider-v2").slick("slickPause").slick("slickSetOption", "autoplay", !1);
              }),
              $(document).on("hidden.bs.modal", ".js-slick-play-btn.bootbox.modal", function (t) {
                $(".js-tarif-slider-v2").slick("slickPlay").slick("slickSetOption", "autoplay", !0);
              })));
      });
  }),
  (jQuery.fn.tmTarifSliderV3 = function () {
    return jQuery(this)
      .find(".js-tarif-slider-v3")
      .each(function () {
        var t = jQuery(this);
        "init" !== t.data("init-tarif-slider-v3") &&
          ((window.matchMedia("(min-width: 768px)").matches && 4 < t.find(".tarif-slider-item").length) || (window.matchMedia("(max-width: 767.97px)").matches && 2 < t.find(".tarif-slider-item").length)) &&
          ("true" == t.attr("data-slick-init")
            ? (t.hasClass("js-slider-init") &&
                setTimeout(function () {
                  t.slick("unslick");
                }, 80),
              setTimeout(function () {
                t.slick({
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  dots: !1,
                  accessibility: !1,
                  infinite: !1,
                  autoplay: !1,
                  variableWidth: !0,
                  speed: 300,
                  pauseOnFocus: !0,
                  responsive: [{ breakpoint: 992, settings: { slidesToShow: 1, arrows: !1 } }],
                }),
                  t.addClass("js-slider-init");
              }, 120))
            : setTimeout(function () {
                t.slick({
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  dots: !1,
                  accessibility: !1,
                  infinite: !1,
                  autoplay: !1,
                  variableWidth: !0,
                  speed: 300,
                  pauseOnFocus: !0,
                  responsive: [{ breakpoint: 992, settings: { slidesToShow: 1, arrows: !1 } }],
                }),
                  t.attr("data-slick-init", "true");
              }, 120));
      });
  }),
  (jQuery.fn.tmTarifSliderXSV1 = function () {
    return jQuery(this)
      .find(".js-tarif-slider-xs-v1")
      .each(function () {
        var t = jQuery(this);
        "init" !== t.data("init-tarif-slider-xs-v1") &&
          (window.matchMedia("(min-width: 768px)").matches && "true" == t.attr("data-slick-init")
            ? t.hasClass("js-slider-init") &&
              setTimeout(function () {
                t.slick("unslick");
              }, 80)
            : window.matchMedia("(max-width: 767.98px)").matches &&
              (t.hasClass("js-slider-init") &&
                setTimeout(function () {
                  t.slick("unslick");
                }, 80),
              setTimeout(function () {
                t.slick({ variableWidth: !0, slidesToShow: 1, slidesToScroll: 1, dots: !1, infinite: !1, accessibility: !1, autoplaySpeed: 3e3, speed: 300 }), t.addClass("js-slider-init");
              }, 120)));
      });
  }),
  $(function () {
    $(window).on("load", function () {
      setTimeout(function () {
        jQuery("body").tmTafirSliderV1(["init-tarif-slider-v1"]),
          jQuery("body").tmTarifSliderV2(["init-tarif-slider-v2"]),
          jQuery("body").tmTarifSliderV3(["init-tarif-slider-v3"]),
          jQuery("body").tmTarifSliderXSV1(["init-tarif-slider-xs-v1"]);
      }, 1e3),
        $(document).on("click", ".lightbox", function () {
          setTimeout(function () {
            0 < $(".bootbox [class*='js-tarif-slider']").length &&
              (jQuery("body").tmTafirSliderV1(["init-tarif-slider-v1"]),
              jQuery("body").tmTarifSliderV2(["init-tarif-slider-v2"]),
              jQuery("body").tmTarifSliderV3(["init-tarif-slider-v3"]),
              jQuery("body").tmTarifSliderXSV1(["init-tarif-slider-xs-v1"]));
          }, 200);
        }),
        $(".js-link-active-slider").on("click", function () {
          $(this).hasClass("collapsed") &&
            ($(".js-collapse-slider").slick("unslick"),
            setTimeout(function () {
              jQuery("body").tmTafirSliderV1(["init-tarif-slider-v1"]);
            }, 500));
        });
    });
  }),
  (jQuery.fn.tmVideoPlayButton = function () {
    return jQuery(this)
      .find(".js-video-btn")
      .each(function () {
        var t = jQuery(this);
        "init" !== t.data("init-video-play-button") &&
          (t.on("click", function () {
            t.closest(".js-video-container").addClass("is-playing"), t.prev(".js-video").get(0).play();
          }),
          $(".js-tab-link-v1").each(function () {
            $(this).on("click", function () {
              for (var t = $(".js-video"), i = 0; i < t.length; i++) t[i].pause();
            });
          }));
      });
  }),
  $(function () {
    jQuery("body").tmVideoPlayButton(["init-video-play-button"]);
  }),
  (jQuery.fn.tmFixedCtaPanel = function () {
    return jQuery(this)
      .find(".js-fixed-panel")
      .each(function () {
        "init" !== jQuery(this).data("init-fixed-cta-panel") && (600 < $(window).scrollTop() ? $(".js-fixed-panel").addClass("show") : $(".js-fixed-panel").removeClass("show"));
      });
  }),
  $(function () {
    $(window).scroll(function () {
      jQuery("body").tmFixedCtaPanel(["init-fixed-cta-panel"]);
    });
  }),
  (jQuery.fn.tmXmasSlider = function () {
    return jQuery(this)
      .find(".js-xmas-slider")
      .each(function () {
        var e = jQuery(this);
        "init" !== e.data("init-xmas-slider") &&
          1 < e.find(".slider-item").length &&
          (setTimeout(function () {
            e.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: !0,
              accessibility: !1,
              infinite: !1,
              speed: 300,
              responsive: [
                { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 767, settings: { slidesToShow: 1, variableWidth: !0, dots: !0 } },
              ],
            });
          }, 50),
          setTimeout(function () {
            e.find(".slick-track").addClass("flex row-boxes");
          }, 100),
          window.matchMedia("(min-width: 768px)").matches &&
            e.on("init", function (t, i) {
              e.find(".slick-dots li").each(function (t, i) {
                $(this)
                  .find("button")
                  .addClass("heading" + t);
              }),
                i.$slides.each(function (t, i) {
                  var e = $(this).data("dot-title");
                  $(".heading" + t).text(e);
                });
            }));
      });
  }),
  $(function () {
    $(window).on("load", function () {
      setTimeout(function () {
        jQuery("body").tmXmasSlider(["init-xmas-slider"]);
      }, 1e3);
    });
  }),
  registerInitFunction(
    [
      jQuery.fn.tmVideoPlayButton,
      jQuery.fn.tmShowMoreWrap,
      jQuery.fn.tmPopOverCustom,
      jQuery.fn.tmModalCustom,
      jQuery.fn.tmHighlightArea,
      jQuery.fn.tmClickAnchorWithFocus,
      jQuery.fn.tmModalCollapseLink,
      jQuery.fn.tmGetFocusSelectAll,
      jQuery.fn.tmResizableImageWidth,
      jQuery.fn.tmFixedCtaPanel,
      jQuery.fn.tmTabLinkActiveScroll,
      jQuery.fn.tmActiveLinkOnScroll,
      jQuery.fn.tmSwitchContent,
      jQuery.fn.tmSwitchContentAttribute,
      jQuery.fn.tmAnchorNavigation,
      jQuery.fn.tmGetStickySideBar,
      jQuery.fn.tmFilterSliderXS,
      jQuery.fn.tmTabsXsV1,
      jQuery.fn.tmCheckoutCollapse,
      jQuery.fn.tmTarifSliderXSV1,
      jQuery.fn.tmTarifSliderV3,
    ],
    "essential"
  ),
  $(function () {
    var t = t || {};
    (t.pathToSVGSprite = "/dcpublic/svg-sprite.svg"),
      void 0 !== document.body.dataset && void 0 !== document.body.dataset.themeImagesFolder
        ? (t.pathToSVGSprite = document.body.dataset.themeImagesFolder + t.pathToSVGSprite)
        : (t.pathToSVGSprite = "https://www.t-mobile.cz" + t.pathToSVGSprite);
    var e = new XMLHttpRequest();
    (svgTimeStamp = new Date()),
      e.open("GET", t.pathToSVGSprite, !0),
      e.send(),
      (e.onload = function (t) {
        var i = document.createElement("div");
        (i.innerHTML = e.responseText), document.body.insertBefore(i, document.body.childNodes[0]), i.classList.add("js-svgsprite-2020");
      });
    var a = [];
    function s() {
      $(".js-lazy-bg").each(function () {
        var t = $(this).offset().top;
        a.push(t);
      });
    }
    function n() {
      var t,
        e,
        s,
        n = $(window).height(),
        o = $(window).scrollTop();
      for (i = 0; i < a.length; i++) {
        a[i] <= o + (n - 10) &&
          ((s = $(".js-lazy-bg").eq(i)).attr("data-lazy-bg-all") && window.matchMedia("(min-width: 320px)").matches
            ? ((t = $(".js-lazy-bg").eq(i).attr("data-lazy-bg-all")),
              $(".js-lazy-bg")
                .eq(i)
                .css("background-image", "url(" + t + ")"))
            : s.attr("data-lazy-bg-xl-up") && window.matchMedia("(min-width: 1200px)").matches
            ? ((t = $(".js-lazy-bg").eq(i).attr("data-lazy-bg-xl-up")),
              $(".js-lazy-bg")
                .eq(i)
                .css("background-image", "url(" + t + ")"))
            : s.attr("data-lazy-bg-lg-up") && window.matchMedia("(min-width: 992px)").matches
            ? ((e = $(".js-lazy-bg").eq(i).attr("data-lazy-bg-lg-up")),
              $(".js-lazy-bg")
                .eq(i)
                .css("background-image", "url(" + e + ")"))
            : s.attr("data-lazy-bg-md-up") && window.matchMedia("(min-width: 768px)").matches
            ? ((e = $(".js-lazy-bg").eq(i).attr("data-lazy-bg-md-up")),
              $(".js-lazy-bg")
                .eq(i)
                .css("background-image", "url(" + e + ")"))
            : s.attr("data-lazy-bg-xs") &&
              window.matchMedia("(max-width: 767.97px)").matches &&
              ((s = $(".js-lazy-bg").eq(i).attr("data-lazy-bg-xs")),
              $(".js-lazy-bg")
                .eq(i)
                .css("background-image", "url(" + s + ")")));
      }
    }
    function o() {
      $(".js-bg-height-resize").each(function () {
        var t = $(this),
          i = t.innerHeight();
        t.closest(".js-bg-height-resize-wrap").css("height", i);
      });
    }
    setTimeout(function () {
      s(),
        n(),
        $(window).on("scroll", function () {
          s(), n();
        });
    }, 130),
      o(),
      $(window).on("resize", function () {
        n(), jsGridSlider(), o();
      }),
      0 < $(".js-range-calculation").length &&
        $(".js-range-calculation").each(function () {
          var i = $(this);
          i.on("input", function () {
            var t = i.val();
            $(".js-benefits-list").attr("data-range", t);
          });
        }),
      $(".js-special-tarif-offer").each(function () {
        $(this).closest(".service-listing").addClass("special-tarif-offer");
      }),
      $(".js-one-click").on("click", function () {
        var t = $(this);
        setTimeout(function () {
          t.addClass("d-none");
        }, 400);
      }),
      $(document).on("click", ".js-switch-modal-content", function (t) {
        t.preventDefault(), $(this).closest(".js-modal-content-show").toggleClass("is-hidden");
      }),
      $(document).on("click", ".js-switch-modal", function (t) {
        $(".js-switch-modal").closest(".bootbox").next(".modal-backdrop").remove(), $(".js-switch-modal").closest(".bootbox").remove();
      }),
      $(".js-btn-collapse").on("click", function (t) {
        t.preventDefault(),
          $(this).toggleClass("btn-collapse-active"),
          $(".js-content-collapse").toggleClass("collapse-active"),
          $(".js-left-content-collapse").toggleClass("col-md-4 col-xl-3 col-md-1 col-xl-1"),
          $(".js-right-content-collapse").toggleClass("col-md-11 col-xl-11");
      }),
      $(".js-collapse-code").on("click", function (t) {
        t.preventDefault(), $(this).closest(".js-code-container").toggleClass("code-collapse-active");
      }),
      $(".js-clipboard").on("click", function () {
        var t = $(this);
        t.addClass("clipboard-copied"),
          setTimeout(function () {
            t.removeClass("clipboard-copied");
          }, 1800);
      }),
      $(".tab-list-link").on("click", function () {
        $(".js-code").each(function () {
          var t = $(this);
          200 <= t.height() && t.addClass("To-much-babz");
        });
      }),
      $(".js-progress-bar-in").each(function () {
        var t = $(this);
        t.width(0);
        var i = t.attr("aria-valuenow");
        $(".js-link-active-progress-bar").on("click", function () {
          t.hasClass("animate-me") &&
            setTimeout(function () {
              void 0 !== i && t.width(i + "%");
            }, 500);
        }),
          $(".js-show-more-button").on("click", function () {
            setTimeout(function () {
              void 0 !== i && t.width(i + "%");
            }, 500);
          });
      });
  }),
  $(window).on("load", function () {
    window.matchMedia("(min-width: 768px)").matches && jsGridSlider();
  });
