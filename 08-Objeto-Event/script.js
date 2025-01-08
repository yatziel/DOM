/* 

  Objeto event

  El objeto event (e) representa un suceso que ocurre en el navegador, como un clic, pulsar una tecla o el movimiento del mouse y proporciona información sobre las propiedades y métodos para manejarlo.

  Para acceder al objeto event (e) se pasa automáticamente como un argumento a la función manejadora.

  Sintaxis

  function funcionManejadora(event) {
    // Código a ejecutar...
    console.log(event) // Muestra la lista de propiedades y métodos.
  }

  Propiedades del objeto event:

  - type: devuelve el tipo de evento.
  - target: devuelve el elemento donde ocurre el evento.
  - timeStamp: Devuelve la marca de tiempo en milisegundos desde la carga de la página.

  - code: Devuelve el código de la tecla presionada.
  - key: Devuelve el valor de la tecla presionada

  - clientX: Devuelve la posición horizontal de puntero del mouse en relación a la ventana del navegador.
  - clientY: Devuelve la posición vertical del puntero del mouse en relación con la ventana del navegador.

*/

const button = document.getElementsByClassName("button");

/* console.log(button[0]); */

button[0].addEventListener("click", mostrarObjetoEvento);

/* Accedemos al objeto evento */

function mostrarObjetoEvento(event) {
  /* Codigo que se ejecuta */
  console.log(event);
  console.log(event.type);
  console.log(event.target);
  console.log(event.timeStamp);
  console.log(event.target.innerText);
}

document.addEventListener("keydown", function (e) {
  console.log(e);
  console.log(e.type);
  console.log(e.code);
  console.log(e.key);
});

document.addEventListener("mousemove", (e) => {
  /* console.log(e); */
  console.log(e.type);
  console.log("Cord x: " + e.clientX + " Cord Y: " + e.clientY);
});

/* Commit: "Objeto Event" */
