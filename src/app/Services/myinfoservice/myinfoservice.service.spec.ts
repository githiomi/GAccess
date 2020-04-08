import { TestBed } from '@angular/core/testing';

import { MyinfoserviceService } from './myinfoservice.service';

describe('MyinfoserviceService', () => {
  let service: MyinfoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyinfoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
