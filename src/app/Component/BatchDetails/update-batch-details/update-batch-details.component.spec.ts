import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBatchDetailsComponent } from './update-batch-details.component';

describe('UpdateBatchDetailsComponent', () => {
  let component: UpdateBatchDetailsComponent;
  let fixture: ComponentFixture<UpdateBatchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBatchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
