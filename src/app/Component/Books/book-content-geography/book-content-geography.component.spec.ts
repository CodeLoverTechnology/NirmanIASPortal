import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentGeographyComponent } from './book-content-geography.component';

describe('BookContentGeographyComponent', () => {
  let component: BookContentGeographyComponent;
  let fixture: ComponentFixture<BookContentGeographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentGeographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentGeographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
