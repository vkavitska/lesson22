'use strict'

$(document).ready(()=> {
    let enteredLoginData = () => {
        let enteredData = {};
        enteredData.login = $('#email').val();
        enteredData.password = $('#password').val();
        return enteredData;
    };

    let validateEmail = () => {
        let email = $('#email').val();
        $('#errorEmail').html('');
        if (email.length === 0) {
            $('#errorEmail').html("*this field is required");
            return false;
        }
        let email_pattern = /.+@.+\..+/i;
        let checkEmail = email_pattern.test(email);
        if (!checkEmail) {
            $('#errorEmail').html("*enter correct email");
            return false;
        }
    };

    let validatePassword = () => {
        let password = $('#password').val();
        $('#errorPassword').html('');
        if (password.length === 0) {
            $('#errorPassword').html("*this field is required");
            return false;
        }
    };

    let validateLoginForm = () => {
        validateEmail();
        validatePassword();
        return true;
    };

    $('#btnSignin').click(() => {
        let validate = validateLoginForm();
        let data=enteredLoginData();
        let setToLocalStorage = (() => {
            localStorage.setItem('userData', JSON.stringify(data))
        });
        if (validate) {
            let checkboxValue = $('#rememberMe').is(':checked');//true if checked
            if (checkboxValue) {
                setToLocalStorage();
            }
            ('#loginModal').modal('hide');
        }
    });

    let clearLoginData=()=>{
        $('#errorEmail').html('');
        $('#errorPassword').html('');
        $('#email').val('');
        $('#password').val('');
    };

    $('#loginModal').on('hidden.bs.modal', ()=> {/* hidden.bs.modal - this event is fired immediately when the hide instance method has been called.*/
        clearLoginData();
    });
});