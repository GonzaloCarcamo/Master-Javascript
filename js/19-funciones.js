'use strict'

// Funciones

// Es una agrupación reutilizable de un conjunto de instrucciones.

function porConsola(numero1, numero2) {
    console.log("La suma es " + (numero1+numero2));
    console.log("La rest es " + (numero1-numero2));
    console.log("La mult es " + (numero1*numero2));
    console.log("La divi es " + (numero1/numero2));
    console.log("----------------------------------");
}

function porPantalla(numero1, numero2) {
    document.write("La suma es " + (numero1+numero2) + "<br>");
    document.write("La rest es " + (numero1-numero2) + "<br>");
    document.write("La mult es " + (numero1*numero2) + "<br>");
    document.write("La divi es " + (numero1/numero2) + "<br>");
    document.write("----------------------------------");
}

function calculadora(numero1, numero2, mostrar = false){

    if(mostrar == false){
        porConsola(numero1, numero2);
        
    }else{
        porPantalla(numero1, numero2);
    }
        
    return true;
}

// Invocar o llamar a la función
calculadora(2, 2,);
calculadora(1, 5, true);

// Los parámetros se utilizan para poder reutilizar la función.

/*

for(var i = 1 ; i <= 10 ; i++){
    console.log(i);
    calculadora(i, 8);
}

*/



