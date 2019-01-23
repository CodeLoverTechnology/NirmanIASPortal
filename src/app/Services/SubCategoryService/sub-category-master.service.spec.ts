import { TestBed } from '@angular/core/testing';

import { SubCategoryMasterService } from './sub-category-master.service';

describe('SubCategoryMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubCategoryMasterService = TestBed.get(SubCategoryMasterService);
    expect(service).toBeTruthy();
  });
});
