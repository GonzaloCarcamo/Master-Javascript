'use strict'

/*

Programa que nos indique si un número es par o impar.
Si valor no es válido, que nos pida nuevamente el número.

*/

var numero = parseInt(prompt("Indica un número: "));

while(isNaN(numero)){
    numero = parseInt(prompt("Indica un número: "));
}

if(numero % 2 == 0){
    console.log("El número es par");
    
} else {
    console.log("El número es impar");
}

