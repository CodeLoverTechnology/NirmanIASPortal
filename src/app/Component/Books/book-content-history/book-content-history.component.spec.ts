import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentHistoryComponent } from './book-content-history.component';

describe('BookContentHistoryComponent', () => {
  let component: BookContentHistoryComponent;
  let fixture: ComponentFixture<BookContentHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
