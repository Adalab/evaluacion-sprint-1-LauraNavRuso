'use strict';


// Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al clickar el botón, que aparezca una ventana de alerta que diga 'Hola ', con el nombre que aparece en el input de texto.


function sayHelloNicelyToMeFunction(){

	var nameInput = document.querySelector('input');

	alert('Hola, ' + nameInput.value);
}

	// Los input son por definición campos vacíos (por eso no se cierra su etiqueta), así que al llamarlo no sale nada. Con ellos hay que usar su value asociado.
	
	// var titleElem = document.querySelector('.title');
	// titleElem.innerHTML = 'Bienvenida'





var button = document.querySelector('.classbutton');
button.addEventListener('click', sayHelloNicelyToMeFunction);
