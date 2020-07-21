'use strict'

/*

Bloque 2: Ejercicio

1. Pida 6 números por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos en el cuerpo de la página y en consola)
3. Mostrar el array ordenado
4. Invertir su orden y mostrarlo
5. Mostrar cuántos elementos tiene el array
6. Búsqueda de un valor introducido por el usuario y que nos diga si está en el array y su posición.

*/

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h2>Contenido del Array "+ textoCustom + "</h2>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>");
    });
    document.write("</ul>");
}

// Pedir 6 números (dos formas)
//var numeros = new Array(6);
var numeros = [];

for(var i = 0 ; i <= 5 ; i++){
    //numeros[i] = parseInt(prompt("Intruce un número", 0));
    numeros.push(parseInt(prompt("Intruce un número", 0)));
}

// Mostrar array por página
mostrarArray(numeros);

// Mostrar array por consola
console.log(numeros);

// Ordenar y mostrar

numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, 'ordenados');

// Invertir y mostrar

numeros.sort(function(a, b){return b-a});
mostrarArray(numeros, 'ordenados');

// Contar elementos

document.write("<h1>" + numeros.length + "</h1>")

// Búsqueda

var busqueda = parseInt(prompt("Ahora ... Busca un número", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<h1>Encontrado</h1>");
    document.write("<h2>Posición de la búsqueda " + posicion + "</h2>");
}else{
    document.write("<h1>NO Encontrado</h1>");
}


