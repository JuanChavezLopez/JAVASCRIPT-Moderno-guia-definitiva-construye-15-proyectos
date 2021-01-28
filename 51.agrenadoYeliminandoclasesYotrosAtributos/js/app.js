// !------ELIMINANDO ELEMENTOS Y CREANDO-------

// delete from element
const enlaces  = document.querySelectorAll('.enlace');
// enlaces[0].remove();

// delete from father
const navegacion = document.querySelector('#principal');
// navegacion.removeChild(enlaces[0]);


// print console
// console.log(navegacion);


// !-------DELETE FIRST LINK-----------

const primeroLista = document.querySelector('.enlace');

let elemento;

// obtener clase

elemento = primeroLista.classList; /* vemos que solo existe una clase */
elemento = primeroLista.className; /* vemos su nombre de clase */
elemento = primeroLista.classList.add('nueva-clase');/* agregamos la nueva clase */
// elemento = primeroLista.classList.remove('nueva-clase');/* eliminamos la clase */
elemento = primeroLista.classList;/* volvemos a hacer la consulta */

// insertar atributos
elemento = primeroLista.getAttribute('href');
primeroLista.setAttribute('href', 'http://www.google.com');

elemento = primeroLista.setAttribute('data-id', 20); /* atributos personalizados */

elemento = primeroLista.hasAttribute('data-id');

// elemento = primeroLista;
console.log(elemento);