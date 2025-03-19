// 🟢 Variables globales
let listaAmigos = []; // Almacena los nombres ingresados

// 🟢 Función para agregar amigos a la lista
function agregarAmigo() {
    let input = document.querySelector("#amigo");
    let nombre = input.value;

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
    } else {
        listaAmigos.push(nombre); // Agrega el nombre al arreglo
        console.log(listaAmigos); // Muestra la lista en la consola
        input.value = ""; // Limpia el campo de entrada
    }
}
