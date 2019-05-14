import { TestBed } from '@angular/core/testing';

import { TestStudentResultService } from '../TestStudentResult/test-student-result.service';

describe('TestStudentResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestStudentResultService = TestBed.get(TestStudentResultService);
    expect(service).toBeTruthy();
  });
});
