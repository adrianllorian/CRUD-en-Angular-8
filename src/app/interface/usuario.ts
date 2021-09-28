/*Creo la clase Usuario con sus metodos*/ 
export class Usuario{
    id:number;
    nombre:string;
    apellido:string;
    email:string;

    /*Construyo el constructor que espera los datos cuando creo un objeto*/ 
    constructor(id, nombre, apellido, email){
        this.id = id;
        this.nombre= nombre;
        this.apellido = apellido;
        this.email= email;
    }
    
}
