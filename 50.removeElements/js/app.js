// !-------REPLACE ELEMENTS----------------

const nuevoEncabezado = document.createElement('h2');


nuevoEncabezado.className ='encabezadonuevo';
nuevoEncabezado.id ='nuevo idencabezado';
nuevoEncabezado.style.background ='green';

nuevoEncabezado.innerHTML='Nuevo encabezado....goood!';

// replace element

// seleccionamos el elemento anterior
const elementoAnterior = document.querySelector('#encabezado');

// seleccionamos el padre
const elPadre = document.querySelector('#lista-cursos');

// reemplazar

elPadre.replaceChild(nuevoEncabezado, elementoAnterior);

console.log(nuevoEncabezado);