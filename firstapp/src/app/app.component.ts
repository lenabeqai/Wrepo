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
   
 
  applyfilter( users,text: string,text2:string) {
    
    if(!text && !text2){
      
      this.users=[];
      return [];
      }

      else if(text){
   text=text.toLocaleLowerCase();
      return users.filter(item =>{
  
        
        for(let i=0;i<users.length ; i++){
      
          if(users[i].firstname.indexOf(text) !== -1){
           this.users =[];
            this.users.push(users[i]);
            return (item.firstname.indexOf(text) !== -1)
          }
          
          else{
            users.forEach(item=> {
             
          
              if(item.firstname.toLowerCase().indexOf(text) == -1){
                this.users=[];
               
              }
          
           });
         
          }
          }
        

      });
    }
      else if(text2){
      text2=text2.toLocaleLowerCase();
        return users.filter(item =>{
            
    
          for(let i=0;i<users.length ; i++){
        
            if(users[i].lastname.indexOf(text2) !== -1){
              
             this.users =[];
              this.users.push(users[i]);
              return(item.lastname.indexOf(text2) !== -1)
              
            }

            else{
              users.forEach(item=> {
               
            
                if(item.lastname.toLowerCase().indexOf(text2) == -1){
                  this.users=[];
                  
                    
                }
               
                
             });
            
            }
            }
          
          
        });
  
      };
   

       
     
  };
  clear(){
    this.userviceService.getusers().subscribe(data => this.users = data);
       return this.users   
    }
 delete(index){

  this.users.splice(index,1);
 }
 
  }