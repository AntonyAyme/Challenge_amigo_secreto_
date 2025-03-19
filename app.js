// 🟢 Variable global para almacenar los nombres
let listaAmigos = [];

// 🟢 Función para actualizar la lista en la página
function actualizarLista() {
    let listaHTML = document.querySelector("#listaAmigos");
    listaHTML.innerHTML = ""; // Limpiamos la lista antes de actualizar

    for (let i = 0; i < listaAmigos.length; i++) {
        let elemento = document.createElement("li"); // Creamos un <li>
        elemento.textContent = listaAmigos[i]; // Asignamos el nombre
        listaHTML.appendChild(elemento); // Agregamos el <li> a la lista
    }
}

// 🟢 Función para agregar un nombre a la lista
function agregarAmigo() {
    let input = document.querySelector("#amigo");
    let nombre = input.value.trim(); // Eliminamos espacios en blanco

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
    } else if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
    } else {
        listaAmigos.push(nombre); // Agregamos el nombre al array
        actualizarLista(); // Mostramos la lista en pantalla
        input.value = ""; // Limpiamos el campo de entrada
    }
}
