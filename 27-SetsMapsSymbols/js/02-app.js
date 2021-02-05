// !--------weakset------

const weakset = new WeakSet();

const cliente = {
    nombre: 'juan',
    saldo: 100
}

weakset.add(cliente);
console.log(weakset);