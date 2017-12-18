'use strict'

$(document).ready(()=>{

    let keys = Object.keys(products);

    let clickItem=(event)=> {
        let clickedItem = event.target;
        let indexItem = clickedItem.getAttribute('data-items-index');
        let indexCategory = clickedItem.getAttribute('data-category-index');
        document.getElementById('selected-item').innerHTML = products[keys[indexCategory]].items[indexItem].price + ' ' + products[keys[indexCategory]].items[indexItem].color;
        let orderBtn=document.getElementById('orderButton');
        orderBtn.style.display='block';
        orderBtn.onclick=function () {
            document.getElementById('selected-item').style.display='none';
            orderBtn.style.display='none';
            document.getElementById('order').style.display='block';
        };
    };

    let clickCategory=(event) =>{
        let clickedCategory = event.target;
        let indexCategory = clickedCategory.getAttribute('data-index');
        let parent = document.getElementById('items');
        parent.innerHTML='';
        for (let i = 0; i < products[keys[indexCategory]].items.length; i++) {
            let child = document.createElement('li');
            child.innerHTML = products[keys[indexCategory]].items[i].name;
            child.setAttribute('data-items-index', i);
            child.setAttribute('data-category-index',indexCategory);
            child.onclick = clickItem;
            parent.appendChild(child);
        }
    };


    let showCategories=()=>{
        for(let i=0; i<keys.length; i++){
            let child = document.createElement('li');
            child.innerHTML = products[keys[i]].name;
            child.setAttribute('data-index', i);
            child.onclick = clickCategory;
            $('#categories').append(child);
        }

    };

    showCategories();
});
