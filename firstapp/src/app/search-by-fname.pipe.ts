import { Pipe } from '@angular/core';

 
@Pipe({ name: 'filter' })
export class SearchByNamePipe {
  transform(arr , searchText) {
      if(!searchText){
      return arr;
      }

      else if(searchText){

       return arr.filter(item =>{

      
  
         return (item.firstname.indexOf(searchText) !== -1);

           
         

        });

      }



       


      }

    
  }
