'use strict'

// DOM = Document Object Model

function cambiaColor(color) {
    caja.style.background = color;  
}

// Conseguir elementos con un id concreto

//var caja = document.getElementById('micaja');
var caja = document.querySelector('#micaja');

caja.innerHTML = 'texto en la caja desde JS';
caja.style.background = 'red';
caja.style.padding = '20px';
caja.style.color = 'white';

caja.className = 'hola hola2';

// Conseguir elementos por su etiqueta 

var todosLosDiv = document.getElementsByTagName('div'); // seleccionamos los elementos en divs

console.log(todosLosDiv);

var seccion = document.querySelector('#miseccion')
var hr = document.createElement("hr");

var valor;
for(valor in todosLosDiv){
    if(typeof todosLosDiv[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDiv[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
 }

seccion.append(hr);

// Conseguir elementos por su clase

var divRojos = document.getElementsByClassName('rojo');
var divAmarillos = document.getElementsByClassName('amarillo');

divAmarillos[0].style.background = 'yellow';

var div;
for(div in divRojos){
    if(divRojos[div].className == 'rojo'){
        divRojos[div].style.background = 'red';
    }
}

// Query Selector

var id = document.querySelector('#encabezado');
console.log(id);

var claseRojo = document.querySelectorAll('div.rojo');
console.log(claseRojo);

var etiqueta = document.querySelectorAll('div');
console.log(etiqueta);

