import { TestBed } from '@angular/core/testing';

import { CurrentAffairsService } from './current-affairs.service';

describe('CurrentAffairsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentAffairsService = TestBed.get(CurrentAffairsService);
    expect(service).toBeTruthy();
  });
});
