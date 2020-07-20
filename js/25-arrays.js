'use strict'

// Arrays o arreglos o matrices

var nombre = "Gonzalo";

var nombres = ["Gonzalo", "Victor", "Michelle", "Eduardo", 52, true];

var lenguajes = new Array("PHP", "JS", "Go", "Java", "Rust", "C++");

// Están asociados a índices. El índice siempre comienza en "0".

/*

console.log(nombres[2]);
console.log(lenguajes[1]);

var elemento = parseInt(prompt("Qué elemento del array quieres?", 0));

if(elemento >= nombres.length){
    alert("Introduce un número menor a " + nombres.length);
} else {
    alert("El usuario seleccionado es " + nombres[elemento]);
}

*/

document.write("<h1>Lenguajes de Programación 2020</h1>");
document.write("<ul>");
    for(var i = 0 ; i < lenguajes.length ; i++){
        document.write("<li>" + lenguajes[i] + "</li>");
    }
document.write("</ul>");

// Con forEach

document.write("<h1>Lenguajes de Programación 2020</h1>");
document.write("<ul>");

lenguajes.forEach((elemento, index, arr) => {
    document.write("<li>" + index + ".- " + elemento + "</li>")
});

document.write("</ul>");

