'use strict';

var pam1AsAString = prompt("Introduce el primer número a sumar");
var pam2AsAString = prompt("Introduce el segundo número a sumar");

var pam1 = parseInt(pam1AsAString);
var pam2 = parseInt(pam2AsAString);

function functionSum(pam1, pam2) {
	return pam1 + pam2;
}

var sumResult = functionSum(pam1, pam2);

alert("El resultado de la suma es " + sumResult);
