import { TestBed } from '@angular/core/testing';

import { StudentmasterService } from './studentmaster.service';

describe('StudentmasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentmasterService = TestBed.get(StudentmasterService);
    expect(service).toBeTruthy();
  });
});
