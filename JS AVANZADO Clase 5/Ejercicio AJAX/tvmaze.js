/*
	1. cuando el usuario haga click en "buscar"
	obtener los datos de búsqueda del usuario y armar la url correspondiente
	2. obtener el listado de resultados de TVMAZE
	3. mostrar al usuario un listado de resultados
	imagen serie // nombre
*/
const url = ('https://www.tvmaze.com/shows?q=')

//1- DOM
const btn = document.querySelector("button");
const div = document.querySelector(".resultados");
const txt = document.querySelector("input");

//2- EVENTOS
btn.addEventListener("click", handleClick);

//3- CALLBACKS
function handleClick() {
    const ajax = new XMLHttpRequest();
    ajax.open("get", url + txt.value);
    ajax.addEventListener("load", handleLoad);
    ajax.addEventListener("error", handleClick);
    ajax.send();

    function handleLoad() {
        if (ajax.status === 200) {
            div.innerHTML = "";
            const series = JSON.parse(ajax.responseText);
            console.log(series);
            series.forEach(serie => armarListado(serie));
        }
    }
}

//HELPERS
function armarListado(serie) {
    const p = document.createElement("p");
    p.innerHTML = `<h2>${serie.show.name}</h2>
	<br/>
	<img src="${serie.show.image.medium}" alt="${serie.show.name}">`
    div.appendChild(p);

}