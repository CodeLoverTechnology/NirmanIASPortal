import { Component, OnInit } from '@angular/core';
import { VideoLecturesService } from 'src/app/Services/VideoLectures/video-lectures.service';
import { VideoLectures } from 'src/app/Entity/video Lectures';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-video-lecture',
  templateUrl: './get-video-lecture.component.html',
  styleUrls: ['./get-video-lecture.component.css']
})
export class GetVideoLectureComponent implements OnInit {
  Lecture = {} as VideoLectures;
  Result: any;
  constructor(private _service: VideoLecturesService) { }

  ngOnInit() {
    debugger;
    this._service.getLectureInfo().subscribe(
      res => this.Result = res);
     (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
      console.log("Server Side Error....!");
    } else {
      console.log("Client Side Error !");
    }
    };
  }


  

}
