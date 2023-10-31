"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let buttonQuestion = document.querySelectorAll(".btn");
  let popupWindow = document.querySelector(".popup");
  let popupClose = document.querySelector(".popup-feedback__close");
  let popupForm = document.querySelector(".popup-feedback__form");
  let popupForm2 = document.querySelector(".ask-question__sendform");
  let popup = document.querySelector(".popup-feedback");
  let linksMenu = document.querySelectorAll(".header__link");

  linksMenu.forEach((link) => {
    link.addEventListener("click", function () {
      if (!(document.querySelector(".header__mainMenu").style.left === 0)) {
        document.querySelector(".header__mainMenu").style.left = "100%";

        document
          .querySelector(".contacts-burger")
          .classList.toggle("active-burger");
      }
    });
  });

  if (popupForm) {
    popupForm.addEventListener("submit", sendForm);
  }
  if (popupForm2) {
    popupForm2.addEventListener("submit", sendForm);
  }
  // popupForm.addEventListener("submit", sendForm);
  // popupForm2.addEventListener("submit", sendForm2);

  if (document.querySelector(".contacts-burger")) {
    document
      .querySelector(".contacts-burger")
      .addEventListener("click", function () {
        this.classList.toggle("active-burger");

        if (document.querySelector(".header__mainMenu").style.left == "0px") {
          document.querySelector(".header__mainMenu").style.left = "100%";
        } else {
          document.querySelector(".header__mainMenu").style.left = "0";
        }

        document.body.classList.toggle("lock");
      });
  }

  async function sendForm(e) {
    e.preventDefault();

    let error = validationForm(popupForm);

    let formData = new FormData(popupForm);

    if (!error) alert("Заполните все поля!");
    else {
      alert("Данные отправлены");
      popupForm.reset();
      //   popup.classList.add("sending");
      //   let response = await fetch("sendemail.php", {
      //     method: "POST",
      //     body: formData,
      //   });
      //   if (response.ok) {
      //     let result = await response.json();
      //     alert(result.message);
      //     popupForm.reset();
      //     popup.classList.remove("sending");
      //   } else {
      //     alert("Ошибка!");
      //     popup.classList.remove("sending");
      //   }
    }
  }
  // Open modal window
  if (buttonQuestion) {
    buttonQuestion.forEach((elem) => {
      elem.addEventListener("click", () => {
        popupWindow.classList.remove("hidden");
      });
    });
  }

  async function sendForm2(e) {
    e.preventDefault();

    let error = validationForm(popupForm2);

    let formData = new FormData(popupForm2);

    if (!error) alert("Заполните все поля!");
    else {
      alert("Данные отправлены");
      popupForm2.reset();
      //   popup.classList.add("sending");
      //   let response = await fetch("sendemail.php", {
      //     method: "POST",
      //     body: formData,
      //   });
      //   if (response.ok) {
      //     let result = await response.json();
      //     alert(result.message);
      //     popupForm.reset();
      //     popup.classList.remove("sending");
      //   } else {
      //     alert("Ошибка!");
      //     popup.classList.remove("sending");
      //   }
    }
  }

  // Close modal window
  if (popupClose) {
    popupClose.addEventListener("click", () => {
      popupForm.querySelectorAll("input").forEach((input) => {
        removeError(input);
      });
      popupWindow.classList.add("hidden");
    });
  }

  function removeError(input) {
    const parent = input.parentNode;

    if (input.classList.contains("error")) {
      parent.querySelector(".error-label").remove();
      input.classList.remove("error");
    }
  }

  function createError(input, textError) {
    const parent = input.parentNode;
    const errorLabel = document.createElement("label");

    errorLabel.classList.add("error-label");
    errorLabel.textContent = textError;

    input.classList.add("error");
    document.querySelector(".tel2").style.marginBottom = "1rem";

    parent.append(errorLabel);
  }

  function validationForm(popupForm) {
    let result = true;

    popupForm.querySelectorAll("input").forEach((input) => {
      removeError(input);
      if (input.value == "") {
        createError(input, "Поле не заполнено!");
        result = false;
      }
    });

    return result;
  }
});
