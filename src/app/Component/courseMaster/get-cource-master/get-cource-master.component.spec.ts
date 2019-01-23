import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCourceMasterComponent } from './get-cource-master.component';

describe('GetCourceMasterComponent', () => {
  let component: GetCourceMasterComponent;
  let fixture: ComponentFixture<GetCourceMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCourceMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCourceMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
