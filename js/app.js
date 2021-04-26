//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let slider_about_1 = new Swiper('.tabs-photo__slider-body_1', {
	// Стрелки
	navigation: {
		nextEl: '.tabs-photo__arrow_next-1',
		prevEl: '.tabs-photo__arrow_prev-1'
	},

	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Количество слайдов для показа
	slidesPerView: 1,

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 30,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Бесконечный слайдер
	loop: true,

	// Кол-во дублирующих слайдов
	loopedSlides: 3,


	// Скорость
	speed: 800,

	// Эффекты переключения слайдов.
	// Листание
	effect: 'slide',


	// Отключить предзагрузка картинок
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,



	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,
});

let slider_about_2 = new Swiper('.tabs-photo__slider-body_2', {
	navigation: {
		nextEl: '.tabs-photo__arrow_next-2',
		prevEl: '.tabs-photo__arrow_prev-2'
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	slidesPerView: 1,

	watchOverflow: true,
	// Бесконечный слайдер
	loop: true,

	// Кол-во дублирующих слайдов
	loopedSlides: 3,

	spaceBetween: 30,

	slidesPerGroup: 1,

	speed: 800,

	effect: 'slide',

	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,

	observer: true,

	observeParents: true,

	observeSlideChildren: true,
});
let slider_about_3 = new Swiper('.tabs-photo__slider-body_3', {
	navigation: {
		nextEl: '.tabs-photo__arrow_next-3',
		prevEl: '.tabs-photo__arrow_prev-3'
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	slidesPerView: 1,

	watchOverflow: true,

	spaceBetween: 30,

	slidesPerGroup: 1,

	speed: 800,
	// Бесконечный слайдер
	loop: true,

	// Кол-во дублирующих слайдов
	loopedSlides: 3,

	effect: 'slide',

	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,

	observer: true,

	observeParents: true,

	observeSlideChildren: true,
});
let slider_about_4 = new Swiper('.tabs-photo__slider-body_4', {
	navigation: {
		nextEl: '.tabs-photo__arrow_next-4',
		prevEl: '.tabs-photo__arrow_prev-4'
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	slidesPerView: 1,

	watchOverflow: true,

	spaceBetween: 30,

	slidesPerGroup: 1,
	// Бесконечный слайдер
	loop: true,

	// Кол-во дублирующих слайдов
	loopedSlides: 3,

	speed: 800,

	effect: 'slide',

	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,

	observer: true,

	observeParents: true,

	observeSlideChildren: true,
});

let slider_about_5 = new Swiper('.tabs-photo__slider-body_5', {
	navigation: {
		nextEl: '.tabs-photo__arrow_next-5',
		prevEl: '.tabs-photo__arrow_prev-5'
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	slidesPerView: 1,

	watchOverflow: true,

	spaceBetween: 30,

	slidesPerGroup: 1,
	// Бесконечный слайдер
	loop: true,

	// Кол-во дублирующих слайдов
	loopedSlides: 3,

	speed: 800,

	effect: 'slide',

	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,

	observer: true,

	observeParents: true,

	observeSlideChildren: true,
});

let slider_about_6 = new Swiper('.tabs-photo__slider-body_6', {
	navigation: {
		nextEl: '.tabs-photo__arrow_next-6',
		prevEl: '.tabs-photo__arrow_prev-6'
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	slidesPerView: 1,

	watchOverflow: true,

	spaceBetween: 30,

	slidesPerGroup: 1,

	speed: 800,

	effect: 'slide',
	// Бесконечный слайдер
	loop: true,

	// Кол-во дублирующих слайдов
	loopedSlides: 3,

	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,

	observer: true,

	observeParents: true,

	observeSlideChildren: true,
});

let slider_photo_preview = new Swiper('.slider-preview__body', {
	// Стрелки
	navigation: {
		nextEl: '.slider-preview__arrow_next',
		prevEl: '.slider-preview__arrow_prev'
	},
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
	},

	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: false,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 'auto',

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	// spaceBetween: 85,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	// centeredSlides: false,

	// Стартовый слайд.
	initialSlide: 0,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: true,

	// Кол-во дублирующих слайдов
	loopedSlides: 6,


	// Скорость
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',


	// Эффекты переключения слайдов.
	// Листание
	effect: 'slide',


	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1,
			freeMode: true,
			centeredSlides: true,
			spaceBetween: 25,
		},
		400: {
			slidesPerView: 'auto',
		},
		768: {
			centeredSlides: false,
			freeMode: false,
		},
		992: {
			// slidesPerView: 3,
		}
	},

	/*
	// Брейк поинты (адаптив)
	// Соотношение сторон
	breakpoints: {
		'@0.75': {
			slidesPerView: 1,
		},
		'@1.00': {
			slidesPerView: 2,
		},
		'@1.50': {
			slidesPerView: 3,
		}
	},
	*/

	// Отключить предзагрузка картинок
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,

});


let slider_videography_1 = new Swiper('.slider-videography__body-1', {
	navigation: {
		nextEl: '.slider-videography__arrow_next-1',
		prevEl: '.slider-videography__arrow_prev-1'
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	slidesPerView: 'auto',

	watchOverflow: true,

	// spaceBetween: 0,

	slidesPerGroup: 1,

	speed: 800,

	effect: 'slide',
	loop: true,

	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,

	observer: true,

	observeParents: true,

	observeSlideChildren: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			// freeMode: true,
			slidesPerView: 1,

		},
		992: {
			slidesPerView: 'auto',

		}
	},
	// centeredSlides: true,
	// effect: 'fade',

	// // Дополнение к fade
	// fadeEffect: {
	// 	// Параллельная
	// 	// смена прозрачности
	// 	crossFade: true
	// },
});


let slider_videography_2 = new Swiper('.slider-videography__body-2', {
	navigation: {
		nextEl: '.slider-videography__arrow_next-2',
		prevEl: '.slider-videography__arrow_prev-2'
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	slidesPerView: 'auto',

	watchOverflow: true,

	// spaceBetween: 0,

	slidesPerGroup: 1,

	speed: 800,

	effect: 'slide',
	loop: true,

	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,

	observer: true,

	observeParents: true,

	observeSlideChildren: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			// freeMode: true,
			slidesPerView: 1,

		},
		992: {
			slidesPerView: 'auto',

		}
	},
	// centeredSlides: true,
	// effect: 'fade',

	// // Дополнение к fade
	// fadeEffect: {
	// 	// Параллельная
	// 	// смена прозрачности
	// 	crossFade: true
	// },
});


let slider_videography_3 = new Swiper('.slider-videography__body-3', {
	navigation: {
		nextEl: '.slider-videography__arrow_next-3',
		prevEl: '.slider-videography__arrow_prev-3'
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	slidesPerView: 'auto',

	watchOverflow: true,

	// spaceBetween: 0,

	slidesPerGroup: 1,

	speed: 800,

	effect: 'slide',
	loop: true,

	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,

	observer: true,

	observeParents: true,

	observeSlideChildren: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			// freeMode: true,
			slidesPerView: 1,

		},
		992: {
			slidesPerView: 'auto',

		}
	},
	// centeredSlides: true,
	// effect: 'fade',

	// // Дополнение к fade
	// fadeEffect: {
	// 	// Параллельная
	// 	// смена прозрачности
	// 	crossFade: true
	// },
});



let slider_videography_4 = new Swiper('.slider-videography__body-4', {
	navigation: {
		nextEl: '.slider-videography__arrow_next-4',
		prevEl: '.slider-videography__arrow_prev-4'
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	slidesPerView: 'auto',

	watchOverflow: true,

	// spaceBetween: 0,

	slidesPerGroup: 1,

	speed: 800,

	effect: 'slide',
	loop: true,

	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,

	observer: true,

	observeParents: true,

	observeSlideChildren: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			// freeMode: true,
			slidesPerView: 1,

		},
		992: {
			slidesPerView: 'auto',

		}
	},
	// centeredSlides: true,
	// effect: 'fade',

	// // Дополнение к fade
	// fadeEffect: {
	// 	// Параллельная
	// 	// смена прозрачности
	// 	crossFade: true
	// },
});



let slider_videography_5 = new Swiper('.slider-videography__body-5', {
	navigation: {
		nextEl: '.slider-videography__arrow_next-5',
		prevEl: '.slider-videography__arrow_prev-5'
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	slidesPerView: 'auto',

	watchOverflow: true,

	// spaceBetween: 0,

	slidesPerGroup: 1,

	speed: 800,

	effect: 'slide',
	loop: true,

	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,

	observer: true,

	observeParents: true,

	observeSlideChildren: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			// freeMode: true,
			slidesPerView: 1,

		},
		992: {
			slidesPerView: 'auto',

		}
	},
	// centeredSlides: true,
	// effect: 'fade',

	// // Дополнение к fade
	// fadeEffect: {
	// 	// Параллельная
	// 	// смена прозрачности
	// 	crossFade: true
	// },
});



let slider_videography_6 = new Swiper('.slider-videography__body-6', {
	navigation: {
		nextEl: '.slider-videography__arrow_next-6',
		prevEl: '.slider-videography__arrow_prev-6'
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	slidesPerView: 'auto',

	watchOverflow: true,

	// spaceBetween: 0,

	slidesPerGroup: 1,

	speed: 800,

	effect: 'slide',
	loop: true,

	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,

	observer: true,

	observeParents: true,


	observeSlideChildren: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			// freeMode: true,
			slidesPerView: 1,

		},
		992: {
			slidesPerView: 'auto',

		}
	},

});

let slider_video_preview = new Swiper('.slider-preview-videography__body', {
	// Стрелки
	navigation: {
		nextEl: '.slider-preview-videography__arrow_next',
		prevEl: '.slider-preview-videography__arrow_prev'
	},
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
	},

	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: false,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 3,

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 50,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: false,

	// Стартовый слайд.
	initialSlide: 0,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: true,

	// Кол-во дублирующих слайдов
	loopedSlides: 3,


	// Скорость
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',


	// Эффекты переключения слайдов.
	// Листание
	effect: 'slide',


	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1,
			freeMode: true,
		},
		768: {
			freeMode: false,
			slidesPerView: 2,

		},
		992: {
			slidesPerView: 3,
		}
	},

	/*
	// Брейк поинты (адаптив)
	// Соотношение сторон
	breakpoints: {
		'@0.75': {
			slidesPerView: 1,
		},
		'@1.00': {
			slidesPerView: 2,
		},
		'@1.50': {
			slidesPerView: 3,
		}
	},
	*/

	// Отключить предзагрузка картинок
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,

});
function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('body').classList.add('_touch');
} else {
	document.querySelector('body').classList.add('_pc');
}
/*
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});
*/
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('_loaded');
}

let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
	const hsh = location.hash.replace('#', '');
	if (document.querySelector('.popup_' + hsh)) {
		popup_open(hsh);
	} else if (document.querySelector('div.' + hsh)) {
		_goto(document.querySelector('.' + hsh), 500, '');
	}
}
//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================

// LettersAnimation
let title = document.querySelectorAll('._letter-animation');
if (title) {
	for (let index = 0; index < title.length; index++) {
		let el = title[index];
		let txt = el.innerHTML;
		let txt_words = txt.replace('  ', ' ').split(' ');
		let new_title = '';
		for (let index = 0; index < txt_words.length; index++) {
			let txt_word = txt_words[index];
			let len = txt_word.length;
			new_title = new_title + '<p>';
			for (let index = 0; index < len; index++) {
				let it = txt_word.substr(index, 1);
				if (it == ' ') {
					it = '&nbsp;';
				}
				new_title = new_title + '<span>' + it + '</span>';
			}
			el.innerHTML = new_title;
			new_title = new_title + '&nbsp;</p>';
		}
	}
}
//=================
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}
//=================
//Spollers
let spollers = document.querySelectorAll("._spoller");
if (spollers.length > 0) {
	for (let index = 0; index < spollers.length; index++) {
		const spoller = spollers[index];
		spoller.addEventListener("click", function (e) {
			if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
				return false;
			}
			if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
				return false;
			}
			if (spoller.closest('._spollers').classList.contains('_one')) {
				let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
				for (let i = 0; i < curent_spollers.length; i++) {
					let el = curent_spollers[i];
					if (el != spoller) {
						el.classList.remove('_active');
						_slideUp(el.nextElementSibling);
					}
				}
			}
			spoller.classList.toggle('_active');
			_slideToggle(spoller.nextElementSibling);
		});
	}
}
//=================
//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
	gallery_init();
}
function gallery_init() {
	for (let index = 0; index < gallery.length; index++) {
		const el = gallery[index];
		lightGallery(el, {
			counter: false,
			selector: 'a',
			download: false
		});
	}
}
//=================
//SearchInList
function search_in_list(input) {
	let ul = input.parentNode.querySelector('ul')
	let li = ul.querySelectorAll('li');
	let filter = input.value.toUpperCase();

	for (i = 0; i < li.length; i++) {
		let el = li[i];
		let item = el;
		txtValue = item.textContent || item.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			el.style.display = "";
		} else {
			el.style.display = "none";
		}
	}
}
//=================
//DigiFormat
function digi(str) {
	var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
	return r;
}
//=================
//DiGiAnimate
function digi_animate(digi_animate) {
	if (digi_animate.length > 0) {
		for (let index = 0; index < digi_animate.length; index++) {
			const el = digi_animate[index];
			const el_to = parseInt(el.innerHTML.replace(' ', ''));
			if (!el.classList.contains('_done')) {
				digi_animate_value(el, 0, el_to, 1500);
			}
		}
	}
}
function digi_animate_value(el, start, end, duration) {
	var obj = el;
	var range = end - start;
	// no timer shorter than 50ms (not really visible any way)
	var minTimer = 50;
	// calc step time to show all interediate values
	var stepTime = Math.abs(Math.floor(duration / range));

	// never go below minTimer
	stepTime = Math.max(stepTime, minTimer);

	// get current time and calculate desired end time
	var startTime = new Date().getTime();
	var endTime = startTime + duration;
	var timer;

	function run() {
		var now = new Date().getTime();
		var remaining = Math.max((endTime - now) / duration, 0);
		var value = Math.round(end - (remaining * range));
		obj.innerHTML = digi(value);
		if (value == end) {
			clearInterval(timer);
		}
	}

	timer = setInterval(run, stepTime);
	run();

	el.classList.add('_done');
}
//=================
//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
	const el = popup_link[index];
	el.addEventListener('click', function (e) {
		if (unlock) {
			let item = el.getAttribute('href').replace('#', '');
			let video = el.getAttribute('data-video');
			popup_open(item, video);
		}
		e.preventDefault();
	})
}
for (let index = 0; index < popups.length; index++) {
	const popup = popups[index];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__body')) {
			popup_close(e.target.closest('.popup'));
		}
	});
}
function popup_open(item, video = '') {
	let activePopup = document.querySelectorAll('.popup._active');
	if (activePopup.length > 0) {
		popup_close('', false);
	}
	let curent_popup = document.querySelector('.popup_' + item);
	if (curent_popup && unlock) {
		if (video != '' && video != null) {
			let popup_video = document.querySelector('.popup_video');
			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector('.menu__body._active')) {
			body_lock_add(500);
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_close(item, bodyUnlock = true) {
	if (unlock) {
		if (!item) {
			for (let index = 0; index < popups.length; index++) {
				const popup = popups[index];
				let video = popup.querySelector('.popup__video');
				if (video) {
					video.innerHTML = '';
				}
				popup.classList.remove('_active');
			}
		} else {
			let video = item.querySelector('.popup__video');
			if (video) {
				video.innerHTML = '';
			}
			item.classList.remove('_active');
		}
		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState('', '', window.location.href.split('#')[0]);
	}
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
	for (let index = 0; index < popup_close_icon.length; index++) {
		const el = popup_close_icon[index];
		el.addEventListener('click', function () {
			popup_close(el.closest('.popup'));
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.which == 27) {
		popup_close();
	}
});
//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================
//Wrap
function _wrap(el, wrapper) {
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
//========================================
//IsHidden
function _is_hidden(el) {
	return (el.offsetParent === null)
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
	let start = performance.now();
	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		// вычисление текущего состояния анимации
		let progress = timing(timeFraction);

		draw(progress); // отрисовать её

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}

	});
}
function makeEaseOut(timing) {
	return function (timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}
function makeEaseInOut(timing) {
	return function (timeFraction) {
		if (timeFraction < .5)
			return timing(2 * timeFraction) / 2;
		else
			return (2 - timing(2 * (1 - timeFraction))) / 2;
	}
}
function quad(timeFraction) {
	return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
	return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
	duration: 1000,
	timing: makeEaseOut(quad),
	draw(progress) {
		window.scroll(0, start_position + 400 * progress);
	}
});*/

//Полифилы
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
//let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
	for (let index = 0; index < forms.length; index++) {
		const el = forms[index];
		el.addEventListener('submit', form_submit);
	}
}
async function form_submit(e) {
	let btn = e.target;
	let form = btn.closest('form');
	let error = form_validate(form);
	if (error == 0) {
		let formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
		let formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
		const message = form.getAttribute('data-message');
		const ajax = form.getAttribute('data-ajax');

		//SendForm
		if (ajax) {
			e.preventDefault();
			let formData = new FormData(form);
			form.classList.add('_sending');
			let response = await fetch(formAction, {
				method: formMethod,
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				form.classList.remove('_sending');
				if (message) {
					popup_open('_' + message + '-message');
				}
				form_clean(form);
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		}
	} else {
		let form_error = form.querySelectorAll('._error');
		if (form_error && form.classList.contains('_goto-error')) {
			_goto(form_error[0], 1000, 50);
		}
		e.preventDefault();
	}
}
function form_validate(form) {
	let error = 0;
	let form_req = form.querySelectorAll('._req');
	if (form_req.length > 0) {
		for (let index = 0; index < form_req.length; index++) {
			const el = form_req[index];
			if (!_is_hidden(el)) {
				error += form_validate_input(el);
			}
		}
	}
	return error;
}
function form_validate_input(input) {
	let error = 0;
	let input_g_value = input.getAttribute('data-value');

	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
		if (input.value != input_g_value) {
			let em = input.value.replace(" ", "");
			input.value = em;
		}
		if (email_test(input) || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
		form_add_error(input);
		error++;
	} else {
		if (input.value == '' || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	}
	return error;
}
function form_add_error(input) {
	input.classList.add('_error');
	input.parentElement.classList.add('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
	let input_error_text = input.getAttribute('data-error');
	if (input_error_text && input_error_text != '') {
		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
	}
}
function form_remove_error(input) {
	input.classList.remove('_error');
	input.parentElement.classList.remove('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
}
function form_clean(form) {
	let inputs = form.querySelectorAll('input,textarea');
	for (let index = 0; index < inputs.length; index++) {
		const el = inputs[index];
		el.parentElement.classList.remove('_focus');
		el.classList.remove('_focus');
		el.value = el.getAttribute('data-value');
	}
	let checkboxes = form.querySelectorAll('.checkbox__input');
	if (checkboxes.length > 0) {
		for (let index = 0; index < checkboxes.length; index++) {
			const checkbox = checkboxes[index];
			checkbox.checked = false;
		}
	}
	let selects = form.querySelectorAll('select');
	if (selects.length > 0) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_default_value = select.getAttribute('data-default');
			select.value = select_default_value;
			select_item(select);
		}
	}
}

let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
	const element = viewPass[index];
	element.addEventListener("click", function (e) {
		if (element.classList.contains('_active')) {
			element.parentElement.querySelector('input').setAttribute("type", "password");
		} else {
			element.parentElement.querySelector('input').setAttribute("type", "text");
		}
		element.classList.toggle('_active');
	});
}


//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.code === 'Escape') {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];
			const input_g_value = input.getAttribute('data-value');
			input_placeholder_add(input);
			if (input.value != '' && input.value != input_g_value) {
				input_focus_add(input);
			}
			input.addEventListener('focus', function (e) {
				if (input.value == input_g_value) {
					input_focus_add(input);
					input.value = '';
				}
				if (input.getAttribute('data-type') === "pass") {
					input.setAttribute('type', 'password');
				}
				if (input.classList.contains('_date')) {
					/*
					input.classList.add('_mask');
					Inputmask("99.99.9999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
					*/
				}
				if (input.classList.contains('_phone')) {
					//'+7(999) 999 9999'
					//'+38(999) 999 9999'
					//'+375(99)999-99-99'
					input.classList.add('_mask');
					Inputmask("+375 (99) 9999999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				if (input.classList.contains('_digital')) {
					input.classList.add('_mask');
					Inputmask("9{1,}", {
						"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				form_remove_error(input);
			});
			input.addEventListener('blur', function (e) {
				if (input.value == '') {
					input.value = input_g_value;
					input_focus_remove(input);
					if (input.classList.contains('_mask')) {
						input_clear_mask(input, input_g_value);
					}
					if (input.getAttribute('data-type') === "pass") {
						input.setAttribute('type', 'text');
					}
				}
			});
			if (input.classList.contains('_date')) {
				datepicker(input, {
					customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
			}
		}
	}
}
function input_placeholder_add(input) {
	const input_g_value = input.getAttribute('data-value');
	if (input.value == '' && input_g_value != '') {
		input.value = input_g_value;
	}
}
function input_focus_add(input) {
	input.classList.add('_focus');
	input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
	input.classList.remove('_focus');
	input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}

//QUANTITY
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}

//RANGE
const priceSlider = document.querySelector('.price__range');
if (priceSlider) {
	noUiSlider.create(priceSlider, {
		start: [0, 200],
		connect: true,
		tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
		range: {
			'min': [0],
			'max': [200]
		}
	});

	const priceStart = document.getElementById('price-start');
	const priceEnd = document.getElementById('price-end');
	priceStart.addEventListener('change', setPriceValues);
	priceEnd.addEventListener('change', setPriceValues);

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if (priceStart.value != '') {
			priceStartValue = priceStart.value;
		}
		if (priceEnd.value != '') {
			priceEndValue = priceEnd.value;
		}
		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
	}
}
// const getMousePos = (evt) => {
//    const pos = evt.currentTarget.getBoundingClientRect();
//    return {
//       x: evt.clientX - pos.left,
//       y: evt.clientY - pos.top
//    };
// };

// document.querySelector("body").addEventListener('mousemove', (evt) => {
//    const mPos = getMousePos(evt);
//    // evt.currentTarget.textContent = `Mouse position x:${mPos.x}  y:${mPos.y}`;
//    console.log(mPos.x);
//    console.log(mPos.y);
// });


// let slidesVideo = document.querySelectorAll('.slider-video__slide');

// document.querySelectorAll('._arrow-next').forEach(el => {

//    el.onclick = function () {
//       if (slidesVideo[slidesVideo.length - 2].classList.contains('swiper-slide-active')) {
//          el.classList.add('swiper-button-disabled');
//       }
//    }

// });

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
const btnLinks = document.querySelectorAll('.btn[data-goto]');
const footerLinks = document.querySelectorAll('.menu-footer__link[data-goto]');

if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });
}
if (btnLinks.length > 0) {
   btnLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });
}
if (footerLinks.length > 0) {
   footerLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });
}


function onMenuLinkClick(e) {
   const menuLink = e.target;
   if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      // if (iconMenu.classList.contains('_active')) {
      //    document.body.classList.remove('_lock');
      //    iconMenu.classList.remove('_active');
      //    menuBody.classList.remove('_active');
      // }

      window.scrollTo({
         top: gotoBlockValue,
         behavior: "smooth"
      });
      e.preventDefault();
   }
}

function initMap() {
   var coordinates = { lat: 53.94023391265376, lng: 27.689827841025068 },
      zoom = 15,
      image = '../../img/map/marker.png',
      map = new google.maps.Map(document.getElementById('map'), {
         center: coordinates,
         zoom: zoom,
         disableDefaultUI: true
      }),
      marker = new google.maps.Marker({
         position: coordinates,
         map: map,
         animation: google.maps.Animation.BOUNCE,
         // icon: image
      });

   // $.getJSON("../../json/map-style.json", function (data) {
   //    map.setOptions({ styles: data });
   // });

   let stylesMap = [
      {
         "elementType": "geometry",
         "stylers": [
            {
               "color": "#212121"
            }
         ]
      },
      {
         "elementType": "labels.icon",
         "stylers": [
            {
               "visibility": "off"
            }
         ]
      },
      {
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "color": "#757575"
            }
         ]
      },
      {
         "elementType": "labels.text.stroke",
         "stylers": [
            {
               "color": "#212121"
            }
         ]
      },
      {
         "featureType": "administrative",
         "elementType": "geometry",
         "stylers": [
            {
               "color": "#757575"
            }
         ]
      },
      {
         "featureType": "administrative.country",
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "color": "#9e9e9e"
            }
         ]
      },
      {
         "featureType": "administrative.land_parcel",
         "stylers": [
            {
               "visibility": "off"
            }
         ]
      },
      {
         "featureType": "administrative.locality",
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "color": "#bdbdbd"
            }
         ]
      },
      {
         "featureType": "poi",
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "color": "#757575"
            }
         ]
      },
      {
         "featureType": "poi.park",
         "elementType": "geometry",
         "stylers": [
            {
               "color": "#181818"
            }
         ]
      },
      {
         "featureType": "poi.park",
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "color": "#616161"
            }
         ]
      },
      {
         "featureType": "poi.park",
         "elementType": "labels.text.stroke",
         "stylers": [
            {
               "color": "#1b1b1b"
            }
         ]
      },
      {
         "featureType": "road",
         "elementType": "geometry.fill",
         "stylers": [
            {
               "color": "#2c2c2c"
            }
         ]
      },
      {
         "featureType": "road",
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "color": "#8a8a8a"
            }
         ]
      },
      {
         "featureType": "road.arterial",
         "elementType": "geometry",
         "stylers": [
            {
               "color": "#373737"
            }
         ]
      },
      {
         "featureType": "road.highway",
         "elementType": "geometry",
         "stylers": [
            {
               "color": "#3c3c3c"
            }
         ]
      },
      {
         "featureType": "road.highway.controlled_access",
         "elementType": "geometry",
         "stylers": [
            {
               "color": "#4e4e4e"
            }
         ]
      },
      {
         "featureType": "road.local",
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "color": "#616161"
            }
         ]
      },
      {
         "featureType": "transit",
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "color": "#757575"
            }
         ]
      },
      {
         "featureType": "water",
         "elementType": "geometry",
         "stylers": [
            {
               "color": "#000000"
            }
         ]
      },
      {
         "featureType": "water",
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "color": "#3d3d3d"
            }
         ]
      }
   ]
   map.setOptions({ styles: stylesMap });



}

//анимация 

const animItems = document.querySelectorAll('._anim-items'); //_anim-items добавить туда, где хотим анимировать


//проверяем,существуют ли такие классы
if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll); //событие при скролле
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight; //получаем высоту нашего объекта
         const animItemOffset = offset(animItem).top; //получаем позицию объекта относительно верха (на сколько объект ниже, чем верх)
         const animStart = 2; //коэффициент, регулирующий момент старта анимации

         let animItemPoint = window.innerHeight - animItemHeight / animStart; //высота окна браузера мину высоту объекта поделенный на коэффициент
         if (animItemHeight > window.innerHeight) { //если высота объекта выше высоты окна браузера
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         //если прокрутили больше чем позиция объекта минус точка старта, но при этом прокрутили меньше чем позиция объекта плюс его высота
         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_active');
            }
         }
      }
   }
   //функция для получения знаяения позиции объекта относительно верха и лева
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }

   setTimeout(() => {
      animOnScroll();
   }, 300);
}

const videos = document.querySelectorAll('video');
const arrows = document.querySelectorAll('.slider-videography__arrow');
arrows.forEach(arrow => {
   arrow.addEventListener('click', e => {
      videos.forEach(video => {
         video.pause();
      });
   });
});

/**
 * Календарь с русскими буквами
 *
 * @author Aleksey Zhikharev
 * @copyright Aleksey Zhikharev 2017
 * @tutorial https://github.com/amarilis/calendar
 */
(function (window, document, undefined) {
   'use strict';
   var calendar = {};

   // Названия месяцев
   calendar.monthName = [
      'Yanuary', 'February', 'March', 'April',
      'May', 'Juny', 'July', 'August',
      'Sptember', 'Oktober', 'November', 'December'
   ];

   // Названия дней недели
   calendar.dayName = [
      'Mn', 'Tu', 'Wd', 'Th', 'Fr', 'St', 'Sn'
   ];

   // Выбранная дата
   calendar.selectedDate = {
      'Day': new Date().getDate(),
      'Month': parseInt(new Date().getMonth()) + 1,
      'Year': new Date().getFullYear()
   };

   // Выбор даты
   calendar.selectDate = function (day, month, year, classInput) {
      if (day.slice().length == 1) {
         day = '0' + day;
      };
      if (month.slice().length == 1) {
         month = '0' + month;
      };
      calendar.selectedDate = {
         'Day': day,
         'Month': month,
         'Year': year
      };
      if (document.querySelector('.calendarOut') == null) {
         addPopup(document.querySelector('input[calendar=' + classInput + ']'));
      };
      calendar.drawCalendar(month, year, classInput);
   };

   // Отрисовка календарика на выбранный месяц и год
   calendar.drawCalendar = function (month, year, classInput) {
      var calendarHTML = '';
      calendarHTML += '<table class="calendarTable" cellspacing="0" cellpadding="0">';

      // Месяц и навигация
      calendarHTML += '<tr>';
      calendarHTML += '<td class="navigation navigation_to_left _arrow " month="' + (month > 1 ? (+month - 1) : 12) + '" year="' + (month > 1 ? year : (+year - 1)) + '" classinput="' + classInput + '"&#9668;<\/td>';
      calendarHTML += '<td colspan="5" class="navigation navigation_to_this_day" month="' + calendar.selectedDate.Month + '" year="' + calendar.selectedDate.Year + '" classinput="' + classInput + '">' + calendar.monthName[(month - 1)] + '&nbsp;&nbsp;' + year + '<\/td>';
      calendarHTML += '<td class="navigation navigation_to_right _arrow " month="' + (month < 12 ? (+month + 1) : 1) + '" year="' + (month < 12 ? year : (+year + 1)) + '" classinput="' + classInput + '"&#9658;<\/td>';
      calendarHTML += '<\/tr>';

      // Шапка таблицы с днями недели
      calendarHTML += '<tr>';
      calendarHTML += '<th>' + calendar.dayName[0] + '<\/th>';
      calendarHTML += '<th>' + calendar.dayName[1] + '<\/th>';
      calendarHTML += '<th>' + calendar.dayName[2] + '<\/th>';
      calendarHTML += '<th>' + calendar.dayName[3] + '<\/th>';
      calendarHTML += '<th>' + calendar.dayName[4] + '<\/th>';
      calendarHTML += '<th class="holiday">' + calendar.dayName[5] + '<\/th>';
      calendarHTML += '<th class="holiday">' + calendar.dayName[6] + '<\/th>';
      calendarHTML += '<\/tr>';

      // Количество дней в месяце
      var total_days = 32 - new Date(year, (month - 1), 32).getDate();
      // Начальный день месяца
      var start_day = new Date(year, (month - 1), 1).getDay();
      if (start_day == 0) {
         start_day = 7;
      }
      start_day--;
      // Количество ячеек в таблице
      var final_index = Math.ceil((total_days + start_day) / 7) * 7;

      var day = 1;
      var index = 0;
      do {
         // Начало строки таблицы
         if (index % 7 == 0) {
            calendarHTML += '<tr>';
         }
         // Пустые ячейки до начала месяца или после окончания
         if ((index < start_day) || (index >= (total_days + start_day))) {
            calendarHTML += '<td class="grayed">&nbsp;<\/td>';
         }
         else {
            var class_name = '';
            // Выбранный день
            if (calendar.selectedDate.Day == day &&
               calendar.selectedDate.Month == month &&
               calendar.selectedDate.Year == year) {
               class_name = 'selected';
            }
            // Праздничный день
            else if (index % 7 == 6 || index % 7 == 5) {
               class_name = 'holiday';
            }
            // Ячейка с датой
            calendarHTML += '<td class="td_day_active ' + class_name + '" day="' + day + '" month="' + month + '" year="' + year + '" classinput="' + classInput + '">' + day + '</td>';
            day++;
         }
         // Конец строки таблицы
         if (index % 7 == 6) {
            calendarHTML += '<\/tr>';
         }
         index++;
      }
      while (index < final_index);

      calendarHTML += '<\/table>';

      document.querySelector('.calendarOut').innerHTML = calendarHTML;



      // Клик по навигации и дням


      document.querySelector('.navigation_to_left').addEventListener('click', function (e) {
         calendar.drawCalendar(this.getAttribute('month'), this.getAttribute('year'), this.getAttribute('classinput'));
         e.stopPropagation();
      }, false);
      document.querySelector('.navigation_to_this_day').addEventListener('click', function (e) {
         calendar.drawCalendar(this.getAttribute('month'), this.getAttribute('year'), this.getAttribute('classinput'));
         e.stopPropagation();
      }, false);
      document.querySelector('.navigation_to_right').addEventListener('click', function (e) {
         calendar.drawCalendar(this.getAttribute('month'), this.getAttribute('year'), this.getAttribute('classinput'));
         e.stopPropagation();
      }, false);


      // document.querySelector('.calendarOut').addEventListener('touchstart', handleTouchStart, false);
      // document.querySelector('.calendarOut').addEventListener('touchmove', handleTouchMove, false);
      // let xDown = null;
      // let yDown = null;

      // function getTouches(evt) {
      //    return evt.touches || // чистый API JS
      //       evt.originalEvent.touches; // jQuery
      // }

      // function handleTouchStart(evt) {
      //    const firstTouch = getTouches(evt)[0];
      //    xDown = firstTouch.clientX;
      //    yDown = firstTouch.clientY;
      //    console.log(xDown);
      // };

      // function handleTouchMove(evt) {
      //    if (!xDown || !yDown) {
      //       return;
      //    }

      //    let xUp = evt.touches[0].clientX;
      //    let yUp = evt.touches[0].clientY;
      //    console.log(xUp);

      //    let xDiff = xDown - xUp;
      //    let yDiff = yDown - yUp;
      //    console.log(xDiff);

      //    if (xDiff > 0) {
      //       calendar.drawCalendar(document.querySelector('.navigation_to_right').getAttribute('month'), document.querySelector('.navigation_to_right').getAttribute('year'), document.querySelector('.navigation_to_right').getAttribute('classinput'));
      //       evt.stopPropagation();
      //    } else {
      //       calendar.drawCalendar(document.querySelector('.navigation_to_left').getAttribute('month'), document.querySelector('.navigation_to_left').getAttribute('year'), document.querySelector('.navigation_to_left').getAttribute('classinput'));
      //       evt.stopPropagation();
      //    }

      //    // if (Math.abs(xDiff) > Math.abs(yDiff)) {/* отлавливаем разницу в движении */
      //    //    if (xDiff > 0) {
      //    //       /* swipe влево */
      //    //      


      //    //    } else {
      //    //       /* swipe вправо */
      //    //     
      //    //    }
      //    // }
      //    // else {
      //    //    if (yDiff < 0) {
      //    //       /* swipe вверх */
      //    //    } else {
      //    //       /* swipe вниз */
      //    //    }
      //    // }
      //    /* свайп был, обнуляем координаты */
      //    xDown = null;
      //    yDown = null;
      // };


      var all_td_day_active = document.querySelectorAll('.td_day_active'),
         ind_td_day_active, btn_td_day_active;
      for (ind_td_day_active = 0; ind_td_day_active < all_td_day_active.length; ind_td_day_active++) {
         btn_td_day_active = all_td_day_active[ind_td_day_active];
         btn_td_day_active.addEventListener('click', function (e) {
            calendar.selectDate(e.target.getAttribute('day'), e.target.getAttribute('month'), e.target.getAttribute('year'), e.target.getAttribute('classinput'));

            document.querySelector('input[calendar=' + classInput + ']').value = calendar.selectedDate.Day + '.' + calendar.selectedDate.Month + '.' + calendar.selectedDate.Year;
            // document.querySelector('.calendarOut').parentNode.removeChild(document.querySelector('.calendarOut'));
            e.stopPropagation();
         }, false);
      }


   };


   // /**
   //  * Получение координат прокрутки
   //  *
   //  * @returns {*} координаты
   //  */
   // function getPageScroll() {
   //    if (window.pageXOffset != undefined) {
   //       return {
   //          left: pageXOffset,
   //          top: pageYOffset
   //       }
   //    }
   //    var html = document.documentElement;
   //    var body = document.body;
   //    var top = html.scrollTop || body && body.scrollTop || 0;
   //    top -= html.clientTop;
   //    var left = html.scrollLeft || body && body.scrollLeft || 0;
   //    left -= html.clientLeft;
   //    return { top: top, left: left };
   // }

   // /**
   //  * Получение координат
   //  *
   //  * @param elem
   //  * @returns {{top: number, left: number}} координаты
   //  */
   // function getCoords(elem) {
   //    var box = elem.getBoundingClientRect();
   //    var body = document.body;
   //    var docEl = document.documentElement;
   //    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
   //    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
   //    var clientTop = docEl.clientTop || body.clientTop || 0;
   //    var clientLeft = docEl.clientLeft || body.clientLeft || 0;
   //    var top = box.top + scrollTop - clientTop;
   //    var left = box.left + scrollLeft - clientLeft;
   //    return { top: Math.round(top), left: Math.round(left) };
   // }


   /**
    * Создаем и показываем блок с календарем
    * 
    * @param elem {object HTMLInputElement} input для которого показывается календарь
    */
   function addPopup(elem) {
      // если уже открыт календарь - удаляем существующий
      if (document.querySelector('.calendarOut')) {
         document.querySelector('.calendarOut').parentNode.removeChild(document.querySelector('.calendarOut'));
      };
      var calendarOut = document.createElement('div');
      calendarOut.className = 'calendarOut';
      document.querySelector('.form-shooting__datepicker').appendChild(calendarOut);

      //----------------------------------------------------------------------------------------------------
      //        var coords = elem.getBoundingClientRect();
      // var coords = getCoords(elem);
      // var scroll = getPageScroll();

      // var left, top;

      /*left = coords.left + (elem.offsetWidth - calendarOut.offsetWidth) / 2;
      if (left < 0) left = 0;
      top = coords.top - calendarOut.offsetHeight - 5 + window.pageYOffset;
   
      if (top < 0) {
          top = coords.top + elem.offsetHeight + 5;
      }*/
      var nowDate = new Date();

      calendar.drawCalendar(parseInt(nowDate.getMonth()) + 1, nowDate.getFullYear(), elem.getAttribute('calendar'));


      // если есть дата, то показываем календарь с этой датой выбранной
      // if (elem.value != '') {
      //    calendar.selectDate(elem.value.split('.')[0], elem.value.split('.')[1], elem.value.split('.')[2], elem.getAttribute('calendar'));
      // }

      // left = coords.left + (elem.offsetWidth - calendarOut.offsetWidth) / 2;
      // if (left < scroll.left) left = scroll.left;
      // top = coords.top - calendarOut.offsetHeight - 5;
      // if (top < scroll.top) {
      //    top = coords.top + elem.offsetHeight + 5;
      // }

      // calendarOut.style.left = left + 'px';
      // calendarOut.style.top = top + 'px';

      //----------------------------------------------------------------------------------------------------

      calendarOut.style.opacity = 1;
   };


   /**
    * Добавляем клик по инпуту с классом calendar (отрисовка при загрузке страницы)
    */
   var all_calendar = document.querySelectorAll('.calendar'),
      ind_calendar, input_calendar;
   for (ind_calendar = 0; ind_calendar < all_calendar.length; ind_calendar++) {
      input_calendar = all_calendar[ind_calendar];
      input_calendar.setAttribute('calendar', 'calendar_' + ind_calendar);
      // input_calendar.addEventListener('click', function (e) {
      if (document.querySelector('._loaded')) {
         addPopup(input_calendar);


      }
      // addPopup(input_calendar);
      // e.stopPropagation();
      // }, false);
   }


   /**
    * Клик по документу для закрытия календаря
    */

   // document.addEventListener('click', function (e) {
   //    if (document.querySelector('.calendarOut') != null) {
   //       document.querySelector('.calendarOut').parentNode.removeChild(document.querySelector('.calendarOut'));
   //       e.stopPropagation();
   //    }

   // }, false);


   window.calendar = calendar;
})(window, document);

