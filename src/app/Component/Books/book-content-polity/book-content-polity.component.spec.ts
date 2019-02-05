import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentPOLITYComponent } from './book-content-polity.component';

describe('BookContentPOLITYComponent', () => {
  let component: BookContentPOLITYComponent;
  let fixture: ComponentFixture<BookContentPOLITYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentPOLITYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentPOLITYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
