//Node JS
const moment=require('moment');

//No existe window, existe process! como objeto global
console.log("Desde Node!", process);
const nombres = ["Macarena", "Lucas", "Juan", "Belén"];

nombres.forEach(nombre=>console.log(`Hola ${nombre}`));

//Moment
console.log(moment().startOf('day').fromNow());

console.log(moment().format()); 