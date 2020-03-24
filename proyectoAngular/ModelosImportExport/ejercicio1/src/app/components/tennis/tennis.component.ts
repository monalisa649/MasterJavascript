import { Component, OnInit } from '@angular/core';
import { Configuracion } from 'src/app/modelos/configuracion';
import { tennis } from 'src/app/modelos/tenis';

@Component({
  selector: 'app-tennis',
  templateUrl: './tennis.component.html',
  styleUrls: ['./tennis.component.css']
})
export class TennisComponent implements OnInit {
  public zapatillas: Array<tennis>;
  
constructor(){
  this.zapatillas= [
    new tennis('xx','xx',36,'xxx',3900),
    new tennis('xx','xx',36,'xxx', 5000),
    new tennis('xx','xx',36,'xxxx', 2000),
    
    
  ];
}

  ngOnInit(){
    console.log(this.zapatillas);
    
  }

}
