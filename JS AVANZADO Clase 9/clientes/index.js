/*
Usen promesas Obtener una lista de clientes de este servicio
    https://jsonplaceholder.typicode.com/users
1) Crear clientes en base a esos datos
2) Mostrar resultados en consola
*/

let clientes = [];

fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())/*convertimos la respuesta de la api a objeto*/
.then(usuarios=>{
    //1)
    usuarios.forEach(u=> clientes.push(new Cliente(u.name, u.username, u.phone, u.website)));/*Paso los parametros para adherir un cliente*/
});

//2)
console.log("Clientes", clientes);