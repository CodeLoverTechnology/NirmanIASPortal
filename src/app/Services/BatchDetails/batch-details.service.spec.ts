import { TestBed } from '@angular/core/testing';

import { BatchDetailsService } from './batch-details.service';

describe('BatchDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BatchDetailsService = TestBed.get(BatchDetailsService);
    expect(service).toBeTruthy();
  });
});
