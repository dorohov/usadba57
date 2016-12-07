$('img').addClass('img-responsive');
$('.text-block ul').addClass('ul-site');
var url = window.location.href;
$('.navbar-nav a[href="'+url+'"]').parent().addClass('active'); 
$('.navbar-project a[href="'+url+'"]').parent().addClass('active'); 
$('.tabs-block a[href="'+url+'"]').parent().addClass('active'); 
$('._ipc__carousel .item').eq(0).addClass('active');
$('._adpc__carousel .item').eq(0).addClass('active');
$('._ipc__carousel').carousel({
    interval : false
});

$('.text-block table').addClass('table table-bordered');
$('.text-block .table.table-bordered').parent().addClass('table-responsive');
$('.text-block img').parent().addClass('_tb__img'); 
$('.fancybox').fancybox({
	prevEffect : 'none',
	nextEffect : 'none',
});
// конструкция для активации fancybox <a class="fancybox-buttons" data-fancybox-group="button" href="" data-title=""><img src="" alt="" /></a>
$('.fancybox-buttons').fancybox({
	openEffect  : 'none',
	closeEffect : 'none',
	prevEffect : 'none',
	nextEffect : 'none',
	closeBtn  : false,
	helpers : {
		title : {
			type : 'inside'
		},
		buttons	: {}
	},
	afterLoad : function() {
		this.title = this.title;
	}
});
$("form.form-site").validationEngine(
	'attach', {
		promptPosition : "bottomLeft"
	}
);
retinajs();

$("._gpc__owl").owlCarousel({
	loop: true,
	autoplay: true,
	items: 1,
	nav: true,
	autoplayHoverPause: true,
	animateOut: 'slideOutUp',
	animateIn: 'slideInUp'
});

//$('._gpc__slick').slick();
/*$('._gpc__slick').slick({
	slidesToShow: 3, 
	slidesToScroll: 3, 
	//vertical: true,
	//verticalSwiping: true
});*/