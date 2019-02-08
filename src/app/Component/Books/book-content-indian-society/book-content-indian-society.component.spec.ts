import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentIndianSocietyComponent } from './book-content-indian-society.component';

describe('BookContentIndianSocietyComponent', () => {
  let component: BookContentIndianSocietyComponent;
  let fixture: ComponentFixture<BookContentIndianSocietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentIndianSocietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentIndianSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
