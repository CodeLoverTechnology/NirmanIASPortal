import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentModernIndiaComponent } from './book-content-modern-india.component';

describe('BookContentModernIndiaComponent', () => {
  let component: BookContentModernIndiaComponent;
  let fixture: ComponentFixture<BookContentModernIndiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentModernIndiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentModernIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
