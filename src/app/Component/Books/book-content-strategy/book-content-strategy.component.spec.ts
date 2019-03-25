import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentStrategyComponent } from './book-content-strategy.component';

describe('BookContentStrategyComponent', () => {
  let component: BookContentStrategyComponent;
  let fixture: ComponentFixture<BookContentStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
