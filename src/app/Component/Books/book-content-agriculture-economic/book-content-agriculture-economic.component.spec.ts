import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentAgricultureEconomicComponent } from './book-content-agriculture-economic.component';

describe('BookContentAgricultureEconomicComponent', () => {
  let component: BookContentAgricultureEconomicComponent;
  let fixture: ComponentFixture<BookContentAgricultureEconomicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentAgricultureEconomicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentAgricultureEconomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
