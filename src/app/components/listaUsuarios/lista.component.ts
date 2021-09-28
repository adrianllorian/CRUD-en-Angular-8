import { Component ,Input,OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'
import { Usuario } from 'src/app/interface/usuario';


@Component({
  selector: 'lista',
  templateUrl: './lista.component.html'
 
})

export class Lista{
    constructor(private _dataService:DataService){
      
    }

/*Array donde se cargara con los datos del observave para luego pasarlos a la vista*/ 
usuario:Usuario[];


id:number;
nombre:string;
apellido:string;
email:string;


/*Suscripcion al Read del CRUD del Observable */ 
ngOnInit(){
  this._dataService.readAlmacen().subscribe(
  
  dpts=> this.usuario= dpts
  );

  console.log("Los datos que llegan son  " + this.usuario);
  }

  delete(id:number){
    this._dataService.delAlmacen(id);
  }

  update(id:number){
    this._dataService.updateAlmacen(id);
  }


}
