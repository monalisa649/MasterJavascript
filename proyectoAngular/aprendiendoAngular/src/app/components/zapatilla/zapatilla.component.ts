import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../../modelos/zapatilla';

@Component({
  selector: 'app-zapatilla',
  templateUrl: './zapatilla.component.html',
  styleUrls: ['./zapatilla.component.css']
})
export class ZapatillaComponent implements OnInit {
public titulo:string= "Componentes de zapatillas";
public zapatillas: Array<Zapatilla>;
  constructor() { 
    this.zapatillas= [
      new Zapatilla('Tornis', 'Reebook', 'negro',49,300)
    ];
  }

  ngOnInit(): void {
    console.log(this.zapatillas);
  }

}
