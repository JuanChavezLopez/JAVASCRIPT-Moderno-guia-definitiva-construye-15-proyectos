

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

// !---instanciamos el objeto
const pedro = new Cliente('Pedro', 6000);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retiraSaldo(1000);
console.log(pedro.nombreClienteSaldo());

console.log(pedro);


// !------------------------------------------------------------------
// !   podemos darnos cuenta que no existe mas nuevos prototypes creados para Empresa
// function Empresa (nombre, saldo, categoria) {
//     this.nombre = nombre;
//     this.saldo = saldo;
//     this.categoria = categoria;
// }

// const CCJ = new Empresa ('Codigo con Juan', 4000, 'Cursos en Linea');
// console.log(CCJ)