import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBatchTopicDetailsComponent } from './update-batch-topic-details.component';

describe('UpdateBatchTopicDetailsComponent', () => {
  let component: UpdateBatchTopicDetailsComponent;
  let fixture: ComponentFixture<UpdateBatchTopicDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBatchTopicDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBatchTopicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
