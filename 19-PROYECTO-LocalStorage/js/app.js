// !----------VARIABLES-----------
const formulario = document.querySelector('#formulario');

const listTweets = document.querySelector('#lista-tweets');

let tweets = [];



// !------EVENT LISTENERS------------
eventListeners();

function eventListeners() {
    // cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets')) || []; //obtenemos los mensajes guardados en e
        console.log(tweets);

        crearHTML();
    })


}



// !------ FUNCTIONS-------------------
function agregarTweet(e) {
    e.preventDefault();

    // console.log('Agregando tweet');
    const tweet = document.querySelector('#tweet').value;
    // console.log(tweet);

    // VALIDACION
    if( tweet === '') {
        mostrarError('Un mensaje no puede ir vacio'); /* reutilizamos el codigo con la funcion */

        return;  //evita que se ejecuten mas lineas de codigo
    }

    const tweetObj = {
        id : Date.now(),
        // tweet: tweet  e javascript actual solo se puede agregar un nombre cuando la llave y el valor son iguales
        tweet
    }

    // AGREGAR AL ARREGLO DE LOS TWEETS
    tweets = [...tweets, tweetObj]; /* agregamos al arreglo anterior el arreglo de tweets actual */

    // una vez creado vamos a crear el HTML
    crearHTML();
    // console.log(tweets);

    // reiniciar el formulario

    formulario.reset();
}

// !-------MOSTRAR MENSAJE DE ERROR----------

function mostrarError(error) { 
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // insertarlo en el contenido

    const contenido = document.querySelector('#contenido');

    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 2000);


}

// !----------MUESTRA UN LISTADO DE LOS TWEETS-------

function crearHTML() {

    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach( tweet => {
            // agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Agregar la funcion de eliminar

            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // crear el HTML
            const li = document.createElement('li');
            // agregar el texto
            li.innerText = tweet.tweet


            // asignar el boton
            li.appendChild(btnEliminar);

            // insertar en el html
            listTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

// !-----------SINCRONIZAR STORAGE----------

function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// !------------------ELIMINAR TWEET---------

function borrarTweet(id) {
    // console.log('Borrando tweet...', id)
    tweets = tweets.filter ( tweet => tweet.id !== id );
    // console.log(tweets);
    crearHTML();
}


// !------------------LIMPIAR EL HTML---------

function limpiarHTML() {
    while ( listTweets.firstChild) {
        listTweets.removeChild(listTweets.firstChild);
    }
}