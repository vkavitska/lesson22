"use strict";$(document).ready(function(){$("#myCarousel").carousel({interval:5e3,pause:"hover",wrap:!0})});
"use strict";$(document).ready(function(){var r=function(){return function(){var r=$("#email").val();if($("#errorEmail").html(""),0===r.length)return $("#errorEmail").html("*this field is required"),!1;/.+@.+\..+/i.test(r)||$("#errorEmail").html("*enter correct email")}(),function(){var r=$("#password").val();if($("#errorPassword").html(""),0===r.length)$("#errorPassword").html("*this field is required")}(),!0};$("#btnSignin").click(function(){var e=r(),i=function(){var r={};return r.login=$("#email").val(),r.password=$("#password").val(),r}();if(e){$("#rememberMe").is(":checked")&&localStorage.setItem("userData",JSON.stringify(i)),"#loginModal".modal("hide")}});$("#loginModal").on("hidden.bs.modal",function(){$("#errorEmail").html(""),$("#errorPassword").html(""),$("#email").val(""),$("#password").val("")})});
"use strict";$(document).ready(function(){var e=function(){var e={};e.Quantity=$("#quantity").val(),e.Address=$("#deliveryAddress").val(),e.Notify=function(){for(var e=document.forms.orderForm,t="",r=0;r<e.elements.status.length;r++)e.elements.status[r].checked&&(t+=e.elements.status[r].value+"");return t}(),e.Payment=function(){for(var e=document.forms.orderForm,t="",r=0;r<e.elements.payment.length;r++)e.elements.payment[r].checked&&(t=e.elements.payment[r].value);return t}(),document.getElementById("resultOfEnter").style.display="block";var t=document.getElementById("result");t.innerHTML="";for(var r in e){var n=document.createElement("li");n.innerHTML=e[r],t.appendChild(n)}},t=function(){var e=function(){var e=$("#quantity").val();return $("#quantityError").html(""),0===e.length?($("#quantityError").html("*this field is required"),!1):e<=0?($("#quantityError").html("*enter positive quantity of product"),!1):void 0}();console.log(e);var t=function(){var e=$("#deliveryAddress").val();if($("#deliveryError").html(""),0===e.length)return $("#deliveryError").html("*this field is required"),!1;return/[0-9a-z]+/i.test(e)?void 0:($("#deliveryError").html("*enter the correct address, consisting only of letters and digits"),!1)}(),r=function(){var e=document.forms.orderForm;if($("#statusError").html(""),!e.elements.status[0].checked&&!e.elements.status[1].checked)return $("#statusError").html("*this field is required"),!1}(),n=function(){var e=document.forms.orderForm;if($("#paymentError").html(""),!e.elements.payment[0].checked&&!e.elements.payment[1].checked)return $("#paymentError").html("*this field is required"),!1}();return!1!==e&&!1!==t&&!1!==r&&!1!==n};$("#finish").click(function(){t()&&e(),$("#ok").click(function(){location.href="../index.html"})})});
"use strict";$(document).ready(function(){var e=Object.keys(products),t=function(t){var n=t.target,d=n.getAttribute("data-items-index"),i=n.getAttribute("data-category-index");document.getElementById("selected-item").innerHTML=products[e[i]].items[d].price+" "+products[e[i]].items[d].color;var r=document.getElementById("orderButton");r.style.display="block",r.onclick=function(){document.getElementById("selected-item").style.display="none",r.style.display="none",document.getElementById("order").style.display="block"}},n=function(n){var d=n.target.getAttribute("data-index"),i=document.getElementById("items");i.innerHTML="";for(var r=0;r<products[e[d]].items.length;r++){var c=document.createElement("li");c.innerHTML=products[e[d]].items[r].name,c.setAttribute("data-items-index",r),c.setAttribute("data-category-index",d),c.onclick=t,i.appendChild(c)}};!function(){for(var t=0;t<e.length;t++){var d=document.createElement("li");d.innerHTML=products[e[t]].name,d.setAttribute("data-index",t),d.onclick=n,$("#categories").append(d)}}()});
"use strict";var products={smartphones:{name:"Smartphones",items:[{name:"MeizuM5",price:2800,color:"yellow"},{name:"HuaweiY3",price:2400,color:"blue"}]},laptops:{name:"Laptops",items:[{name:"Prestigio",price:3999,color:"black"},{name:"LenovoIdeaPad",price:6400,color:"green"}]}};
"use strict";$(document).ready(function(){var r=function(){return function(){var r=$("#firstName").val();if($("#firstNameError").html(""),0===r.length)return $("#firstNameError").html("*this field is required"),!1;/[a-z]+/i.test(r)||$("#firstNameError").html("*you must enter only letters")}(),function(){var r=$("#lastName").val();if($("#lastNameError").html(""),0===r.length)return $("#lastNameError").html("*this field is required"),!1;/[a-z]+/i.test(r)||$("#lastNameError").html("*you must enter only letters")}(),function(){var r=$("#emailRegister").val();if($("#emailError").html(""),0===r.length)return $("#emailError").html("*this field is required"),!1;/.+@.+\..+/i.test(r)||$("#emailError").html("*enter correct email")}(),function(){var r=$("#phone").val();if($("#phoneError").html(""),0===r.length)return $("#phoneError").html("*this field is required"),!1;/[0-9]+/i.test(r)||$("#phoneError").html("*you must enter only digits")}(),function(){var r=$("#address").val();if($("#addressError").html(""),0===r.length)return $("#addressError").html("*this field is required"),!1;/[0-9a-z]+/i.test(r)||$("#addressError").html("*enter the correct address, consisting only of letters and digits")}(),function(){var r=$("#passwordRegister").val();if($("#passwordError").html(""),0===r.length)$("#passwordError").html("*this field is required")}(),!0};$("#btnSignup").click(function(){if(r()){var t=function(){var r={};return r.FirstName=$("#firstName").val(),r.LastName=$("#lastName").val(),r.Email=$("#emailRegister").val(),r.Phone=$("#phone").val(),r.Address=$("#address").val(),r.Password=$("#passwordRegister").val(),r}();$.ajax({type:"POST",url:"https://httpbin.org/post",data:t}).done(function(r){return console.log(r)}).fail(function(r){return console.log(r)}).always(function(r){return console.log(r)})}}),$("#registerModal").on("hidden.bs.modal",function(){$("#firstName").val(""),$("#lastName").val(""),$("#emailRegister").val(""),$("#phone").val(""),$("#address").val(""),$("#passwordRegister").val(""),$("#firstNameError").html(""),$("#lastNameError").html(""),$("#emailError").html(""),$("#phoneError").html(""),$("#addressError").html(""),$("#passwordError").html("")})});