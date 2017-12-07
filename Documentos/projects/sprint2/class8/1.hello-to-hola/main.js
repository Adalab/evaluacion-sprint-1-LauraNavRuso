'use strict';

function changeLanguageFunction(){

	var paragraph = document.querySelector('p');
	paragraph.innerHTML = 'Hello';
}

	//
	// var titleElem = document.querySelector('.title');
	//
	// titleElem.innerHTML = 'Bienvenida'


var button = document.querySelector('.classbutton');
button.addEventListener('click', changeLanguageFunction);
