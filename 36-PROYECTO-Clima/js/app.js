// !-------ELEMENTS-----------

const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);

})

// !------we look for climate and validate-----------
function buscarClima(e) {
    e.preventDefault();


    // VALIDAR
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if( ciudad === '' || pais === '') {
        // hubo un error
        mostrarError('Ambos campos son obligatorios');
        return;
    }

    // CONSULTARIAMOS LA API
    consultarAPI(ciudad, pais);


    // console.log('Buscando el Clima');
}

// !--------SHOW A ERROR() REUTILIZABLE--------

function mostrarError(mensaje) {
    // console.log(mensaje);

    // verifica si existe el codigo,
    const alerta = document.querySelector('.bg-red-100');

    if(!alerta) {
        // crear una alerta
        const alerta =document.createElement('div');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML =`
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span> 
        
        `;
        container.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 5000);

    }

}

// !-------QUESTION TO API-----------

function consultarAPI(ciudad, pais) {

    const appId = '7c07cc345c40802eb4e28aa190150b08';

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    Spinner(); // Muestra un spinner de carga

    // !QUESTION TO API OPENWEATHERMAP

    setTimeout(() => {
        fetch(url)
        
        .then( respuesta => respuesta.json())
        .then ( datos => {
            limpiarHTML(); // limpiar el HTML previo
            console.log(datos);
            if(datos.cod ==="404") { //si la ciudad no existe
                mostrarError("Ciudad no encontrada");
            }

            // !PRINT HTML CLIMA
            mostrarClima(datos);
        })
    }, 2000);

}

// !------------SHOW IN THE HTML------------------

function mostrarClima(datos) {

    const { name, main: {temp, temp_max, temp_min}} = datos;
    
    const centigrados = kelvinACentigrados(temp); //CALL FUNCTION ---TRANSFORMANDO KELVIN A GRADOS CENTIGRADOS
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);

    // ! ADD CITY
    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent =`Clima in ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl');

    // !ADD TEMP CURRENT
    const actual = document.createElement('p');
    actual.innerHTML =`${centigrados} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl'); //tailwind.css

    // !ADD TEMP MAX
    const tempMaxima = document.createElement('p');
    tempMaxima.innerHTML = `Max: ${max} &#8451;`
    tempMaxima.classList.add('text-xl');

    // !ADD TEMO MIN
    const tempMinima = document.createElement('p');
    tempMinima.innerHTML = `Min: ${min} &#8451;`
    tempMinima.classList.add('text-xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);

    resultado.appendChild(resultadoDiv);
}

// !-----USE HELPERS--------THE return IS IMPLICIT----
// !helpers---->funciones que sola hacen una funcion entrada de datos y un retorno
const kelvinACentigrados =  grados => parseInt(grados - 273.15);

// function kelvinACentigrados(grados) {
//     return parseInt(grados - 273.15);S
// }

// !------LIMPIAR HTML-------

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// !---------------ADD SPINNER-------------

function Spinner() {

    limpiarHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    
    `;

    resultado.appendChild(divSpinner);
}
