import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertBatchTopicDetailsComponent } from './insert-batch-topic-details.component';

describe('InsertBatchTopicDetailsComponent', () => {
  let component: InsertBatchTopicDetailsComponent;
  let fixture: ComponentFixture<InsertBatchTopicDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertBatchTopicDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertBatchTopicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
