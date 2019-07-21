// Нужно как-то оптимизировать повторяющийся код

// Кнопка "Удалить персонажа" (отдельно на каждый слот)
$('.js-btn-delete-1').on('click', (e) => {
  e.preventDefault();
  $('.col-l').addClass('delete opacity');
});

$('.js-btn-delete-2').on('click', (e) => {
  e.preventDefault();
  $('.col-m').addClass('delete opacity');
});

$('.js-btn-delete-3').on('click', (e) => {
  e.preventDefault();
  $('.col-r').addClass('delete opacity');
});

// Кнопка "Отмена" при удаления персонажа (отдельно на каждый слот)
$('.js-delete-cancel-1').on('click', (e) => {
  e.preventDefault();
  $('.col-l').removeClass('delete opacity');
});

$('.js-delete-cancel-2').on('click', (e) => {
  e.preventDefault();
  $('.col-m').removeClass('delete opacity');
});

$('.js-delete-cancel-3').on('click', (e) => {
  e.preventDefault();
  $('.col-r').removeClass('delete opacity');
});



// Кнопка "Удаление персонажа" (отдельно на каждый слот)
$('.js-delete-person-submit-1').on('click', () => {
  let delPer1 = $('#delete-person-1').toJSON();
  const parceData = JSON.parse(delPer1);
  const name = parceData['delete-person-1__name'];
  const serName = parceData['delete-person-1__sername'];
  localStorage['form_data'] = delPer1;
  $('.js-person-name').text(`${name} ${serName}`);
  $('.delete-person-page').addClass('show opacity');

  return false;
});


$('.js-delete-person-submit-2').on('click', () => {
  let delPer2 = $('#delete-person-2').toJSON();
  const parceData = JSON.parse(delPer2);
  const name = parceData['delete-person-2__name'];
  const serName = parceData['delete-person-2__sername'];
  localStorage['form_data'] = delPer2;
  $('.js-person-name').text(`${name} ${serName}`);
  $('.delete-person-page').addClass('show opacity');

  return false;
});


$('.js-delete-person-submit-3').on('click', () => {
  let delPer3 = $('#delete-person-3').toJSON();
  const parceData = JSON.parse(delPer3);
  const name = parceData['delete-person-3__name'];
  const serName = parceData['delete-person-3__sername'];
  console.log(delPer3);
  localStorage['form_data'] = delPer3;
  $('.js-person-name').text(`${name} ${serName}`);
  $('.delete-person-page').addClass('show opacity');

  return false;
});

// Кнопка отмена удаления
$('.js-delete-cancel').on('click', (e) => {
  e.preventDefault();
  $('.delete-person-page').removeClass('show opacity');
});
