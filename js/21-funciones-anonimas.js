'use strict'

// Funciones anónimas

// Es una función que no tiene nombre

// Callback: es una función dentro de otra función.
// Le paso como parámetro a una función, otra funcion.

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, function (dato) {
    console.log("La suma es: " + dato);
},
function (dato) {
    console.log("La suma por dos es: " + (dato*2));
});


