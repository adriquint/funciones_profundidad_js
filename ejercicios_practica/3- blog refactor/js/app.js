"use strict";

const tituloPrincipal = document.querySelector(".main-title");
console.log(tituloPrincipal.textContent);

const hoy = new Date();

tituloPrincipal.textContent = `Publica tu aprendizaje: ${hoy.getDate()}/${
  hoy.getMonth() + 1
}/${hoy.getFullYear()}`;

/* Crear los objetos Post */
let posts = [];
for(const postData of data) {
    posts.push(new Post(
                postData.titulo,
                postData.avatar,
                postData.texto
                        )
                );
}

/* Renderizar datos */
let accumulator = ""
for(const post of posts){
  accumulator += post.render()
};

const section = document.querySelector("section");
section.innerHTML = accumulator;

/* Agregar eventos */
addPostMouseEvents ()