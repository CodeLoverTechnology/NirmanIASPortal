import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEnquiryComponent } from './insert-enquiry.component';

describe('InsertEnquiryComponent', () => {
  let component: InsertEnquiryComponent;
  let fixture: ComponentFixture<InsertEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
