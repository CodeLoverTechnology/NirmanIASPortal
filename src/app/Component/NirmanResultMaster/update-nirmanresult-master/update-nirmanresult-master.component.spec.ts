import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNirmanresultMasterComponent } from './update-nirmanresult-master.component';

describe('UpdateNirmanresultMasterComponent', () => {
  let component: UpdateNirmanresultMasterComponent;
  let fixture: ComponentFixture<UpdateNirmanresultMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNirmanresultMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNirmanresultMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
