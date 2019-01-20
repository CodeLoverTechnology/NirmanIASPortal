import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePCSCoursesComponent } from './state-pcs-courses.component';

describe('StatePCSCoursesComponent', () => {
  let component: StatePCSCoursesComponent;
  let fixture: ComponentFixture<StatePCSCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatePCSCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatePCSCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
