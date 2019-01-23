import { TestBed } from '@angular/core/testing';

import { MasterInfoServiceService } from './master-info-service.service';

describe('MasterInfoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterInfoServiceService = TestBed.get(MasterInfoServiceService);
    expect(service).toBeTruthy();
  });
});
