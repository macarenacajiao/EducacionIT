class Producto{
    constructor(id, title, thumbnail, price){
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.price = price; 
        this.megusta = 0; /*Incializa contador de me gusta*/
    }
    sumarMegusta(){
        this.megusta += 1; /*Suma e incrementa el valor (+-) (igual a this.megusta = megusta +1;)*/
    }
    armarDOM(){
        return `
            <div>
                <img src="${this.thumbnail}">
                <br>
                ${this.title} ($${this.price})
                <br>
                <button data=${this.id}>Me gusta +1</button>
            </div>
        `
    }
}

