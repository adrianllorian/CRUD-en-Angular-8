import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';
import{Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/*Creo un observable para tener un almacen con un CRUD*/ 
export class DataService {

  /*Un array de Usuarios donde van a estar los datos de los ususarios del formulario */ 
almacen:Usuario[] =[]
usuario:Usuario;


  constructor() { }

/*CRUD*/ 

/*Create*/
addAlmacen(usuario:Usuario){
this.almacen.push(usuario);
console.log("Añadido");
console.log("EL id del alamcen es " + this.almacen);
}

/*Delete*/
delAlmacen(id:number){
this.almacen.splice(id,1);
}

/*Read*/ 
readAlmacen():Observable<Usuario[]>{
  console.log(this.almacen[0]);
  return of(this.almacen);
}

/*Update*/ 
updateAlmacen(id:number){
  this.usuario=this.almacen[id];
  this.almacen.splice(id,1);

}

downloadUsuario(){
  return this.usuario;
}



}
