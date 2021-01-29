// !-------------  VARIABLES -----------

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

const listaCursos = document.querySelector('#lista-cursos');/* seleccionamos el contenedor principal de todos los cursos */

let articulosCarrito =[]; /* arreglo vacio de carrito de compras */

// !---------------------EVENTS-------------------
cargarEventListeners();

function cargarEventListeners(){
    
    // cuando agregas un curso presionando "agregar carrito"
    listaCursos.addEventListener('click', agregarCurso);


    // elimina el curso del carrito
    carrito.addEventListener('click', eliminaCurso);

    // vaciar carrito
    vaciarCarritoBtn.addEventListener('click', ()=>{
        // console.log("estamos vaciando el carrito");
        
        articulosCarrito = []; /* reseteamos el arreglo */

        limpiaHTML(); /* eliminamos todo el HTML */

    })
}

// !---------------------FUNTIONS-------------------

function agregarCurso(e) {
    e.preventDefault();   /* prevenimos el comportamiento por default */
    
    if( e.target.classList.contains('agregar-carrito')){
        // console.log(e.target.parentElement);
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
        
    }
}

// !---------------------ELIMINA CURSOS DEL CARRITO---------------

function eliminaCurso(e){
    // console.log("desde eliminar curso.");
    // console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        // console.log(e.target.getAttribute('data-id'));

        const cursoId = e.target.getAttribute('data-id');

        // elimina del arreglo de articulos por el data-id
        articulosCarrito = articulosCarrito.filter( curso =>curso.id !== cursoId);
        // console.log(articulosCarrito);

        carritoHTML(); /* iterar sobre el carrito y mostrar su HTML */
    }
}


// !---------------------FUNCTIONS EXTRACT DATA-------------------

// leer contenido del HTML al que damos click y extrae la informacion del curso

function leerDatosCurso(curso){
    // console.log(curso);
    
    // crear un objeto con el contenido del curso actual
    const infoCurso ={
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id     : curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){
        // actualizamos la cantidad
        const cursos = articulosCarrito.map( curso =>{
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; /* retorna el objeto actualizado */
            }else{
                return curso; /* retorna los objetos que no son actualizados */
            }
        });

        articulosCarrito = [...cursos];

    }else {
        // agregar elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


    

    // console.log(articulosCarrito);
    carritoHTML();

}

// !------------MUESTRA EL CARRITO DE COMPRAS EN EL HTML

function carritoHTML() {

    // limpia el HTML
    limpiaHTML();

    // recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso =>{
        const { imagen, titulo, precio, cantidad, id} = curso;

        const row = document.createElement('tr');
        row.innerHTML = `
          <td><img src="${imagen}" width="100"></td>
          <td>${titulo}</td>
          <td>${precio}</td>
          <td>${cantidad}</td>
          <td>
            <a href="#" class="borrar-curso" data-id=${id}>X</a>
          </td>

        `;

        // agregar el HTML del carrito en el body
        contenedorCarrito.appendChild(row);

    })
}

// !----------DELETE COURSES DEL  TBODY--------------

function limpiaHTML(){
    // !forma lenta
    // contenedorCarrito.innerHTML ='';

    // !forma mas rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}