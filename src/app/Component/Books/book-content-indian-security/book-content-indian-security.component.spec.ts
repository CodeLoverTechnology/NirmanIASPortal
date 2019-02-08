import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentIndianSecurityComponent } from './book-content-indian-security.component';

describe('BookContentIndianSecurityComponent', () => {
  let component: BookContentIndianSecurityComponent;
  let fixture: ComponentFixture<BookContentIndianSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentIndianSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentIndianSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
