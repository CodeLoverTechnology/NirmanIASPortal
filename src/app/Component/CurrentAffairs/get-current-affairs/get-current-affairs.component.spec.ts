import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCurrentAffairsComponent } from './get-current-affairs.component';

describe('GetCurrentAffairsComponent', () => {
  let component: GetCurrentAffairsComponent;
  let fixture: ComponentFixture<GetCurrentAffairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCurrentAffairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCurrentAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
