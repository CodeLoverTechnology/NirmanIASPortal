import { TestBed } from '@angular/core/testing';

import { PreviousYearQuestionAnswerService } from './previous-year-question-answer.service';

describe('PreviousYearQuestionAnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreviousYearQuestionAnswerService = TestBed.get(PreviousYearQuestionAnswerService);
    expect(service).toBeTruthy();
  });
});
