import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './User';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class LoginService {
  private loginURL='http://localhost:8080/InfyCars_BackEnd/CarsAPI/getAllCars';
  constructor(private http: Http) { }

  login(data: any): Promise<User> {
    return this.http.post(this.loginURL,data)
                    .toPromise()
                    .then(response=> <User>response.json())
                    .catch(this.handleError);
   }
 
   handleError(error:any){
     return Promise.reject(error.json() || error);
   }
}
