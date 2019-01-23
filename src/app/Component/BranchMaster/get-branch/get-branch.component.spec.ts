import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBranchComponent } from './get-branch.component';

describe('GetBranchComponent', () => {
  let component: GetBranchComponent;
  let fixture: ComponentFixture<GetBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
