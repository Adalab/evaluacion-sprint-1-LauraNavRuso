'use strict';

var testNumberAsAString = prompt("Introduce un número de prueba");
var testNumber = parseInt(testNumberAsAString);


if (testNumber === 0) {
		alert('El número es 0');
} else if (testNumber >= 0) {
		alert('El número no es negativo');
} else if ((testNumber % 2  === 0) && (testNumber % 3 === 0)) {
		alert('El número es múltiplo de 2 y de 3');
} else if ((testNumber > 20) && (testNumber < 50)) {
		alert('El número es mayor que 20 pero menor que 50');
} else {
		alert('el número no es 123123125');
}
