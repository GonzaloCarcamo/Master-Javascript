'use strict'

// Transformación de textos


var numero = 444;
var texto1 = "Bienvenido al curso de JS";
var texto2 = "Es muy buen curso curso";

/*

var dato = numero.toString();
    dato = texto1.toUpperCase();
    dato = texto2.toLowerCase();

console.log(dato);

// Calcular longitud de un texto

var nombre = "hola";
    nombre = ["hola", "hola"];

console.log(nombre.length);

// Como concatenar o unir textos

// var texto_total = texto1 + " ." + texto2

var texto_total = texto1.concat(". " + texto2);

console.log(texto_total);

*/

// Buscar una palabra dentro de un string

var busqueda = texto1.replace('curso', 'taller'); // también existe search, lastIndex, indexOf, substr, charAt, 
                                        // startsWith, endsWith, includes, replace, slice, split, trim

console.log(busqueda);


var busqueda1 = texto1.split(" ");

console.log(busqueda1);

