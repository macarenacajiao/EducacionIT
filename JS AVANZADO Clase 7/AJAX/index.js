/*1- Luego de un evento o de cargar la página, obtener un json del servicio externo
https://api.thedogapi.com/v1/images/search
2- Mostrar en el DOM 
Raza (name) 
Temperament (temperament)
- image
3 - Listo!
*/

//Armo el objeto AJAX
const ajax = new XMLHttpRequest(); /*la función constructora me va a devolver un elemento*/
ajax.open("GET", "https://api.thedogapi.com/v1/images/search");
ajax.addEventListener("load", handleLoad);
ajax.send(); /*send envia la respuesta del servidor*/

function handleLoad() {
    if (ajax.status === 200) {
        const perrito = JSON.parse(ajax.responseText);
        console.log(perrito);

        //Control del JSON
        if (perrito[0].breeds.length > 0) {
            console.log(perrito[0].url, perrito[0].breeds[0].name, perrito[0].breeds[0].temperament);
            armarDOM(perrito[0].url, perrito[0].breeds[0].name, perrito[0].breeds[0].temperament);
        } else {
            console.log("No hay datos", perrito[0].url);
            armarDOM(perrito[0].url, 'N/A', 'N/A');
        }//fin if control
    }//fin if ajax.status
}//fin function

/*Helpers*/
function armarDOM(url, nombre, temperamento) {
    const datos = `
<div>
	<h2>${nombre}</h2>
<hr>
<div>Comportamiento: ${temperamento}
	<div>
		<img src="${url}" alt="${nombre}"/>
	</div>
</div>
</div>
	`;//Template Strings
	document.querySelector("div.resultado").innerHTML=datos;
}