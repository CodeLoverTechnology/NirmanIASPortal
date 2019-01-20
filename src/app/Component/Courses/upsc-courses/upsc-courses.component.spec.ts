import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UPSCCoursesComponent } from './upsc-courses.component';

describe('UPSCCoursesComponent', () => {
  let component: UPSCCoursesComponent;
  let fixture: ComponentFixture<UPSCCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UPSCCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UPSCCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
