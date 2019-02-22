import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertVideoLectureComponent } from './insert-video-lecture.component';

describe('InsertVideoLectureComponent', () => {
  let component: InsertVideoLectureComponent;
  let fixture: ComponentFixture<InsertVideoLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertVideoLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertVideoLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
