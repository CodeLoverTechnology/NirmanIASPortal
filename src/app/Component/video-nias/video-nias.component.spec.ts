import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoNIASComponent } from './video-nias.component';

describe('VideoNIASComponent', () => {
  let component: VideoNIASComponent;
  let fixture: ComponentFixture<VideoNIASComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoNIASComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoNIASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
