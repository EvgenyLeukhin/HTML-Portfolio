;(function($) {
  $.fn.toJSON = function() {
      var $elements = {};
      var $form = $(this);
      $form.find('input, select, textarea').each(function(){
        var name = $(this).attr('name')
        var type = $(this).attr('type')
        if(name){
          var $value;
          if(type == 'radio'){
            $value = $('input[name='+name+']:checked', $form).val()
          } else if(type == 'checkbox'){
            $value = $(this).is(':checked')
          } else {
            $value = $(this).val()
          }
          $elements[$(this).attr('name')] = $value
        }
      });
      return JSON.stringify( $elements )
  };
  $.fn.fromJSON = function(json_string) {
      var $form = $(this)
      var data = JSON.parse(json_string)
      $.each(data, function(key, value) {
        var $elem = $('[name="'+key+'"]', $form)
        var type = $elem.first().attr('type')
        if(type == 'radio'){
          $('[name="'+key+'"][value="'+value+'"]').prop('checked', true)
        } else if(type == 'checkbox' && (value == true || value == 'true')){
          $('[name="'+key+'"]').prop('checked', true)
        } else {
          $elem.val(value)
        }
      })
  };
}( jQuery ));

$(document).ready(() => {
  const registerBtn    = $('.js-btn-register'),
        authBackBtn    = $('.js-btn-back'),
        authBtn        = $('.js-btn-auth'),
        endRegisterBtn = $('.btn-register-end'),
        authPage       = $('.auth-page'),
        regPage        = $('.reg-page'),
        slotsPage      = $('.slots-page');
  
  
    // Переход на страницу авторизации (клик на "Регистрация")
    registerBtn.on('click', (e) => {
      e.preventDefault();
      authPage.removeClass('show');
      regPage.addClass('show');
    });
  
    // Возврат на страницу авторизации (клик на "Назад")
    authBackBtn.on('click', (e) => {
      e.preventDefault();
      regPage.removeClass('show');
      authPage.addClass('show');
    });
  
  
    // slots page
    const moveToSlots = () => {
      regPage.removeClass('show');
      authPage.removeClass('show');
      slotsPage.addClass('show');
    }
  
  
    // Сохраниние данных с полей (Авторизация - Кнопка "Войти")
    authBtn.on('click', () => {
      let authData = $('#auth-form').toJSON();
      console.log(authData); // данные выводятся в консоль
      localStorage['form_data'] = authData;
  
      let authValid = true;
  
      // сюда можно добавить проверку данных
      if (authValid) moveToSlots();
      return false;
    });
  
    // Сохраниние данных с полей (Регистрация - Кнопка "Зарегистрироваться")
    endRegisterBtn.on('click', () => {
      let regData = $('#reg-form').toJSON();
      console.log(regData); // данные выводятся в консоль
      localStorage['form_data'] = regData;
  
      let regValid = true;
  
      // сюда можно добавить проверку данных
      if (regValid) moveToSlots();
      return false;
    });
  
      // load JSON
    //   $("#_load").on('click', () => {
    //    if(localStorage['form_data']){
    //      console.log("Loading form data...");
    //      console.log(JSON.parse(localStorage['form_data']));
    //      $("form#myForm").fromJSON(localStorage['form_data']);
    //    } else {
    //      console.log("Error: Save some data first");
    //    };
  
    //    return false;;
    //  });
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
});