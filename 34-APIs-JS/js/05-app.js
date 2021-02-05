// !-----DETECTAR SI LA PAGINA ACTUAL ESTA VISIBLE-------


document.addEventListener('visibilitychange' , () => {
    console.log(document.visibilityState);
})