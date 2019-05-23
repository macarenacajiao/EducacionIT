//Clases ES6

class Persona{
    constructor(nombre, username){
        this.nombre = nombre;
        this.username = username;
    }
    saludar(){
        console.log("Hola! me llamo " + this.nombre);
    }
}

class Cliente extends Persona{
    constructor(nombre, username, phone, website){
        super(nombre, username); /* le paso a mi padre nombre y dni */
        this.phone = phone;
        this.website = website;
    }
    comprar(datosCompra){
        this.compras.push({fecha: Date.now(), ...datosCompra}) /*armamos un objeto nuevo que tenga la fecha + otros atributos*/
    }
}/*la clase cliente hereda de persona*/