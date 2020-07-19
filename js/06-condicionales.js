'use strict'

// Condicional IF

// Un condicional es una estructura de control que nos permitirán comparar algo.
// Operadores: < ; > ; != ; <= ; >= ; = 

var edad = 74;
var nombre = "David Suarez"

if(edad >= 18) {
    console.log(nombre + " " + "tiene" + " " + edad + " años" );

    if(edad <= 33){
        console.log("Eres milenial");
    } else if(edad >= 70){
        console.log("Eres anciando");
    } else {
        console.log("Ya no eres milenial");
    }
} else {
    console.log(nombre + " " + "es menor de edad");
}

/* Operadores lógicos

AND : &&
OR : ||
NEGACIÓN : !

*/

var year = 2028;

// Negación

if(year != 2016){
    console.log("No es 2020");
}

// AND

if (year >= 2000 && year <= 2020 && year != 2018){
    console.log("Estamos en la ERA actual");
} else {
    console.log("Estamos en la ERA postmoderna")
}

// OR

if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8")
} else {
    console.log("Numero no registrado");
}

