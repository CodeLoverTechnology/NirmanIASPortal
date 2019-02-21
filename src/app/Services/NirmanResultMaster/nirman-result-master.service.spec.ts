import { TestBed } from '@angular/core/testing';

import { NirmanResultMasterService } from './nirman-result-master.service';

describe('NirmanResultMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NirmanResultMasterService = TestBed.get(NirmanResultMasterService);
    expect(service).toBeTruthy();
  });
});
