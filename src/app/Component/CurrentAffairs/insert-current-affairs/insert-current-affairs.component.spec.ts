import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCurrentAffairsComponent } from './insert-current-affairs.component';

describe('InsertCurrentAffairsComponent', () => {
  let component: InsertCurrentAffairsComponent;
  let fixture: ComponentFixture<InsertCurrentAffairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertCurrentAffairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCurrentAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
