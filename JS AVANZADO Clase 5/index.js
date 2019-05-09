//1- DOM
const btn = document.querySelector("button");
const div = document.querySelector(".resultados");

//2- EVENTOS
btn.addEventListener("click", handleClick);


//3- CALLBACKS
function handleClick() {
    const ajax = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/users";

    ajax.open("get", url); /*El true bloquea el thread, bloquea a la espera de una respuesta*/
    ajax.addEventListener("load", handleLoad);
    ajax.addEventListener("error", handleError);
    ajax.send(); /*enviar los datos del url que cargamos*/
    //
    function handleLoad() {
        /*Este código se ejecuta cuando el serves contesta*/
        if (ajax.status === 200) {
            const users = (JSON.parse(ajax.responseText)); /*guardarlo en la constante*/
            div.innerHTML = ""; /*esto hace que cuando apreto el boton go pare de mostrar el div*/
            /*Para tranfosrma de objeto a texto. JSON.stringify*/

            /*Recorro la coleccion de usuarios y genero la lista automaticamente*/
            users.forEach(user => crearListadoResultados(user));
        } else {
            handleError();
        }
    }

    function handleError() {
        console.error("Ups!");
    }
} //fin de handleClick

//HELPERS
function crearListadoResultados(u) {
    const p = document.createElement("p");
    p.innerHTML = `<b> ${u.name} / (${u.email}) </b>`;
    div.appendChild(p);
}


/*XMLHttpRequest invocas al obejto XHR para hacer la comunicación*/
/*el único error para Ajax es que no le hayan respondido desde el servidor*/
/*la triple igualdad === valor y tipo de dato*/