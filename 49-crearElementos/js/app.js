// !--------crear elementos---------

const enlace = document.createElement('a');

enlace.className ='enlaces';
enlace.id = 'enlace';


enlace.setAttribute('href', '#');


enlace.textContent ='Nuevo enlace';
// enlace.appendChild(document.createTextNode('Nuevo enlace'));
document.querySelector('#secundaria').appendChild(enlace);


console.log(enlace);