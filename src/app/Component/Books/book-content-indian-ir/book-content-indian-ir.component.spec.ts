import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentIndianIRComponent } from './book-content-indian-ir.component';

describe('BookContentIndianIRComponent', () => {
  let component: BookContentIndianIRComponent;
  let fixture: ComponentFixture<BookContentIndianIRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentIndianIRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentIndianIRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
