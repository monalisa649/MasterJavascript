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
  public nuevaMarca:string;
  
  
constructor(){
  //this.color = "red";
  this.marcas = new Array();
  this.zapatillas= [
    new tennis('Nike','xx',36,'xxx',3900, false),
    new tennis('Adidas','xx',36,'xxx', 5000, true),
    new tennis('Reebok','xx',36,'xxxx', 2000, false),
    new tennis('Nike','xx',36,'xxx',3900, true),
    new tennis('Adidas','xx',36,'xxx', 8000, true),
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

  guardarMarca(){
    this.marcas.push(this.nuevaMarca);
    console.log(this.marcas)
  }
  eliminarMarca(index){
    this.marcas.splice(index, 1);
  }

  onBlur(){
console.log("has salido del input");
  }

  onKeyup(){
    alert(this.nuevaMarca);
  }
}
