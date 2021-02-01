// !-------------------------VARIABLES---------------
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// !--------------------------GENERADOR DE RESULTADOS----------
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// const precioMin = 20000;
// const precioMax = 20010;

// console.log(max);
// console.log(min);
// !-----------------------GENERAR UN OBJETO CON LA BUSQUEDA-------

const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
}


// !------------------------------EVENTOS-------------------

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);  //muestra los autos al cargar

    //llena las opciones de anios
    llenaSelect();

    // llenar minimo y maximo

    llenaMinMax();
})

// !-----------------EVENT LISTENERS PARA LOS SELECTS DE BUSQUEDA-------
marca.addEventListener('change', e =>{
    // console.log(e.target.value);
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
    // console.log(datosBusqueda);
})

year.addEventListener('change', e =>{
    // console.log(e.target.value);
    datosBusqueda.year = parseInt(e.target.value); //lo convertimos a un numero para que no venga como un string
    filtrarAuto();
    // console.log(datosBusqueda);
})

minimo.addEventListener('change', e =>{
    // console.log(e.target.value);
    datosBusqueda.minimo = parseInt(e.target.value);
    filtrarAuto();
    // console.log(datosBusqueda);
})

maximo.addEventListener('change', e =>{
    // console.log(e.target.value);
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
    // console.log(datosBusqueda);
})

puertas.addEventListener('change', e =>{
    // console.log(e.target.value);
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
    // console.log(datosBusqueda);
})

transmision.addEventListener('change', e =>{
    // console.log(e.target.value);
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
    // console.log(datosBusqueda);
})

color.addEventListener('change', e =>{
    // console.log(e.target.value);
    datosBusqueda.color = e.target.value;
    filtrarAuto();
    // console.log(datosBusqueda);
})


// !--------------------FUCNIONES-----------

function mostrarAutos(autos){ //el paramtro viene de
    // la variable autos: viene del archivo db.js, que tiene el array de objetos


    limpiarHTML(); //elimina el HTML previo
    autos.forEach( auto => {

        // usamos destruccioring
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        
        `;

        // insertar en el HTML
        resultado.appendChild(autoHTML);
    })


}

// !-------------------------LIMPIAR EL HTML--------------
function limpiarHTML(){
     while(resultado.firstChild){
         resultado.removeChild(resultado.firstChild);
     }
}

// !--------------------GENERA LOS ANIOS DEL SELECT---------

function llenaSelect() {
     
    for ( let i = max; i>= min; i--){
        // console.log(i);
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //agrega las opciones de anio al select
    }
}
// !--------------------GENERA PRECIO MINIMO Y PRECIO MAXIMO---------

// function llenaMinMax() {
     
//     for ( let i = precioMin; i<= precioMax; i++){
//         // console.log(i);
//         const opciones = document.createElement('option');
//         opciones.value =i;
//         opciones.textContent = i;
//         minimo.appendChild(opciones); //agrega las opcioneses de precioMin al select
//         maximo.appendChild(opciones); //agrega las opcioneses de precioMax al select
//     }
// }

// !---------------------FUNCION QUE FILTRA EN BASE A LA BUSQUEDA---------

// !----FILTRAR POR MARCA
function filtrarAuto() {
    // autos viene del archivo donde estan todos los objetos con autos
    const resultado = autos.filter( filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    
    console.log(resultado);

    
    if(resultado.length){
        mostrarAutos(resultado); // le pasamos un argumento llamado: resultado
    }else{
        noResultado();
    }
    
}

// !---------FUNTION NO HAY RESULTADO
function noResultado(){

    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intenta con otros terminos de busqueda.';

    resultado.appendChild(noResultado);
}

// !----FILTRAR POR MARCA
function filtrarMarca(auto) {
    // const {marca} = datosBusqueda;
    
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}

// !----FILTRAR POR ANIO

function filtrarYear(auto) {
    if(datosBusqueda.year) {
        // console.log(typeof(datosBusqueda.year));
        return auto.year === datosBusqueda.year;
    }

    return auto;
}

// !-----FILTRAR MINIMO
function filtrarMinimo(auto){ /* le pasamos la variable auto que viene del array autos, en FILTRAR MARCA */
    const { minimo} = datosBusqueda;
    if(minimo) {
        return auto.precio >=minimo;
    }
    return auto;
}

// !-----FILTRAR MAXIMO
function filtrarMaximo(auto){ /* le pasamos la variable auto que viene del array autos, en FILTRAR MARCA */
    const { maximo} = datosBusqueda;
    if(maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

// !-----FILTRAR PUERTAS
function filtrarPuertas(auto){ /* le pasamos la variable auto que viene del array autos, en FILTRAR MARCA */
    const { puertas} = datosBusqueda;
    if(puertas) {
        return auto.puertas === puertas;
    }
    return auto;
}

// !-----FILTRAR TRANSMISION
function filtrarTransmision(auto){ /* le pasamos la variable auto que viene del array autos, en FILTRAR MARCA */
    const { transmision} = datosBusqueda;
    if(transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

// !-----FILTRAR COLOR
function filtrarColor(auto){ /* le pasamos la variable auto que viene del array autos, en FILTRAR MARCA */
    const { color} = datosBusqueda;
    if(color) {
        return auto.color === color;
    }
    return auto;
}
