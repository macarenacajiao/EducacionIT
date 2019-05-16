/*La promesa es un objeto que tiene tres estados
- pending 
- reject
- resolve
Fetch es un objeto nativo VANILLA*/
//Login

/*ajaxLogin.addEventListener("load", ()=>{
	const login = "";
	ajaxUser.addEventListener()

})*/
const cat = "https://api.thecatapi.com/v1/images/search";
const dog = "https://api.thedogapi.com/v1/images/search";
let imgs = [];
//console.log(fetch(url)); /*ya sabe que es get, sino hay que pasarle un parametro que es un objeto json con el method post*/
/*la llamada fetch devuelve un objeto promesa*/
fetch(cat)
.then(response=>response.json())
.then(gatito=>{
	console.log("Recibo gatito");
	const url = gatito[0].url;
	imgs.push(url);
})
.then(()=>fetch(dog))
.then(response=>response.json())
.then(perrito=>{
	console.log("Recibo perrito");
	const url = perrito[0].url;
	imgs.push(url);
})
.then(()=>{
	console.log("Creo imagen");
	document.querySelector("body").innerHTML = 
	`Gato: <img src=${imgs[0]} />
	Perro: <img src=${imgs[1]} />`;
})

.catch(err=>console.error("Reject", err));
 /*responde de readable string a json*/
//.then(gatito=>console.log("Gatito", gatito)); /*el return está implícito en la arrowFunction*/