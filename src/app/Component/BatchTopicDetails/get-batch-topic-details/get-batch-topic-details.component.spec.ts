import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBatchTopicDetailsComponent } from './get-batch-topic-details.component';

describe('GetBatchTopicDetailsComponent', () => {
  let component: GetBatchTopicDetailsComponent;
  let fixture: ComponentFixture<GetBatchTopicDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBatchTopicDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBatchTopicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
