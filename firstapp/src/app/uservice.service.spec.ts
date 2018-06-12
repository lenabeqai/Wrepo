import { TestBed, async, inject, fakeAsync } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { UserviceService } from './uservice.service';
import { Component,OnInit } from '@angular/core';

describe('userviceService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        
       UserviceService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });
  it('should be created', inject([UserviceService], (service: UserviceService) => {
    expect(service).toBeTruthy();
  }));
  describe('getusers()', () => {

    it('should retreive data from the server',
        inject([UserviceService, XHRBackend], (UserviceService, mockBackend)=> {
 
        const mockResponse = {
        
        
          data: [
            
     {
      "firstname": "lena",
      "lastname": "beqai",
      "ID": "1",
      "option": ""
  },
  {
      "firstname": "rola",
      "lastname": "tawalbeh",
      "ID": "4",
      "option": ""
      
  },
  {
      "firstname": "sara",
      "lastname": "alawneh",
      "ID": "2",
      "option": ""
      
  },
  {
      "firstname": "shoroq",
      "lastname": "jaradat",
      "ID": "3",
      "option":""
      
  },
  {
      "firstname": "ahmad",
      "lastname": "abu alheija",
      "ID": "5",
      "option": ""
      
  }
          ]
        };
        
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        UserviceService.getusers().subscribe((users) => {
          expect(users.data.length).toBe(5);
          expect(users.data[0].firstname).toEqual('lena');
        
        });

    }));
  });

});
