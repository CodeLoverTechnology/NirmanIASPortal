import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NIASCourseFeeStrutureComponent } from './nias-course-fee-struture.component';

describe('NIASCourseFeeStrutureComponent', () => {
  let component: NIASCourseFeeStrutureComponent;
  let fixture: ComponentFixture<NIASCourseFeeStrutureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NIASCourseFeeStrutureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NIASCourseFeeStrutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
