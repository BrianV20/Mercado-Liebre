const usernameEl = document.querySelector('#username');
const passwordEl = document.querySelector('#password');
const passwordConfirmEl = document.querySelector('#passwordConfirm');
const submitBtn = document.querySelector('#submitBtn');
const burgerMenuBtn = document.querySelector('#burgerMenuBtn');

function validateRegister() {
    if(usernameEl.value.length < 5) {
        alert('El nombre de usuario debe tener al menos 5 caracteres');
        return false;
    }

    if(passwordEl.value.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres');
        return false;
    }

    if(passwordConfirmEl.value != passwordEl.value) {
        alert("Las contraseñas no coinciden")
        return false;
    }

    return true;
}

function isValid() {
    if(validateRegister()) {
        alert("Registro exitoso");
    }
    else {
        alert("Registro fallido");
    }
}

submitBtn.addEventListener('click', () => {
    isValid();
});

burgerMenuBtn.addEventListener('click', () => {
    document.querySelector('#navLinksUl').classList.toggle('navLinksUlStyle');
});