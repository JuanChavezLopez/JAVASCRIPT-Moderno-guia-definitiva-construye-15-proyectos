// !------------CLASS DECLARATION--------------
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    
    static bienvenida() {
        return `Bienvenido  al cajero.`;
    }
    
}
// !-------------HERENCIA-------------

class Empresa extends Cliente {
    
    constructor( nombre, saldo, telefono, categoria){
        super( nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
    
    static bienvenida() {
        return `Bienvenido  al cajero de empresa.`;
    }

}

const juan = new Cliente('Rares', 400);
console.log(juan)
console.log(juan.mostrarInformacion())
console.log(Cliente.bienvenida());

const empresa = new Empresa ('Codigo con juan', 600, 3333333,'personal');
console.log(empresa.mostrarInformacion());
console.log(Empresa.bienvenida());



