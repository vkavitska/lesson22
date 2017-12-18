'use strict'
//доработать
//добавить расчет общей стоимости заказа
$(document).ready(()=> {

    let notifyOrderStatus = () => {
        let form=document.forms.orderForm;
        let statusChoice = '';
        for (let i = 0; i < form.elements.status.length; i++) {
            if (form.elements.status[i].checked) {
                statusChoice += form.elements.status[i].value + '';
            }
        }
        return statusChoice;
    };

    let paymentMethod=()=> {
        let form=document.forms.orderForm;
        let payment='';
        for (let i = 0; i < form.elements.payment.length; i++) {
            if (form.elements.payment[i].checked) {
                payment = form.elements.payment[i].value;
            }
        }
        return payment;
    };

//не работает корректно-разобраться
//     let notifyOrderStatus = () => {
//         let boxes = $("input:checkbox");
//             let choice = [];
//             for (let i = 0; i < boxes.length; i++) {
//                 let box = boxes[i];
//                 if ($(box).prop('checked', true)) {
//                     choice[choice.length] = $(box).val();
//                 }
//             }
//         return choice;
//     };
//
//     let paymentMethod=()=>{
//         let boxes = $("input:radio");
//             let choice;
//             for (let i = 0; i < boxes.length; i++) {
//                 let box = boxes[i];
//                 if ($(box).prop('checked', true)) {
//                     choice= $(box).val();
//                 }
//             }
//             return choice;
//     };

    //доработать расчет стоимости заказа
    // let showOrderPrice=(event)=> {
    //     let indexCategory = $('#categories').attr('data-index');
    //     let indexItem = $('#items').attr('data-items-index');
    //     let price = products[keys[indexCategory]].items[indexItem].price;
    //     let quantity = $('#quantity').val();
    //     let productPrice = price * quantity;
    //     return productPrice;
    // };

    let showOrderData = () => {
        let enteredData = {};
        enteredData.Quantity = $('#quantity').val();
        enteredData.Address = $('#deliveryAddress').val();
        enteredData.Notify = notifyOrderStatus();
        enteredData.Payment = paymentMethod();
        // enteredData.productPrice=showOrderPrice();
        document.getElementById('resultOfEnter').style.display = 'block';
        let parent = document.getElementById('result');
        parent.innerHTML='';
        for (let key in enteredData) {
            let child = document.createElement('li');
            child.innerHTML = enteredData[key];
            parent.appendChild(child);
        }
    };

    let validateQuantity = () => {
        let quantity = $('#quantity').val();
        $('#quantityError').html('');
        if (quantity.length === 0) {
            $('#quantityError').html('*this field is required');
            return false;
        }
        if (quantity <= 0) {
            $('#quantityError').html('*enter positive quantity of product');
            return false;
        }

    };

    let validateDeliveryAddress = () => {
        let address=$('#deliveryAddress').val();
        $('#deliveryError').html('');
        if(address.length===0){
            $('#deliveryError').html('*this field is required');
            return false;
        }
        let address_pattern = /[0-9a-z]+/i;
        let checkAddress = address_pattern.test(address);
        if (!checkAddress) {
            $('#deliveryError').html("*enter the correct address, consisting only of letters and digits");
            return false;
        }
    };

    let validateOrderStatus = () => {
        let form=document.forms.orderForm;
        $('#statusError').html('');
        if ((!form.elements.status[0].checked) && (!form.elements.status[1].checked)) {
            $('#statusError').html('*this field is required');
            return false;
        }
    };

    let validatePaymentMethod = () => {
        let form=document.forms.orderForm;
        $('#paymentError').html('');
        if ((!form.elements.payment[0].checked) && (!form.elements.payment[1].checked)) {
            $('#paymentError').html('*this field is required');
            return false;
        }
    };

    let validateForm = () => {
        let quantity=validateQuantity();
        console.log(quantity);
        let address=validateDeliveryAddress();
        let status=validateOrderStatus();
        let payment=validatePaymentMethod();
        if(quantity===false||address===false||status===false||payment===false){
            return false;
        }
        return true;
    };

    $('#finish').click(() => {
        let validate = validateForm();
        if (validate) {
            showOrderData();
        }
        $('#ok').click(() => {// сделать отправку на сервер
            location.href = '../index.html'
        });
    });
});











