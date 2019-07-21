// col-l
$('.js-create-new-1').on('click', (e) => {
  e.preventDefault();
  $('.col-l').addClass('create');
});

$('.js-create-cancel-1').on('click', (e) => {
  e.preventDefault();
  $('.col-l').removeClass('create');
});


// col-m
$('.js-create-new-2').on('click', (e) => {
  e.preventDefault();
  $('.col-m').addClass('create');
});

$('.js-create-cancel-2').on('click', (e) => {
  e.preventDefault();
  $('.col-m').removeClass('create');
});


// col-r
$('.js-create-new-3').on('click', (e) => {
  e.preventDefault();
  $('.col-r').addClass('create');
});

$('.js-create-cancel-3').on('click', (e) => {
  e.preventDefault();
  $('.col-r').removeClass('create');
});
