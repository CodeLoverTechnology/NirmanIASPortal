import { TestBed } from '@angular/core/testing';

import { VideoLecturesService } from './video-lectures.service';

describe('VideoLecturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoLecturesService = TestBed.get(VideoLecturesService);
    expect(service).toBeTruthy();
  });
});
