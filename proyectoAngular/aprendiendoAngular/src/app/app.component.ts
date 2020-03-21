import { Component } from '@angular/core';
import { Configuracion } from './modelos/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title: string;
 public  descripcion: string; 

  constructor(){
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }
}
