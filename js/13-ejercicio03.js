'use strict'

/*
Hacer un programa que muestra todos los números entre dos números introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce un número"));
var numero2 = parseInt(prompt("Introduce otro número"));
var i = 1;

document.write("<h2> Los números contenidos entre " + numero1 + " y " + numero2 + " son: </h2>");

for(var i = numero1 ; i <= numero2; i++){
    
    document.write(i+"<br>")    
}
