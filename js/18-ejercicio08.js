'use strict'

/*

Crear una calculadora que pida dos números.
Si ingresamos un dato erroneo, que vuelva a pedir los números.
En el cuerpo de la página, debe mostrar por alerta y consola el resultado de 
sumar, restar, multiplicar y dividir.

*/

var numero1 = parseInt(prompt("numero 1?: ", 0));
var numero2 = parseInt(prompt("numero 2?: ", 0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("numero 1?: ", 0));
    numero2 = parseInt(prompt("numero 2?: ", 0));
}

var resultado = "La suma es: " + (numero1+numero2) + " <br>" +
                "La resta es: " + (numero1-numero2) + " <br>" +
                "La multiplicación es: " + (numero1*numero2) + " <br>" +
                "La división es: " + (numero1/numero2);

var resultadoCMD = "La suma es: " + (numero1+numero2) + " \n" +
                "La resta es: " + (numero1-numero2) + " \n" +
                "La multiplicación es: " + (numero1*numero2) + " \n" +
                "La división es: " + (numero1/numero2);

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);
