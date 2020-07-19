'use strict'

// Operadores
var numero1 = 7;
var numero2 = 3;

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

document.write("El resultado de la operacion es " + suma);
document.write("El resultado de la operacion es " + resta);
document.write("El resultado de la operacion es " + multiplicacion);
document.write("El resultado de la operacion es " + division);


// Tipos de datos

var numero_entero = 50;
var cadena_texto = "hola, 'que' tal?";
var buleano = true;
var numero_falso = "33.4";

console.log(cadena_texto);

console.log(Number(numero_falso) + 1);
console.log(parseFloat(numero_falso) + 1);
console.log(parseInt(numero_falso) + 1);

console.log(String(numero_entero) + 1);

// typeof, nos devuelve el tipo de dato de la variable.

console.log(typeof(numero_entero));

