import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVideoLectureComponent } from './delete-video-lecture.component';

describe('DeleteVideoLectureComponent', () => {
  let component: DeleteVideoLectureComponent;
  let fixture: ComponentFixture<DeleteVideoLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVideoLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVideoLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
