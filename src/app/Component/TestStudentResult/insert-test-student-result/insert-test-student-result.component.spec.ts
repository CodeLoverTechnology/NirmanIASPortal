import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTestStudentResultComponent } from './insert-test-student-result.component';

describe('InsertTestStudentResultComponent', () => {
  let component: InsertTestStudentResultComponent;
  let fixture: ComponentFixture<InsertTestStudentResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertTestStudentResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertTestStudentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
