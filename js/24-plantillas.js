'use strict'

// Plantillas de texto

var nombre = prompt("Ingresa tu nombre");
var apellidos = prompt("Ingresa tus apellidos");

var texto = `<p>
                Tu nombre es <strong>${nombre}</strong>, 
                y tus apellidos son <strong>${apellidos}</strong>.
            </p>.`

document.write(texto);

