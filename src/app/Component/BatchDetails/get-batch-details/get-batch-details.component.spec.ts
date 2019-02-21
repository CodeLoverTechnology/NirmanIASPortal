import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBatchDetailsComponent } from './get-batch-details.component';

describe('GetBatchDetailsComponent', () => {
  let component: GetBatchDetailsComponent;
  let fixture: ComponentFixture<GetBatchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBatchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
