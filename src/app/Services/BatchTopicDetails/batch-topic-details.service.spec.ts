import { TestBed } from '@angular/core/testing';

import { BatchTopicDetailsService } from './batch-topic-details.service';

describe('BatchTopicDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BatchTopicDetailsService = TestBed.get(BatchTopicDetailsService);
    expect(service).toBeTruthy();
  });
});
