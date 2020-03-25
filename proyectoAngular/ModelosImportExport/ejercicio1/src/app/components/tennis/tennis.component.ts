import { Component, OnInit } from '@angular/core';
import { Configuracion } from 'src/app/modelos/configuracion';
import { tennis } from 'src/app/modelos/tenis';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-tennis',
  templateUrl: './tennis.component.html',
  styleUrls: ['./tennis.component.css']
})
export class TennisComponent implements OnInit {
  public zapatillas: Array<tennis>;
  public marcas:String[];
  public color: String;
  
  
constructor(){
  this.color = 'yellow';
  this.marcas = new Array();
  this.zapatillas= [
    new tennis('Nike','xx',36,'xxx',3900, false),
    new tennis('Adidas','xx',36,'xxx', 5000, true),
    new tennis('Reebok','xx',36,'xxxx', 2000, false),
    new tennis('Nike','xx',36,'xxx',3900, true),
    new tennis('Adidas','xx',36,'xxx', 5000, true),
    new tennis('Reebok','xx',36,'xxxx', 2000, false),
    
    
  ];
}

  ngOnInit(){
    console.log(this.zapatillas);
    this.GetMarca();
    
  }
  GetMarca(){

    this.zapatillas.forEach((zapatilla, index)=>{
      if(this.marcas.indexOf(zapatilla.marca) <0){
        this.marcas.push(zapatilla.marca);
      }
      
      console.log(index);
    });
    console.log(this.marcas);
  }
}
