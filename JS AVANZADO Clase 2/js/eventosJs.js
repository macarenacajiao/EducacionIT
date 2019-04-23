//JS
/*Estructura del código Vanilla en la web*/

// Paso 1 : Posicionarse en el DOM
let btn = document.querySelector("button");
let nombre = document.querySelector("input[name=nombre]");//hace que se pare en el tipo nombre sobre el atributo name
let select = document.querySelector("select");
const email = document.querySelector("input[name=email]")
//const send = document.querySelector("button[name=send]"); lo comneto pq en el html no esta
const div= document.querySelector("div[c1]");

// Paso 2 : Manejo de Eventos
//btn.onclick = handleClick; /*sacarle los parentesis, sino la ejecuta ni bien la lee*/
btn.addEventListener("click", handleClick);
btn.addEventListener("click", handleClick2);
nombre.addEventListener("focus", handleFocus);
email.addEventListener("blur", handleBlur);
nombre.addEventListener("blur", handleBlur);
select.addEventListener("change", handleChange);
//send.addEventListener("click", handler);
div.addEventListener("click", handler);

// Paso 3 : Callbacks
function handleClick(){
	console.log("Desde Callback");
}
function handleClick2(){
	console.log("Desde Callback 2");
}
function handleFocus(e){
	console.log("Desde focus!" + e.target.value, e); //target apunta al elemento, con la e puedo acceder a la info del evento
}
function handleBlur(e){
	console.log ("Desde blur!" + e.target.value);
}
function handleChange(){
	console.log ("Desde change!" + select.value); //lo concatenamos al valor y lo muestra
}
function handler(e){
	//e.stopPropagation(); /// si hay otros listeners no los ejecuta, para el bubbling
	console.log(e.type, e.target);
}