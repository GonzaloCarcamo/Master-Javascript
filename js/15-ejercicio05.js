'use strict'

/*
Todos los números divisores por el número ingresado en un prompt
*/

var numero = parseInt(prompt("Ingresa un número", 1));

for(var i = 1 ; i <= numero ; i++){
    if(numero%i == 0){
        console.log(i);
    }

}

