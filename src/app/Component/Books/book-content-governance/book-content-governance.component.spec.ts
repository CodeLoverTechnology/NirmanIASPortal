import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentGovernanceComponent } from './book-content-governance.component';

describe('BookContentGovernanceComponent', () => {
  let component: BookContentGovernanceComponent;
  let fixture: ComponentFixture<BookContentGovernanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentGovernanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentGovernanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
