var modalWindowBtn = document.querySelector('.user-block');
var modalWindow = document.querySelector('.modal-window');
var modalWindowClose = document.querySelector('.modal-window .close');
var emailField = document.getElementById('user-email-id');
var mainHeader = document.querySelector('.main-header');
var slider = document.querySelector('.slider');
var mainContent = document.querySelector('.main-content');
var mainFooter = document.querySelector('.main-footer');
var arrow = document.querySelector('.arrow');
var promoBlock = document.querySelector('.promo-block');

modalWindowBtn.addEventListener('click', function(event) {
	event.preventDefault();
	modalWindow.classList.add('modal-window-show');
	emailField.focus();
	mainHeader.style.backgroundColor = '#b5b4b4';
	mainContent.style.backgroundColor = '#b5b4b4';
	mainFooter.style.backgroundColor = '#b5b4b4';
	slider.classList.add('slider-grayscale');
});
modalWindowClose.addEventListener('click', function() {
	modalWindow.classList.remove('modal-window-show');
	mainHeader.style.backgroundColor = '#353436';
	mainContent.style.backgroundColor = '#353436';
	mainFooter.style.backgroundColor = '#353436';
	slider.classList.remove('slider-grayscale');
});

window.addEventListener('keydown', function(event) {
	if (event.keyCode == 27) {
		if (modalWindow.classList.contains('modal-window-show')) {
			modalWindow.classList.remove('modal-window-show');
			mainHeader.style.backgroundColor = '#353436';
			mainContent.style.backgroundColor = '#353436';
			mainFooter.style.backgroundColor = '#353436';
			slider.style.filter = 'grayscale(0)';
		}
	}
});

arrow.addEventListener('click', function(event) {
	event.preventDefault();
	if (!arrow.classList.contains('arrow-click')) {
		arrow.classList.add('arrow-click');
		promoBlock.classList.add('promo-block-visible');
	} else {
		arrow.classList.remove('arrow-click');
		promoBlock.classList.remove('promo-block-visible');
	}
});