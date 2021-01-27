// Eliminar de Local Storage
// localStorage.clear();

let elemento;

elemento = document;
elemento = document.all;
elemento = document.all[10];
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList;
elemento = document.forms[0].classList[2];

elemento = document.images;
elemento = document.images[1].src;


// SCRIPTS

elemento = document.scripts;
elemento = document.scripts[1];
elemento = document.images;

// CONVERTIR UNA COLECCION EN UN ARREGLO

let imagenes = document.images;
let imagenesArreglo = Array.from(imagenes);

imagenesArreglo.forEach(function(imagen){
    console.log(imagen);
});
console.log(imagenesArreglo.length);