let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});


    if (!nombre) return;
        input.value = '';
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado. Intenta otra vez!");
        return;
    }
    amigos.push(nombre);
    actualizarLista(); 
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        li.classList.add('boton-eliminar');

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'x';
        botonEliminar.classList.add('btn-eliminar');
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

function eliminarAmigo(indice) {
    if (confirm("¿Seguro que deseas eliminar este amigo?")) {
        amigos.splice(indice, 1);
        actualizarLista();
        }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos 2 amigos para iniciar sorteo");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos.splice(indiceAleatorio, 1)[0];

    document.getElementById('resultado').innerHTML = `<li>${amigoSorteado}</li>`;
    actualizarLista();
    actualizarBotonSortear();
    }

function reiniciarAplicacion(){
    if (confirm("¿Seguro que deseas reiniciar la aplicación?")) {
        amigos = [];
        actualizarLista();
        document.getElementById('resultado').innerHTML = '';
    }
}

