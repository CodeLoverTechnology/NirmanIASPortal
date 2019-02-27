import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUsermasterComponent } from './insert-usermaster.component';

describe('InsertUsermasterComponent', () => {
  let component: InsertUsermasterComponent;
  let fixture: ComponentFixture<InsertUsermasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertUsermasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertUsermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
