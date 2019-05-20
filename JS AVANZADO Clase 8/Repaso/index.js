const url = "https://api.mercadolibre.com/sites/MLA/search?q=chromecast";
const div = document.querySelector(".resultados");
/*Uso fetch que implementa promesas*/ 
fetch(url)
.then(response=>response.json())
.then(mercadoLibre=>{
    //console.log(mercadoLibre);
    mercadoLibre.results.forEach(item =>{
        const contenedor = document.createElement("div");
        contenedor.innerHTML = `${item.title} - ${item.price}<hr>`;
        div.appendChild(contenedor);
    });

})