let productos = [];
//Traer los datos de la búsqueda

//DOM
const btnBuscar = document.querySelector("button.buscar");
const input = document.querySelector("input[name=q]");
const btnFinalizar = document.querySelector("button.finalizar");
const resultados = document.querySelector("div.resultados");
//EVENTOS
btnBuscar.addEventListener("click", handleSearch);
resultados.addEventListener("click", handleClick);

//CALLBACKS
function handleSearch(){
    fetch("https://api.mercadolibre.com/sites/MLU/search?q="+input.value) /*fetch devuelve una promesa*/
    .then(response=>response.json())
    .then(items=>{
        console.log(items.results);
        //Construir objetos de tipo producto
        items.results.forEach(i => productos.push(new Producto(i.title, i.thumbnail, i.price))); /* por cada vuelta del forEach le agregamos un nuevo producto al array */
        //Renderizo cada producto en el dom
        productos.forEach(p=>resultados.innerHTML += p.armarDOM());

    })
}

function handleClick(e){
    if(e.target.type==="submit"){
        console.log("Me gusta +1");
    }
}