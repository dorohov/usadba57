'use strict';

$(function () {
	
	var yam = $('#map');
	
	var map_center = {		
		center: [52.941041, 35.976148],
		zoom: 15
	};
	var myMap;
	
	var initYandexMap = function() {		
		myMap = new ymaps.Map('map', map_center, {
			searchControlProvider: 'yandex#search'
		});
		var icon_w = 66, icon_h = 89;
		var icon_l_w = 96, icon_l_h = 123;

		var obj_location = new ymaps.Placemark([52.936970, 35.965827], {
			hintContent: 'Коттеджный посёлок «Саханский»'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/wp-content/themes/azbnbasetheme/img/location/icon-location-sahansky.png',
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
	                   	[52.93905560762027,35.95721023043194],
						[52.93195660895521,35.95741869021082],
						[52.9329030845731,35.965679893976684],
						[52.93331797143521,35.96970320749903],
						[52.93409587353548,35.97372652102135],
						[52.93504230214261,35.977599630838874],
						[52.9357359044223,35.980051169878465],
						[52.93637763864191,35.980914841181274],
						[52.939514868268766,35.97585083056115],
						[52.94012413842699,35.97531438875818],
						[52.9404222887671,35.97531438875818],
						[52.940759325796066,35.97559333849573],
						[52.94136857834418,35.975207100397576],
						[52.93905560762027,35.95721023043194]
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