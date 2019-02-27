import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopersAnswerCopyListComponent } from './topers-answer-copy-list.component';

describe('TopersAnswerCopyListComponent', () => {
  let component: TopersAnswerCopyListComponent;
  let fixture: ComponentFixture<TopersAnswerCopyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopersAnswerCopyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopersAnswerCopyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
