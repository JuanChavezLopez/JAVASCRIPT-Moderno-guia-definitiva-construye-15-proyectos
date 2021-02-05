const diaHoy = new Date();
moment.locale('es');


// console.log(moment().format('MMM D YYYY H:MM:SS'));
console.log(diaHoy);
console.log(moment().format('LLL', diaHoy));
console.log(moment().add(3, 'days'). calendar());