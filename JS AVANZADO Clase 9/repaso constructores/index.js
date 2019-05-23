//Clases ES6

class Persona{
    constructor(nombre, dni){
        this.nombre = nombre;
        this.dni = dni;
    }
    saludar(){
        console.log("Hola! me llamo " + this.nombre);
    }
}

class Cliente extends Persona{
    constructor(nombre, dni, idCliente, metPago){
        super(nombre, dni); /* le paso a mi padre nombre y dni */
        this.idCliente = idCliente;
        this.metPago = metPago;
        this.compras = []; 
    }
    comprar(datosCompra){
        this.compras.push({fecha: Date.now(), ...datosCompra}) /*armamos un objeto nuevo que tenga la fecha + otros atributos*/
    }
}/*la clase cliente hereda de persona*/

/*const p1 = new Persona("Pepe", 111111);
const p2 = new Persona("Pepa", 222222);
const c1 = new Cliente("Juan Perez", 12345678, 1010, "Tarjeta Naranja");*/
 