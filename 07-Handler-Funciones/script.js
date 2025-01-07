/* 

    Handler - Funciones

    El handler en un evento es una función que se ejecuta cuando el evento ocurre.

    Hay tres formas de escribir la función handler

    1. Como una función externa 👽
    2. Como una función anónima 🥷
    3. Como una función flecha 🏹

    Función externa:

    Esta función se escribe por fuera del evento y se pasa como argumento al addEventListener.

        function handler() {
            // Código a ejecutar
        } 

        elemento.addEventListener(tipoEvento , handler )


    Función Anónima

    Esta función se escribe dentro del evento y no tiene nombre.

        elemento.addEventListerner(tipoEvento , function() { // Codigo a ejecutar } );

    Función Flecha

    Esta función se escribe dentro del evento, no tiene nombre, pero es más concisa.

        elemento.addEventListener(tipoEvento , () => { // Código a ejecutar } )

    * Si el código que se ejecuta tiene mas de 1 línea, se debe escribir entre llaves.
    * Si el código que se ejecuta solo tiene 1 línea, se pueden omitir las llaves.

*/

/* Referencias */

const externa = document.getElementById('externa');
const anonima = document.getElementById('anonima');
const flecha  = document.getElementById('flecha');

/* Función Externa */

function funcionExterna() {
    console.log('¡Click en el botón externa! 👽');
};

externa.addEventListener('click', funcionExterna);

/* Función Anónima */

anonima.addEventListener('click', function() {
    console.log('¡Click en el botón anónima 🥷');
});

/* Función Flecha */

/* flecha.addEventListener('click', () => {
    console.log('¡Click en el botón flecha 🏹');
    console.log('Esta es otra línea de código 🏹');
    // Código...
}); */

flecha.addEventListener('click', () => console.log('¡Click en el botón flecha 🏹'));

/* Commit: "Handler - Funciones" */