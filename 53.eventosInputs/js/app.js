// !------ EVENTOS PARA INPUTS---------------

const busqueda = document.querySelector('#buscador');

// busqueda.addEventListener('keydown', obtenerEvento);
// busqueda.addEventListener('keyup', obtenerEvento);
// busqueda.addEventListener('keypress', obtenerEvento);
// busqueda.addEventListener('focus', obtenerEvento);
// busqueda.addEventListener('blur', obtenerEvento);
// busqueda.addEventListener('copy', obtenerEvento);
busqueda.addEventListener('paste', obtenerEvento);


function obtenerEvento(e){
    // console.log(busqueda.value);
    document.querySelector('#encabezado').innerText = busqueda.value;
    console.log(`EVENTO : ${e.type}`);
}