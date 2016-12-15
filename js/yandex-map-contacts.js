'use strict';

$(function() {
	
	var	yam = $('#map');
	var	yam_center = {		
			center: [52.981341, 36.077752], // расположение района
			zoom: 16 
		};
	var myMap;
	
	var initYandexMap = function() {
		
		myMap = new ymaps.Map('map', yam_center, {
			//searchControlProvider: 'yandex#search'
		});
		var firm_office = new ymaps.Placemark([52.981340, 36.077752], {
			hintContent: '«Орловские усадьбы»'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/default/icon-map.png',
			iconImageSize: [132, 138],
			iconImageOffset: [-66, -138]
		});
		
		myMap
			.geoObjects
				.add(firm_office)
		;			
		myMap .geoObjects;
			
	}	
	if(yam.length) {		
		ymaps.ready(initYandexMap);		
	}
	
});