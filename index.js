// Esperar a que el contenido del documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencias a los elementos del DOM que vamos a utilizar
  let form = document.getElementById("todo-form");
  let input = document.getElementById("todo-input");
  let todoList = document.getElementById("todo-list");

  // Añadir un evento al formulario para capturar el envío del mismo
  form.addEventListener("submit", function (event) {
    // Evitar que el formulario se envíe y recargue la página
    event.preventDefault();

    // Verificar si el campo de entrada está vacío
    if (input.value.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    // Llamar a la función para añadir un nuevo ítem a la lista
    addTodoItem(input.value);
    // Limpiar el campo de entrada
    input.value = "";
  });

  // Función para añadir un nuevo ítem a la lista
  function addTodoItem(tarea) {
    // Crear un nuevo elemento <li> para la tarea
    let li = document.createElement("li");

    // Crear un elemento <span> para el texto de la tarea
    let tareaText = document.createElement("span");
    tareaText.textContent = tarea;
    li.appendChild(tareaText);

    // Crear un botón "Edit" para editar la tarea
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit");
    li.appendChild(editBtn);

    // Crear un botón "Save" para guardar los cambios en la tarea
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.classList.add("save");
    saveBtn.style.display = "none";
    li.appendChild(saveBtn);

    // Crear un botón "Delete" para borrar la tarea
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    li.appendChild(deleteBtn);

    // Añadir el nuevo ítem a la lista de tareas
    todoList.appendChild(li);

    // Añadir eventos para los botones Edit y Save
    editBtn.addEventListener("click", function () {
      tareaText.contentEditable = true; // Hacer el texto editable
      tareaText.focus(); // Enfocar el texto para edición
      editBtn.style.display = "none"; // Ocultar el botón Edit
      saveBtn.style.display = "inline"; // Mostrar el botón Save
    });

    saveBtn.addEventListener("click", function () {
      tareaText.contentEditable = false; // Hacer el texto no editable
      saveBtn.style.display = "none"; // Ocultar el botón Save
      editBtn.style.display = "inline"; // Mostrar el botón Edit
    });

    // Añadir evento para el botón Delete
    deleteBtn.addEventListener("click", function () {
      // Eliminar el ítem de la lista
      todoList.removeChild(li);
    });
  }
});
