import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentEnvironmentComponent } from './book-content-environment.component';

describe('BookContentEnvironmentComponent', () => {
  let component: BookContentEnvironmentComponent;
  let fixture: ComponentFixture<BookContentEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
