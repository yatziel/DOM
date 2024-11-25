/* 

  DOM

  Organiza los elementos del documento en "nodos" en un arbol jerárquico.

  Nodo -> Todo elemento individual de nuestro documento.

  Tipos de Nodo

  1. Nodo de Documento
  2. Nodo de Elemento
  3. Nodo de Atributo
  4. Nodo de Texto
  5. Nodo de Comentarios

*/


/* 

  Nodo de Documento 

  Este nodo representa el documento completo de html. Incluye el contenido desde la "raiz" - root, hasta los elementos hijos. 

  Para acceder usamos 
  
  -> document

*/

console.log(document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);



/* 

Nodo Elemento

Para seleccionar nodos de elementos, usamos 

  getElementsByTagName("etiqueta")

Se escribe después del nodo "document"

*/

/* let title = document.getElementsByTagName("p"); */

/* console.log(title) */


/* 

  Nodos de Atributo

  Son los nodos que accedemos a traves de su clase o de su id

  getElementById("nombreId")
  getElementByClassName("nombreClase")


  querySelector("nombreSelector") -> Selecciona el primer elemento que encuentre con el selector.

  querySelectorAll("nombreSelector") -> Selecionar todos los elementos con el mismo selector.

*/

/* 

let title = document.getElementById("title");

console.log(title);
console.log(title.innerText);
console.log(title.id);

let texts = document.getElementsByClassName("paragraph");

console.log(texts);
console.log(texts[0].textContent);
console.log(texts[1].textContent);


*/

// let titulo = document.querySelector("h1"); // Tag
let titulo = document.querySelector("#title"); //Id
// let titulo = document.querySelector(".title"); //Class

console.log(titulo)

// let parrafos = document.querySelectorAll("p"); // Tag
// let parrafos = document.querySelectorAll("#paragraph"); // Id
let parrafos = document.querySelectorAll(".paragraph"); // Class

console.log(parrafos)


/* 

  Nodo de Texto

  Son los elementos de texto contenidos en las etiquetas de html.

  .innerText
  .textContent

*/


let puchunguis = document.querySelector(".subtitle");

console.log(puchunguis.innerText)
console.log(puchunguis.textContent)


/* 

  Nodos de Comentarios

  Tienen un valor de 8 dentro del DOM

*/

let comentario = document.COMMENT_NODE;

console.log(comentario);