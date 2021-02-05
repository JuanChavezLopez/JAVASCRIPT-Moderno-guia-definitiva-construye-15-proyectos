// !------------CLASS DECLARATION--------------
class Cliente {
    #nombre;

    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }
    
    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }
    
    static bienvenida() {
        return `Bienvenido  al cajero.`;
    }
    
}

const juan = new Cliente('juan', 200);
console.log(juan.mostrarInformacion());
console.log();
// console.log(juan.#nombre); /* ni podemos acceder xq es una propiedad privada */


