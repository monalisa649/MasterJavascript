import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';

@Injectable()

export class PeticionService{
public url: string;
    constructor(public http:HttpClient){
this.url = "https://reqres.in/";
    }

    getUser(userId): Observable<any>{
        return this.http.get(this.url+'api/users/'+userId);
    }

    addUser(user):Observable<any>{
        let params= JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        

        return this.http.post(this.url+'api/users', params, {headers: headers});
    }
}