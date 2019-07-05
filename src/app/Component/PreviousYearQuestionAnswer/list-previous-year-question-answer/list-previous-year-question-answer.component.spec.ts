import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPreviousYearQuestionAnswerComponent } from './list-previous-year-question-answer.component';

describe('ListPreviousYearQuestionAnswerComponent', () => {
  let component: ListPreviousYearQuestionAnswerComponent;
  let fixture: ComponentFixture<ListPreviousYearQuestionAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPreviousYearQuestionAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPreviousYearQuestionAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
