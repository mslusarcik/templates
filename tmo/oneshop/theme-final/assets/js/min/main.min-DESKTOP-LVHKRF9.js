function checkOneshopScripts(){var e=document.querySelectorAll("main .htmlTemplate");if(0<e.length)for(var t=0;t<e.length;t++){var l=e[t];l.querySelectorAll("#carousel-slider")[0]&&(function(e){const t=e.querySelector(".carousel-wrapper"),l=e.querySelector("#carousel-slider");var o=l.querySelectorAll(".card")[0];const r=t.querySelectorAll("#control-prev")[0],c=t.querySelectorAll("#control-next")[0];var n=l.offsetWidth;const a=o.offsetWidth,s=o.currentStyle||window.getComputedStyle(o),i=Number(s.marginRight.match(/\d+/g)[0]);e=l.querySelectorAll("[data-target='card']").length,o=window.innerWidth||document.documentElement.clientWidth;let d=0,u;u=993<o?-((e-2)*a+i*(e-2)):-((e-1)*a+i*(e-1)),console.log(n,a,i,u),r.addEventListener("click",function(){0!==d&&(d+=a+i,l.style.transform=`translateX(${d}px)`)}),c.addEventListener("click",function(){d!==u&&(d-=a+i,l.style.transform=`translateX(${d}px)`)})}(l),function(t){if((window.innerWidth||document.documentElement.clientWidth)<993){t.querySelector("#carousel-wrapper-mobile");const o=t.querySelector("#carousel-slider-mobile");var l=o.querySelectorAll(".grid-slider-item")[0];const r=t.querySelectorAll("#control-prev-mobile")[0],c=t.querySelectorAll("#control-next-mobile")[0];t=o.offsetWidth;const n=l.offsetWidth,a=l.currentStyle||window.getComputedStyle(l),s=Number(a.marginRight.match(/\d+/g)[0]);l=o.querySelectorAll("[data-target='grid-slider-item']").length;let e=0;const i=-((l-1)*n+s*(l-1));console.log(t,n,s,i),r.addEventListener("click",function(){0!==e&&(e+=n+s,o.style.transform=`translateX(${e}px)`)}),c.addEventListener("click",function(){e!==i&&(e-=n+s,o.style.transform=`translateX(${e}px)`)})}}(l)),l.querySelectorAll(".js-scroll")[0]&&function(t){for(const l of t.querySelectorAll(".js-scroll"))l.addEventListener("click",e);function e(e){e.preventDefault();e=this.getAttribute("data-anchor");t.querySelector(e).scrollIntoView({behavior:"smooth"})}}(l),l.querySelectorAll(".collapse-link")[0]&&function(l){for(var e=l.querySelectorAll(".collapse-link"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){var t=this.getAttribute("data-target");console.log(t);t=l.querySelectorAll(t)[0];t.classList.contains("in")?(console.log("TRUE"),this.classList.add("collapsed"),t.classList.remove("in")):(console.log("ELSE"),this.classList.remove("collapsed"),t.style.maxHeight="auto",t.classList.add("in")),e.preventDefault()})}(l),l.querySelectorAll(".tab-list-item")[0]&&function(r){for(var e=r.querySelectorAll(".tabs"),t=0;t<e.length;t++)for(var l=e[t].querySelectorAll(".tab-list-item"),o=(e[t].querySelectorAll(".tab-pane"),0);o<l.length;o++)l[o].addEventListener("click",function(){for(var e=this.closest(".tabs"),t=e.querySelectorAll(".tab-list-item"),l=0;l<t.length;l++)t[l].classList.remove("active");for(var o=e.querySelectorAll(".tab-pane"),l=0;l<o.length;l++)o[l].classList.remove("active");this.className+=" active";e=this.getAttribute("data-tab");console.log(e),r.querySelector("#"+e).className+=" active"},!1)}(l),l.querySelectorAll(".js-open-tab")[0]&&function(l){for(var e=l.querySelectorAll(".js-open-tab"),o=l.querySelectorAll(".tab-list-item"),r=l.querySelectorAll(".tab-pane"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){for(var e=0;e<o.length;e++)o[e].classList.remove("active");for(e=0;e<r.length;e++)r[e].classList.remove("active");var t=this.getAttribute("data-tab");l.getElementById(t).className+=" active",l.querySelector('[data-tab="'+t+'"]').className+=" active"},!1)}(l),l.querySelectorAll(".js-toggle-content")[0]&&function(t){for(var e=t.querySelectorAll(".js-toggle-content"),l=0;l<e.length;l++)e[l].addEventListener("click",function(e){e.preventDefault();e=this.getAttribute("data-target");(e=t.getElementById(e))&&e.classList.toggle("is-visible")},!1)}(l),l.querySelectorAll(".slide-wrap")[0],l.querySelectorAll(".modal")[0]&&function(l){var e=l.querySelectorAll(".modal");if(e)for(var t=0;t<e.length;t++)e[t].onclick=function(e){var t=l.querySelector(e.target.getAttribute("data-modal-id")),e=t.getElementsByClassName("modal-close-button")[0];t.style.display="block",document.body.style.overflowY="hidden",document.body.classList.add("modal-open"),e.onclick=function(){t.style.display="none",document.body.style.overflowY="auto",document.body.classList.remove("modal-open")}}}(l),l.querySelectorAll(".js-switch-modals")[0]&&function(o){var e=o.querySelectorAll(".js-switch-modals");if(e)for(var t=0;t<e.length;t++)e[t].onclick=function(e){var t=this.closest(".modal-wrapper"),l=t.getElementsByClassName("js-switch-modals")[0].getAttribute("data-modal-id");console.log(l),document.body.classList.contains("modal-open")&&(t.getElementsByClassName("modal-close-button")[0].click(),o.querySelectorAll('.modal[data-modal-id="'+l+'"]')[0].click()),e.preventDefault()}}(l),l.querySelectorAll(".slick-dots")[0]&&function(e){for(var t=e.querySelectorAll(".slick-dots"),l=0;l<t.length;l++)for(var o=t[l].querySelectorAll(".slick-dots li"),r=0;r<o.length;r++)o[r].addEventListener("click",function(){for(var e=this.closest(".slick-dots").querySelectorAll("li"),t=0;t<e.length;t++)e[t].classList.remove("slick-active");this.className+="slick-active"},!1)}(l),l.querySelectorAll(".js-tv-switcher")[0]&&function(c){var n=c.querySelectorAll(".js-tv-switcher");if(n)for(var e=0;e<n.length;e++)n[e].onclick=function(e){for(var t=0;t<n.length;t++)n[t].classList.remove("active");var l=e.target.getAttribute("data-tv-price"),o=e.target.getAttribute("data-tv-discount"),r=e.target.getAttribute("data-tv-tarif-text");c.querySelectorAll(".js-tv-price")[0].textContent=l,c.querySelectorAll(".js-tv-discount")[0].textContent=o,c.querySelectorAll(".js-tv-tarif-text")[0].textContent=r,this.className+=" active",e.preventDefault()}}(l),l.querySelectorAll(".o-close-alert")[0]&&function(e){for(var t=e.querySelectorAll(".o-close-alert"),l=0;l<t.length;l++)t[l].addEventListener("click",function(){this.closest(".o-alert-wrapper").style.display="none"})}(l),l.querySelectorAll(".js-switch-content")[0]&&function(t){for(var e=t.querySelectorAll(".js-switch-content"),l=t.querySelector(".switch-content-target.active"),o=0;o<e.length;o++)e[o].addEventListener("click",function(){var e=this.getAttribute("data-switch-target-id");console.log(e);e=t.querySelector("#"+e);l.classList.remove("active"),(l=e).classList.add("active")})}(l),l.querySelectorAll(".scroller-wrapper")[0]&&function(e){for(var t=e.querySelectorAll(".scroller-wrapper"),l=0;l<t.length;l++){console.log("Scroller found: "+l);var o=t[l],r=o.querySelector(".slider-navigation-buttons"),c=r.getAttribute("data-slider-class");console.log("NameOfSlider: "+c),o.classList.add(c);var n=r.querySelector(".slider-prev"),a=r.querySelector(".slider-next"),s=window.location.pathname,i=r.getAttribute("data-current-slide"),d=t[l].querySelector("#"+i).getAttribute("data-next"),u=r.getAttribute("data-first-slide"),f=r.getAttribute("data-last-slide");r.style.display="flex",n.href=s+"#"+r.getAttribute("data-prev-slide"),a.href=s+"#"+d,n.style.display="none",t[l].querySelector(".slider-prev").addEventListener("click",function(e){return console.log("Prev clicked."),setTimeout(function(){r=e.target.parentNode,console.log(o),i=r.getAttribute("data-prev-slide"),console.log("Current: "+i),scrollPrevSlide=o.querySelector("#"+i).getAttribute("data-prev"),console.log("Prev: "+scrollPrevSlide),d=o.querySelector("#"+i).getAttribute("data-next"),console.log("Next: "+d),r.setAttribute("data-current-slide",i),r.setAttribute("data-prev-slide",scrollPrevSlide),r.setAttribute("data-next-slide",d),a.href=s+"#"+d,e.target.href=s+"#"+scrollPrevSlide,a.style.display="flex",r.getAttribute("data-current-slide")===u&&(n.style.display="none")},500),!0}),t[l].querySelector(".slider-next").addEventListener("click",function(t){return console.log("Next clicked."),setTimeout(function(){r=t.target.parentNode;var e=o;console.log("SliderObj: "+e),i=r.getAttribute("data-next-slide"),console.log("Current: "+i),scrollPrevSlide=e.querySelector("#"+i).getAttribute("data-prev"),console.log("Prev: "+scrollPrevSlide),d=e.querySelector("#"+i).getAttribute("data-next"),console.log("Next: "+d),r.setAttribute("data-current-slide",i),r.setAttribute("data-prev-slide",scrollPrevSlide),r.setAttribute("data-next-slide",d),n.href=s+"#"+scrollPrevSlide,t.target.href=s+"#"+d,n.style.display="flex",r.getAttribute("data-current-slide")===f&&(a.style.display="none")},500),!0})}}(l)}}function loadFont(e,t,l,o,r){var c=document.createElement("style");c.appendChild(document.createTextNode('@font-face{font-family: "'+e+'"; font-style: '+t+"; font-weight:"+l+"; src: url("+o+') format("woff2"), url('+r+') format("woff");}')),document.body.appendChild(c)}setTimeout(function(){checkOneshopScripts(),document.body.classList.add("js-loaded")},3e3),loadFont("TeleNeo Regular","normal","300","https://static.t-mobile.cz/cdn/fonts/teleneo/v1/teleneo-regular.woff2","https://static.t-mobile.cz/cdn/fonts/teleneo/v1/teleneo-regular.woff"),loadFont("TeleNeo Bold","normal","700","https://static.t-mobile.cz/cdn/fonts/teleneo/v1/teleneo-bold.woff2","https://static.t-mobile.cz/cdn/fonts/teleneo/v1/teleneo-bold.woff"),loadFont("TeleNeo ExtraBold","normal","900","https://static.t-mobile.cz/cdn/fonts/teleneo/v1/teleneo-extrabold.woff2","https://static.t-mobile.cz/cdn/fonts/teleneo/v1/teleneo-extrabold.woff"),loadFont("TeleNeoMarker Bold","normal","700","https://static.t-mobile.cz/cdn/fonts/teleneomarker/v1/TeleNeoMarkerWeb-Bold.woff2","https://static.t-mobile.cz/cdn/fonts/teleneomarker/v1/TeleNeoMarkerWeb-Bold.woff");