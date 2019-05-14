const url = "https://picsum.photos/id/568/1200/800";
const ajax = new XMLHttpRequest();
ajax.open("get", url);
ajax.addEventListener("load", loadHandler);
ajax.responseType = "blob"; //Seteo el tipo de respuesta, le dice que es un archivo binario
ajax.send();

function loadHandler() {
    if (ajax.status === 200) {
        const urlObject = URL.createObjectURL(ajax.response); /*no es un texto, no es un objeto, entonces lo pasamos como response*/
        //const img = document.createElement("img"); /*para el ejemplo de la imagen*/
        const a = document.createElement("a");
        //img.src = urlObject;
        a.innerText = "Descargar el archivo";
        href =urlObject;
        document.querySelector("div.imagen").appendChild(img);
    }
}