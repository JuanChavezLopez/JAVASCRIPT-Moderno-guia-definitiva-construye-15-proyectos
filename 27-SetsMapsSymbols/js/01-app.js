!-------uso de sets------

const carrito = new Set();


carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #4');
carrito.add('Disco #4');
carrito.add('Disco #4');
carrito.add('Disco #4');


console.log(carrito);
console.log(carrito.has('Camisa'));
carrito.forEach( producto => {
    console.log('Que bonito: '+producto);
})
// console.log(carrito.delete('Camisa'));
console.log(carrito);
// carrito.clear();
console.log(carrito);

console.log(carrito.size);


