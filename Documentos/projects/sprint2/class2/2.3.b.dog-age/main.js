'use strict';

var dogAgeAsAString = prompt("¿Cuál es la edad de tu perro?");
var dogAge = parseInt(dogAgeAsAString);
var humanAge;

if (dogAge === 1) {
		humanAge = 15;
} else if (dogAge === 2) {
		humanAge = 15 + 9;
} else if (dogAge > 2) {
		humanAge = 15 + 9 + (dogAge - 2) * 5;
}

alert('Tu perro tiene ' + humanAge  + ' años humanos');
