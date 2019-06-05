//Ejemplo de uso de LocalStorage

//Agregar item
window.localStorage.setItem("data","Pepito");

//Leer item
const data = window.localStorage.getItem("data");
console.log("data",data);

//Borrar Item
//localStorage.removeItem("data");

/////////////////////////////////////////////////////////

//Utilizar session Storage
//window.sessionStorage.setItem("dataS","PepitoS");
const dataS = window.sessionStorage.getItem("dataS");
console.log("dataS",dataS);

/////////////////////////////////////////////////////////
//Persistir Objetos
const obj = {
  id: 19191,
  nombre: "Champù",
  cantidad: 100
}

localStorage.setItem("obj", JSON.stringify(obj));
const nuevoObj = JSON.parse(localStorage.getItem("obj"));
console.log(nuevoObj);


//////////////////////// Performance. Chrome
https://googlechrome.github.io/devtools-samples/jank/
