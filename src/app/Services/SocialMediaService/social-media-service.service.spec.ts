import { TestBed } from '@angular/core/testing';

import { SocialMediaServiceService } from './social-media-service.service';

describe('SocialMediaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialMediaServiceService = TestBed.get(SocialMediaServiceService);
    expect(service).toBeTruthy();
  });
});
