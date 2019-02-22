import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVideoLectureComponent } from './get-video-lecture.component';

describe('GetVideoLectureComponent', () => {
  let component: GetVideoLectureComponent;
  let fixture: ComponentFixture<GetVideoLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetVideoLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetVideoLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
