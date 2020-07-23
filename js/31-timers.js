'use strict'

window.addEventListener('load', () => {
    // timers

    function intervalo() {
        var tiempo = setInterval(() => { // con setTimeOut solo se ejecuta una vez la instrucción

            console.log("set interval ejecutado");
            
            var encabezado = document.querySelector('h1');
            if(encabezado.style.fontSize == '50px'){
                encabezado.style.fontSize = '30px';
            }else{
                encabezado.style.fontSize = '50px';
            }
            
        }, 500);

        return tiempo;
    }

    var tiempo = intervalo();

    var stop = document.querySelector('#stop');

    stop.addEventListener('click', () => {
        alert('Haz parado el intervalo en bucle');

        clearInterval(tiempo);
    })

    var start = document.querySelector('#start');

    start.addEventListener('click', () => {
        alert('El bucle ha comenzado');

        intervalo(tiempo);
    })
});

