// Referencias

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Escuchador

addButton.addEventListener('click', createTask);

// Funcion Manejadora Externa

function createTask() {
  if (taskInput.value) {
    /* Crear los elementos que integran la tarea */
    console.log(taskInput.value);

    /* Creamos el contenedor de una tarea */
    const taskItem = document.createElement('div');
    taskItem.classList.add('task');

    /* Creamos el parrafo de la tarea */
    const taskText = document.createElement('p');
    taskText.innerText = taskInput.value;

    /* Creamos el contenedos de los iconos */
    const taskIcons = document.createElement('div');
    taskIcons.classList.add('task-icons');

    /* Crear el icono de check */
    const iconCheck = document.createElement('i');
    iconCheck.classList.add('bi', 'bi-check', 'icon-complete');

    /* Crear el icono de delete */
    const iconDelete = document.createElement('i');
    iconDelete.classList.add('bi', 'bi-trash', 'icon-delete');

    /* Estructura de los elementos */
    taskIcons.append(iconCheck, iconDelete);
    taskItem.append(taskText, taskIcons);
    taskList.append(taskItem);

    /* regresamos el valor vacio al input */
    taskInput.value = '';
  } else {
    alert('Heee! Escribe una tarea!!');
  }
}


/* Commit: "Funcionalidad de agregar tarea" */