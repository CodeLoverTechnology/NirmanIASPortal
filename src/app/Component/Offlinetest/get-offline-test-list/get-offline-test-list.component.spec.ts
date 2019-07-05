import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOfflineTestListComponent } from './get-offline-test-list.component';

describe('GetOfflineTestListComponent', () => {
  let component: GetOfflineTestListComponent;
  let fixture: ComponentFixture<GetOfflineTestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetOfflineTestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOfflineTestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
