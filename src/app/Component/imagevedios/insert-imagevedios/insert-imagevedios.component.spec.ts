import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertImagevediosComponent } from './insert-imagevedios.component';

describe('InsertImagevediosComponent', () => {
  let component: InsertImagevediosComponent;
  let fixture: ComponentFixture<InsertImagevediosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertImagevediosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertImagevediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
