"use strict";

let numero = 0;  // Se utiliza para saber el nº de pokemon a adivinar
let cantidadAcertados = 0;  // Se utiliza para saber cuantos pokemons fueron adivinados
let cantidadEncuestados = 0;  // Se utiliza para saber cuantos pokemons se intentaron adivinar

// Alumno: crear la función restart:

// 1) Debe borrar el contenido de texto de "resultText"
// 2) Debe quitar la clase "success" de la imagen "imgpokemon"
// 3) Debe crear un número aleatorio de 0 a la cantidad de pokemons
// disponibles en la variable "pokemons" (proveniente del archivo data.js)
// 4)Esa variable la debe guardar en "numero".
// 5) Debe modificar el atributo de "src" de "imgpokemon" para
// que muestre como imagen el "thumbnail" del nº de pokemon a adivinar
// (utilice la variable "numero" para buscar el pokemon candidato en "pokemons")


//1-2) Borrar texto "resultText" y clase "success"
const resultText = document.querySelector("#resultText")
    console.log (resultText.textContent)
const imgPoke = document.querySelector("#imgpokemon")
    console.log(imgPoke)

function restart() {    
    resultText.textContent = ""
    imgPoke.classList.remove("success")
}
restart();

//3-4) Crear número aleatorio y guardar en "numero"
console.log(pokemons.length)

function pokeAleatorio() {
    numero = Math.round(Math.random()*(pokemons.length));
    console.log(numero);
    return numero;
}
pokeAleatorio()
console.log(numero)

//5) Modificar atributo de "src"
console.log(imgPoke.src)
imgPoke.src = pokemons[numero].thumbnail;

console.log(pokemons[numero])

//Pruebas
console.log(pokemons[numero].id)
console.log(pokemons[4])

agregarEventos();