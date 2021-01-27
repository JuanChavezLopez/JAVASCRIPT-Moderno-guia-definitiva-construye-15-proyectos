//  --------getElementById------

// let encabezado;

encabezado = document.getElementById('encabezado');
encabezado.style.background = '#333';
encabezado.style.color ='#fff';
encabezado.style.padding = '20px';


// -----CAMBIAR TEXTO------------

encabezado.textContent = 'LOS MEJORES CURSOS';
encabezado.innerHTML = 'JUAN';
encabezado.innerText = 'JUAN HASTA LAS ESTRELLAS';


// console.log(encabezado);


//---------- QUERY SELECTOR---------


let enlace;
enlace = document.querySelector('#principal a:first-child');
// enlace = document.querySelector('#principal a:last-child');
console.log(enlace);