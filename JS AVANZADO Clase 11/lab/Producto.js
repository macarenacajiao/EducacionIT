class Producto {
  constructor(id, title, thumbnail, price, megusta=0){
    this.id = id;
    this.title = title;
    this.thumbnail = thumbnail;
    this.price = price;
    this.megusta = megusta;
  }

  sumarMegusta(){
    this.megusta += 1; //this.megusta = this.megusta + 1;
  }

  armarDom(){
    return `
      <div>
        <img src="${this.thumbnail}">
        <br/>
        ${this.title} ($${this.price})
        <br/>
        <button data=${this.id}>Me gusta +1 </button>
      </div>
    `
  }
}
