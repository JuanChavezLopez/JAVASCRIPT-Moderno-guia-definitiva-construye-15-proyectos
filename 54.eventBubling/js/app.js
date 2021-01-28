// !---------EVENT BUBLING---------

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', function(e) {
    console.log('click en card');
    e.stopPropagation();
});

infoCurso.addEventListener('click', function(e) {
    console.log('click en info Curso');
    e.stopPropagation();
});

agregarCarrito.addEventListener('click', function(e) {
    console.log('click en agregar Carrito');
    e.stopPropagation();
});