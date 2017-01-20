        var userBlock = document.querySelector(".user-block a");
    	var modalWindow = document.querySelector(".modal-window");
        var modalWindow2 = document.querySelector(".modal-window2");
    	var closeBtn = document.querySelector(".modal-window .close");
        var closeBtn2 = document.querySelector(".modal-window2 .close");
    	var login = modalWindow.querySelector("input[name=login]");
    	var password = modalWindow.querySelector("input[name=pw]");
    	var form = modalWindow.querySelector("form");
    	var storageLogin = localStorage.getItem('login'); //сохранённое значение ключа login присваиваем в переменную
        var btnMap = document.querySelector(".btn-map"); // кнопка КАК ПРОЕХАТЬ
    	
    	userBlock.addEventListener("click", function(event) {
    		event.preventDefault(); //сбросим дефолтный переход по ссылке
    		modalWindow.classList.add("modal-window-show"); //появится мод. окно
  			//Если значение логина сохранено в хранилище, то фокусируемся на пароле, иначе на логине
  			if (storageLogin) { 
  				login.value = storageLogin; // ПРИСВАИВАЕМ ЗНАЧЕНИЕ логину значению из хранилища
  				password.focus(); 
  			} 
  			else { login.focus(); }
		}); 
    	
    	closeBtn.addEventListener("click", function() {
    		modalWindow.classList.remove("modal-window-show");//будет убран класс при нажатии на крестик
    	}); 
    	//Закрытие окна калавишей ESC
    	window.addEventListener('keydown', function(event) {
    		if (event.keyCode == 27) {
    			if (modalWindow.classList.contains("modal-window-show")) {	// будет работать ТОЛЬКО в случае открытия модольного окна
    				modalWindow.classList.remove("modal-window-show");
    			}
                if (modalWindow2.classList.contains("modal-window2-show")) {  // будет работать ТОЛЬКО в случае открытия модольного окна2
                    modalWindow2.classList.remove("modal-window2-show");
                }
    		}
    	});

    	form.addEventListener("submit", function(event) { 
    		if (!(login.value && password.value)) {
        		event.preventDefault();
        		alert('ВВЕДИТЕ ЛОГИН и ПАРОЛЬ!');
        		//modalWindow.classList.add("modal-window-error");
    		} else {
        		localStorage.setItem('login', login.value); //Сохранение логина в localStorage
    		}
    	});

        btnMap.addEventListener('click', function(event) {
            event.preventDefault();
            modalWindow2.classList.add("modal-window2-show");
        });
        closeBtn2.addEventListener("click", function() {
            modalWindow2.classList.remove("modal-window2-show");//будет убран класс при нажатии на крестик
        }); 