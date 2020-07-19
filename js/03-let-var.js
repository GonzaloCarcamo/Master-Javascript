'use strict'

// Let y Var

// Su diferencia radica en la diferencia de alcance que tienen las variables

// con VAR

var numero = 40;
console.log(numero); // su valor debe ser 40 

if(true){
    var numero = 50;
    console.log(numero); // su valor debe ser 50 
}

console.log(numero); // su valor debe ser 50 

// con LET

var texto = "curso js";
console.log(texto); // su valor debe ser "curso js"

if(true){
    let texto = "curso php";
    console.log(texto); // su valor debe ser "curso php"
}

console.log(texto); // su valor debe ser "curso js"
