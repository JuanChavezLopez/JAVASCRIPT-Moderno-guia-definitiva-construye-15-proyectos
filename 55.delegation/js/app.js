// !-------------DELEGATION -----------------

document.body.addEventListener('click', eliminarElemento);

function eliminarElemento(e){

    e.preventDefault();
    // console.log('click!!');
    // console.log(e.target.classList);

    if(e.target.classList.contains('borrar-curso')){
        console.log(e.target.parentElement.parentElement.remove());
    }
    if(e.target.classList.contains('agregar-carrito')){
        console.log('Curso agregado..!');
    }
}