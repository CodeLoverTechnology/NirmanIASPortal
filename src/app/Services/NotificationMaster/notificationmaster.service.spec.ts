import { TestBed } from '@angular/core/testing';

import { NotificationmasterService } from './notificationmaster.service';

describe('NotificationmasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationmasterService = TestBed.get(NotificationmasterService);
    expect(service).toBeTruthy();
  });
});
