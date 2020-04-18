import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../modelos/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
public user:Contacto;
  constructor() {

    this.user=new Contacto('','','');
  
  }

  ngOnInit(): void {
  }
onSubmit(formcontato){
  console.log(this.user);
  formcontato.reset();//Para dejar los input en limpio, de debe usar cuando los datos ya se han guardado en una base de datos con anterioridad
}
}
