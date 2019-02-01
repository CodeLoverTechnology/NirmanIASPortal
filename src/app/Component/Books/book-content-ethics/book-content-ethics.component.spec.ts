import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentEthicsComponent } from './book-content-ethics.component';

describe('BookContentEthicsComponent', () => {
  let component: BookContentEthicsComponent;
  let fixture: ComponentFixture<BookContentEthicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentEthicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentEthicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
