// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarTextoaElemento(elemento, texto) { 
    let asignarTexto = document.querySelector(elemento);
    asignarTexto.innerHTML = texto;
}

function actualizarListaAmigos() { 
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar los nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (!nombreAmigo || nombreAmigo.trim() === "" || !isNaN(nombreAmigo)) {
        alert("Ingrese un nombre válido (Texto)");
    } else {
        amigos.push(nombreAmigo.trim());
        actualizarListaAmigos();
        document.getElementById("amigo").value = "";
        agregarTextoaElemento(".section-title", "Digite el nombre de sus Amigos");
    }
}

function sortearAmigo () { 
    if (amigos.length === 0) {
        agregarTextoaElemento(".section-title","No hay amigos para sortear");
        return;
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
        let amigoSeleccionado = amigos[indiceAleatorio];
        agregarTextoaElemento(".section-title", "El amigo seleccionado es: " + amigoSeleccionado );
        amigos.splice(indiceAleatorio, 1);
        actualizarListaAmigos();
    }
}

// Mostrar la lista vacía al cargar la página
actualizarListaAmigos();