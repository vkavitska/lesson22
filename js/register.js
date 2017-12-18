'use strict'

$(document).ready(()=> {
    let enteredRegisterData = () => {
        let enteredData = {};
        enteredData.FirstName = $('#firstName').val();
        enteredData.LastName = $('#lastName').val();
        enteredData.Email = $('#emailRegister').val();
        enteredData.Phone = $('#phone').val();
        enteredData.Address = $('#address').val();
        enteredData.Password = $('#passwordRegister').val();
        return enteredData;
    };

    let clearRegisterData=()=> {
        $('#firstName').val('');
        $('#lastName').val('');
        $('#emailRegister').val('');
        $('#phone').val('');
        $('#address').val('');
        $('#passwordRegister').val('');
        $('#firstNameError').html('');
        $('#lastNameError').html('');
        $('#emailError').html('');
        $('#phoneError').html('');
        $('#addressError').html('');
        $('#passwordError').html('');
    };

    let validateFirstName = () => {
        let firstName = $('#firstName').val();
        $('#firstNameError').html('');
        if (firstName.length === 0) {
            $('#firstNameError').html("*this field is required");
            return false;
        }
        let name_pattern = /[a-z]+/i;
        let checkFirstName = name_pattern.test(firstName);
        if (!checkFirstName) {
            $('#firstNameError').html("*you must enter only letters");
            return false;
        }
    };

    let validateLastName = () => {
        let lastName = $('#lastName').val();
        $('#lastNameError').html('');
        if (lastName.length === 0) {
            $('#lastNameError').html("*this field is required");
            return false;
        }
        let name_pattern = /[a-z]+/i;
        let checkLastName = name_pattern.test(lastName);
        if (!checkLastName) {
            $('#lastNameError').html("*you must enter only letters");
            return false;
        }
    };

    let validateEmail = () => {
        let email = $('#emailRegister').val();
        $('#emailError').html('');
        if (email.length === 0) {
            $('#emailError').html("*this field is required");
            return false;
        }
        let email_pattern = /.+@.+\..+/i;
        let checkEmail = email_pattern.test(email);
        if (!checkEmail) {
            $('#emailError').html("*enter correct email");
            return false;
        }
    };

    let validatePhone = () => {
        let phone = $('#phone').val();
        $('#phoneError').html('');
        if (phone.length === 0) {
            $('#phoneError').html("*this field is required");
            return false;
        }
        let phone_pattern = /[0-9]+/i;
        let checkPhone = phone_pattern.test(phone);
        if (!checkPhone) {
            $('#phoneError').html("*you must enter only digits");
            return false;
        }
    };

    let validateAddress = () => {
        let address = $('#address').val();
        $('#addressError').html('');
        if (address.length === 0) {
            $('#addressError').html("*this field is required");
            return false;
        }
        let address_pattern = /[0-9a-z]+/i;
        let checkAddress = address_pattern.test(address);
        if (!checkAddress) {
            $('#addressError').html("*enter the correct address, consisting only of letters and digits");
            return false;
        }
    };

    let validatePassword = () => {
        let password = $('#passwordRegister').val();
        $('#passwordError').html('');
        if (password.length === 0) {
            $('#passwordError').html("*this field is required");
            return false;
        }
    };

    let validateRegisterForm = () => {
        validateFirstName();
        validateLastName();
        validateEmail();
        validatePhone();
        validateAddress();
        validatePassword();
        return true;
    };

    $('#btnSignup').click(() => {
        let validate = validateRegisterForm();
        if (validate) {
            let data=enteredRegisterData();
            // send to server
            $.ajax({
                type: 'POST',
                url: 'https://httpbin.org/post',//server test
                data: data//в поле не видно данных
            }).done((response) =>  console.log(response)
            ).fail((msg) => console.log(msg)
            ).always((msg)=> console.log(msg)
            );
            //$('#registerModal').modal('hide'); не работает правильно
        }
     });


    $('#registerModal').on('hidden.bs.modal', ()=> {/* hidden.bs.modal - this event is fired immediately when the hide instance method has been called.*/
        clearRegisterData();
    });
});