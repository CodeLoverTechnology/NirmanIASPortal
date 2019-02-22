import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFacultyMasterComponent } from './get-faculty-master.component';

describe('GetFacultyMasterComponent', () => {
  let component: GetFacultyMasterComponent;
  let fixture: ComponentFixture<GetFacultyMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFacultyMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFacultyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
