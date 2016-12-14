'use strict';

$(function () {
	
	var yam = $('#map');
	
	var map_center = {		
		center: [52.968301, 35.859864],
		zoom: 15
	};
	var myMap;
	
	var initYandexMap = function() {		
		myMap = new ymaps.Map('map', map_center, {
			searchControlProvider: 'yandex#search'
		});
		var icon_w = 66, icon_h = 89;
		var icon_l_w = 96, icon_l_h = 123;

		var obj_location = new ymaps.Placemark([52.970529, 35.860744], {
			hintContent: 'Коттеджный посёлок «Маслово»'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-location-maslovo.png',
			iconImageSize: [icon_l_w, icon_l_h],
			iconImageOffset: [-(icon_l_w / 2), -icon_l_h]
		});

		myMap
			.geoObjects
				.add(obj_location)
		;			
		myMap .geoObjects;	
		myMap.setType('yandex#hybrid');	

	    var myGeoObject = new ymaps.GeoObject({
	        geometry: {
	            type: "Polygon",
	            coordinates: [
	                [
	                   	[52.969661213470104,35.85923099867251],
						[52.969907342742,35.858919862426774],
						[52.97056799855988,35.85836196295167],
						[52.97111206043341,35.858109835304276],
						[52.971604300963754,35.858115199722306],
						[52.972536951782686,35.857568029083254],
						[52.97279601786314,35.858533624328594],
						[52.97302917600473,35.859456304229745],
						[52.9729093587825,35.86012149206545],
						[52.97263410174461,35.860743764556894],
						[52.97205767541664,35.86215997091676],
						[52.971759744172886,35.86269641271975],
						[52.97135818140503,35.86261058203125],
						[52.97041902803468,35.86249256483462],
						[52.969816663702574,35.86220288626099],
						[52.96920781375873,35.86183810583496],
						[52.96849531884231,35.86125874868776],
						[52.96765326417792,35.86102271429444],
						[52.96739416711878,35.86102271429444],
						[52.96716097842944,35.86037898413087],
						[52.967653264176114,35.85975671163943],
						[52.96821031757052,35.85934901586914],
						[52.96856009159527,35.85911298147585],
						[52.96915599634622,35.85913443914796],
						[52.96928553976489,35.85924172750856],
						[52.969661213470104,35.85923099867251]
	                ]
	            ],
	            fillRule: "nonZero"
	        },
	        /*properties:{
	            // Содержимое балуна.
	            balloonContent: "Многоугольник"
	        }*/
	    }, {
	        fillColor: 'rgba(0,0,0,0)',
	        strokeColor: '#ff0000',
	        opacity: 0.5,
	        strokeWidth: 5,
	        strokeStyle: 'solid'
	    });

	    myMap.geoObjects.add(myGeoObject);
	};	

		

	if(yam.length) {		
		ymaps.ready(initYandexMap);		
	}
	
});