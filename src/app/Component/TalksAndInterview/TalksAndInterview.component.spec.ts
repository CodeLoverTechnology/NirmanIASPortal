import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksAndInterviewComponent } from './TalksAndInterview.component';

describe('TalksAndInterviewComponent', () => {
  let component: TalksAndInterviewComponent;
  let fixture: ComponentFixture<TalksAndInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalksAndInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksAndInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
