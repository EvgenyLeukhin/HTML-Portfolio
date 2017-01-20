var menuBtn     = document.querySelector('.menu-btn'),
		modalWindow = document.querySelector('.modal-window'),
		closeBtn    = document.querySelector('.close-btn');

menuBtn.addEventListener('click', function(event) {
	event.preventDefault();																				 // сбрасывает дефолтные настройки
	modalWindow.classList.add('modal-window-show');
	console.log('modal-window-show');
}); 

closeBtn.addEventListener('click', function(event) {
	event.preventDefault();																				 // сбрасывает дефолтные настройки
	modalWindow.classList.remove('modal-window-show');
	console.log('modal-window-close');
}); 

window.addEventListener('keydown', function(event) {
	if (event.keyCode == 27) {
		if (modalWindow.classList.contains('modal-window-show')) {
			modalWindow.classList.remove('modal-window-show');
		}
	}
});
