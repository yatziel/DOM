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




/* 

  getAttribute()

  Devuelve el valor del atributo del elemento.

    elemento.getAttribute(atributo)


*/

const enlace = document.getElementsByTagName("a");

console.log(enlace[0].getAttribute("href"))

/* 

  removeAttribute()

  Elimina el valor del atributo de un elemento.

    elemento.removeAttribute(atributo)

*/

enlace[0].removeAttribute("href");

console.log(enlace[0].getAttribute("href"));

/* 

  setAttribute()

  Asigna un atributo y un valor a un elemento. 

    elemento.setAttribute(atributo, valor)

  - Sobreescribir un atributo ya declarado.
  - Crear un nuevo atributo y su valor.

*/

enlace[0].setAttribute("href", "https://www.instagram.com");

console.log(enlace[0].getAttribute("href"));

/* Antes */

console.log(enlace[0].getAttribute("target"));

enlace[0].setAttribute("target", "_blank");

/* Después */

console.log(enlace[0].getAttribute("target"));

/* Commit -m "Terminamos textos y atributos del DOM" */