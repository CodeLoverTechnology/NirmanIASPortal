import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlinkComponent } from './adminlink.component';

describe('AdminlinkComponent', () => {
  let component: AdminlinkComponent;
  let fixture: ComponentFixture<AdminlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
