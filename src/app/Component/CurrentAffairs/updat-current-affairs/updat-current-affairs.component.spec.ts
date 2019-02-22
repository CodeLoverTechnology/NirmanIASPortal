import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatCurrentAffairsComponent } from './updat-current-affairs.component';

describe('UpdatCurrentAffairsComponent', () => {
  let component: UpdatCurrentAffairsComponent;
  let fixture: ComponentFixture<UpdatCurrentAffairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatCurrentAffairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatCurrentAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
