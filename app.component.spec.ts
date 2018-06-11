import { TestBed, async,inject,ComponentFixture } from '@angular/core/testing';
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import {Http,Response, Headers, RequestOptions, ConnectionBackend,XHRBackend,ResponseOptions } from '@angular/http';   
import {  UserviceService } from './uservice.service';
import { Component } from '@angular/core';

import { MockBackend } from '@angular/http/testing';
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
      providers: [UserviceService, ConnectionBackend, HttpModule,XHRBackend]
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
      expect(comp.applyfilter).toBeDefined();
    });
   
  
    it('should filter correctly',()=> {

  
     
     expect(comp.applyfilter(comp.users,'lena','beqai')).toBeGreaterThan(0);
    
    });

  });

});
