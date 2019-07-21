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
