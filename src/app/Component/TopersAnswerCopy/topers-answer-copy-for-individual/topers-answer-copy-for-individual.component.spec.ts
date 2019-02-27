import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopersAnswerCopyForIndividualComponent } from './topers-answer-copy-for-individual.component';

describe('TopersAnswerCopyForIndividualComponent', () => {
  let component: TopersAnswerCopyForIndividualComponent;
  let fixture: ComponentFixture<TopersAnswerCopyForIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopersAnswerCopyForIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopersAnswerCopyForIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
