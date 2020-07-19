'use strict'

/*
Mostrar los números contenidos entre dos números (sólo los impares)
*/

var numero1 = parseInt(prompt("Primer número"));
var numero2 = parseInt(prompt("Segundo número"));

while(numero1 < numero2){
    numero1++;

    if(numero1%2 != 0){
        console.log("El número " + numero1 + " es impar");
    }
}

