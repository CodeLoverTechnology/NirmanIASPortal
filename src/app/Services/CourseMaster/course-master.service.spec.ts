import { TestBed } from '@angular/core/testing';

import { CourseMasterService } from './course-master.service';

describe('CourseMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseMasterService = TestBed.get(CourseMasterService);
    expect(service).toBeTruthy();
  });
});
