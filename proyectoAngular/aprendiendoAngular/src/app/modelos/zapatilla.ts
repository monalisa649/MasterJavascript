export class Zapatilla{
  /*  public modelo: string;
    public marca: string;
    public color: string;
    public talla: number;
    public precio: number;

    constructor(modelo, marca,color,talla,precio){
        this.modelo= modelo;
        this.marca = marca;
        this.color= color;
        this.talla= talla;
        this.precio = precio;
    }*/

    //*****para evitar la cantidad de código anterior se puede hacer directamente desde el constructor */

    constructor(
        public modelo: string,
        public marca: string,
        public color: string,
        public talla: number,
        public precio: number
    ){}
}