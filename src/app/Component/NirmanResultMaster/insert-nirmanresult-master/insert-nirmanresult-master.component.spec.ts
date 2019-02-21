import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNirmanresultMasterComponent } from './insert-nirmanresult-master.component';

describe('InsertNirmanresultMasterComponent', () => {
  let component: InsertNirmanresultMasterComponent;
  let fixture: ComponentFixture<InsertNirmanresultMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertNirmanresultMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertNirmanresultMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
