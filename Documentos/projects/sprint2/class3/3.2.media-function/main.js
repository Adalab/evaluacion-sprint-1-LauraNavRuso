'use strict';

var pam1AsAString = prompt("Introduce el primer número a sumar");
var pam2AsAString = prompt("Introduce el segundo número a sumar");
var pam3AsAString = prompt("Introduce el tercer número a sumar");
var pam4AsAString = prompt("Introduce el cuarto número a sumar");

var pam1 = parseInt(pam1AsAString);
var pam2 = parseInt(pam2AsAString);
var pam3 = parseInt(pam3AsAString);
var pam4 = parseInt(pam4AsAString);


function functionSum(pam1, pam2, pam3, pam4) {
	return pam1 + pam2 + pam3 + pam4;
}
var sumResult = functionSum(pam1, pam2, pam3, pam4);


function functionMean(pam1, pam2, pam3, pam4) {
	return sumResult/4;
}

var meanResult = functionMean(pam1, pam2, pam3, pam4);


alert("La media de los cuatro números introducidos es " + meanResult);
