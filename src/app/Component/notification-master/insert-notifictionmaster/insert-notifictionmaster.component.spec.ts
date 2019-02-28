import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNotifictionmasterComponent } from './insert-notifictionmaster.component';

describe('InsertNotifictionmasterComponent', () => {
  let component: InsertNotifictionmasterComponent;
  let fixture: ComponentFixture<InsertNotifictionmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertNotifictionmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertNotifictionmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
