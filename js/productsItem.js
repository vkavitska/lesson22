'use strict'

//добавить вывод изображений для категорий и итемов категории
//изображения брать из массива изображений
// function getImages(n){
//     let array=[];
//     let image=new Image;
//     for( let i = 1; i <= n; i++ ){
//         image.src = "images/" + i + ".jpeg";
//         array.push( image );
//     }
//     return array;
// }
//
// let imagesArray=getImages(3);

let products= {
    smartphones: {
        name: "Smartphones",
        items: [
            {
                name: 'MeizuM5',
                price: 2800,
                color:'yellow'
            },
            {
                name: 'HuaweiY3',
                price: 2400,
                color: 'blue'
            }
        ]
    },
    laptops: {
        name: "Laptops",
        items: [
            {
                name: 'Prestigio',
                price: 3999,
                color:'black'
            },
            {
                name: 'LenovoIdeaPad',
                price: 6400,
                color:'green'
            }
        ]
    }
};



