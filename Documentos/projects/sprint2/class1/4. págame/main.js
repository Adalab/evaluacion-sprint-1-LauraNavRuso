'use strict';

// alert ("Normal " + 126 / 9);
// alert ("Ana " + 14 + 2);

var totalBill = 128;
var peopleNumber = 9;
var extraPayForAna = 2;

var partNormalPay = ((totalBill - extraPayForAna) / peopleNumber);
var partAnaPay = partNormalPay + extraPayForAna;


alert("Cada una paga " + partNormalPay);
alert("Ana paga " + partAnaPay);
