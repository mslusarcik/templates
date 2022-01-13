"use strict";
var theme=theme||{},themeDisplay=window.themeDisplay||{};
if(typeof(themeDisplay.isSignedIn)!=="function"){themeDisplay.isSignedIn=function(){}
}if(typeof console==="undefined"){console={}
}if(typeof console.error==="undefined"){console.error=function(){}
}theme.svgTimestamp=1559205586;
theme.pathToSVGSprite="/custom/sprite.svg?v="+theme.svgTimestamp;
if(document.body.dataset!==undefined&&document.body.dataset.themeImagesFolder!==undefined){theme.pathToSVGSprite=document.body.dataset.themeImagesFolder+theme.pathToSVGSprite
}else{theme.pathToSVGSprite="http://templates.cz.tmo/corporate/tmcz-child-theme/images"+theme.pathToSVGSprite
}theme.SVGContainerId="svg-container";
theme.SVGIconSelector='[class*="ico-"]';
theme.SVGExcludeSelector=["ico-size-"];
theme.mq={xxs:0,xs:480,sm:768,md:992,lg:1200};
theme.windowWidth=0;
theme.viewportWidth=function(){return window.innerWidth||document.documentElement.clientWidth
};
theme.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight
};
theme.custChatCSSClass="no-svg";
theme.isSearchActive=false;
theme.nextUrl;
function isSVGSupported(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")
}function isTouchDevice(){return(("ontouchstart" in window)||(navigator.MaxTouchPoints>0)||(navigator.msMaxTouchPoints>0))
}function isDateSupported(){var a=document.createElement("input");
a.setAttribute("type","date");
return a.type!=="text"
}var tmLangTexts={contentNotFound:{cs:"Je nĂˇm lĂ­to, ale poĹľadovanĂ˝ obsah nebyl nalezen.",en:"We are sorry but the requested content was not found."},userAlreadyLoggedIn:{cs:"JiĹľ jste pĹ™ihlĂˇĹˇenĂ˝(Ăˇ).",en:"You are already logged in."},clickToRefreshPage:{cs:"KliknutĂ­m na tlaÄŤĂ­tko nĂ­Ĺľe dojde k znovunaÄŤtenĂ­ strĂˇnky.",en:"Clicking the button below will reload the page."},rogerThat:{cs:"RozumĂ­m",en:"OK"},oldBrowser:{cs:"PouĹľĂ­vĂˇte zastaralĂ˝ prohlĂ­ĹľeÄŤ",en:"Your browser is out-of-date"},oldBrowserWarning:{cs:'<strong>VĂˇĹˇ prohlĂ­ĹľeÄŤ je zastaralĂ˝</strong>. Pro plnou funkÄŤnost webu <a href="http://www.whatbrowser.org/intl/cs/" target="_blank">aktualizujte Internet Explorer nebo pouĹľijte jinĂ˝ prohlĂ­ĹľeÄŤ</a>.',en:'<strong>You are using out-of-date browser</strong>. For full functionality of our website please <a href="http://www.whatbrowser.org/intl/cs/" target="_blank">update your Internet Explorer or use another browser</a>.'},qqUploaderDelete:{cs:"Odstranit",en:"Delete"},qqUploaderCancel:{cs:"ZruĹˇit",en:"Cancel"},qqUploaderTypeError:{cs:"{file} nemĂˇ sprĂˇvnĂ˝ typ formĂˇtu. Jsou povolenĂ© pouze formĂˇty typu {extensions}",en:"{file} has invalid extension. Only {extensions} are allowed."},qqUploaderSizeError:{cs:"{file} je pĹ™Ă­liĹˇ velkĂ˝, maximĂˇlnĂ­ velikost souboru je {sizeLimit}.",en:"{file} is too large, maximum file size is {sizeLimit}."},qqUploaderMaxLimitError:{cs:"PoÄŤet souborĹŻ pĹ™ekroÄŤil povolenou hranici",en:"The number of files selected exceeds the queue size limit"},qqUploaderMinSizeError:{cs:"{file} je pĹ™Ă­liĹˇ malĂ˝, minimĂˇlnĂ­ velikost souboru je {minSizeLimit}.",en:"{file} is too small, minimum file size is {minSizeLimit}."},qqUploaderEmptyError:{cs:"{file} je prĂˇzdnĂ˝.",en:"{file} is empty."},qqUploaderOnLeave:{cs:"Soubory jsou nahrĂˇvĂˇny. Pokud teÄŹ odejdete, nahrĂˇvĂˇnĂ­ bude zruĹˇeno.",en:"The files are being uploaded, if you leave now the upload will be cancelled."},qqUploaderFailed:{cs:"Soubor {file} se nepodaĹ™ilo nahrĂˇt.",en:'"The file {file} upload failed.'},qqUploaderDropFilesToUpload:{cs:"PĹ™etĂˇhnÄ›te soubory sem pro nahrĂˇnĂ­.",en:"Drop files here to upload."}};
function tmTranslate(a,b){if(b===undefined){b=document.documentElement.getAttribute("lang").substr(0,2).toLowerCase()
}return tmLangTexts[a][b]
}function getCurrentUrlWithoutHash(){var a=window.location.href;
if(a.lastIndexOf("#")!==-1){a=a.substring(0,a.lastIndexOf("#"))
}return a
}function generateID(c){var e="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",d=c;
for(var b=0;
b<d;
b++){e+=a.charAt(Math.floor(Math.random()*a.length))
}return e
}function tmInitOnce(){theme.nav=jQuery("#nav");
theme.search=jQuery("#search");
theme.navbar=jQuery(".navbar");
theme.footer=jQuery(".footer");
theme.navbarHeader=jQuery(".navbar-header");
var d=new FontFaceObserver("TeleGroteskScreen",{weight:500}),b=new FontFaceObserver("TeleGroteskScreen",{weight:600}),a=new FontFaceObserver("TeleGroteskScreen",{weight:700});
Promise.all([d.check(null,8000),b.check(null,8000),a.check(null,8000)]).then(function(){var f="no-fonts",e=document.documentElement;
if(e.classList){e.classList.remove(f)
}else{e.className=e.className.replace(new RegExp("(^|\\b)"+f.split(" ").join("|")+"(\\b|$)","gi")," ")
}document.documentElement.className+=" fonts-loaded";
jQuery("body").trigger("fonts-loaded");
jQuery("body").tmEqualHeightGroup();
registerInitFunction([jQuery.fn.tmEqualHeightGroup],"essential")
},function(){document.documentElement.className+=" no-fonts"
});
jQuery("body").ibaMegamenuInit();
jQuery(window).resize(function(){theme.windowWidth=jQuery(this).width()
}).resize(jQuery.debounce(250,function(){jQuery("body").tmEqualHeightGroup();
if(theme.windowWidth<theme.mq.md){if(!theme.navbar.is(".open")){jQuery("body").removeClass("search-active");
theme.search.removeClass("in")
}}})).scroll(jQuery.throttle(250,function(){if(jQuery(window).scrollTop()>0){theme.navbarHeader.addClass("animate")
}else{theme.navbarHeader.removeClass("animate")
}})).trigger("scroll").resize();
jQuery('<div class="page-overlay" />').click(function(){if(theme.search.is(":visible")){theme.search.collapse("hide");
jQuery("body").removeClass("search-active")
}if(theme.nav.is(":visible")){if(theme.windowWidth<theme.mq.md){theme.nav.collapse("hide")
}else{theme.nav.removeClass("in")
}}jQuery("body").removeClass("overlay-visible")
}).appendTo("body");
theme.nav.find(".navbar-nav > li > a").each(function(){var e=jQuery(this).parent("li");
e.on("click",function(h){if(theme.viewportWidth()>=theme.mq.md||(!theme.navbar.is(".open")&&theme.viewportWidth()<theme.mq.md)){h.stopPropagation()
}});
var f,g;
e.hover(function(){if(theme.windowWidth>=theme.mq.md){if(f!=undefined){f=undefined
}var h=this;
f=setTimeout(function(){if((!jQuery(h).is(":hover"))||(jQuery(h).is(".open"))){return false
}else{theme.navbar.find("li.open").removeClass("open");
if(jQuery(h).children("ul").length){if(theme.search.is(":visible")){theme.search.removeClass("in")
}jQuery(h).addClass("open");
jQuery("body").addClass("overlay-visible")
}}},300)
}},function(){if(theme.windowWidth>=theme.mq.md){var h=this;
g=setTimeout(function(){if((jQuery(h).is(":hover"))||(!jQuery(h).is(".open"))){return false
}else{if(theme.navbar.find("li a:hover").length===0){jQuery(h).removeClass("open");
if(theme.isSearchActive){theme.search.addClass("in")
}if(!theme.search.is(":visible")){jQuery("body").removeClass("overlay-visible")
}}}},300)
}});
jQuery(this).on("tap",function(i){var h=jQuery(this).parent("li");
if(theme.search.is(":visible")){theme.search.removeClass("in");
theme.search.find(".search-toggle").blur()
}if(theme.windowWidth>=theme.mq.md){if(h.children("ul").length===0){return
}i.stopPropagation();
i.preventDefault();
if(e.hasClass("open")){jQuery("body").removeClass("overlay-visible");
e.removeClass("open")
}else{jQuery("body").addClass("overlay-visible");
e.addClass("open")
}theme.nav.find(".navbar-nav > li").each(function(){if(!jQuery(this).is(h)){jQuery(this).removeClass("open")
}})
}})
});
jQuery(".search-toggle, .search-close").click(function(){jQuery("body").toggleClass("search-active")
});
theme.search.on("hidden.bs.collapse hide.bs.collapse",function(f){if(f.type==="hide"){theme.isSearchActive=false
}jQuery("body").removeClass("overlay-visible")
}).on("shown.bs.collapse show.bs.collapse",function(f){if(f.type==="show"){theme.isSearchActive=true
}else{if(f.type==="shown"){theme.search.find('.searchbox input[type="search"], input[type="text"]').focus()
}}});
var c=theme.nav.find(".ajax-load-quick-bookmark").parent().find(".dropdown-menu");
if(c.find(".promo-item, .custom-item").length){c.addClass("with-banner rows-1");
if(c.find("li").not(".promo-item, .custom-item").length>4){c.removeClass("rows-1").addClass("rows-2")
}}jQuery(document).on("click",function(f){jQuery('[data-toggle="popover"], .js-popover').each(function(){if(!jQuery(this).is(f.target)&&jQuery(this).has(f.target).length===0&&jQuery(".popover").has(f.target).length===0){((jQuery(this).popover("hide").data("bs.popover")||{}).inState||{}).click=false
}})
})
}jQuery.fn.mediaQueryEvent=function(){var c=this;
var a=function(d){if(d<theme.mq.xs){return"xxs"
}else{if(d>=theme.mq.xs&&d<theme.mq.sm){return"xs"
}else{if(d>=theme.mq.sm&&d<theme.mq.md){return"sm"
}else{if(d>=theme.mq.md&&d<theme.mq.lg){return"md"
}else{if(d>=theme.mq.lg){return"lg"
}}}}}};
var b=a(theme.viewportWidth());
theme.mq.init=b;
c.resize(jQuery.debounce(250,function(){var d=a(theme.viewportWidth());
if(d!=b){c.trigger("mediaQueryChange",[d]);
b=d
}}));
return c
};
jQuery.tmCreateCookie=function(e,d,b){var a;
if(b){var c=new Date(),f=b/24;
c.setTime(c.getTime()+(f*24*60*60*1000));
a="; expires="+c.toGMTString()
}else{a=""
}document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(d)+a+"; path=/"
};
jQuery.tmReadCookie=function(d){var d=encodeURIComponent(d)+"=";
var a=document.cookie.split(";");
for(var b=0;
b<a.length;
b++){var e=a[b];
while(e.charAt(0)===" "){e=e.substring(1,e.length)
}if(e.indexOf(d)===0){return decodeURIComponent(e.substring(d.length,e.length))
}}return null
};
jQuery.fn.tmMultibanner=function(){var a=jQuery("#multibanner"),c=a.find(".item"),e=c.length,d=1;
c.filter(".active").data("slide-displayed",true);
function b(f,g){return{promoId:f.find("li.active").text().toUpperCase(),promoTitle:g.find("h1").text(),promoDescription:g.find("p").eq(0).text(),promoSlot:g.index()+1}
}if(a.data("init-multibanner")!=="init"){if(a.hasClass("js-touch-swipe")){a.swiperight(function(){a.carousel("prev")
}).swipeleft(function(){a.carousel("next")
})
}a.on("slid.bs.carousel",function(){var g=a.find(".item.active");
if(window.dataLayer!==undefined){var f=b(a,g);
dataLayer.push({event:"promoView",ecommerce:{promoView:{promotions:[{id:f.promoId,name:f.promoTitle,creative:f.promoDescription,position:f.promoSlot}]}}})
}if(e>1){if(!g.data("slide-displayed")){g.data("slide-displayed",true);
d++
}else{if(d===e&&g.index()===0){a.carousel("pause")
}}}});
a.find(".item .btn").click(function(h){if(window.dataLayer!==undefined){var g=jQuery(this).closest(".item"),f=b(a,g);
dataLayer.push({event:"promotionClick",ecommerce:{promoClick:{promotions:[{id:f.promoId,name:f.promoTitle,creative:f.promoDescription}]}}})
}});
a.data("init-multibanner","init")
}};
jQuery.fn.tmAddLoader=function(){var b=jQuery("<div/>").addClass("box-overlay-loading"),a=jQuery("<div/>").addClass("loader");
if(jQuery(this).find(".btn-loader").length>0){if(jQuery(".btn-loader").parent().is("div.box-btn-loading")){jQuery(".btn-loader").unwrap()
}jQuery(this).find(".btn-loader").wrap("<div class='box-btn-loading relative'></div>");
jQuery(".box-btn-loading").append("<div class='loader'></div>")
}a.prependTo(jQuery(this));
b.prependTo(jQuery(this));
if(jQuery(this).length){if(jQuery(this).get()[0].tagName.toLowerCase()==="body"){a.addClass("fixed")
}}else{console.error("Selector "+jQuery(this).selector+" not found on page. Please add missing class or id.")
}return jQuery(this).addClass("box-overlaid").tmSVGIcon()
};
jQuery.fn.tmRemoveLoader=function(){jQuery(this).removeClass("box-overlaid");
jQuery(this).find(".box-overlay-loading").remove();
if(jQuery(".btn-loader").parent().is("div.box-btn-loading")){jQuery(".btn-loader").unwrap()
}return jQuery(this).find(".loader").remove()
};
jQuery.fn.tmRadioCheckbox=function(){return jQuery(this).not(".admin-signed-in.page-maximized").find("input:checkbox, input:radio").not(".no-js-checkbox, .no-js-radio").each(function(){var a=jQuery(this),b;
if(a.data("init-radio-checkbox")!=="init"){b=jQuery("<span></span>").addClass("like-"+a.attr("type")).addClass(function(){return a.attr("type")==="checkbox"?"ico-check-mark":false
});
a.before(b);
if(a.attr("disabled")){a.prev().addClass("like-"+a.attr("type")+"-disabled")
}if(a.is(":checked")){a.prev().addClass("active")
}a.change(function(){if(a.attr("disabled")!=="disabled"){a.prev().removeClass("like-"+a.attr("type")+"-disabled");
if(a.attr("type")==="radio"){jQuery('input[name="'+a.attr("name")+'"]').prev().removeClass("active")
}if(a.is(":checked")){a.attr("checked",true).prev().addClass("active")
}else{a.attr("checked",false).prev().removeClass("active")
}}else{a.prev().addClass("like-"+a.attr("type")+"-disabled")
}});
a.data("init-radio-checkbox","init")
}})
};
jQuery.fn.tmSelect=function(){return jQuery(this).not(".admin-signed-in.page-maximized").find("select").not(".datepicker-selection, .no-js-select, .bs-select-hidden").each(function(){var a=jQuery(this);
if(a.data("init-select")!=="init"){if(jQuery.fn.selectpicker){a.selectpicker({iconBase:"ico",tickIcon:"",noneSelectedText:a.data("placeholder")||"",showIcon:false,nav:".navbar"}).next().find(".caret").addClass("ico-chevron-down").removeClass("caret");
if(a.hasClass("input-lg")){a.next().find(".btn").addClass("btn-lg")
}}a.data("init-select","init")
}})
};
jQuery.fn.tmNav=function(){return jQuery(this).find(".navbar").each(function(){var b=jQuery(this);
var a=b.find(".js-toggle");
var d=jQuery(window);
var c=0;
var e=function(){if(!b.hasClass("open")){a.unbind("click");
b.addClass("open");
c=d.scrollTop();
setTimeout(function(){b.addClass("in");
jQuery("body").addClass("overlay-visible menu-opened");
a.bind("click",e)
},150)
}else{a.unbind("click");
b.removeClass("in").addClass("out");
setTimeout(function(){b.removeClass("open out");
jQuery("body").removeClass("overlay-visible menu-opened");
d.scrollTop(c);
a.bind("click",e)
},150)
}};
if(b.data("init-nav")!=="init"){a.on("click",e);
b.data("init-nav","init")
}})
};
jQuery.fn.tmCollapsible=function(){function b(d,c,e){d.toggleClass("collapsed");
if(e){if(d.hasClass("collapsed")){a(d,c)
}else{a(d,e)
}}}function a(c,d){var e=c.find(".collapse-text");
e.length!=0?e.text(d):c.text(d)
}jQuery(this).find(".js-collapsible").each(function(){if(jQuery(this).data("init-collapsible")!=="init"){var d;
jQuery(this).find(".collapse-link.link-multiple").length>0?d=jQuery(this).find(".collapse-link"):d=jQuery(this).find(".collapse-link").eq(0);
var c=d.text(),f=d.data("hide-text"),e;
if(d.data("init-collapsible")!=="init"){if(jQuery(this).find(".js-target").eq(0).length===0){e=jQuery(d.attr("href"))
}else{e=jQuery(this).find(".js-target").eq(0)
}if(e!==undefined&&e.length){if(e.get()[0].tagName.toLowerCase()!=="tr"){e.collapse({toggle:false}).on("show.bs.collapse hide.bs.collapse",function(g){if(g.target==e.get()[0]){b(d,c,f)
}});
d.click(function(g){g.preventDefault();
e.collapse("toggle")
})
}else{d.click(function(g){g.preventDefault();
if(!e.is(":visible")){e.trigger("show.bs.collapse")
}else{e.trigger("hide.bs.collapse")
}e.toggle({duration:0,complete:function(){d.closest("table").triggerHandler("tm.table.collapse");
if(!e.is(":visible")){e.trigger("hidden.bs.collapse")
}else{e.trigger("shown.bs.collapse")
}}});
b(d,c,f)
})
}}d.data("init-collapsible","init")
}jQuery(this).data("init-collapsible","init")
}});
jQuery(this).find(".collapse-link").each(function(){if(jQuery(this).data("init-collapsible")!=="init"){var d=jQuery(this),c=d.find(".collapse-text").length!=0?d.find(".collapse-text").text():d.text(),f=d.data("hide-text"),e=jQuery(d.attr("href"));
if(!d.is(".collapsed")){d.text(f)
}if(e!==undefined&&e.length){e.on("show.bs.collapse hide.bs.collapse",function(g){if(g.target==e.get()[0]){b(d,c,f)
}})
}jQuery(this).data("init-collapsible","init")
}})
};
jQuery.fn.tmEqualHeight=function(a){return jQuery(this).each(function(){var b=jQuery(this),c=0;
b.find(a).each(function(){jQuery(this).css("min-height",0);
c=jQuery(this).innerHeight()>c?jQuery(this).innerHeight():c
}).css("min-height",c+1)
})
};
jQuery.fn.tmEqualHeightGroup=function(){return jQuery(this).find(".equal-height-group").tmEqualHeight(".equal-height")
};
jQuery.fn.tmFileInput=function(){return jQuery(this).not(".admin-signed-in.page-maximized").find('input[type="file"]').not(".js-file-upload").each(function(){if(jQuery(this).data("init-fileinput")!=="init"){var a=jQuery(this),c=jQuery("<div></div>").addClass("file-input-wrapper").addClass(function(){if(a.attr("class")!==undefined){jQuery(this).addClass(a.attr("class"))
}}),b=jQuery("<button>").addClass("btn btn-default").text("NahrĂˇt pĹ™Ă­lohu").attr("type","button").click(function(f){f.preventDefault();
a.trigger("click")
}),d=jQuery("<div></div>").addClass("file-input-info").text("Nebyl vybrĂˇn ĹľĂˇdnĂ˝ soubor").click(function(){a.trigger("click")
});
a.change(function(){if(a.val()!==""){d.text(a.val()).addClass("file-selected")
}else{d.removeClass("file-selected").text("Nebyl vybrĂˇn ĹľĂˇdnĂ˝ soubor")
}});
jQuery(this).wrap(c);
jQuery(this).after(d);
jQuery(this).after(b);
jQuery(this).data("init-fileinput","init")
}})
};
jQuery.fn.tmAutocomplete=function(){return jQuery(this).find(".autocomplete").not(".tt-hint, .tt-input").each(function(){var b=jQuery(this),d=b.data("source-url"),c;
var e=2;
var a=b.data("num-char");
if(a!=NaN&&a!=undefined){e=a
}if(b.data("init-autocomplete")!=="init"){b.typeahead({minLength:e,highlight:true},{source:function(f,h){var g=[];
return jQuery.getJSON(d,{q:f},function(i){for(c=0;
c<i.length;
c+=1){g.push(i[c])
}return h(g)
})
}});
b.data("init-autocomplete","init")
}})
};
jQuery.fn.tmTooltip=function(){return jQuery(this).find('[data-toggle="tooltip"]').each(function(){var a=jQuery(this);
if(a.data("init-tooltip")!=="init"){a.data("init-tooltip","init").tooltip({trigger:"manual",html:true,animation:false}).on("mouseenter",function(){var b=this;
$(this).tooltip("show");
$(".tooltip").on("mouseleave",function(){$(b).tooltip("hide")
})
}).on("mouseleave",function(){var c=this;
setTimeout(function(){if(!$(".tooltip:hover").length){$(c).tooltip("hide")
}},300);
if(jQuery(this).next(".tooltip").length){var b=jQuery(this).next(".tooltip");
if(b.data("init-tooltip")!=="init"){b.click(function(d){if(event.target.tagName.toLowerCase()==="a"){return true
}return false
});
b.data("init-tooltip","init")
}}}).on("click",function(b){$(this).tooltip("toggle");
return false
})
}})
};
jQuery.fn.tmFooterLink=function(){return jQuery(this).find(".js-collapsible").each(function(){var c=jQuery(this),d=jQuery(this).find(".collapse");
if(c.data("init-footer-link")!=="init"){var a=jQuery("<a></a>").attr("href","#"+d.attr("id")).addClass("collapse-link collapsed").attr("aria-expanded","false").attr("aria-controls",d.attr("id")),b=jQuery("<i></i>").addClass("ico-chevron-down");
a.append(b);
c.find("h6").append(a);
c.data("init-footer-link","init")
}})
};
jQuery.fn.tmToggle=function(){return jQuery(this).find('[data-toggle="collapse"][data-target]').each(function(){if(jQuery(this).data("init-toggle")!=="init"){jQuery(this).click(function(a){a.preventDefault()
});
jQuery(this).data("init-toggle","init")
}})
};
jQuery.fn.tmDatepicker=function(){return jQuery(this).find(".datepicker").each(function(){if(jQuery(this).data("init-datepicker")!=="init"){var d={month:(new Date).getMonth()};
if(jQuery(this).is(".datepicker-selection")){var a=[],h=jQuery(this),i=h.data("editable")===undefined?true:false;
f=$("<input />").attr({type:"text","class":"form-control datepicker "+jQuery(this).attr("class")}).data("init-datepicker","init");
if(!i){f.attr("readonly","readonly")
}h.find("option").each(function(){var j=jQuery(this).text().split(".");
if(jQuery(this).attr("selected")){var k=jQuery(this).attr("value").split(".");
d={day:k[0],month:parseInt(k[1])-1,year:k[2]}
}a.push(new Date(j[2],(j[1]-1),j[0]))
});
f.insertAfter(jQuery(this));
h.hide()
}else{var f=jQuery(this)
}var g=f,b=g.data("datepicker-format")||"dd.mm.yyyy",c=g.data("min-date")||null,e=g.data("max-date")||null;
if(g.parent().is(".input-prefix-label")){g.parent().addClass("input-prefix-label-with-datepicker")
}g.wrap('<div class="datepicker-wrapper" />').after('<i class="ico-calendar" />');
g.datepicker({language:"cs",format:b,autoclose:true,minDate:"+1M",defaultViewDate:d,orientation:"top right",startDate:c,endDate:e,beforeShowDay:function(j){if(a!=undefined){if(a.map(Number).indexOf(+j)!=-1){return true
}else{return false
}}}}).on("show",function(){g.addClass("datepicker-opened");
jQuery("body > .datepicker").each(function(){var j=jQuery(this);
if(jQuery(this).data("init-datepicker")!=="init"){j.find(".prev").html('<i class="ico-chevron-left"></i>');
j.find(".next").html('<i class="ico-chevron-right"></i>');
j.tmSVGIcon();
g.data("init-datepicker","init")
}})
}).on("changeDate",function(j){if(g.closest(".input-prefix-label").length){g.closest(".input-prefix-label").addClass("focused")
}if(h!=undefined){h.find("option").removeAttr("selected");
h.find('option[value="'+j.format()+'"]').attr("selected","selected").change()
}}).on("hide",function(){g.removeClass("datepicker-opened")
});
if(d.day!=undefined){g.datepicker("update",new Date(d.year,d.month,d.day))
}if(g.is(":disabled")){g.parent().addClass("disabled")
}g.next("i").click(function(){g.focus()
});
g.focus(function(){g.parent().addClass("focus")
}).blur(function(){g.parent().removeClass("focus")
});
jQuery(this).data("init-datepicker","init")
}})
};
jQuery.fn.tmClickable=function(){function a(d,c){var b=true;
if(d.attr("target")==="_blank"||c.ctrlKey||c.which===2){b=window.open(d.attr("href"))
}else{window.location.href=d.attr("href")
}if(!b){window.location.href=d.attr("href")
}}return jQuery(this).find(".js-clickable").each(function(){var b=jQuery(this),c=b.find("a").eq(0);
if(b.data("init-js-clickable")!=="init"){if(c.length){c.click(function(d){d.preventDefault();
if(c.data("toggle")==="collapse"){jQuery(c.attr("href")).collapse("toggle")
}else{if(!b.is(".js-clickable-with-handler")){d.stopPropagation();
a(c,d)
}else{d.stopPropagation()
}}});
b.click(function(d){if(!b.is(".js-clickable-with-handler")){a(c,d)
}else{c.triggerHandler("click")
}}).mousedown(function(d){if(!b.is(".js-clickable-with-handler")&&d.which===2){d.stopPropagation();
a(c,d)
}}).hover(function(){b.addClass("js-hover")
}).mouseleave(function(){b.removeClass("js-hover")
})
}b.data("init-js-clickable","init")
}})
};
jQuery.fn.tmSVGIcon=function(){if(isSVGSupported()){jQuery(this).find(theme.SVGIconSelector).not(".no-svg-ico").each(function(){if(jQuery(this).data("init-icon")!=="init"&&!jQuery(this).children("svg").length){var e=jQuery(this),a=e.attr("class"),b=a.split(" "),g=jQuery.grep(b,function(i){return i.indexOf("ico-")>-1
}),d,c,h="";
for(d=0;
d<g.length;
d+=1){var k=true;
$.each(theme.SVGExcludeSelector,function(i,l){if(g[d].substring(0,l.length)===l){k=false
}});
if(k){if(e.data("ico-width")!==undefined){h='width="'+e.data("ico-width")+'"'
}if(e.data("ico-height")!==undefined){h+=' height="'+e.data("ico-height")+'"'
}c=g[d].split("ico-")[1];
if($("#"+c).length!=0){e.data("init-icon","init").append('<svg class="svg-'+c+'" '+h+'><use xlink:href="#'+c+'"></use></svg>')
}else{var j=$("#svg-container ."+c);
if($(j).length!=0){var f=$(j).eq(0).attr("id");
e.data("init-icon","init").append('<svg class="svg-'+c+'" '+h+'><use xlink:href="#'+f+'"></use></svg>')
}}}}}})
}};
jQuery.fn.tmLightbox=function(){return jQuery(this).find(".lightbox").each(function(){if(jQuery(this).data("init-lightbox")!=="init"){var j=jQuery(this),a=true,k=true,f=j.attr("href"),c=true,i='<div class="row"><div class="col-sm-12 box-overlaid"><div class="loader"></div></div></div>',h='<div class="row"><div class="col-sm-12"><div class="alert alert-danger margin-large"><p>'+tmTranslate("contentNotFound")+"</p></div></div></div>",l='<div class="row"><div class="col-sm-12"><div class="alert alert-info arrow arrow-bottom arrow-bordered margin-xlarge"><p><strong>'+tmTranslate("userAlreadyLoggedIn")+"</strong><br />"+tmTranslate("clickToRefreshPage")+'</p></div><p class="text-center"><a href="'+getCurrentUrlWithoutHash()+'" class="btn btn-primary">'+tmTranslate("rogerThat")+"</a></p></div></div>",m,d=j.data("iframe")||false,g="100%",e=480,o=j.data("lightbox-unique-content")||false,n=j.data("lightbox-zero-h-padding")||false,b=j.data("place-lightbox-content-back-in")||false;
if(j.data("lightbox-modal")){a=false;
k=false
}if(f.charAt(0)!=="#"){c=false
}if(c){i=jQuery(f);
if(i.length){i.hide();
if(!o){i=i.html()
}}else{console.error('Content "'+j.attr("href")+'" for lightbox not found on page!')
}}if(d){g=j.data("iframe-width")||g;
e=j.data("iframe-height")||e;
i='<iframe width="'+g+'" height="'+e+'" src="'+f+'" frameborder="0" allowfullscreen></iframe>'
}j.click(function(p){p.preventDefault();
j.blur();
if(c&&!i.length){i=h
}m=jQuery.tmOpenLightbox({title:j.attr("title")||"",size:j.data("lightbox-size")||"null",locale:"cs",onEscape:k,closeButton:a,message:i,show:false,uniqueContent:o,zeroHorizontalPadding:n,placeContentBackIn:b});
if(!c&&!d){jQuery.get(j.prop("href"),function(q){var t=jQuery(q),r=f.substr(f.lastIndexOf("#")),s=false;
t.each(function(){var v=jQuery(this).find(r);
if(v.length){s=true;
m.find(".bootbox-body").html(v);
m.tmInit(["essential","portal"]);
var u=f.match(/\?nexturl=(.*)#/i);
if(u!==null){theme.nextUrl=decodeURIComponent(u[1])
}return
}});
if(!s){if(r==="#gang-login"){m.find(".bootbox-body").html(l)
}else{m.find(".bootbox-body").html(h)
}}})
}});
jQuery(this).data("init-lightbox","init")
}})
};
jQuery.tmOpenLightbox=function(b){var a=bootbox.dialog(b);
a.on("show.bs.modal",function(){a.find(".collapse").collapse();
a.tmInit(["essential","portal"]);
if(b.uniqueContent){b.message.addClass("fade").show()
}if(b.zeroHorizontalPadding){a.find(".modal-body").addClass("no-horizontal-padding")
}if(typeof(b._onShow)==="function"){b._onShow.apply(this,arguments)
}}).on("shown.bs.modal",function(){if(b.uniqueContent){a.find(".slick-slider").slick("slickGoTo",0,true);
b.message.addClass("in")
}a.find("#gang-login .tab-pane").filter(".active").find("input").eq(0).focus()
}).on("hidden.bs.modal",function(){if(b.uniqueContent){b.message.removeClass("fade")
}if(typeof(b._onClosed)==="function"){b._onClosed.apply(this,arguments)
}});
return a.modal("show")
};
jQuery.fn.loginHandler=function(){var a=jQuery(this).find("#gang-login");
if(a.length&&jQuery("body").hasClass("modal-open")){a.find("form.ajax").each(function(){var f=jQuery(this),c="904",d="903",e="901",g=window.location.protocol+"//"+window.location.host+"/um/GANGpages/",b,h=window.location.href;
if(f.data("ajax-action")){f.submit(function(i){i.preventDefault();
a.tmAddLoader();
jQuery.ajax({type:"POST",url:f.data("ajax-action"),data:f.serialize(),dataType:"json",cache:false,success:function(k,l,j){if(k.informations){if(h.lastIndexOf("#")!==-1){h=h.substring(0,h.lastIndexOf("#"))
}if(theme.nextUrl!==undefined){window.location.href=theme.nextUrl
}else{window.location.href=h
}}else{if(k.errors){if(k.errors[0].error===c){if(h.lastIndexOf("#")!==-1){h=h.substring(0,h.lastIndexOf("#"))
}window.location.href=h
}else{b=g+k.errors[0].techname.toLowerCase()+".htm";
jQuery.get(b,function(m){var n=jQuery(m);
n.each(function(){var o=jQuery(this).find("#"+a.attr("id"));
if(o.length){a.html(o.html());
a.parent().tmInit(["essential","portal"]);
return
}});
a.tmRemoveLoader();
if(jQuery("#colorbox").is(":visible")){jQuery.colorbox.resize()
}if(k.errors[0].error===d||k.errors[0].error===e){a.find("input[autofocus]").eq(0).focus()
}}).always(function(){a.tmRemoveLoader()
})
}}}},error:function(){a.tmRemoveLoader()
}})
})
}})
}};
jQuery.fn.validateInput=function(){var d=jQuery(this);
var f='<i class="ico-remove-sign"><svg class="svg-remove-sign"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#remove-sign"></use></svg></i>';
var b='<i class="ico-ok-sign"><svg class="svg-ok-sign"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ok-sign"></use></svg></i>';
var a='<p class="form-error">NesprĂˇvnÄ› zadĂˇno</p>';
jQuery.fn.setInvalid=function(){var g=jQuery(this);
if(!g.closest(".form-group").hasClass("has-error")){if(g.closest(".validate-wrapper").length>0){g.closest(".validate-wrapper").find("i[class*=ico-],.form-error").remove();
g.closest(".validate-wrapper").append(a+"\n"+f)
}else{g.wrapAll("<div class='validate-wrapper' />").parent().append(a+"\n"+f)
}g.closest(".form-group").hasClass("has-success")?g.closest(".form-group").removeClass("has-success").addClass("has-error"):g.closest(".form-group").addClass("has-error");
if(typeof g.data("error-msg")!=="undefined"){g.next(".form-error").html(g.data("error-msg"))
}}};
jQuery.fn.setValid=function(){var g=jQuery(this);
if(!g.closest(".form-group").hasClass("has-success")){if(g.closest(".validate-wrapper").length>0){g.closest(".validate-wrapper").find("i[class*=ico-],.form-error").remove();
g.closest(".validate-wrapper").append(b)
}else{g.wrapAll("<div class='validate-wrapper' />").parent().append(b)
}g.closest(".form-group").hasClass("has-error")?g.closest(".form-group").removeClass("has-error").addClass("has-success"):g.closest(".form-group").addClass("has-success")
}};
jQuery.fn.clearValidation=function(){var g=jQuery(this);
if(g.closest(".form-group").hasClass("has-success")||g.closest(".form-group").hasClass("has-error")){if(g.closest(".validate-wrapper").length>0){g.closest(".validate-wrapper").find("i[class*=ico-],.form-error").remove()
}else{}g.closest(".form-group").removeClass("has-error").removeClass("has-success")
}};
function e(l){if(l==null||l.length==0){return false
}else{var i=/^\s*(\d\d)(\d\d)(\d\d)[ /]*(\d\d\d)(\d?)\s*$/;
var k=new RegExp(i);
l=l.replace(/\D/g,"");
if(k.test(l)){var g=l.substring(0,2);
var h=l.substring(2,4);
if(h>70){h-=70
}else{if(h>50){h-=50
}else{if(h>20){h-=20
}}}if(l.length<9||l.length>10){return false
}if(g>53&&l.length!=10){return false
}var j=new Date(g+"/"+h+"/"+l.substring(4,6));
if(isNaN(j)){return false
}if(l.length==10&&l%11!=0){return false
}return true
}else{return false
}}}jQuery.fn.isValid=function(h){switch(h){case"mail":h=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;
break;
case"name-surname":h=/^[A-Ĺľ]+(\s[A-Ĺľ]+){1,3}\s*$/;
break;
case"phone":h=/^(\+|\d\d)?(\d\d\d)?([\- ])?\d\d\d([\- ])?\d\d\d([\- ])?\d\d\d\s*$/;
break;
case"phone-strict":h=/^[0-9]{9}$/;
break;
case"phone-mask":h=/^(?=.*\d)[\d ]+\s*$/;
break;
case"street-strict":h=/^(.*[^0-9]+) (([1-9][0-9]*)\/)?([1-9][0-9]*[a-zA-Z]?)$/;
break;
case"street":h=/^(.*[^0-9]+) (([1-9][0-9]*)\/)?([1-9][0-9]*[a-zA-Z]?)\s*$/;
break;
case"postal-code":h=/^\d{3} ?\d{2}\s*$/;
break;
case"postal-code-strict":h=/^\d{5}$/;
break;
case"id-card-number":h=/^[A-Ĺľ0-9]{7,14}\s*$/;
break;
case"personal-id-number":h="pidn";
break;
default:h=h
}if(h=="pidn"){return e(jQuery(this).val())
}else{var g=new RegExp(h);
return g.test(jQuery(this).val())
}};
var c=d.closest("form").attr("novalidate");
if(!typeof c!==typeof undefined&&c!==false){d.closest("form").attr("novalidate","novalidate")
}d.each(function(){if(jQuery(this).closest(".form-group").hasClass("has-success")||jQuery(this).closest(".form-group").hasClass("has-error")){jQuery(this).parent().addClass("validate-wrapper")
}if(!jQuery(this).closest(".form-group").hasClass("has-error")){if(jQuery(this).val().length&&!jQuery(this).hasClass("no-prevalidate")){if(typeof $(this).attr("pattern")!==typeof undefined&&$(this).attr("pattern")!==false){var g=jQuery(this).attr("pattern");
if(g!="mail"||jQuery(this).val()!="@"){jQuery(this).isValid(g)?jQuery(this).setValid():jQuery(this).setInvalid()
}}}}});
d.on("click",function(){jQuery(this).clearValidation()
});
d.on("focusout",function(){var h=jQuery(this);
var g=h.attr("pattern");
h.isValid(g)?jQuery(this).setValid():jQuery(this).setInvalid()
})
};
jQuery.fn.tmMaskedInput=function(){return jQuery(this).find("[data-mask]").each(function(){if(jQuery(this).data("init-masked-input")!=="init"){if(jQuery.fn.mask){var b=jQuery(this),a=b.data("mask"),c=b.data("mask-placeholder")||"_";
b.mask(a,{autoclear:false,placeholder:c})
}jQuery(this).data("init-masked-input","init")
}})
};
jQuery.fn.tmInputReplacer=function(){return jQuery(this).find("[data-replace-map]").each(function(){if(jQuery(this).data("init-input-replacer")!=="init"){var a=jQuery(this),f=a.data("replace-map"),c=function(){var g;
if(a.caret===undefined){g={begin:a[0].selectionStart,end:a[0].selectionEnd}
}else{g=a.caret()
}return g
},e=function(i){var h=i,j=i.which,g;
$.each(f,function(l,k){if(l.charCodeAt(0)===j){h.preventDefault();
h.stopImmediatePropagation();
if(a.attr("data-mask")&&jQuery.fn.mask){g=jQuery.Event("keypress")
}else{g=jQuery.Event("keypress:custom")
}g.which=k.charCodeAt(0);
a.trigger(g);
return
}})
},d=function(k){var g=c(),j=a.val(),i=j.substring(0,g.begin),h=j.substring(g.end,j.length);
a.val(i+String.fromCharCode(k.which)+h);
a[0].setSelectionRange(g.begin+1,g.begin+1)
},b=function(g){setTimeout(function(){$.each(f,function(j,h){var k=j.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),i=new RegExp(k,"g");
a.val(a.val().replace(i,h))
})
},100)
};
a.on("keypress",e);
a.on("keypress:custom",d);
a.on("paste",b);
jQuery(this).data("init-input-replacer","init")
}})
};
jQuery.fn.tmSwipe=function(){return jQuery(this).find(".js-swipe").each(function(){if(jQuery(this).data("init-swipe")!=="init"){var c=jQuery(this),a=c.data("swipe-before")||false,b={autoplay:c.data("autoplay")!==undefined?c.data("autoplay"):false,arrows:c.data("show-arrows")!==undefined?c.data("show-arrows"):true,dots:c.data("show-dots")!==undefined?c.data("show-dots"):false,infinite:c.data("infinite")!==undefined?c.data("infinite"):true,slidesToShow:c.data("slides")||1,slidesToScroll:c.data("scroll")||1,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="PĹ™edchozĂ­" tabindex="0" role="button"><span class="sr-only">PĹ™edchozĂ­</span><i class="ico-chevron-left"></i></button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="DalĹˇĂ­" tabindex="0" role="button"><span class="sr-only">DalĹˇĂ­</span><i class="ico-chevron-right"></i></button>',centerMode:c.data("center-mode")!==undefined?c.data("center-mode"):false,focusOnSelect:c.data("focus-on-select")!==undefined?c.data("focus-on-select"):false,initialSlide:c.data("initial-slide")||0};
if(a){c.on("viewportChange",function(){if(theme.viewportWidth()<=theme.mq[a]){c.slick(b);
if(b.centerMode&&b.focusOnSelect){c.on("afterChange",function(d,e){c.find(".slick-slide").eq(e.currentSlide).find("a").eq(0).trigger("click")
})
}}else{if(c.is(".slick-initialized")){c.slick("unslick").unbind("afterChange")
}}})
}else{c.slick(b)
}c.on("init",function(d){c.tmSVGIcon()
});
jQuery(this).data("init-swipe","init")
}})
};
jQuery.fn.tmAccordion=function(){return jQuery(this).find(".js-accordion").each(function(){var a=jQuery(this);
if(a.data("init-accordion")!=="init"){a.on("hide.bs.collapse",function(b){a.find(".media").removeClass("active")
});
a.find(".collapse-link").click(function(c){var b=jQuery(jQuery(this).attr("href"));
a.find(".collapse-content").not(b).collapse("hide");
jQuery(this).closest(".media").addClass("active")
});
a.find(".collapse-close").click(function(b){jQuery(this).closest(".collapse-content").collapse("hide")
});
a.data("init-accordion","init")
}})
};
jQuery.fn.tmTabs=function(){return jQuery(this).find(".js-tabs").each(function(){var a=jQuery(this);
if(a.data("init-tabs")!=="init"){if(a.is(".btn-group")){a.find("a").click(function(){jQuery(this).addClass("active").siblings(".active").removeClass("active")
}).on("shown.bs.tab",function(c){if(a.closest("#gang-login").length){var b=jQuery(c.target.getAttribute("href"));
b.find("input").eq(0).focus()
}})
}else{a.find(".tab-link").each(function(){var b=jQuery(this);
b.click(function(h){h.preventDefault();
var d=b.attr("href"),c=jQuery(d);
if(b.parent().hasClass("active")){return
}var f=a.find(".active:last a");
f.parent().removeClass("active");
var g=f.attr("href");
jQuery(g).removeClass("active");
b.parent().addClass("active");
c.addClass("active");
if(a.is(".js-tabs-with-scroll")){jQuery("html, body").animate({scrollTop:a.offset().top},200)
}})
})
}a.data("init-tabs","init")
}})
};
jQuery.fn.tmBlocks=function(){return jQuery(this).find("select.js-select-blocks").each(function(){var c=$(this);
var b=c.data("blocks-until")||"md";
var d=function(f){var e=$("<div></div>").addClass("select-blocks-items");
f.find("option").each(function(g){e.append($("<div></div>").addClass("select-blocks-item").append($("<button></button>").data("blocks-index",g).addClass($(this).is(":selected")?"selected":"").text($(this).text()).on("click",function(){var h=$(this).data("blocks-index");
f.find("option").eq(h).prop("selected",true);
if(f.data("init-select").length>0){f.selectpicker("refresh")
}f.trigger("change")
})))
});
f.parent().addClass("select-blocks");
e.insertBefore(f)
};
c.on("change.select-blocks",function(){if(theme.windowWidth>=theme.mq[b]){c.closest(".select-blocks").find(".select-blocks-items").remove();
d(c)
}});
var a=function(){if(theme.windowWidth>=theme.mq[b]){c.closest(".select-blocks").find(".select-blocks-items").remove();
d(c)
}};
c.on("change.select-blocks",function(){a()
});
jQuery(window).resize(jQuery.debounce(250,function(){if(theme.windowWidth<theme.mq[b]){c.closest(".select-blocks").find(".select-blocks-items").remove();
c.parent().removeClass("select-blocks")
}else{a()
}}));
a()
})
};
jQuery.fn.tmTriggerTab=function(){this.find(".js-trigger-tab").each(function(a){if(jQuery(this).data("init-tmtriggertab")!=="init"){jQuery(this).click(function(c){c.preventDefault();
var b=jQuery(this).attr("href");
jQuery(".js-tabs a[href="+b+"]").trigger("click")
});
jQuery(this).data("init-tmtriggertab","init")
}})
};
jQuery.fn.tmInputPrefixLabel=function(){return this.find(".input-prefix-label").each(function(){if(jQuery(this).data("init-prefix-label")!=="init"){var a=jQuery(this),b=a.find("input.form-control");
if(b.val()!==""){a.addClass("focused").removeClass("autofilled")
}b.focus(function(){a.addClass("focused").removeClass("autofilled")
}).blur(function(){if(b.val()===""&&!b.hasClass("datepicker-opened")){if(b.is(".autocomplete")||b.is(".tt-hint")||b.is(".tt-input")){if(b.parent().find("pre").text()===""){a.removeClass("focused")
}}else{a.removeClass("focused")
}}}).change(function(){if(b.val()!==""){a.addClass("focused").removeClass("autofilled")
}});
if(window.Liferay!==undefined&&Liferay.Browser.isChrome()){setTimeout(function(){if(b.is(":-webkit-autofill")&&b.val()===""){b.parent().addClass("autofilled")
}},50)
}jQuery(this).data("init-prefix-label","init")
}})
};
jQuery.fn.tmAdaptiveHeight=function(){return this.find(".js-adaptive-height-wrapper").each(function(){if(jQuery(this).data("init-adaptive-height")!=="init"){var b=jQuery(this),d=b.find(".js-visible-part"),a=b.find(".js-dynamic-part"),c=0;
b.find(".js-fixed-part").each(function(){c+=jQuery(this).height()
});
jQuery(window).resize(jQuery.debounce(250,function(){if(theme.viewportWidth()>=theme.mq.md){var e=(theme.viewportHeight()-theme.navbar.height()-c-d.height());
a.css({"max-height":e})
}})).trigger("resize");
jQuery(this).data("init-adaptive-height","init")
}})
};
jQuery.fn.tmOverlay=function(){return this.find('[data-toggle="overlay"]').each(function(){if(jQuery(this).data("init-overlay")!=="init"){var b=jQuery(this),a=jQuery(b.data("target"));
if(a!==undefined&&a.length){var d=b.data("overlay-title")||"&nbsp",c=function(){a.parent().removeClass("in");
setTimeout(function(){a.prev(".overlay-header").remove();
a.unwrap(".overlay-wrapper").removeClass("open")
},250)
};
b.click(function(f){f.preventDefault();
if(theme.viewportWidth()<theme.mq.sm){a.wrap('<div class="overlay-wrapper" />').addClass("open");
a.parent().prepend('<div class="overlay-header"><div class="overlay-title">'+d+'</div><div class="overlay-close ico-remove" /></div>').tmSVGIcon();
a.parent().find(".overlay-close").click(c);
setTimeout(function(){a.parent().addClass("in")
},1)
}});
a.on("tm.overlay.close",function(){c()
});
a.find(".js-overlay-close").click(function(f){f.preventDefault();
c()
})
}jQuery(this).data("init-overlay","init")
}})
};
jQuery.fn.tmGridCompatibilityTest=function(){var a=$("<div></div>").css("display","-ms-grid").css("display","grid");
if(a.css("display")!=="grid"&&a.css("display")!=="-ms-grid"){$("html").addClass("no-grid")
}else{$("html").addClass("grid")
}};
jQuery.fn.tmDeviceCarousel=function(){var a=$("#device-detail-carousel");
if((a.length>0)&&(a.data("init-device-carousel")!=="init")){a.swiperight(function(){a.carousel("prev")
}).swipeleft(function(){a.carousel("next")
});
jQuery(this).data("init-device-carousel","init")
}};
jQuery.fn.tmCarouselSwipe=function(){return this.find(".js-carousel-swipe").each(function(){if(jQuery(this).data("init-carousel-swipe")!=="init"){var a=jQuery(this);
a.swiperight(function(){a.carousel("prev")
}).swipeleft(function(){a.carousel("next")
});
jQuery(this).data("init-carousel-swipe","init")
}})
};
jQuery.fn.tmToggleListing=function(){return this.find(".js-toggle-listing").each(function(){if(jQuery(this).data("init-toggle-listing")!=="init"){var a=jQuery(this),c=a.text(),b=a.data("toggle-text");
a.click(function(d){d.preventDefault();
a.closest(".device-listing-wrapper").toggleClass("device-listing-full-size");
a.toggleClass("collapsed");
if(a.is(".collapsed")){a.find("span").text(b)
}else{a.find("span").text(c)
}});
jQuery(this).data("init-toggle-listing","init")
}})
};
jQuery.fn.tmLikeDropdown=function(){return jQuery(this).find(".like-dropdown").each(function(){if(jQuery(this).data("init-like-dropdown")!=="init"){var a=jQuery(this),e=a.data("source"),d=jQuery('<ul class="dropdown-menu" />'),c="",b;
if(e&&jQuery.isArray(e)){if(e.length>0){a.wrap('<div class="like-dropdown-wrapper" />');
for(b=0;
b<e.length;
b+=1){c="";
if(e[b].icon.length){c='<i class="'+e[b].icon+'"></i>'
}e[b].label=e[b].label==undefined?e[b].value:e[b].label;
d.append('<li><a href="">'+c+'<span class="vertical-middle" data-like-dropdown-value="'+e[b].value+'">'+e[b].label+"</span></a></li>")
}d.insertAfter(a).tmSVGIcon();
d.find("a").click(function(f){f.preventDefault();
a.val(jQuery(this).find("span").data("like-dropdown-value"));
a.closest(".input-prefix-label").addClass("focused");
a.parent().removeClass("open")
});
a.focus(function(){a.parent().addClass("open")
});
jQuery("html").on("click",function(f){if(!jQuery(f.target).is(a)){a.parent().removeClass("open")
}})
}}jQuery(this).data("init-like-dropdown","init")
}})
};
jQuery.fn.tmServiceListing=function(){return jQuery(this).find(".js-service-detail-link").each(function(){if(jQuery(this).data("init-service-link")!=="init"){var a=jQuery(this),b=jQuery(a.attr("href"));
if(b!==undefined&&b.length){b.addClass("collapse");
a.click(function(c){c.preventDefault();
if(theme.viewportWidth()>=theme.mq.md){if(b.hasClass("in")){a.closest("tr").removeClass("open")
}else{a.closest("tr").addClass("open")
}b.collapse("toggle")
}else{jQuery.tmOpenLightbox({title:a.attr("title")||"",size:a.data("lightbox-size")||"null",locale:"cs",onEscape:true,message:b})
}})
}jQuery(this).data("init-service-link","init")
}})
};
jQuery.fn.tmSmoothScroll=function(){return jQuery(this).find(".js-scroll").each(function(){if(jQuery(this).data("init-smooth-scroll")!=="init"){var b=jQuery(this),a=jQuery(b.attr("href"));
if(a!==undefined&&a.length){b.click(function(c){c.preventDefault();
jQuery("html, body").animate({scrollTop:a.offset().top},400)
})
}jQuery(this).data("init-smooth-scroll","init")
}})
};
jQuery.fn.tmPie=function(){function a(c,f,h,b){var d=c.attr("data-pie-value"),g=parseInt(f.css("stroke-dasharray")),e=(parseInt(f.css("stroke-width"),10)/2);
f.add(h).attr("cx",b+e).attr("cy",b+e).attr("r",b);
f.css("stroke-dashoffset",g+((d/100)*g))
}return jQuery(this).find(".js-pie").each(function(){if(jQuery(this).data("init-pie")!=="init"){var d=jQuery(this).find("circle.pie-fill"),e=jQuery(this).find("circle.pie-background"),b=parseInt(d.attr("r"),10),c=parseInt(d.data("r-small"),10);
jQuery(this).on("viewportChange",function(){if(theme.viewportWidth()<theme.mq.xs){a(jQuery(this),d,e,c)
}else{a(jQuery(this),d,e,b)
}});
jQuery(this).data("init-pie","init")
}})
};
jQuery.fn.tmBubbleTooltip=function(){return jQuery(this).find(".js-bubble").each(function(){if(jQuery(this).data("init-bubble-tooltip")!=="init"){if(window.Liferay!==undefined&&Liferay.Browser.isMobile()){var b=jQuery(this),c=b.closest(".bubble-wrapper"),a=false;
c.on("click",function(){if(!a&&!b.is(".hiding")){jQuery("body").append('<div class="bubble-overlay"></div>');
setTimeout(function(){jQuery("body").addClass("bubble-visible")
},10);
b.show();
a=true
}});
c.find(".tooltip-close").click(function(d){d.preventDefault();
d.stopPropagation();
jQuery("body").removeClass("bubble-visible");
b.addClass("hiding");
setTimeout(function(){jQuery(".bubble-overlay").remove();
b.hide().removeClass("hiding")
},250);
a=false
})
}jQuery(this).data("init-bubble-tooltip","init")
}})
};
jQuery.fn.chart=function(){return jQuery(this).find("#chart").each(function(){if(jQuery(this).data("init-chart")!=="init"){var e=[];
var f=jQuery(this).offset();
jQuery(this).find(".js-point").each(function(){var g=jQuery(this);
if(g.data("init-vcc-graph")!=="init"){e.push({left:g.offset().left-f.left+(g.width()/2),top:g.offset().top-f.top+(g.height()/2)});
g.data("init-vcc-graph","init")
}});
if(e.length>1){var d=jQuery(this).width();
var a=jQuery(this).height();
var b=jQuery(this).find(".js-canvas")[0].getContext("2d");
b.canvas.width=d*2;
b.canvas.height=a*2;
b.canvas.style.width=d+"px";
b.canvas.style.height=a+"px";
b.scale(2,2);
b.strokeStyle=jQuery(this).css("stroke");
b.clearRect(0,0,d,a);
b.beginPath();
b.moveTo(e[0].left,e[0].top);
for(var c=1;
c<e.length;
c++){b.lineTo(e[c].left,e[c].top)
}b.stroke()
}jQuery(this).data("init-chart","init")
}})
};
jQuery.fn.clipPathShapesSupported=function(){var a="clipPath",f=["webkit","moz","ms","o"],h=[a],b=document.createElement("testelement"),c="polygon(50% 0%, 0% 100%, 100% 100%)";
for(var g=0,e=f.length;
g<e;
g++){var d=f[g]+a.charAt(0).toUpperCase()+a.slice(1);
h.push(d)
}for(var g=0,e=h.length;
g<e;
g++){var j=h[g];
if(b.style[j]===""){b.style[j]=c;
if(b.style[j]!==""){jQuery("html").addClass("cssclippath");
return true
}}}jQuery("html").addClass("no-cssclippath");
return false
};
jQuery.fn.tmProgressBar=function(){return jQuery(this).find(".js-progress-bar").each(function(){if(jQuery(this).data("init-progress-bar")!=="init"){var e=jQuery(this),h=e.attr("aria-valuenow"),i=e.parent(".progress-bar-limit"),d=e.closest(".progress").find(".popover").eq(0),j=jQuery(this).closest(".progress"),c=12,a,f,b=false,g=0;
if(h!==undefined){e.width(h+"%")
}if(i.length&&d.length){jQuery(window).resize(jQuery.debounce(250,function(){f=i.position().left+i.outerWidth();
a=f-(d.outerWidth()/2);
a-=(parseInt(i.css("border-right-width"),10)/2);
b=(f+(d.outerWidth()/2))>=(j.width()+c);
if(b){d.addClass("out-of-container-right");
g=f+(d.outerWidth()/2)-(j.width()+c);
a-=g;
var k=d.find(".arrow");
k.css("left",(f-a))
}else{d.removeClass("out-of-container-right")
}b=(f-(d.outerWidth()/2)+c)<=0;
if(b){d.addClass("out-of-container-left");
c-=4;
g=Math.abs(f-(d.outerWidth()/2)+c);
a+=g;
var k=d.find(".arrow");
k.css("left",(f-a))
}else{d.removeClass("out-of-container-left")
}d.css("left",a)
})).resize()
}jQuery(this).data("init-progress-bar","init")
}})
};
jQuery.fn.tmRange=function(){return jQuery(this).find(".js-range").each(function(){if(jQuery(this).data("init-range")!=="init"){var f=jQuery(this),e=f.attr("id"),a=".range",d=jQuery(f.data("target-input"));
if(f.hasClass("theme-v1")){var b="::-webkit-slider-runnable-track{background:linear-gradient(90deg, #E20074 {value}%, #CCCCDE 0)}"
}else{var b="::-webkit-slider-runnable-track{background:linear-gradient(90deg, #64b9e4 {value}%, #e5e5e5 0)}"
}if(e===undefined){e=generateID(5);
f.attr("id","range-"+e);
a="#range-"+e
}else{a+="#"+e
}f.before("<style>"+a+b+"</style>");
if(d.length){d.on("input",function(){f.val(d.val()).triggerHandler("change")
})
}function c(h){if(h.target.max!==""&&h.target.max!==undefined){var g=parseFloat(h.target.max),i=Math.round(h.target.value/(g/100));
f.parent().find("style").text(a+b.replace("{value}",i))
}else{console.error("Attribute max is missing in range input!")
}if(d.length){d.val(h.target.value).triggerHandler("change")
}}f.on("input",c).on("change",c).triggerHandler("change");
jQuery(this).data("init-range","init")
}})
};
jQuery.fn.tmPopover=function(){return jQuery(this).find(".js-popover").each(function(){if(jQuery(this).data("init-popover")!=="init"){var e=jQuery(this),b=e.data("target")||e.attr("href"),a=jQuery(b),d=e.data("placement")||"right",c=e.data("popover-size")!==undefined?"popover-"+e.data("popover-size"):"";
if(a.length){a.hide();
e.click(function(f){f.preventDefault()
}).popover({placement:d,html:true,content:a,viewport:{selector:".container",padding:15},template:'<div class="popover '+c+'" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}).on("show.bs.popover",function(){jQuery(".js-popover").not(jQuery(this)).popover("hide");
var f=jQuery(this).closest(".popover");
if(f.length){f.addClass("active")
}a.show()
}).on("hidden.bs.popover",function(){var f=jQuery(this).closest(".popover");
if(f.length){f.removeClass("active")
}});
a.find(".js-close-popover").click(function(f){f.preventDefault();
e.popover("hide")
})
}else{console.error('Content "'+b+'" for popover not found on page!')
}jQuery(this).data("init-popover","init")
}})
};
jQuery.fn.tmTogglePassword=function(){return jQuery(this).find(".js-toggle-password").each(function(){if(jQuery(this).data("init-toggle-password")!=="init"){var f=jQuery(this),d=f.parent().find(".js-toggle-password-btn"),a=f.parent().find(".js-toggle-password-icon-visibility-on"),c=f.parent().find(".js-toggle-password-icon-visibility-off").hide(),b=false,e;
d.click(function(g){g.preventDefault();
if(!b){f.attr("type","text");
a.hide();
c.show();
e=setTimeout(function(){f.attr("type","password");
a.show();
c.hide();
b=false
},1000*60)
}else{f.attr("type","password");
a.show();
c.hide();
clearTimeout(e)
}b=!b
});
jQuery(this).data("init-toggle-password","init")
}})
};
var tmInitFunctions={},registerInitFunction=function(b,a){if(!tmInitFunctions.hasOwnProperty(a)){tmInitFunctions[a]=[]
}if(b&&typeof b==="object"&&b.constructor===Array){tmInitFunctions[a]=tmInitFunctions[a].concat(b)
}else{tmInitFunctions[a].push(b)
}};
jQuery.fn.tmInit=function(b){var a,d,c;
for(a=0;
a<b.length;
a+=1){c=tmInitFunctions[b[a]];
if(c!==undefined){for(d=0;
d<c.length;
d+=1){c[d].apply(jQuery(this))
}}}};
(function(b){var a={placeholderClass:"level-34-placeholder",overwrite:false,settingsDivId:"navsettings",ajaxSourceUrl:"data-ajax-mega-menu-url",ajaxProxyUrl:"data-ajax-proxy-url",placeholderLoadingFlag:"data-loading"};
b.fn.tmMegaMenuLoader=function(c){var d=b.extend({},a,c),e=b("#"+d.settingsDivId);
if(e){d.ajaxSourceUrl=e.attr(d.ajaxSourceUrl);
d.ajaxProxyUrl=e.attr(d.ajaxProxyUrl);
if(d.ajaxSourceUrl){return this.each(function(){var h=b(this),f=h.parent(),l=f.find("ul."+d.placeholderClass);
var g=(d.placeholderClass=="level-34-placeholder");
var k=jQuery.fn.getFromMemoryMegamenu(h.attr("data-plid"));
if(g&&k!=null&&k.length>5){jQuery.fn.appendMegamenu(k,l)
}else{if(!l.attr(d.placeholderLoadingFlag)||d.overwrite){var j=d.ajaxSourceUrl,i="";
if(d.ajaxProxyUrl&&d.ajaxProxyUrl!="%AJAX_PROXY_URL_PLACEHOLDER%"){j=d.ajaxProxyUrl;
i=d.ajaxSourceUrl
}if(j){l.attr(d.placeholderLoadingFlag,"true");
b.ajaxq("MegaMenuQueue",{type:"GET",cache:g,url:j+"",data:{identifier:h.attr("data-plid"),forwardTo:i},context:l,success:function(o,m,n){if(o){l.append(o);
if(l.find(".promo-item, .custom-item").length){l.addClass("with-banner rows-1");
if(l.find("li").not(".promo-item, .custom-item").length>4){l.removeClass("rows-1").addClass("rows-2")
}}l.tmSVGIcon();
jQuery.fn.saveIntoMemoryMegamenu(o,h.attr("data-plid"))
}},error:function(m,o,n){l.removeAttr(d.placeholderLoadingFlag);
this.html("")
}})
}}}})
}}}
})(jQuery);
jQuery.fn.appendMegamenu=function(a,b){if(a){b.append(a);
if(b.find(".promo-item, .custom-item").length){b.addClass("with-banner rows-1");
if(b.find("li").not(".promo-item, .custom-item").length>4){b.removeClass("rows-1").addClass("rows-2")
}}b.tmSVGIcon()
}};
jQuery.fn.saveIntoMemoryMegamenu=function(b,a){var c=jQuery.fn.checkAndGetCachedMegamenu();
try{c[a]=b;
localStorage.megamenu=JSON.stringify(c)
}catch(d){}};
jQuery.fn.getFromMemoryMegamenu=function(a){var b=jQuery.fn.checkAndGetCachedMegamenu();
if(b!=null){return b[a]
}else{return null
}};
jQuery.fn.checkAndGetCachedMegamenu=function(){try{var c=localStorage.megamenu;
var a;
if(c!=null&&c.length>0){a=JSON.parse(c);
if((a.timestamp+1800000)<Date.now()){return{timestamp:Date.now()}
}else{return JSON.parse(c)
}}else{return{timestamp:Date.now()}
}}catch(b){return null
}};
jQuery.fn.ibaMegamenuInit=function(){jQuery("a.ajax-load-34level").tmMegaMenuLoader({placeholderClass:"level-34-placeholder",settingsDivId:"navsettings",ajaxSourceUrl:"data-ajax-mega-menu-url",ajaxProxyUrl:"data-ajax-proxy-url",placeholderLoadingFlag:"data-loading"});
jQuery("a.ajax-load-quick-bookmark").tmMegaMenuLoader({placeholderClass:"level-34-bookmarks",overwrite:true,settingsDivId:"navsettings",ajaxSourceUrl:"data-ajax-quick-links-url",ajaxProxyUrl:"data-ajax-proxy-url",placeholderLoadingFlag:"data-loading"})
};
registerInitFunction([jQuery.fn.tmRadioCheckbox,jQuery.fn.tmSelect,jQuery.fn.tmTooltip,jQuery.fn.tmAutocomplete,jQuery.fn.tmDatepicker,jQuery.fn.tmFileInput,jQuery.fn.tmClickable,jQuery.fn.tmFooterLink,jQuery.fn.tmSVGIcon,jQuery.fn.tmCollapsible,jQuery.fn.tmNav,jQuery.fn.tmLightbox,jQuery.fn.tmMultibanner,jQuery.fn.tmMaskedInput,jQuery.fn.tmInputReplacer,jQuery.fn.tmToggle,jQuery.fn.tmSwipe,jQuery.fn.tmAccordion,jQuery.fn.tmTabs,jQuery.fn.tmBlocks,jQuery.fn.tmTriggerTab,jQuery.fn.tmInputPrefixLabel,jQuery.fn.tmOverlay,jQuery.fn.tmLikeDropdown,jQuery.fn.tmGridCompatibilityTest,jQuery.fn.tmDeviceCarousel,jQuery.fn.tmCarouselSwipe,jQuery.fn.tmSmoothScroll,jQuery.fn.tmPie,jQuery.fn.tmProgressBar,jQuery.fn.tmRange,jQuery.fn.clipPathShapesSupported,jQuery.fn.tmPopover,jQuery.fn.tmTogglePassword],"essential");
registerInitFunction([jQuery.fn.tmAdaptiveHeight,jQuery.fn.tmToggleListing,jQuery.fn.tmServiceListing],"eshop");
registerInitFunction([jQuery.fn.loginHandler],"portal");
registerInitFunction([jQuery.fn.tmBubbleTooltip,jQuery.fn.chart],"vcc");
jQuery(function(){jQuery("html").removeClass("no-js").addClass("js");
tmInitOnce();
jQuery("body").tmInit(["essential","eshop","portal"]);
var a=jQuery(".js-swipe, .js-pie");
jQuery(window).mediaQueryEvent().on("mediaQueryChange",function(c,b){a.trigger("viewportChange")
}).trigger("mediaQueryChange")
});
if(isSVGSupported()){jQuery("html").removeClass("no-svg");
var request=new XMLHttpRequest();
request.open("GET",theme.pathToSVGSprite,true);
request.onreadystatechange=function(){if(this.readyState===4){if(this.status>=200&&this.status<400){var a=document.createElement("div");
a.innerHTML=this.responseText;
a.style.display="none";
a.id=theme.SVGContainerId;
document.body.insertBefore(a,document.body.childNodes[0]);
$("body").tmSVGIcon()
}}};
request.send();
request=null
}if(window.AUI!==undefined){AUI().ready(function(){})
}if(window.Liferay!==undefined&&window.Liferay.Portlet!==undefined){Liferay.Portlet.ready(function(b,c){if(b.indexOf("welcomeportlet")!=-1){var a=jQuery("#"+c.get("id"));
a.tmSVGIcon();
a.tmLightbox()
}});
Liferay.on("allPortletsReady",function(){})
};