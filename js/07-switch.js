'use strict'

var edad = 40;
var imprime = "";

switch(edad){
    case 18:
        imprime = "Acabas de cumplir mayoría de edad"
    break;

    case 21:
        imprime = "Eres un adulto"
    break;

    case 40:
        imprime = "Crisis de los 40"
    break;

    case 70:
        imprime = "Eres un anciano"
    break;

    default:
        imprime = "Tu edad es impredecible"
    break;
}

console.log(imprime);

