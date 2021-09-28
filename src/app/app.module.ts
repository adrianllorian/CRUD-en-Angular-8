import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Formulario} from '../app/components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { Lista } from '../app/components/listaUsuarios/lista.component';

const appRoutes: Routes = [{
  path: 'formulario', component: Formulario },
  {path: 'lista', component: Lista},
  { path: '', component: Lista, pathMatch:'full'},
  { path: '**', redirectTo:'/', pathMatch:'full'}]

@NgModule({
  declarations: [
    AppComponent,
    Lista,
    Formulario
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
