import { TestBed } from '@angular/core/testing';

import { ExtractGitInfoService } from './extract-git-info.service';

describe('ExtractGitInfoService', () => {
  let service: ExtractGitInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtractGitInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
