//DOM
const botones = document.querySelector("#botones");
const input = document.querySelector("input");
//EVENTOS
botones.addEventListener("click", handleClick);

//CALLBACKS
function handleClick(e){
	//Solo tomo el valor de los botones y no del html en sí
	if(e.target.type == "submit"){
		console.log("Boton: ", e.target.value);
		//Tomo el value y lo muestro en el Input
		input.value += e.target.value;
	}
}