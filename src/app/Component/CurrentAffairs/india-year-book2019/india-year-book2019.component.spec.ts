import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaYearBook2019Component } from './india-year-book2019.component';

describe('IndiaYearBook2019Component', () => {
  let component: IndiaYearBook2019Component;
  let fixture: ComponentFixture<IndiaYearBook2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaYearBook2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaYearBook2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
