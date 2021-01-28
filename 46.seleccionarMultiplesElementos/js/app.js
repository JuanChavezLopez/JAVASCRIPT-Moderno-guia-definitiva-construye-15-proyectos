//! HACER CONSULAS A  MULTIPLES ELEMENTOS

// var enlaces = document.getElementsByClassName('enlace')[4];
// enlaces.style.background = '#333';
// enlaces.textContent ='Nuevo enlace';

// console.log(enlaces);





//! MESCLAR QUERY SELECTOR CON getElementsByClassname

const listEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');

// console.log(listEnlaces);


// LISTA DE ENLACES
const links = document.getElementsByTagName('a');
// links[18].style.color= 'red';
// links[18].style.background ='black';
// links[18].innerText ='Juan';
// links[18].textContent ='Rares';

let enlaces = Array.from(links);

enlaces.forEach(function(enlace){
    // console.log(enlace.textContent);
})

// console.log(enlaces);


//!S ----------------------QUERYSELECTOR ALL-----------------------------------


const all = document.querySelectorAll('img');
all[1].style.background ='red'
all[1].style.color ='white'

// console.log(all)


const enlacesImpares = document.querySelectorAll('#principal a:nth-child(odd)');

enlacesImpares.forEach(function(impares){
    impares.style.background ='red';
    impares.style.color ='white';
});
console.log(enlacesImpares);