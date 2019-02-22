import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBatchTopicDetailsComponent } from './delete-batch-topic-details.component';

describe('DeleteBatchTopicDetailsComponent', () => {
  let component: DeleteBatchTopicDetailsComponent;
  let fixture: ComponentFixture<DeleteBatchTopicDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBatchTopicDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBatchTopicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
