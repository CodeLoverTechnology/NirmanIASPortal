import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVideoMasterListComponent } from './get-video-master-list.component';

describe('GetVideoMasterListComponent', () => {
  let component: GetVideoMasterListComponent;
  let fixture: ComponentFixture<GetVideoMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetVideoMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetVideoMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
