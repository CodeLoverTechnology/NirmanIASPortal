import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMasterinfoComponent } from './insert-masterinfo.component';

describe('InsertMasterinfoComponent', () => {
  let component: InsertMasterinfoComponent;
  let fixture: ComponentFixture<InsertMasterinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertMasterinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertMasterinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
