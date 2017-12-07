'use strict';

// <!-- Vamos a partir de un HTML con un botón 'Empezar'. Al hacer click, vamos a pintar en el HTML un listado de películas que tenemos en JavaScript:+
//
// var movies = [
//   'Inception',
//   'The butterfly effect',
//   'Eternal sunshine of the spotless mind',
//   'Blue velvet',
//   'Split'];

// Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una peli aparezca una alerta con el nombre de esa película. -->

// VARIANTE1: AL HACER CLICK SOBRE LA PELI, SE MUESTRA SU NOMBRE EN ALERT
// Se podría hacer metiendo la lista en el HTML oculta y haciendo que al darle al botón se muestre en el html, pero no es la intención del enunciado.

var movies = [
  'Inception',
  'The butterfly effect',
  'Eternal sunshine of the spotless mind',
  'Blue velvet',
  'Split'
];



var listElem = document.querySelector('.movies-to-come');

// var content = '<li>"Hola"</li>';


for (var j = 0; j < movies.length; j++) {
	var content =
}

listElem.innerHTML = content;


var repeatedItem = '<label class="label" for="language-name'+ idModifier + '"></label>';

	repeatedItem += '<input class="language-name" id="language-name" type="text" name="language-name" placeholder="Idioma 1">';



// PROBAR CON INSERTBEFORE SIN TENER LISTA VACIA PREVIA

// Mostrar mensaje de alerta al hacer click encima
function showAlertWithMovie(event){
  alert(event.currentTarget.innerHTML);
}

// for (var i = 0; i < movies.length; i++) {
//   movies[i].addEventListener('click', showAlertWithMovie);
// }
