//Arrays
/*const nombres = ['Ana','Pepe','Marcelo','Lucia'];
nombres.push('Tito', 'Lucas');
console.log(nombres);
*/
//Spread operator, me permite "clonar" un array, por ejemplo
/*console.log('spread operator',...nombres);
const otrosNombres = ['Lucho',...nombres];
console.log(otrosNombres);
*/
///////////////////////////////////////
/*
  En JS no podemos copiar variables por valor, se copia la referencia.
*/
/*let backup = nombres;
backup.push(234234234234,343434);
console.log(nombres == otrosNombres);
/////////////////////////////////////////
*/

//JSON: JS Object Notation
const cliente = {
  nombre : 'Pepe',
  apellido: 'Perez',
  dni: 92992929,
  verSaldo : function(){
    console.log('Su saldo es: 1000');
    return true;
  }
}

//console.log(cliente.nombre, cliente.apellido, cliente.verSaldo());

//////// JSON Serializar
const txtCliente = JSON.stringify(cliente);
//console.log(txtCliente, cliente);

cliente.email = "demo@demo.com";
cliente.dni = 11111111;

const otroCliente = JSON.parse(txtCliente);
//console.log(otroCliente, cliente);

const compra = {
  idCompra: 111111,
  destino: 'BRA',
  cliente: cliente,
  acomp: [
    {idPersona: 19191, nombre:'Juan'},
    {idPersona: 19191, nombre:'Ana'}
  ]
}

console.log(compra);
/////////////////////////////////////////////////
