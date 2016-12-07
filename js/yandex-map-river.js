'use strict';

$(function () {
	
	var yam = $('#map');
	
	var map_center = {		
		center: [52.888082, 36.029631],
		zoom: 14
	};
	
	/*if($(document).width() < 1025) {
		map_center = {
			center: [52.9545, 36.0640], // расположение района
			zoom: 17
		}
	} else {
		map_center = {
			center: [52.95464, 36.0620], // расположение района
			zoom: 18
		}		
	}*/
	var myMap;
	
	var initYandexMap = function() {		
		myMap = new ymaps.Map('map', map_center, {
			searchControlProvider: 'yandex#search'
		});
		var icon_w = 66, icon_h = 89;
		var icon_l_w = 96, icon_l_h = 123;

		var obj_location = new ymaps.Placemark([52.889968, 36.040274], {
			hintContent: 'Коттеджный посёлок «Междуречье»'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-location-river.png',
			iconImageSize: [icon_l_w, icon_l_h],
			iconImageOffset: [-(icon_l_w / 2), -icon_l_h]
		});
		var obj_shop = new ymaps.Placemark([52.891153, 36.015686], {
			hintContent: 'Торговый центр'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-shop.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_bus = new ymaps.Placemark([52.890288, 36.014909], {
			hintContent: 'Остановка общественного транспорта'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-bus.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_kindergarten = new ymaps.Placemark([52.888799, 36.023069], {
			hintContent: 'Детский сад'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-kindergarten.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_kindergarten2 = new ymaps.Placemark([52.893934, 35.983305], {
			hintContent: 'Детский сад'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-kindergarten.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_kindergarten3 = new ymaps.Placemark([52.893103, 35.977973], {
			hintContent: 'Детский сад'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-kindergarten.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_kindergarten4 = new ymaps.Placemark([52.886827, 35.961107], {
			hintContent: 'Дошкольное отделение № 1'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-kindergarten.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_school = new ymaps.Placemark([52.889988, 36.022830], {
			hintContent: 'Школа'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-school.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_shop2 = new ymaps.Placemark([52.891031, 36.026186], {
			hintContent: 'Магазин'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-shop.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_post = new ymaps.Placemark([52.891959, 35.979693], {
			hintContent: 'Отделение почтовой связи Знаменка 302520'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-post.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});

		myMap
			.geoObjects
				.add(obj_location)
				.add(obj_shop)
				.add(obj_shop2)
				.add(obj_bus)
				.add(obj_kindergarten)
				.add(obj_kindergarten2)
				.add(obj_kindergarten3)
				.add(obj_kindergarten4)
				.add(obj_school)
				.add(obj_post)
		;			
		myMap .geoObjects;	
		myMap.setType('yandex#hybrid');	

	    var myGeoObject = new ymaps.GeoObject({
	        geometry: {
	            type: "Polygon",
	            coordinates: [
	                [
	                    [52.88443506, 36.02699141],
	                    [52.88382500, 36.03670100],
	                    [52.88803358, 36.03281716],
	                    [52.88443506, 36.02699141]
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
	    var myGeoObject2 = new ymaps.GeoObject({
	        geometry: {
	            type: "Polygon",
	            coordinates: [
	                [
	                    [52.888093971146546,36.03345129857369],
						[52.88706863678447,36.03467675675522],
						[52.88601731928773,36.0358163842483],
						[52.89103878353986,36.048373993201274],
						[52.89263811721934,36.05169296076526],
						[52.89516444710034,36.04558444905752],
						[52.8947816346835,36.044543751959736],
						[52.89448965682397,36.044200429205794],
						[52.894353399817874,36.04383564877982],
						[52.8941522577316,36.043331393485005],
						[52.89398355719401,36.04249454427236],
						[52.89343203160088,36.04112125325673],
						[52.89268583869073,36.040262946371975],
						[52.891842300725735,36.0393295376348],
						[52.890946834681436,36.038492688422146],
						[52.89053153976976,36.03794551778309],
						[52.89033037986198,36.03736616063589],
						[52.88892223422968,36.034930714850354],
						[52.888714577528525,36.03438354421133],
						[52.888093971146546,36.03345129857369]
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
	    myMap.geoObjects.add(myGeoObject2);
	};	

		

	if(yam.length) {		
		ymaps.ready(initYandexMap);		
	}
	
});