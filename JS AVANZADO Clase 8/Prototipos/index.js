//document.addEventListener("DOMContentLoad", init);

const persona = {
    nombre: "Macarena",
    dni: 12345678,
    saludar:()=>{
        console.log("Hola");
    }
}
const c1 = Object.create(persona);
const c2 = Object.create(persona);

console.log(c1,c2);

//Acceder a prototipos
c1.__proto__.nombre = "Macarena"; /*Accede a una instancia*/
persona.nombre = "Macarena"; /*Escribo en el prototipo de persona*/

//Funciones
const sumar = (a,b)=>a+b;
const restar = (a,b)=>a-b;

const calculadora = (operacion, a, b)=>operacion(a,b);

console.log(calculadora(sumar, 10, 10)); //20
console.log(calculadora(restar, 100, 20)); //80

const demo = (a,b) => console.log(a,b);
demo(1,2,3,4,5,6); /*Va a tomar los dos primeros datos*/

//Scope (alcance) es la visibilidad de las variables desde una función
function saludar(nombre){
    const saludar = "Holis" + nombre;

    function ejecutarSaludar(){
        console.log(aSaludar);

    }
}