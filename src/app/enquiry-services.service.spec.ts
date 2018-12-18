import { TestBed } from '@angular/core/testing';

import { EnquiryServicesService } from './enquiry-services.service';

describe('EnquiryServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnquiryServicesService = TestBed.get(EnquiryServicesService);
    expect(service).toBeTruthy();
  });
});
