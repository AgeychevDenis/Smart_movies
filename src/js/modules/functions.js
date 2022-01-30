export function isWebp() {
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

/* Проверка мобильного браузера */
export let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
export function addTouchClass() {
	if (isMobile.any()) document.documentElement.classList.add('touch');
	else {
		document.documentElement.classList.add('mouse');
	}
}

// Модуль работы с меню (бургер)
export function menuInit() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");

	iconMenu.addEventListener('click', function () {
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	})
}

// Модуль работы sub-menu
export function subMenu() {
	let arrows = document.querySelectorAll('.menu__link-sub');

	arrows.forEach((arrow) => {
		let subMenu = arrow.nextElementSibling;
		let thisArrow = arrow

		arrow.addEventListener('click', function () {
			if (document.querySelector('html').classList.contains('touch')) {
				thisArrow.classList.toggle('click');
				subMenu.classList.toggle('open');
			}

		})
	}
	)
}

// Модуль с попапом 
export function popup() {
	let search = document.querySelector('[data-search]');
	let popup = document.querySelector('.popup');
	let close = document.querySelector('.close');

	search.addEventListener('click', () => {
		popup.classList.add('active');
	});
	close.addEventListener('click', () => {
		popup.classList.remove('active');
	});
	window.addEventListener('click', (e) => {
		if (e.target == popup) {
			popup.classList.remove('active');
		};
	});
}

// Модуль с слайдером
export function slider() {
	window.addEventListener('load', () => {

		let s1 = new Slider('.gallery-1');
		// s1.start(10000);

	});

	class Slider {
		constructor(selector) {
			this.rootElem = document.querySelector(selector);
			this.images = this.rootElem.querySelectorAll('.photos a');
			this.interval = null;
			this.i = 0;
			this.initControls();
		}

		initControls() {
			this.btnPrev = this.rootElem.querySelector('.slider__buttons .slider__buttons-prev');
			this.btnNext = this.rootElem.querySelector('.slider__buttons .slider__buttons-next');

			this.btnPrev.addEventListener('click', () => this.prev());
			this.btnNext.addEventListener('click', () => this.next());
		}

		prev() {
			this.images[this.i].classList.remove('showed');
			this.i--;

			if (this.i < 0) {
				this.i = this.images.length - 1;
			}

			this.images[this.i].classList.add('showed');
		}

		next() {
			this.images[this.i].classList.remove('showed');
			this.i++;

			if (this.i >= this.images.length) {
				this.i = 0;
			}

			this.images[this.i].classList.add('showed');
		}

		start(rate) {
			this.stop();

			this.interval = setInterval(() => {
				this.next();
			}, rate);
		}

		stop() {
			clearInterval(this.interval);
		}
	}
}

// Модуль с промослайдером
export function promoSlider() {
	let offset = 0;
	const sliderLine = document.querySelector('.promo__wrapper');

	document.querySelector('.promo__buttons .promo__buttons-next').addEventListener('click', () => {
		let widthScreen = window.screen.width

		if (widthScreen >= 1110 && widthScreen <= 1320) {
			offset += 1080
		} else if (widthScreen >= 888 && widthScreen <= 1109) {
			offset += 864
		} else if (widthScreen >= 675 && widthScreen <= 887) {
			offset += 648
		} else if (widthScreen >= 460 && widthScreen <= 674) {
			offset += 432
		} else if (widthScreen >= 0 && widthScreen <= 459) {
			offset += 216
		} else {
			offset += 1296
		}

		if (offset > 2160) {
			offset = 0;
		}

		sliderLine.style.left = -offset + 'px'
	})

	document.querySelector('.promo__buttons .promo__buttons-prev').addEventListener('click', () => {
		let widthScreen = window.screen.width

		if (widthScreen >= 1110 && widthScreen <= 1320) {
			offset -= 216
		} else if (widthScreen >= 888 && widthScreen <= 1109) {
			offset -= 864
		} else if (widthScreen >= 675 && widthScreen <= 887) {
			offset -= 648
		} else if (widthScreen >= 460 && widthScreen <= 674) {
			offset -= 432
		} else if (widthScreen >= 0 && widthScreen <= 459) {
			offset -= 216
		} else {
			offset -= 1296
		}

		if (offset < 0) {
			offset = 1728;
		}
		sliderLine.style.left = -offset + 'px'
	})

}