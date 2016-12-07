'use strict';


window.onerror = function(error, url, lineNumber, column, errorObj) {
	console.log('Error FECSS: ' + url + ':' + lineNumber + ':' + column + ': ' + JSON.stringify(error) + '\n' + JSON.stringify(errorObj));
	return;
}





$(function() {
	
	/*
	Создание триггеров на элементы, в основном, на body
	*/
	$(document.body).on("fecss.default",null,{},function(o){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(o){console.log("body trigger:fecss.init");var e=(new Date).getTime();$(document.body).attr("data-created_at",e)}),$(document.body).on("fecss.window.unload",null,{},function(o,e){console.log("body trigger:fecss.window.unload: "+JSON.stringify(e))}),$(document.body).on("fecss.ajax.success",null,{},function(o){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(o,e){console.log("body trigger:fecss.keydown: "+JSON.stringify(e))}),$(document.body).on("DOMSubtreeModified",null,{},function(o,e){}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(o){-o.originalEvent.deltaY||o.originalEvent.detail||o.originalEvent.wheelDelta});
	
	
	/*
	Событие смены класса body
	*/
	$(document.body).on('changeClass', null, {} ,function(event, event_action){
		// event_action = add || remove || toggle
		
		$(function(){});
	});
	
	
	/*
	События смены класса у любого элемента
	*/
		
	
	
	/*
	Основная логика сайта
	*/
	
	
	
	/*
	Событие смены размера экрана, генерация этого события
	*/
	$(window).on('resize',function(event){
		$(function(){var s={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},w={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},i="window-width",d="window-height",h=$(window).outerWidth(!0),m=$(window).outerHeight(!0),a=$("html body").eq(0);h<s.xs.max&&(a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-xs"),h>s.sm.min&&h<s.sm.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-sm"),h>s.md.min&&h<s.md.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-md"),h>s.lg.min&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),i="window-width-lg"),m<w.xs.max&&(a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-xs"),m>w.sm.min&&m<w.sm.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-sm"),m>w.md.min&&m<w.md.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-md"),m>w.lg.min&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),d="window-height-lg"),$("html body").eq(0).addClass(i).addClass(d)});
var h_window=$(window).height(),w_window=$(window).width(),h_navbar=$(".navbar-site").outerHeight(!0),h_header=$(".header-site").outerHeight(!0),w_news_preview=$(".news-item__preview").outerWidth(!0),h_news_block=$(".news-block").outerHeight(!0),h_footer=$(".footer-site").outerHeight(!0),h_content_index=h_window-h_navbar,h_content_scroller=h_window-h_header-h_footer,h_content_scroller_sm=h_window-h_header-h_footer-100,h_content=h_window-h_navbar-h_footer;if(device.tablet()&&($("._msp__block .scroller").mCustomScrollbar(),$(".index-page-content").css("min-height",h_content_index),$(".content-block.second").css("min-height",h_content_scroller_sm),$("._adpc__row").css("min-height",h_content_scroller_sm),$("._gpc__preview-cols").css("max-width",w_window)),device.mobile()?$(".second-page").css("min-height",h_window):$("._adpc__carousel").carousel({interval:!1}),device.mobile()||device.tablet()?($(".navbar").addClass("navbar-fixed-top"),$(".owl-slider ul").owlCarousel({margin:0,loop:!0,items:1,navText:[],smartSpeed:500,autoplayTimeout:1e4,nav:!0,dots:!1})):($(".content-block.second").css("height",h_content_scroller),$(".content-block.second").css("top",h_header),$(".scroller").mCustomScrollbar()),$(".navbar-fixed-top").autoHidingNavbar(),$(".news-item__preview a").css("height",w_news_preview),$(".swiper-container").size()>0)var swiper=new Swiper(".swiper-container",{pagination:".swiper-pagination",direction:"vertical",slidesPerView:4,spaceBetween:30,breakpoints:{767:{slidesPerView:1,spaceBetween:10},1e3:{direction:"horizontal",slidesPerView:3,spaceBetween:20},1400:{slidesPerView:3,spaceBetween:20}}});
	}).trigger('resize');
	
	
	/*
	Событие скроллинга экрана, генерация этого события
	*/
	$(window).on('scroll',function(event){
		var topPos=$(document).scrollTop(),snb=$(".navbar-site.index");snb.hasClass("scroll-sidebar")?topPos<500&&snb.removeClass("scroll-sidebar"):topPos>500&&snb.addClass("scroll-sidebar"),snb.hasClass("opacity")?topPos<200&&snb.removeClass("opacity"):topPos>200&&snb.addClass("opacity"),snb.hasClass("fixed")?topPos<400&&snb.removeClass("fixed"):topPos>400&&snb.addClass("fixed");

	}).trigger('scroll');
	
	
	/*
	Событие ухода со страницы
	*/
	window.onbeforeunload = function(event) {
		//alert(event.target.URL);
		$('body').trigger('fecss.window.unload', [event]);
		return;//return false;
	}
	
	
	/*
	Событие инициализации fecss
	*/
	$(document.body).trigger('fecss.init');
	
	
});