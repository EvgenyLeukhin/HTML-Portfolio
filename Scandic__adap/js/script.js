'use strict';
var modalWindowShowBtn = document.querySelector('.main-menu-btn');
var modalWindow = document.querySelector('.modal-window');
var modalWindowCloseBtn = document.querySelector('.close');
var searchButton = document.querySelector('.search');
var searchField = document.querySelector('.search-field');

// Появление/закрытие модального окна
modalWindowShowBtn.addEventListener('click', function(event) {
  event.preventDefault(); // сбрасывает дефолтные настройки
  modalWindow.classList.add('active');
});
modalWindowCloseBtn.addEventListener('click', function() {
  modalWindow.classList.remove('active');
});

// Появление-закрытие поля поиска
searchButton.addEventListener('click', function(event) {
  event.preventDefault(); // сбрасывает дефолтные настройки
  if (!searchField.classList.contains('active')) {
    searchField.classList.add('active');
  } else {
    searchField.classList.remove('active');
  }
});

//Закрытие модального окна и поля поиска калавишей ESC
window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (modalWindow.classList.contains('active')) {
      // будет работать ТОЛЬКО в случае открытия модального окна
      modalWindow.classList.remove('active');
    }
    if (searchField.classList.contains('active')) {
      // будет работать ТОЛЬКО в случае открытия поля поиска
      searchField.classList.remove('active');
    }
  }
});
