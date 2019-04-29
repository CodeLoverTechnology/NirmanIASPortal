
 import { Component, OnInit } from '@angular/core';
 import { HttpErrorResponse } from '@angular/common/http';
 import { VideoLectures } from "../../../Entity/video Lectures";
 import { VideoLecturesService} from '../../../Services/VideoLectures/video-lectures.service';
 
 
 @Component({
   selector: 'app-insert-video-lecture',
   templateUrl: './insert-video-lecture.component.html',
   styleUrls: ['./insert-video-lecture.component.css']
 })
 export class InsertVideoLectureComponent implements OnInit {
   Lecture = {} as VideoLectures;
   Result: any;
   constructor(private _service: VideoLecturesService) { }
   ngOnInit() { }
 
   onFormSubmit() {
     this._service.postLecture(this.Lecture).subscribe(
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
 