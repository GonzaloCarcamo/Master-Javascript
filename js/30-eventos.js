'use strict'

// Un evento es cuando, por ejemplo hago clic en un botón y pasa algo

// Eventos con el mouse

window.addEventListener('load', () => {
    function cambiarColor() {
        console.log("Me haz dado CLIC");
    
        var bg = boton.style.background;
        
        if(bg == 'green'){
            boton.style.background = 'red';
    
        }else{
            boton.style.background = 'green';
        }
    
        boton.style.padding = '10px';
        boton.style.border = '1px solid #ccc';
    
        return true;
    }
    
    // Evento Click, para doble click es 'dblclick'
    var boton = document.querySelector('#boton');
    boton.addEventListener('click', () =>{
        cambiarColor();
    });
    
    // Mouse over
    
    boton.addEventListener('mouseover', () => {
        boton.style.background = '#ccc';
    })
    
    // Mouse out
    
    boton.addEventListener('mouseout', () => {
        boton.style.background = 'yellow';
    })
    
    // Foculs
    var input = document.querySelector('#campo_nombre');
    input.addEventListener('focus', () =>{
        console.log("El focus si funciona");
    });
    
    // Blur
    
    input.addEventListener('blur', () =>{
        console.log("Blur !!!");
    });
    
    // Keydown
    
    input.addEventListener('keydown', (event) =>{
        console.log("[keydown]Pulsando la tecla", String.fromCharCode(event.keyCode));
    });
    
    // Keypress
    
    input.addEventListener('keypress', (event) =>{
        console.log("[keypress]Tecla presionada", String.fromCharCode(event.keyCode));
    });
    
    // keyup
    
    input.addEventListener('keypress', (event) =>{
        console.log("[keyup]Tecla levantada", String.fromCharCode(event.keyCode));
    });
    
})


