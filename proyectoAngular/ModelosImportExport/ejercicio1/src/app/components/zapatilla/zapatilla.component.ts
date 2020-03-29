import { Component, OnInit } from '@angular/core';
import { Router,  Params, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-zapatilla',
  templateUrl: './zapatilla.component.html',
  styleUrls: ['./zapatilla.component.css']
})
export class ZapatillaComponent implements OnInit {
public nombre: string;
public edad: number;

  constructor( public route: ActivatedRoute, public router: Router) {

   }

  ngOnInit(): void {
this.route.params.subscribe((params:Params)=>{
  this.nombre = params.nombre;
  this.edad = +params.edad; //params devuelve datos tipo string con el + devuelve un number, declarar number en la propiedad de la clase
  console.log(this.nombre, this.edad);
});

  }
redirigir(){
  this.router.navigate(['/tennis']);
}
}
