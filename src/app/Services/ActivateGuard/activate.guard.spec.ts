import { TestBed, async, inject } from '@angular/core/testing';

import { ActivateGuard } from 'src/app/Services/ActivateGuard/activate.guard';

describe('ActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivateGuard]
    });
  });

  it('should ...', inject([ActivateGuard], (guard: ActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
