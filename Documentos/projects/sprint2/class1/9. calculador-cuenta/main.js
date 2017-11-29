'use strict';

var billAmountAsAString = prompt('¿Cuánto ha sido la cuenta?');
var dinerNumberAsAString = prompt('¿Cuántos comensales hay?');

var billAmount = parseInt (billAmountAsAString);
var dinerNumber = parseInt(dinerNumberAsAString);

var billPerPerson = billAmount/dinerNumber;

alert(billPerPerson);

alert ("Cada comensal debe pagar " + billPerPerson);
