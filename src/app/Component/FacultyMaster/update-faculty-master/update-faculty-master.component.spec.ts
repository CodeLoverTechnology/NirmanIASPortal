import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFacultyMasterComponent } from './update-faculty-master.component';

describe('UpdateFacultyMasterComponent', () => {
  let component: UpdateFacultyMasterComponent;
  let fixture: ComponentFixture<UpdateFacultyMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFacultyMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFacultyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
