import { TestBed } from '@angular/core/testing';

import { MyreposerviceService } from './myreposervice.service';

describe('MyreposerviceService', () => {
  let service: MyreposerviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyreposerviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
