// !-------DELETE FROM LOCALSTORAGE-------

localStorage.removeItem('nombre');



// !-------ACTUALIZAR UN REGISTRO------

const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);

mesesArray.push('Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre');
localStorage.setItem('meses', JSON.stringify(mesesArray));


// !------DELETE ALL--------

localStorage.clear();