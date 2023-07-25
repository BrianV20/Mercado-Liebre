const nameEl = document.querySelector('#name');
const surnameEl = document.querySelector('#surname');
const dateOfBirthEl = document.querySelector('#dateOfBirth');
const directionEl = document.querySelector('#direction');
const passwordEl = document.querySelector('#password');
const passwordConfirmEl = document.querySelector('#passwordConfirm');
const submitBtn = document.querySelector('#submitBtn');

function validateRegister() {
    if(nameEl.value.length < 5) {
        alert('El nombre debe tener al menos 5 caracteres');
        return false;
    }

    if(surnameEl.value.length < 5) {
        alert('El apellido debe tener al menos 5 caracteres');
        return false;
    }

    if(dateOfBirthEl.value.length < "2003-01-01") {
        alert('Debe ingresar una fecha válida');
        return false;
    }
    else if(dateOfBirthEl.value.length > Date.now()) {
        alert('Debe ingresar una fecha válida');
        return false;
    }

    if(directionEl.value.length < 5) {
        alert('La dirección debe tener al menos 5 caracteres');
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