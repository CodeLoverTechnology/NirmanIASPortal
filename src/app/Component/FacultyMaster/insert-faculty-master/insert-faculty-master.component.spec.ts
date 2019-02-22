import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertFacultyMasterComponent } from './insert-faculty-master.component';

describe('InsertFacultyMasterComponent', () => {
  let component: InsertFacultyMasterComponent;
  let fixture: ComponentFixture<InsertFacultyMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertFacultyMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertFacultyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
