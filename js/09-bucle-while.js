'use strict'

// Es como el bucle for, menos estricto, e infinito.

var year = 2018;

while(year != 1991){
    console.log("estamos en el año " + year);

    if(year == 2000){
        break;
    }

    year--;
}

// Do While

var years = 30;

do{

    alert("Sólo si es distinto a 20");
    years--;

} while(years > 25)

