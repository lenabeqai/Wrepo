import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';   
import 'rxjs/add/operator/do';  
  

@Injectable()
export class UserviceService {

  constructor(private http : Http) { }

  //private url : string = "http://localhost:8080/api/getUser";

getusers(){
  
     return this.http.get("http://localhost:8080/api/getUser").map((response: Response)=> response.json());

}





}
