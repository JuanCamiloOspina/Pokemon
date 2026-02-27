function agregarPokemon() {

    const input = document.getElementById("nombrePokemon");
    const lista = document.getElementById("listaPokemon");
    const mensaje = document.getElementById("contadorPokemon");
    const nombre = input.value;

    if (!nombre) return;

    if (mensaje) mensaje.remove();

    const nuevoPokemon = document.createElement("li");
    const texto = document.createElement("h4");
    const botonEliminar = document.createElement("button");

    texto.textContent = nombre;

    botonEliminar.textContent = "X";






    botonEliminar.addEventListener("click", () => {
        nuevoPokemon.remove();
        actualizarContador();
        actualizarMarcados();
    });




    nuevoPokemon.append(texto, botonEliminar);
    lista.appendChild(nuevoPokemon);


    nuevoPokemon.classList.add("pokemon-item");



document.querySelector("button").addEventListener("click", agregarPokemon);

    nuevoPokemon.addEventListener("click", () => {
        nuevoPokemon.classList.toggle("marcado");
        actualizarMarcados();
    });

    input.value = "";

    actualizarContador();
}

document.querySelector("button").addEventListener("click", agregarPokemon);


    function actualizarMarcados() {

        const marcados = document.querySelectorAll(".pokemon-item.marcado").length;
        const contadorMarcados = document.getElementById("contadorMarcados");
        contadorMarcados.textContent = `Pokémon marcados: ${marcados}`;
    }


function actualizarContador() {

    const lista = document.getElementById("listaPokemon");
    const contadorTexto = document.getElementById("contadorTexto");

    const cantidad = lista.querySelectorAll(".pokemon-item").length;

    if (cantidad === 0) {
        contadorTexto.textContent = "Añade tu nuevo Pokémon";

        const mensaje = document.createElement("li");
        mensaje.textContent = "Aún no hay Pokemon nuevos";
        mensaje.id = "contadorPokemon";

        lista.appendChild(mensaje);

    } else {
        contadorTexto.textContent =
            cantidad === 1
                ? "Tienes 1 Pokémon agregado"
                : `Tienes ${cantidad} Pokémon agregados`;
    }
}