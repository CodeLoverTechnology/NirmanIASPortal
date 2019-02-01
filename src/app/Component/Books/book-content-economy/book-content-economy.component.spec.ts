import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentEconomyComponent } from './book-content-economy.component';

describe('BookContentEconomyComponent', () => {
  let component: BookContentEconomyComponent;
  let fixture: ComponentFixture<BookContentEconomyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentEconomyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentEconomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
