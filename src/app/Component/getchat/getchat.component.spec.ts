import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetchatComponent } from './getchat.component';

describe('GetchatComponent', () => {
  let component: GetchatComponent;
  let fixture: ComponentFixture<GetchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
