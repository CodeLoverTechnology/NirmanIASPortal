import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNirmanresultMasterComponent } from './get-nirmanresult-master.component';

describe('GetNirmanresultMasterComponent', () => {
  let component: GetNirmanresultMasterComponent;
  let fixture: ComponentFixture<GetNirmanresultMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetNirmanresultMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNirmanresultMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
