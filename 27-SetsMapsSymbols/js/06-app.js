const aplicarDescuento = new Promise((resolve, reject) =>{
    const descuento = false;

    if(descuento) {
        resolve('Descuento aplicado;');
    }else{
        reject('Descuento no aplicado;');

    }
})

aplicarDescuento
    .then(resultado => descuento(resultado))
    .catch( error => console.log(error))


// hay 3 valores posibles

// fulfield, reject, pending

function descuento(mensaje){
    console.log(mensaje);
}