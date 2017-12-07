'use strict';


// var fruits = document.querySelectorAll('.fruits li');
//
// function showAlertWithFruit(event){
//   alert(event.currentTarget.innerHTML);
// }
//
// for (var i = 0; i < fruits.length; i++) {
//   fruits[i].addEventListener('click', showAlertWithFruit);
// }


var fruits = document.querySelectorAll('.fruits li');

var prices = [10, 2, 5];

function showAlertWithFruit(event){
  var id = event.currentTarget.getAttribute('data-id');
  alert(event.currentTarget.innerHTML + ' a ' + prices[id]);
}

for (var i = 0; i < fruits.length; i++) {
  fruits[i].addEventListener('click', showAlertWithFruit);
}
