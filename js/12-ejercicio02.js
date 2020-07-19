'use strict'

// Utilizando un bucle, mostrar la suma y la media de los números introducidos
// hasta introducir un número negativo, luego de eso, mostrar resultado.


var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce números", 0));

    if(isNaN(numero)){
        numero = 0;
    
    }else if(numero >= 0){
        suma = suma + numero;
        // suma += numero;

        contador++;
    }

    console.log(numero);
    console.log(suma);

} while(numero >= 0);

alert("La suma de todos los números es: " + suma);
alert("La media de todos los números es: " + (suma/contador));

