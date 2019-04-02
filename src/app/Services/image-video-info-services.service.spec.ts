import { TestBed } from '@angular/core/testing';

import { ImageVideoInfoServicesService } from './image-video-info-services.service';

describe('ImageVideoInfoServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageVideoInfoServicesService = TestBed.get(ImageVideoInfoServicesService);
    expect(service).toBeTruthy();
  });
});
