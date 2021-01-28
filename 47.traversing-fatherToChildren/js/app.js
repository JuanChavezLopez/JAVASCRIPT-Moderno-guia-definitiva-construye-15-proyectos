// !----------------TRAVERSING--------------

const navegacion = document.querySelector('#principal');
console.log(navegacion.childNodes);
console.log(navegacion.children[0].textContent = 'Nuevo enlace.');


const barra = document.querySelector('.barra');
barra.style.background ='red';
console.log(barra.children);



const card = document.querySelectorAll('.card');
console.log(card);
console.log(card.length);
console.log(card[0].lastElementChild);
console.log(card[0].firstElementChild);

// !---TIPOS DE NODOS-----

// console.log(navegacion.children[0].nodeType);
// 1 = elementos
// 2 = atributos
// 3 = text node
// 8 = comentarios
// 9 = documentos
// 10 =doctypes