// !------LEER DATOS DEL LOCALSTORAGE----

const producto = localStorage.getItem('producto');
console.log(producto);
console.log(JSON.parse(producto));

const meses = localStorage.getItem('meses');
console.log(meses);
const mesesArray = JSON.parse(meses)
console.log(mesesArray);
