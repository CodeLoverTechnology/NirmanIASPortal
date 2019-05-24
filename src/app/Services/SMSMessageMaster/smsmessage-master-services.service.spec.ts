import { TestBed } from '@angular/core/testing';

import { SMSMessageMasterServicesService } from './smsmessage-master-services.service';

describe('SMSMessageMasterServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SMSMessageMasterServicesService = TestBed.get(SMSMessageMasterServicesService);
    expect(service).toBeTruthy();
  });
});
