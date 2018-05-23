import { TestBed, inject } from '@angular/core/testing';

import { UserviceService } from './uservice.service';

describe('UserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserviceService]
    });
  });

  it('should be created', inject([UserviceService], (service: UserviceService) => {
    expect(service).toBeTruthy();
  }));
});
