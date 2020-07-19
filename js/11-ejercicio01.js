'use strict'

// Programa que pida dos números y que nos diga cuál es el mayor y cuál es el menor, o si son iguales
// Si los números ingresados no son números, o son iguales o menores a cero, pedir nuevamente los números.

var numero1 = parseInt(prompt("¿Primer número?", 0));
var numero2 = parseInt(prompt("¿Segundo número?", 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){

    var numero1 = parseInt(prompt("¿Primer número?", 0));
    var numero2 = parseInt(prompt("¿Segundo número?", 0));
}

if(numero1 == numero2){

    console.log("Los número son iguales");

} else if(numero1 > numero2){

    console.log("El número mayor es " + numero1);
    console.log("El número menor es " + numero2);

} else if(numero2 > numero1){

    console.log("El número mayor es " + numero2);
    console.log("El número menor es " + numero1);

} else {
    alert("Introduce números correctos");
}




