import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMasterinfoComponent } from './get-masterinfo.component';

describe('GetMasterinfoComponent', () => {
  let component: GetMasterinfoComponent;
  let fixture: ComponentFixture<GetMasterinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMasterinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMasterinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
