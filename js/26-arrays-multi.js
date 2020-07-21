'use strict'

var categorias = ['acción', 'terror', 'comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

var cine = [categorias, peliculas];

//console.log(cine[0][2]);
//console.log(cine[1][2]);

/*
var elemento = "";

do{
    elemento = prompt("Ingresa la película");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

peliculas.pop(); // Elimina el último elemento del array

peliculas[0] = undefined;

*/

var indice = peliculas.indexOf('Gran Torino');
console.log(indice);

if(indice > -1){
    peliculas.splice(indice, 1);
}

var peliculas_string = peliculas.join();

var cadena = "texto1, texto2, texto3";

var cadena_array = cadena.split(", ");

console.log(peliculas_string);
console.log(cadena_array);


// Ordenar arrays

peliculas.sort(); // Ordenar ABC o numérico

console.log(peliculas);

peliculas.reverse(); 

console.log(peliculas);


