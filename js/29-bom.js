'use strict'

// Es el Browser Object Model


// para ver alto y ancho de la ventana en el momento
function getWindow(params) {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.location.href);
}

// largo y ancho completo
function getScreen(params) {
    console.log(screen.width);
    console.log(screen.height);
}

getWindow();
getScreen();

// Redirigir página actual a la que indique

function redirect(url) {
    window.location.href =url
}

// Abrir nueva ventana 

function abrirVentana(url) {
    window.open(url, "", "width=400, height=300");
}







