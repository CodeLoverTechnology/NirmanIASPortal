import { TestBed } from '@angular/core/testing';

import { FacultyMasterService } from './faculty-master.service';

describe('FacultyMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacultyMasterService = TestBed.get(FacultyMasterService);
    expect(service).toBeTruthy();
  });
});
