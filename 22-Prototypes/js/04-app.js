

function Cliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}


// !AGREGAR PROTOTYPE

Cliente.prototype.tipoCliente = function() {
    // console.log(this.saldo); /* con arrow function no puede acceder a su this */
    let tipo;
    
    if(this.saldo > 1000 ){
        tipo= 'Gold'
    }else if(this.saldo >5000) {
        tipo = 'Platinum'
    }else { 
        tipo = 'Normal'
    }
    
    return tipo; /* resolta solo un valor */
}

// !AGREGAR PROTOTYPE
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}


// !-------PERSONA------

function Persona (nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo); /* estamos heredando el constructor */
    // this.nombre = nombre;
    // this.saldo = saldo;
    this.telefono = telefono;
       
}


Persona.prototype = Object.create(Cliente.prototype); /* heredan las funciones de cliente */
Persona.prototype.constructor = Cliente;
// instanciarlo

const juan = new Persona('Juan', 5000, 4874746747);
console.log(juan);


Persona.prototype.mostrarTelefono= function () {
    return `El telefono de esta persona es ${this.telefono}`
}

console.log(juan.mostrarTelefono())