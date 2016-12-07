'use strict';

$(function () {
	
	var yam = $('#map');
	
	var map_center = {		
		center: [52.942597, 35.946858],
		zoom: 15
	};
	var myMap;
	
	var initYandexMap = function() {		
		myMap = new ymaps.Map('map', map_center, {
			searchControlProvider: 'yandex#search'
		});
		var icon_w = 66, icon_h = 89;
		var icon_l_w = 96, icon_l_h = 123;

		var obj_location = new ymaps.Placemark([52.942843, 35.944734], {
			hintContent: 'Коттеджный посёлок «Надежда»'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-location-hope.png',
			iconImageSize: [icon_l_w, icon_l_h],
			iconImageOffset: [-(icon_l_w / 2), -icon_l_h]
		});
		var obj_school = new ymaps.Placemark([52.955667, 35.966913], {
			hintContent: 'Школа'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-school.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_school2 = new ymaps.Placemark([52.955819, 36.020874], {
			hintContent: 'Школа № 51 Города Орла'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-school.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_school3 = new ymaps.Placemark([52.956486, 35.924925], {
			hintContent: 'МБОУ Звягинская средняя общеобразовательная школа'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-school.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_kindergarten = new ymaps.Placemark([52.951584, 35.933314], {
			hintContent: 'Детский сад'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-kindergarten.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_kindergarten2 = new ymaps.Placemark([52.954097, 36.021531], {
			hintContent: 'МБДОО - Детский сад № 91 города Орла'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-kindergarten.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_kindergarten3 = new ymaps.Placemark([52.949278, 36.014995], {
			hintContent: 'МБДОО - Детский сад № 95 города Орла'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-kindergarten.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_kindergarten4 = new ymaps.Placemark([52.950987, 36.017943], {
			hintContent: 'Центр Детского развития Монтессорики'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-kindergarten.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_kindergarten5 = new ymaps.Placemark([52.955801, 35.970092], {
			hintContent: 'Детский сад'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-kindergarten.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_post = new ymaps.Placemark([52.953161, 35.928090], {
			hintContent: 'Отделение почтовой связи Звягинки 302523'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-post.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_gas = new ymaps.Placemark([52.948005, 36.010145], {
			hintContent: 'АЗС Роснефть'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-gas.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_gas2 = new ymaps.Placemark([52.947389, 36.022180], {
			hintContent: 'АЗС Газпром'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-gas.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_gas3 = new ymaps.Placemark([52.947462, 36.020895], {
			hintContent: 'АЗС ТЭМ'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-gas.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_shop_line = new ymaps.Placemark([52.947339, 36.031935], {
			hintContent: 'Гипермаркет «Линия-3»'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-shop-line.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_shop_euro = new ymaps.Placemark([52.948804, 36.022880], {
			hintContent: 'Гипермаркет «Европа 45»'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-shop-euro.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_cafe = new ymaps.Placemark([52.947969, 36.006540], {
			hintContent: 'Кафе «На привале»'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-cafe.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_adm = new ymaps.Placemark([52.951058, 35.924846], {
			hintContent: 'Администрация Образцовского поселения'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-adm.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_med = new ymaps.Placemark([52.952470, 35.928843], {
			hintContent: 'Поликлиника'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-med.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_med2 = new ymaps.Placemark([52.955373, 35.971117], {
			hintContent: 'Медицинский пункт'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-med.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_auto = new ymaps.Placemark([52.947784, 36.024432], {
			hintContent: 'Автосервис «ВЧ Сервис»'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-auto.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_canteen = new ymaps.Placemark([52.951129, 35.924138], {
			hintContent: 'Столовая'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-canteen.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_bus = new ymaps.Placemark([52.948607, 35.944172], {
			hintContent: 'Остановка общественного транспорта'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-bus.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_bus2 = new ymaps.Placemark([52.948735, 35.943598], {
			hintContent: 'Остановка общественного транспорта'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-bus.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_bus3 = new ymaps.Placemark([52.949197, 35.978506], {
			hintContent: 'Остановка общественного транспорта'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-bus.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_bus4 = new ymaps.Placemark([52.948968, 35.978973], {
			hintContent: 'Остановка общественного транспорта'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-bus.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_bus5 = new ymaps.Placemark([52.950559, 35.924088], {
			hintContent: 'Остановка общественного транспорта'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-bus.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_bus6 = new ymaps.Placemark([52.950363, 35.924445], {
			hintContent: 'Остановка общественного транспорта'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-bus.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_bus7 = new ymaps.Placemark([52.954736, 35.973962], {
			hintContent: 'Остановка общественного транспорта'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-bus.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_shop = new ymaps.Placemark([52.951173, 35.923641], {
			hintContent: 'Супермаркет «Алькор»'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-shop.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});
		var obj_shop = new ymaps.Placemark([52.948718, 35.961133], {
			hintContent: 'Магазин'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-shop.png',
			iconImageSize: [icon_w, icon_h],
			iconImageOffset: [-(icon_w / 2), -icon_h]
		});

		myMap
			.geoObjects
				.add(obj_location)
				.add(obj_school)
				.add(obj_school2)
				.add(obj_school3)
				.add(obj_kindergarten)
				.add(obj_kindergarten2)
				.add(obj_kindergarten3)
				.add(obj_kindergarten4)
				.add(obj_kindergarten5)
				.add(obj_post)
				.add(obj_gas)
				.add(obj_gas2)
				.add(obj_gas3)
				.add(obj_shop_line)
				.add(obj_shop_euro)
				.add(obj_cafe)
				.add(obj_adm)
				.add(obj_med)
				.add(obj_med2)
				.add(obj_auto)
				.add(obj_canteen)
				.add(obj_bus)
				.add(obj_bus2)
				.add(obj_bus3)
				.add(obj_bus4)
				.add(obj_bus5)
				.add(obj_bus6)
				.add(obj_bus7)
				.add(obj_shop)
		;			
		myMap .geoObjects;	
		myMap.setType('yandex#hybrid');	

	    var myGeoObject = new ymaps.GeoObject({
	        geometry: {
	            type: "Polygon",
	            coordinates: [
	                [
	                   	[52.94865979109972,35.94512727521505],
						[52.93155291480367,35.94774226707154],
						[52.931345463369695,35.94729165595704],
						[52.93116394254536,35.94044665855103],
						[52.931578846162665,35.93995313209227],
						[52.93213636660494,35.93976001304322],
						[52.932240090540475,35.93789319556881],
						[52.93252533008168,35.93718509238892],
						[52.934081148862724,35.93892316383057],
						[52.93458677786408,35.94006042045283],
						[52.934833107793764,35.941326423107895],
						[52.93563042921379,35.94225983184505],
						[52.935416515161016,35.9434507326477],
						[52.935079436312805,35.94422320884399],
						[52.935286869762386,35.944931312023925],
						[52.93852788764591,35.94426612418822],
						[52.94819165166737,35.94192723792721],
						[52.94865979109972,35.94512727521505]
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