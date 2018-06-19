import { TestBed, async,inject,ComponentFixture } from '@angular/core/testing';
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import {Http,Response, Headers, RequestOptions, ConnectionBackend } from '@angular/http';   
import { UserviceService } from './uservice.service';
import { Component } from '@angular/core';
import { SearchByNamePipe,  } from './search-by-fname.pipe';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
describe('AppComponent', () => {
let comp : AppComponent;
let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({

      imports: [
        HttpModule
      ]
        
   ,
      declarations: [
        AppComponent
      ],
      providers: [UserviceService, ConnectionBackend, HttpModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);

  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  
  }));
  describe('applyfilter', function() {
    
    it('should be instanciated', () => {
     let comp=fixture.componentInstance;
      expect(comp.applyfilter).toBeDefined();
    });
    
    it('should return empty array if no field is given', () => {
      let comp=fixture.componentInstance;

      let items
     
  
      const filtered = comp.applyfilter( items,null, null);
  
      expect(filtered).toEqual([]);
    });

    it('should return empty array if no matches found ', () => {
      let comp=fixture.componentInstance;

      let items=[

        {
          "firstname" : "lena",
          "lastname" : "beqai",
                 "ID":"1"

        },
        {
         "firstname" : "rola",
         "lastname" : "tawalbeh",
                "ID":"2"

       }];
     
  
      const filtered = comp.applyfilter( items,'ahmad', '');
  
      expect(filtered).toEqual([]);
    });



    it('should filter correctly', () => {
      let comp=fixture.componentInstance;
         const data=[

                   {
                     "firstname" : "lena",
                     "lastname" : "beqai",
                            "ID":"1"

                   },
                   {
                    "firstname" : "rola",
                    "lastname" : "tawalbeh",
                           "ID":"2"

                  },
                  {
                    "firstname" : "sara",
                    "lastname" : "alawneh",
                           "ID":"3"

                  }

         ];
       expect(comp.applyfilter(data, '','alawneh').length).toEqual(1);
       expect(comp.applyfilter(data,'rola','tawalbeh')[0]).toEqual(data[1]);
    });
  });
    describe('deleteItem', function(){

       it('should delete user correctly', ()=>{

        let comp=fixture.componentInstance;
        const data=[

                  {
                    "firstname" : "lena",
                    "lastname" : "beqai",
                           "ID":"1"

                  },
                  {
                   "firstname" : "rola",
                   "lastname" : "tawalbeh",
                          "ID":"2"

                 },
                 {
                   "firstname" : "sara",
                   "lastname" : "alawneh",
                          "ID":"3"

                 }

        ];
      comp.delete(data,data.indexOf(data[0]))
      
      expect(data[0]).toBeUndefined;
     
      expect(data.length).toBe(2);       



       });

  });

});
