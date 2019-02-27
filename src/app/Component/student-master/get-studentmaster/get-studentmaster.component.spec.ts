import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStudentmasterComponent } from './get-studentmaster.component';

describe('GetStudentmasterComponent', () => {
  let component: GetStudentmasterComponent;
  let fixture: ComponentFixture<GetStudentmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStudentmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStudentmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
