import { TestBed } from '@angular/core/testing';

import { UsermasterService } from './usermaster.service';

describe('UsermasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsermasterService = TestBed.get(UsermasterService);
    expect(service).toBeTruthy();
  });
});
