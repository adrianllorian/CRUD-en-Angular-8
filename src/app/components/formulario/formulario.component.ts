import {Component, Output} from "@angular/core";
import {Usuario} from "src/app/interface/usuario";
import {DataService} from "../../services/data.service";
import { EventEmitter } from 'protractor';
import { from } from 'rxjs';


@Component({
    selector: 'formulario',
    templateUrl:'./formulario.component.html'
})
/*Extiendo la clase Data Service donde esta el array del almacen */ 
export class Formulario{
 
 constructor( public dataService:DataService){
   /*Traigo los metodos de Data Service*/ 
  
 }
 /*Recojo los valores del formulario*/
 id:number;
 nombre:string;
 apellido:string;
 email:string;
 botonSubmit:string;

 /*Creo un objeto de la Clase Usuario*/ 
usuario:Usuario = new Usuario(this.id, this.nombre, this.apellido, this.email);

downUser:Usuario;

downUsuarios:Usuario[];
/*Metodo para agregar el usuario del formulario al Observable*/ 
add(user:Usuario){

    this.dataService.addAlmacen(user);
    
   
}

ngOnInit(){
    delete this.usuario.id;
    delete this.usuario.nombre;
    delete this.usuario.apellido;
    delete this.usuario.email;
    delete this.downUser;
    this.downUser = this.dataService.downloadUsuario();
    this.botonSubmit = "Crear Usuario";
    if(this.downUser!=null){
      this.usuario = this.downUser;
      this.botonSubmit = "Guardar Cambios";

    }
  else{
    this.dataService.readAlmacen().subscribe(
  
      dpts=> this.downUsuarios= dpts
      );
          this.usuario.id= this.downUsuarios.length;
  }
  
  
}
     

   
}
