/*
url: https://api.mercadolibre.com/sites/MLA/search?q=chromecast
1- Construir la maqueta del form y resultados 
2- Cuando el usuario hace click en buscar... obtener de la API el Json con los resultados
de la busqueda
3- Recorrer los resultados y mostrarlos en el dom
*/

//DOM
const txt = document.querySelector("input[name=txt]");
const btn = document.querySelector("button");
const resultados = document.querySelector(".resultados")

//Eventos
btn.addEventListener("click", handleClick);

//Callbacks
function handleClick() {
    const url = "https://api.mercadolibre.com/sites/MLA/search?q=" + txt.value;
    const ajax = new XMLHttpRequest();
    ajax.open("get", url);
    ajax.addEventListener("load", responseAjax);
    ajax.send();

    function responseAjax(){
        if (ajax.status === 200) {
            const productos = JSON.parse(ajax.responseText);
            console.log(productos);
            resultados.innerText = "";

            // Generar listado
            productos.results.forEach(item => {
                armarDOM(item);
            })
        }
    }

    function armarDOM(producto) {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const p = document.createElement("p");
        img.src = producto.thumbnail;
        img.alt = producto.title;
        p.innerHTML =` 
            <a href ='${producto.permalink}'>${producto.title}</a>
            ($ ${producto.price})`; 
        div.appendChild(img);
        div.appendChild(p);
        resultados.appendChild(div);
    } /*en esta funcion armamos la caratula del producto dentro del hmtl*/
}