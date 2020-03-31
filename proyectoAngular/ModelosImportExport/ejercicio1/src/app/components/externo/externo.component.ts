import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/services/peticion.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionService],

})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId:any;

  constructor(public peticionService: PeticionService) {
    this.userId = 1;
   }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){

    this.peticionService.getUser(this.userId)
      .subscribe(
        result => {
          this.user = result.data;
          console.log(this.user);

        },
        error => {
          console.log(<any>error);

        }


      );
  } 
  
}
