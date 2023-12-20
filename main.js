document.addEventListener("DOMContentLoaded", function () {
    let registerButton = document.getElementById("registerButton");
    registerButton.addEventListener("click", function () {
        let nameInput = document.getElementById("имя");
        let emailInput = document.getElementById("email");
        let passwordInput = document.getElementById("пароль");

        if (nameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
            return;
        }

        if (passwordInput.value.length < 8) {
            return;
        }
        if (/\d/.test(nameInput.value)) {
            return;
        }


        showMessage();
    });

    function showMessage() {
        alert("Регистрация успешно завершена!");
    }
});

