import { Injectable } from '@angular/core';
import { tennis } from '../modelos/tenis';

@Injectable()

export class ZapatillaService{
    public zapatillas: Array<tennis>;
    
    constructor(){
        this.zapatillas= [
            new tennis('Nike','xx',36,'xxx',3900, false),
            new tennis('Adidas','xx',36,'xxx', 5000, true),
            new tennis('Reebok','xx',36,'xxxx', 2000, false),
            new tennis('Nike','xx',36,'xxx',3900, true),
            new tennis('Adidas','xx',36,'xxx', 8000, true),
            new tennis('Reebok','xx',36,'xxxx', 2000, false),
            
            
          ];
    }

    getZapatillas(): Array<tennis>{
        return this.zapatillas;
    }
}
