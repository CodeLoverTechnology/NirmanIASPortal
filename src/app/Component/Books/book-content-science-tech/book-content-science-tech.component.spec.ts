import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentScienceTechComponent } from './book-content-science-tech.component';

describe('BookContentScienceTechComponent', () => {
  let component: BookContentScienceTechComponent;
  let fixture: ComponentFixture<BookContentScienceTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentScienceTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentScienceTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
