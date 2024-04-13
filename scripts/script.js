// document.getElementsByTagName('h1')[0].innerHTML =
//     'Самая крутая пицца ждет <span>только в нашем ресторане</span>';
//
// document.getElementById('products-title').style.color = '#000000';
//
// let buttonElements = document.querySelectorAll('.btn');
// buttonElements.forEach((item) => {
//     console.log(item)
// });
//
// // document.getElementById('name-input').placeholder = "name";
//
// document.querySelector('.rights span').innerText = (new Date()).getFullYear();
//
// let products = document.getElementsByClassName('product');
// for (let i = 0; i < products.length; i++) {
//     if (i % 2 == 1) {
//         products[i].children[1].innerText += '*'
//     }
// }
//


// event
document.getElementById('choose-pizza').onclick = function () {
    document.getElementsByClassName('products')[0].scrollIntoView({behavior: 'smooth'});
}

let productInput = document.getElementById('product-input');
let addToCartButton = document.getElementsByClassName('btn-add-to-cart');
for (let i = 0; i <addToCartButton.length; i++) {
   addToCartButton[i].onclick = function (e) {
       productInput.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
   }
}

document.getElementById('create-order').onclick =  function () {
    let addressInput = document.getElementById('address-input');
    let phoneInput = document.getElementById('phone-input');
    if (!productInput.value) {
        alert('Заполните пиццу!');
        return;
    }
    if (!addressInput.value) {
        alert('Заполните адрес!');
        return;
    }
    if (!phoneInput.value) {
        alert('Заполните телефон!');
        return;
    }
    alert('Спасибо за заказ!');
}