import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCourceMasterComponent } from './insert-cource-master.component';

describe('InsertCourceMasterComponent', () => {
  let component: InsertCourceMasterComponent;
  let fixture: ComponentFixture<InsertCourceMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertCourceMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCourceMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
