import { Component, OnInit } from '@angular/core';
import {UserviceService} from'./uservice.service';
import {SearchByNamePipe} from './search-by-fname.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 


  constructor(private userviceService : UserviceService){

  }
  
  users= [];
  
 ngOnInit(){
   
    this.userviceService.getusers().subscribe(Response => this.users = Response);


  }







  delete = function(id,index) {  
    this.userviceService.deleteUser(id)  
    .subscribe(data =>   
    
      this.result=data
    )
    this.users.splice(index,1);
 
   
  
  
    }  
  
   
    //arr=[]
  applyfilter( arr,text: string, text2:string) {
  //arr=this.users;
    
    if(text){
  
      text = text.toLowerCase();
      
      for(let i=0; ; i++){
      
      if(arr[i].firstname.indexOf(text) !== -1){
       this.users =[];
        this.users.push(arr[i]);
       
   
      }
 
  
      else{
        this.users.forEach(item=> {
         
      
          if(item.firstname.toLowerCase().indexOf(text) == -1){
            this.users=[];
          
          }
         
     
       });
      }
      
    };
  }
    else if(text2){
      text2 = text2.toLowerCase(); 
      for(let i=0; ; i++){
    if(arr[i].lastname.indexOf(text2) !== -1) {
            this.users =[];
        this.users.push(arr[i]);
      
          
             
    }
    else{
     this.users.forEach(item=> {
       
    
        if(item.lastname.toLowerCase().indexOf(text2) == -1){
          this.users=[];
        
        }
     });
    }

      };
    } 
  }
  clear(){
    this.userviceService.getusers().subscribe(data => this.users = data);
          
    }

 
    
  }  


