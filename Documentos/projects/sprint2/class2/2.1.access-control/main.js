'use strict';

var Name = prompt("¿Cuál es tu nombre?");

if ((Name === "Laura") || (Name === "Celia")) {
	alert("Bienvenida, " + Name);
} else {
	alert("Lo siento pero el usuario que has introducido no está registrado");
}
