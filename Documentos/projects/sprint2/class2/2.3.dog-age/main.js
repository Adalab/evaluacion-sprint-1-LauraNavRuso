'use strict';

var dogAgeAsAString = prompt("¿Cuál es la edad de tu perro?");
var dogAge = parseInt(dogAgeAsAString);
var humanAge;

if (dogAge === 1) {
		alert('Tu perro tiene 15 años humanos');
} else if (dogAge === 2) {
		alert('Tu perro tiene 24 años humanos');
} else if (dogAge > 2) {
		humanAge = 24 + (dogAge - 2) * 5;
		alert('Tu perro tiene ' + humanAge  + ' años humanos');
}
