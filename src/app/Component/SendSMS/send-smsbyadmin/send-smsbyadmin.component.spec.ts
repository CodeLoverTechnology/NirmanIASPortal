import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSMSBYAdminComponent } from './send-smsbyadmin.component';

describe('SendSMSBYAdminComponent', () => {
  let component: SendSMSBYAdminComponent;
  let fixture: ComponentFixture<SendSMSBYAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendSMSBYAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendSMSBYAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
