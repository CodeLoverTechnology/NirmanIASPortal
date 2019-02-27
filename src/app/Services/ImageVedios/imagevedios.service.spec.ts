import { TestBed } from '@angular/core/testing';

import { ImagevediosService } from './imagevedios.service';

describe('ImagevediosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagevediosService = TestBed.get(ImagevediosService);
    expect(service).toBeTruthy();
  });
});
