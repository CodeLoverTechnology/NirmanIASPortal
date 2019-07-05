import { TestBed } from '@angular/core/testing';

import { VideoMastersServicesService } from './video-masters-services.service';

describe('VideoMastersServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoMastersServicesService = TestBed.get(VideoMastersServicesService);
    expect(service).toBeTruthy();
  });
});
