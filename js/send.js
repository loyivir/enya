 // Отправка данных на сервер
      function send(event, php, id) {               
        event.preventDefault
          ? event.preventDefault()
          : (event.returnValue = false);
        var req = new XMLHttpRequest();
        req.open("POST", php, true);
        req.onload = function () {
          if (req.status >= 200 && req.status < 400) {                         
            json = JSON.parse(this.response);            
            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {   
              // Если сообщение отправлено
                     
              closeAllModal();
              document.querySelector("#success-modal").querySelector(".modal__overlay").classList.add("modal__overlay_visible");
              document.querySelector("#success-modal").querySelector(".modal-success").classList.add("modal_visible");
            
            } else {
              // Если произошла ошибка
              closeAllModal();
              document.querySelector("#fail-modal").querySelector(".modal__overlay").classList.add("modal__overlay_visible");
              document.querySelector("#fail-modal").querySelector(".modal-fail").classList.add("modal_visible");             
            }
            // Если не удалось связаться с php файлом
          } else {
            alert("Ошибка сервера. Номер: " + req.status);
          }
        };

        // Если не удалось отправить запрос. Стоит блок на хостинге
        req.onerror = function () {
          alert("Ошибка отправки запроса");
        };
        req.send(new FormData(event.target));
      }
 function closeAllModal() {
      const modal = $(".modal");
      $(modal).find(".modal__overlay_visible").removeClass("modal__overlay_visible");
      $(modal).find(".modal_visible").removeClass("modal_visible");
    }