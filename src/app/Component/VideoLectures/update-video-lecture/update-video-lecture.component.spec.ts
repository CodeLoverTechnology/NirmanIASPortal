import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVideoLectureComponent } from './update-video-lecture.component';

describe('UpdateVideoLectureComponent', () => {
  let component: UpdateVideoLectureComponent;
  let fixture: ComponentFixture<UpdateVideoLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVideoLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVideoLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
