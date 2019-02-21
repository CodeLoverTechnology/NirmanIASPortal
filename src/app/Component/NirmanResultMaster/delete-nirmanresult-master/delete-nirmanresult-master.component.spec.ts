import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNirmanresultMasterComponent } from './delete-nirmanresult-master.component';

describe('DeleteNirmanresultMasterComponent', () => {
  let component: DeleteNirmanresultMasterComponent;
  let fixture: ComponentFixture<DeleteNirmanresultMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteNirmanresultMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNirmanresultMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
