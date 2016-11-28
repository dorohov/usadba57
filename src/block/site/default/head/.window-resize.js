var h_window = $(window).height(), 
	w_window = $(window).width(),

	h_navbar = $('.navbar-site').outerHeight(true),
	h_header = $('.header-site').outerHeight(true),
	w_news_preview = $('.news-item__preview').outerWidth(true),
	h_news_block = $('.news-block').outerHeight(true),
	h_footer = $('.footer-site').outerHeight(true),
	h_content_index = h_window - h_navbar,
	h_content_scroller = h_window - h_header - h_footer, 
	h_content_scroller_sm = h_window - h_header - h_footer - 100, 
	h_content = h_window - h_navbar - h_footer;

if (device.tablet()) {
	$("._msp__block .scroller").mCustomScrollbar();
	$('.index-page-content').css("min-height", h_content_index);	
	$('.content-block.second').css("min-height", h_content_scroller_sm);
	$('._adpc__row').css("min-height", h_content_scroller_sm);
	$('._gpc__preview-cols').css("max-width", w_window);
}
if (device.mobile()) {	
	$('.second-page').css("min-height", h_window);
} else{
	$('._adpc__carousel').carousel({
	    interval : false
	});
}
if (device.mobile() || device.tablet()) {
	$('.navbar').addClass('navbar-fixed-top');

	$('.owl-slider ul').owlCarousel({
		margin: 0,
		loop: true,
		items:1,	
		navText: [],
		//autoplay:true,
		smartSpeed: 500,
		autoplayTimeout:10000,
		nav: true,
		dots: false		
	});	 
} else {
	$('.content-block.second').css("height", h_content_scroller);
	$('.content-block.second').css("top", h_header);
	$(".scroller").mCustomScrollbar();	
}
$(".navbar-fixed-top").autoHidingNavbar();
$('.news-item__preview a').css("height", w_news_preview);


if($(".swiper-container").size() > 0){
	var swiper = new Swiper('.swiper-container', {	
		pagination: '.swiper-pagination',
		direction: 'vertical',
		slidesPerView: 4,
		spaceBetween: 30,
		//scrollbarHide: true,
		//scrollbar: '.swiper-scrollbar',
		//scrollbarHide: false,
		//centeredSlides: true,
		//spaceBetween: 30,
		//grabCursor: true
		breakpoints: {
			// when window width is <= 320px
			767: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			1000: {
				direction: 'horizontal',
				slidesPerView: 3,
				spaceBetween: 20
			},
			1400: {
				slidesPerView: 3,
				spaceBetween: 20
			}
		}
	});
}