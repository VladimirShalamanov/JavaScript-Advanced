function validate() {
    let userName = document.querySelector('#username');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let confirmPassword = document.querySelector('#confirm-password');
    let checkbox = document.querySelector('#company');
    let validDisp = document.querySelector('#valid');

    let userNamePattern = /^([A-Za-z0-9]){3,20}$/;
    let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
    let passwordPattern = /^[\w]{5,15}$/;


    let subBtn = document.querySelector('#submit');
    let comBtn = document.querySelector('#company');
    comBtn.addEventListener('change', (e) => {
        let comI = document.querySelector('#companyInfo');
        if (comBtn.checked) {
            comI.style.display = 'block';
        }
        else {
            comI.style.display = 'none';
        }
    });

    subBtn.addEventListener('click', (e) => {
        let checkOutput = [];

        if (userNamePattern.exec(userName.value) === null) {
            userName.style.borderColor = 'red';
            checkOutput.push(false);
        }
        else {
            userName.style.borderColor = '';
            checkOutput.push(true);
        }
        if (emailPattern.exec(email.value) === null) {
            email.style.borderColor = 'red';
            checkOutput.push(false);
        }
        else {
            email.style.borderColor = '';
            checkOutput.push(true);
        }
        if (password.value === confirmPassword.value &&
            passwordPattern.exec(password.value) != null &&
            passwordPattern.exec(confirmPassword.value) != null) {
            password.style.borderColor = '';
            confirmPassword.style.borderColor = '';
            checkOutput.push(true);
        }
        else {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            checkOutput.push(false);
        }
        if (checkbox.checked) {
            let comNumber = document.querySelector('#companyNumber');
            if (comNumber.value < 1000 || comNumber.value > 9999) {
                comNumber.style.borderColor = 'red';
                checkOutput.push(false);
            }
            else {
                comNumber.style.borderColor = '';
                checkOutput.push(true);
            }
        }
        if (!checkOutput.includes(false)) {
            validDisp.style.display = 'block';
        }
        else {
            validDisp.style.display = 'none';
        }
    });
}