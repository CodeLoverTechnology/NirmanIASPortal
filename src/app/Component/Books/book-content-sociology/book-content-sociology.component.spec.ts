import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentSociologyComponent } from './book-content-sociology.component';

describe('BookContentSociologyComponent', () => {
  let component: BookContentSociologyComponent;
  let fixture: ComponentFixture<BookContentSociologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentSociologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentSociologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
