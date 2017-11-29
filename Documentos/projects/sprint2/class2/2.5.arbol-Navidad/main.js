'use strict';

var treeNumberStoriedAsAString = prompt("¿Cuántos pisos quieres que tenga el árbol?");
var treeNumberStoried = parseInt(treeNumberStoriedAsAString);


// MEDIO ARBOLITO
// var x = "";
//
// for (var i = 1; i <= treeNumberStoried; i++) {
// 	for (var j = 1; j <= i; j++) {
// 		x+= "\u25b2";
// 	}
// // x+= "\n";
// x = x + "\n";
// }
// alert(x);


// ARBOLITO ENTERO SIMÉTRICO
// var x = "";
//
// for (var i = 1; i <= treeNumberStoried; i++) {
// 	for (var j = 1; j <= (treeNumberStoried-i); j++) {
// 		x = x + "    ";
// }
// 	for (var k = 1; k <= ((2*i)-1); k=k+1) {
// 		x = x + "\u25b2";
// }
// 	for (var j = 1; j <= (treeNumberStoried-i); j++) {
// 		x = x + "    ";
// }
// 	x = x + "\n";
// }
// alert(x);

// ARBOLITO ENTERO SIMÉTRICO CON ESTRELLA Y TRONCO
var x = "";

for (var i = 1; i <= (treeNumberStoried-1); i++) {
	x= x + "    ";
}
x = x + "*" + "\n";
// x = x + "*\n";

for (var i = 1; i <= treeNumberStoried; i++) {
	for (var j = 1; j <= (treeNumberStoried-i); j++) {
		x = x + "    ";
}
	for (var k = 1; k <= ((2*i)-1); k=k+1) {
		x = x + "\u25b2";
}
	for (var j = 1; j <= (treeNumberStoried-i); j++) {
		x = x + "    ";
}
	x = x + "\n";
}
for (var i = 1; i <= (treeNumberStoried-1); i++) {
	x= x + "    ";
}
x = x + "|";
alert(x);
