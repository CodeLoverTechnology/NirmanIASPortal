import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentPaperIIIComponent } from './book-content-paper-iii.component';

describe('BookContentPaperIIIComponent', () => {
  let component: BookContentPaperIIIComponent;
  let fixture: ComponentFixture<BookContentPaperIIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentPaperIIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentPaperIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
