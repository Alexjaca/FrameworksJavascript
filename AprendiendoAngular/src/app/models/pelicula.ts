export class Pelicula{

    /*public title: string;
    public year: number;
    public image: string;

    constructor(title="", year=0, image=""){
        this.title = title;
        this.year = year;
        this.image = image;

    }*/

    /* DOS FORMAS DE DEFINIR EL MODELO Y PASARLE LOS ATRIBUTOS */
    
    constructor(
        public title: string,
        public year: number,
        public image: string){

    }
}