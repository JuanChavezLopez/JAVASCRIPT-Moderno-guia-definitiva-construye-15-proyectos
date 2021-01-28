// !---------EXAMPLE 1-----------------------
// EVENT LISTENERS CLICK AL BUSCADOR


// document.querySelector('#submit-buscador').addEventListener('click', function(e){
//     e.preventDefault();
//     alert("juan");
// });


// !---------EXAMPLE 2-----------------------

let element = document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

function ejecutarBoton(e) {
    
    e.preventDefault();
    let elemento;
    elemento = e.target;
    elemento = e.target.className;
    
    console.log(elemento);
}

// !---------EXAMPLE 3-----------------------

document.querySelector('#encabezado').addEventListener('click', function(e){
    e.target.innerHTML =`<strong>hola</strong>`;  /* al hacer clicl se modifica el texto */
    // console.log(e.target.innerText);
});

const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelector('.enlace');
const boton = document.querySelector('#vaciar-carrito');


// click
// boton.addEventListener('click', obtenerEvento);

// dble click
// boton.addEventListener('dblclick', obtenerEvento);

// mouse enter
// boton.addEventListener('mouseenter', obtenerEvento);

// mouse Leave
// boton.addEventListener('mouseleave', obtenerEvento);

// mouse over
// boton.addEventListener('mouseover', obtenerEvento);

// mouse out
// boton.addEventListener('mouseout', obtenerEvento);

// mouse down
// boton.addEventListener('mousedown', obtenerEvento);

// mouse move
boton.addEventListener('mousemove', obtenerEvento);




// function

function obtenerEvento (e){
    console.log(`EVENTO :${e.target.id}`)
}
