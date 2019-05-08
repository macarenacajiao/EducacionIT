//AJAX, Async. JS And XML
const url = "https://jsonplaceholder.typicode.com./users";
const ajax = new XMLHttpRequest();
ajax.open("GET", url);

//Listener
ajax.addEventListener("load", recibirDatos);
ajax.addEventListener("error", mostrarError);

//send!
ajax.send();
console.log("Primer intento. Server dice:", ajax.responseText);

//Callback
function recibirDatos(){
  if(ajax.status == 200){
    console.log("Callback Server dice:", JSON.parse(ajax.responseText));
  }else{
    mostrarError();
  }
}

function mostrarError(){
  console.error("Problemas...");
}
