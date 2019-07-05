import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPreviousYearQuestionAnswerComponent } from './insert-previous-year-question-answer.component';

describe('InsertPreviousYearQuestionAnswerComponent', () => {
  let component: InsertPreviousYearQuestionAnswerComponent;
  let fixture: ComponentFixture<InsertPreviousYearQuestionAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertPreviousYearQuestionAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPreviousYearQuestionAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
