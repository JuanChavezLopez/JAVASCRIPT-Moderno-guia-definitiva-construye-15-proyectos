localStorage.setItem('nombre', 'juan');

const producto = {
    nombre : "Monitor 24 pulgadas",
    precio: 300
}


// !------CONVERTIMOS A STRING UN OBJETO Y LUEGO LO PODEMOS ALMACANAR EN EL LOCAL STORAGE
const productoString = JSON.stringify(producto);
console.log(productoString);

localStorage.setItem('producto', productoString);



// !--ALMACENANDO ARREGLO AL LOCALSTORAGE

const meses = ['enero', 'febrero', 'marzo'];

const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString)