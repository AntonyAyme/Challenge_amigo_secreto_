// 🟢 Función para agregar amigos a la lista con validaciones mejoradas
function agregarAmigo() {
    let input = document.querySelector("#amigo");
    let nombre = input.value.trim(); // Elimina espacios en blanco

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
    } else if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
    } else {
        listaAmigos.push(nombre); // Agrega el nombre al arreglo
        console.log(listaAmigos); // Muestra la lista en la consola
        input.value = ""; // Limpia el campo de entrada
    }
}
