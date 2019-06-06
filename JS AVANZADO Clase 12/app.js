const express = require('express');
const axios = require('axios')
const app = express();
app.get('/hola', function (req, res){
    res.send('Hello World!');
})

app.get('/', function (req, res){
    console.log("Traes de ML");

    //Armo URL a ML
    const url = "https://api.mercadolibre.com/sites/MLA/search?q=ps4";
    
    //Obtengo el resultado
    axios.get(url)
    .then(response=>{
        console.log(response.status);
        //Le respondo al cliente
        res.send(response.data.results);
    });
})

app.listen(3000); //la app queda esperando por request en el puesto 3000

//ctrl + c