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

const resultText = document.querySelector("#resultText")
const imgPoke = document.querySelector("#imgpokemon")

function restart() {    
    resultText.textContent = ""
    imgPoke.classList.remove("success")
    numero = Math.round(Math.random()*(pokemons.length));
    imgPoke.src = (pokemons[numero].thumbnail);

    //Pruebas
    console.log(`Numero random desde funcion: ${numero}`)
    console.log(`"Id" poke desde funcion: ${pokemons[numero].id}`)
    console.log(`Nombre poke desde función: ${pokemons[numero].name}`)
}

restart();
agregarEventos();


//Pruebas
//console.log(numero)
console.log(`El id es: ${pokemons[numero].id}`)
console.log(`El numero random es: ${numero}`)
console.log(`Length: ${pokemons.length}`)
console.log(pokemons[4])