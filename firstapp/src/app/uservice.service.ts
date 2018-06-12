import { Injectable } from '@angular/core';
import {Http,HttpModule,Response, Headers, RequestOptions } from '@angular/http';   
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';   
import 'rxjs/add/operator/do';  
import { HttpClient } from 'selenium-webdriver/http';
  

@Injectable()
export class UserviceService {

  constructor(private http : Http) { }

  private url : string = "http://localhost:8001/api/getUser";
  
getusers(){
  
     return this.http.get(this.url).map((response: Response)=> response.json());

}
deleteUser(id){   
  return this.http.post('http://localhost:8001/api/deleteUser/',{'id': id})  
          .map((response: Response) =>response.json())               
} 


}
