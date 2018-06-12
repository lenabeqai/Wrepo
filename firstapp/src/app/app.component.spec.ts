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
      comp=fixture.componentInstance;
      //expect(comp.applyfilter).toBeDefined();
    });
    /*it('filter', () => {
      const items=[];
      items.push({ firstname: "be", lastname: 'Hans', ID : 7, option:"" });
     comp=fixture.componentInstance;
      //expect(comp.applyfilter('','')).toBeUndefined;
      expect(comp.applyfilter(items,'be','Hans')).toBeUndefined;
    });*/
    it('should return items if no field is given', () => {
      comp=fixture.componentInstance;

      let items
      //items.push({ id: 1, name: 'Hans' });
  
      //const filtered = comp.applyfilter( items,null, null);
  
      //expect(filtered).toEqual(items);
    });
    it('should filter correctly', () => {
    
  
        
      expect(comp.applyfilter(comp.users,'lena','')[0].firstname).toEqual('lena');
      
    });
       

  });

});
