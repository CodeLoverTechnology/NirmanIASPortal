import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NIASInsertEnquiryComponent } from './niasinsert-enquiry.component';

describe('NIASInsertEnquiryComponent', () => {
  let component: NIASInsertEnquiryComponent;
  let fixture: ComponentFixture<NIASInsertEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NIASInsertEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NIASInsertEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
