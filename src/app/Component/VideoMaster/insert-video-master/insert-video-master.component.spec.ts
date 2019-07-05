import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertVideoMasterComponent } from './insert-video-master.component';

describe('InsertVideoMasterComponent', () => {
  let component: InsertVideoMasterComponent;
  let fixture: ComponentFixture<InsertVideoMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertVideoMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertVideoMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
