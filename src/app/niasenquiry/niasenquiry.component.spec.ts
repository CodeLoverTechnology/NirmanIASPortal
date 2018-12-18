import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NIASEnquiryComponent } from './niasenquiry.component';

describe('NIASEnquiryComponent', () => {
  let component: NIASEnquiryComponent;
  let fixture: ComponentFixture<NIASEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NIASEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NIASEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
