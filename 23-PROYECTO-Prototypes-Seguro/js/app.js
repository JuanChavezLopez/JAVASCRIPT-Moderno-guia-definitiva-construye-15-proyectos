// !------------------CONSTRUCTORES-----------------

function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

// !-------REALIZAR LA COTIZACION CON LOS DATOS--------

Seguro.prototype.cotizarSeguro = function() {
    /* 
      1 = Americano 1.15
      2 = Asatico 1.05
      3 = Europeo 1.35
    */
    let cantidad;
    const base = 2000;
    // console.log(this.marca);
    switch(this.marca) {
        case '1' :
            cantidad = base * 1.15;
            break;
        
        case '2' :
            cantidad = base * 1.05;
            break;
        
        case '3' :
            cantidad = base * 1.35;
            break;

        default:
            break;
    }

    // LEER ANIO
    const diferencia = new Date().getFullYear() - this.year;

    // Cada anio que la diferencia es mayor, el costo va  reducirse un 3%
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    // Si el seguro es basico se multiplica por un 30 % mas
    // si el seguro es completo se multiplica por un 50 % mas
     
    if(this.tipo === 'basico') {
        cantidad *= 1.3;
    } else {
        cantidad *= 1.4;
    }
    // console.log(cantidad);

    return cantidad;
}


function UI() {}


// !-------PROTOTYPE LLENA LAS SECCIONES DE LOS ANIOS---

UI.prototype.llenarOpciones = () => {
 const  max= new Date().getFullYear(),
        min= max-20;

    const selectYear = document.querySelector('#year');

    for(let i=max; i > min ;i--) {
        let option = document.createElement('option');
        option.value= i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// !---------MUESTRA LAS ALERTAS EN LA PANTALLA-------
UI.prototype.mostrarMensaje = (mensaje, tipo) => {

    const div = document.createElement('div');

    if(tipo === 'error'){
        div.classList.add('error');
    }else {
        div.classList.add('correcto');
    }
    
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;
    
    // INSERTAR EN EL HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));
    
    setTimeout(() => {
        div.remove();
    }, 3000);
}

// !--------------INSTANCIAR UI-------------------

const ui = new UI();
console.log(ui);


// !--------------CAPTURAMOS EVENTOS--------

document.addEventListener('DOMContentLoaded', () => {

    ui.llenarOpciones();/* llena el select con los anios */
})



eventListeners();
function eventListeners() {
     const formulario = document.querySelector('#cotizar-seguro'); /* formulario */
     formulario.addEventListener('submit', cotizarSeguro);
}


function cotizarSeguro(e){
    e.preventDefault();

    // leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    
    // lee el anio seleccionado
    const year = document.querySelector('#year').value;

    // leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    if(marca === ''|| year === '' || tipo === '' ) {
        // console.log('No paso la validacion');
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }

    ui.mostrarMensaje('Cotizando', 'exito');
    
    // !-----------INSTANCIAR EL SEGURO--------------
    
    const seguro = new Seguro(marca, year, tipo);
    seguro.cotizarSeguro();
    // console.log(seguro);
}

// !-------------UTILIZAR EL PROTOTYPE QUE VA A COTIZAR---------

