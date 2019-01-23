import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSubCategoryComponent } from './insert-sub-category.component';

describe('InsertSubCategoryComponent', () => {
  let component: InsertSubCategoryComponent;
  let fixture: ComponentFixture<InsertSubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertSubCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
