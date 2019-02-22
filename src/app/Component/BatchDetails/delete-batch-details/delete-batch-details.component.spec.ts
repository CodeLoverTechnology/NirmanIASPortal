import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBatchDetailsComponent } from './delete-batch-details.component';

describe('DeleteBatchDetailsComponent', () => {
  let component: DeleteBatchDetailsComponent;
  let fixture: ComponentFixture<DeleteBatchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBatchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
