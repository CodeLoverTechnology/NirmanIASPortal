import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertStudentmasterComponent } from './insert-studentmaster.component';

describe('InsertStudentmasterComponent', () => {
  let component: InsertStudentmasterComponent;
  let fixture: ComponentFixture<InsertStudentmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertStudentmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertStudentmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
