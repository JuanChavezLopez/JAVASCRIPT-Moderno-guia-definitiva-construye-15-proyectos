// !-------VARIABLES-------------------
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');



// !-------EVENTOS---------------------
eventListeners();
function eventListeners() {
    document.addEventListener( 'DOMContentLoaded', preguntarPresupuesto);

    // VALIDANDO FORMULARIO
    formulario.addEventListener('submit', agregarGastos);
}

// !-------CLASSES----------------------

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gasto = [];
    }

    nuevoGasto(gasto) {
        // console.log(gasto);
        this.gasto = [...this.gasto, gasto];
        console.log(this.gasto);
    }
}


class UI {
    insertarPresupuesto( cantidad) {
        // extraendo el valor
        const {presupuesto, restante} = cantidad; 

        // add HTML
        document.querySelector('#total').textContent = presupuesto
        document.querySelector('#restante').textContent = restante;
        console.log(cantidad);
    }

    // FUNCION QUE LO VAMOS A REUTILIZAR
    imprimirAlerta(mensaje, tipo){
        // crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo == 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // mensaje de error
        divMensaje.textContent = mensaje;

        // insertar en el HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // quitar mensaje

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);

    }

    agregarGastoListado(gasto) {
        // console.log(gasto);

        // iterar sobre los gastos
        // gasto.forEach( gasta => {
            
        //     const { cantidad, nombre, id} = gasta;
    
        //     // crear un li
        //     const nuevoGasto = document.createElement('li');
        //     nuevoGasto.className ='list-group-item d-flex justify-content-between align-items-center';

        //     nuevoGasto.dataset.id =id;
            
        //     console.log(nuevoGasto);
    
        //     // agregar el HTML del gasto
    
        //     // boton para borrar el gasto
    
        //     // agregar al HTML
        // });

    }
}

// !-----INSTANCIAR -------------------

const ui = new UI();
console.log(ui)

// declaramos el presupuesto global, para capturar el dato
let presupuesto;


// !-------FUNCIONES-------------------

// llenamos el primer dato del presupuesto.
function preguntarPresupuesto () {
    const presupuestoUsuario= prompt('Cual es tu presupuesto?');
    // console.log(Number(presupuestoUsuario));

    // comprobamos si es vacio, es null, no es numero y numero negativo
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    // PRESUPUESTO VALIDO - pasamos el objeto al UI presupuesto
    presupuesto = new Presupuesto(presupuestoUsuario);
    // console.log(presupuesto);333
    ui.insertarPresupuesto(presupuesto);

} 
    // !------ADD GASTO( ESPENDING)---

function agregarGastos (e) {
    e.preventDefault();

    // leer datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    // validar
    if(nombre === '' || cantidad === '') {
        // console.log('Ambos campos son obligatorios');
        // console.log(nombre +''+cantidad);
        ui.imprimirAlerta('Ambos campos son obligatorios' ,'error');
        return;
    } else if(cantidad <=0 || isNaN(cantidad)){
        // console.log(nombre +''+cantidad);
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return; /* para que no se ejecuten las lineas de codigo */
    }

    
    // GENERAR UN OBJETO CON EL GASTO
    const gasto = {
        nombre: nombre,
        cantidad: cantidad,
        id: Date.now()};
        
        // agregar nuevo gasto
        presupuesto.nuevoGasto(gasto);
        // console.log(gasto);
        console.log('Agregando gasto.');

        ui.imprimirAlerta('Gasto agregado Correctamente');

        // imprimir los gastos usando destructoring
        const {gastos} = presupuesto;
        ui.agregarGastoListado(gasto);

        // Formulario reset
        formulario.reset();
}