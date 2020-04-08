import { TestBed } from '@angular/core/testing';

import { RepoextractService } from './repoextract.service';

describe('RepoextractService', () => {
  let service: RepoextractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoextractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
