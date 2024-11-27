/* 

  Seleccionamos los elementos por su id.

*/

const titulo = document.getElementById("title");
const lista = document.getElementById("list");

/* 

  Los mostramos por consola

*/

console.log(titulo)
console.log(lista)

/* 

  innerText

  Devuelve un "string" del contenido visible dentro de un elemento.

    elemento.innerText

  - Excluye los elementos ocultos.
  - Excluye los espacios en el documento.
  - Excluye las etiquetas html

*/

console.log(">>> Con innerText")
console.log(titulo.innerText)
console.log(lista.innerText)


/* 

  textContent

  Devuelve un "string" del contenido visible dentro de un elemento.

    elemento.textContent
  
  - Incluye los espacios
  - Incluye los elementos ocultos
  - Excluye las etiquetas html

*/

console.log(">>> Con textContent")
console.log(titulo.textContent)
console.log(lista.textContent)

/* 

  innerHTML

  Devuelve un "string" con la estructura interna de el elemento seleccionado

    elemento.innerHTML

*/

console.log(">>> Con innerHTML")
console.log(titulo.innerHTML)
console.log(lista.innerHTML)


/* 

  Moficar el contenido con innerText

  Asignamos el valor al elemento seleccionado.

    elemento.innerText = "string"

*/

titulo.innerText = "🐢 Pokemones";
lista.innerText = "No hay pokemones!"



/* 

  Moficar el contenido con textContent

  Asignamos el valor al elemento seleccionado.

    elemento.textContent = "string"

*/


titulo.textContent = "🎯 Mis pokepokes";
lista.textContent = "Cargando..."

/* 

  Moficar el contenido con innerHTML

  Asignamos el valor al elemento seleccionado incluyendo las etiquetas html

    elemento.innerHTML = "<tag>...</tag>"

*/

titulo.innerHTML = "¡Amigos <span>pokecitos</span>!";
lista.innerHTML = ` <li>💤 Snorlax</li>
                    <li class="oculto">😸 Meow</li>
                    <li>🦦 Mewtwo</li> `;