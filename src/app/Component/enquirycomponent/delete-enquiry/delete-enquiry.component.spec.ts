import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEnquiryComponent } from './delete-enquiry.component';

describe('DeleteEnquiryComponent', () => {
  let component: DeleteEnquiryComponent;
  let fixture: ComponentFixture<DeleteEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
