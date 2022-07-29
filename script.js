const passField1 = document.getElementById(`pwd1`);
const passField2 = document.getElementById('pwd2');

const pwd2error = document.querySelector('#confirm-pass-error');


function validatePassword() {
    const pwd1 = passField1.value;
    const pwd2 = passField2.value;
    if (pwd1 !== pwd2) pwd2error.textContent = `Passwods do not match!`;
    else if (pwd1 === pwd2) pwd2error.textContent = ``;
}

passField1.addEventListener('keyup', validatePassword);
passField2.addEventListener('keyup', validatePassword);




