import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNotifictionmasterComponent } from './get-notifictionmaster.component';

describe('GetNotifictionmasterComponent', () => {
  let component: GetNotifictionmasterComponent;
  let fixture: ComponentFixture<GetNotifictionmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetNotifictionmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNotifictionmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
