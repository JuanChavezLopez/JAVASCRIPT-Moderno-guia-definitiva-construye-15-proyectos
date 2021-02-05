
// !---CONSTRUCTOR----
function Cliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// !INSTANCIAMOS Y CREAMOS UN OBJETO
const juan = new Cliente('Juan', 500);
const rares = new Cliente('Rares', 500);


// !CREAMOS UNA FUNCION
function formatearCliente( cliente) {
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`
}

// !IMPRIMIMOS LLAMANDO A LA FUNCION Y PASANDO UN PARAMETRO
console.log(formatearCliente(juan));
console.log(formatearCliente(rares));