import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFacultyMasterComponent } from './delete-faculty-master.component';

describe('DeleteFacultyMasterComponent', () => {
  let component: DeleteFacultyMasterComponent;
  let fixture: ComponentFixture<DeleteFacultyMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFacultyMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFacultyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
