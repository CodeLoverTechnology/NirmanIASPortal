import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertOfflineTestDetailsComponent } from './insert-offline-test-details.component';

describe('InsertOfflineTestDetailsComponent', () => {
  let component: InsertOfflineTestDetailsComponent;
  let fixture: ComponentFixture<InsertOfflineTestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertOfflineTestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertOfflineTestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
