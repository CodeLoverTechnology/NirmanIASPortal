import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertBatchDetailsComponent } from './insert-batch-details.component';

describe('InsertBatchDetailsComponent', () => {
  let component: InsertBatchDetailsComponent;
  let fixture: ComponentFixture<InsertBatchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertBatchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertBatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
