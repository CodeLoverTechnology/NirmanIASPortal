import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTestStudentResultListComponent } from './get-test-student-result-list.component';

describe('GetTestStudentResultListComponent', () => {
  let component: GetTestStudentResultListComponent;
  let fixture: ComponentFixture<GetTestStudentResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTestStudentResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTestStudentResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
