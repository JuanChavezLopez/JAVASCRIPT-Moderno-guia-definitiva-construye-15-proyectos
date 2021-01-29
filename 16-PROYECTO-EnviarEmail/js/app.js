// !----------------VARIABLES--------------------

const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');


// !VARIABLES PARA CAMPOS

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



eventListeners();

function eventListeners(){
    // cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // reinicia el formulario
    btnReset.addEventListener('click', resetearFormulario);

    // Enviar email
    formulario.addEventListener('submit', enviarEmail);
}


// !----------------FUNCIONES--------------------
function iniciarApp (){
    // console.log("Estamos iniciando..");
    btnEnviar.disabled = true;
    btnEnviar.classList.add('curso-not-allowed', 'opacity-50');

}

// !--------VALIDAR FORMULARIO---------
function validarFormulario(e) {
    
    
    if(e.target.value.length > 0) {

        // elimina los errores
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
        
    }else {
        // e.target.style.borderBottomColor = 'red';  /*add border color red */
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500'); /* use Tailwind */
        // e.target.style.borderColor = 'red';
        mostrarError('Todos los campos son obligatorios.');
    }
    
    if(e.target.type === 'email') {

        // console.log('Este es un email, hay qeu validarlo diferente');
        // const resultado = e.target.value.indexOf('@'); /* indeof-->valida si tenemos este caracter en el campo */
        // console.log(resultado);
        
        if(er.test(e.target.value)){
            // elimina error
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }
            
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        }else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500'); /* use Tailwind */
            // e.target.style.borderColor = 'red';
            mostrarError('Email no valido...');
        }
    }

    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

// !--------MOSTRAR ERROR---------

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-color-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');

    if(errores.length === 0){
        // formulario.insertBefore(mensajeError, document.querySelector('.mb-10'));
        formulario.appendChild(mensajeError);
    }
}


// !---------ENVIAR EMAIL----------
function enviarEmail(e){
    e.preventDefault();
    // console.log('enviando');
    const spinner = document.querySelector('#spinner');
    spinner.style.display ='flex';

    // despues de 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout(() => {
        spinner.style.display = 'none';

        // mensaje que dice que se envio correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envio correctamente.';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500');

        // inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);

        // eliminar mensaje de exito de envio
        setTimeout(() => {
            parrafo.remove();  /* eliminar el mensaje de exito */

            resetearFormulario(); /* resetear el formulario */
        }, 2500);

    }, 1500);
}

// !---------------FUNCION QUE RESETEA EL FORMULARIO------------------------

function resetearFormulario(){
    formulario.reset();
    iniciarApp();

}