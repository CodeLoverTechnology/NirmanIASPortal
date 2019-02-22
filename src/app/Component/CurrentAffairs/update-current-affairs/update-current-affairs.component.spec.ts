import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCurrentAffairsComponent } from './update-current-affairs.component';

describe('UpdateCurrentAffairsComponent', () => {
  let component: UpdateCurrentAffairsComponent;
  let fixture: ComponentFixture<UpdateCurrentAffairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCurrentAffairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCurrentAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
