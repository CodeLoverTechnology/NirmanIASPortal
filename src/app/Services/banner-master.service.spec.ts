import { TestBed } from '@angular/core/testing';

import { BannerMasterService } from './banner-master.service';

describe('BannerMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BannerMasterService = TestBed.get(BannerMasterService);
    expect(service).toBeTruthy();
  });
});
