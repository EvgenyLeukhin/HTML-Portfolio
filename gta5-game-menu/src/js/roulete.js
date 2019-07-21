// Сумма ставки
const betInput = $('#bet-input-id');

// Мин
$('.js-min').on('click', () => {
  betInput.val(1000);
});

// х2
$('.js-double').on('click', () => {
  const sum = betInput.val();
  return betInput.val(sum * 2);
});

// 1/2
$('.js-half').on('click', () => {
  const sum = betInput.val();
  return betInput.val(sum / 2);
});

// Макс. (нужно дорабатывать)
$('.js-max').on('click', () => {
  betInput.val(1000000);
});


// Выбор цвета ставки (переключение .active)
$('.bet-choose-color > div').on('click', function(e) {
  $('.bet-choose-color > div').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
});

// Ставка на красные
$('.js-bet-red').on('click', () => {
  const sum = betInput.val() * 1;
  const currentBet = parseInt($('.js-bet-red__output')[0].textContent, 10) + sum;
  betInput.val(1000);
  return $('.js-bet-red__output')[0].textContent = currentBet;
});

// Ставка на зеро
$('.js-bet-zero').on('click', () => {
  const sum = betInput.val() * 1;
  const currentBet = parseInt($('.js-bet-zero__output')[0].textContent, 10) + sum;
  betInput.val(1000);
  return $('.js-bet-zero__output')[0].textContent = currentBet;
});

// Ставка на черные
$('.js-bet-black').on('click', () => {
  const sum = betInput.val() * 1;
  const currentBet = parseInt($('.js-bet-black__output')[0].textContent, 10) + sum;
  betInput.val(1000);
  return $('.js-bet-black__output')[0].textContent = currentBet;
});

// Сбросить ставки
$('.js-bet-reset').on('click', () => {
  $('.js-bet-red__output')[0].textContent = 0;
  $('.js-bet-zero__output')[0].textContent = 0;
  $('.js-bet-black__output')[0].textContent = 0;
});
