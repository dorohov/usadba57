'use strict';

$(function () {
	
	var yam = $('#map');
	
	var map_center = {		
		center: [52.934749, 36.189987],
		zoom: 13
	};
	var myMap;
	
	var initYandexMap = function() {		
		myMap = new ymaps.Map('map', map_center, {
			searchControlProvider: 'yandex#search'
		});
		var icon_w = 66, icon_h = 89;
		var icon_l_w = 96, icon_l_h = 123;

		var obj_location = new ymaps.Placemark([52.934282, 36.192433], {
			hintContent: 'Коттеджный посёлок «Новая Куликовка»'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-location-new-kulikovka.png',
			iconImageSize: [icon_l_w, icon_l_h],
			iconImageOffset: [-(icon_l_w / 2), -icon_l_h]
		});
		var obj_bus = new ymaps.Placemark([52.932701, 36.183694], {
			hintContent: 'Остановка общественного транспорта'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-bus.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_bus2 = new ymaps.Placemark([52.924358, 36.145794], {
			hintContent: 'Остановка общественного транспорта'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-bus.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_gas_stations = new ymaps.Placemark([52.921872, 36.146697], {
			hintContent: 'АЗС Газпром'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-gas.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		}); 
		var obj_gas_stations2 = new ymaps.Placemark([52.925174, 36.146504], {
			hintContent: 'АЗС Octan'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-gas.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_gas_stations3 = new ymaps.Placemark([52.925688, 36.144304], {
			hintContent: 'АЗС Octan'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-gas.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_cafe = new ymaps.Placemark([52.924781, 36.145333], {
			hintContent: 'Кафе'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-cafe.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_shop = new ymaps.Placemark([52.924780, 36.149147], {
			hintContent: 'Магазин'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-shop.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_kindergarten = new ymaps.Placemark([52.937742, 36.136315], {
			hintContent: 'Детский сад'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-kindergarten.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_kindergarten2 = new ymaps.Placemark([52.896766, 36.163133], {
			hintContent: 'Детский сад'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-kindergarten.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_school = new ymaps.Placemark([52.942834, 36.139782], {
			hintContent: 'Покровская средняя общеобразовательная школа МБОУ'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-school.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_school2 = new ymaps.Placemark([52.892058, 36.186870], {
			hintContent: 'МБОУ Малокуликовская средняя общеобразовательная школа Орловского района Орловской области'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-school.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_school3 = new ymaps.Placemark([52.917365, 36.218809], {
			hintContent: 'Большекуликовская Основная Общеобразовательная школа'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-school.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_school4 = new ymaps.Placemark([52.908155, 36.225396], {
			hintContent: 'Большекуликовская школа'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-school.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_post = new ymaps.Placemark([52.944332, 36.137493], {
			hintContent: 'Отделение почтовой связи Куликовский 302516'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-post.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_post2 = new ymaps.Placemark([52.917708, 36.219028], {
			hintContent: 'Отделение почтовой связи Большая Куликовка 302540'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-post.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_post3 = new ymaps.Placemark([52.896703, 36.173916], {
			hintContent: 'Отделение почтовой связи Малая Куликовка 302515'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/location/icon-post.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		myMap
			.geoObjects
				.add(obj_location)
				.add(obj_bus)
				.add(obj_bus2)
				.add(obj_gas_stations)
				.add(obj_gas_stations2)
				.add(obj_gas_stations3)
				.add(obj_cafe)				
				.add(obj_shop)
				.add(obj_kindergarten)
				.add(obj_kindergarten2)
				.add(obj_school)
				.add(obj_school2)
				.add(obj_school3)
				.add(obj_school4)
				.add(obj_post)
				.add(obj_post2)
				.add(obj_post3)
		;			
		myMap .geoObjects;	
		myMap.setType('yandex#hybrid');	

	    var myGeoObject = new ymaps.GeoObject({
	        geometry: {
	            type: "Polygon",
	            coordinates: [
	                [
	                    [52.93082051028763,36.19397812701417],
						[52.93555280521728,36.20176726199341],
						[52.93662884355784,36.186510857116694],
						[52.933945179775144,36.183485325347895],
						[52.93082051028763,36.19397812701417]
	                ]
	            ],
	            fillRule: "nonZero"
	        },
	        properties:{
	            // Содержимое балуна.
	            balloonContent: "Коттеджный посёлок «Новая Куликовка»"
	        }
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