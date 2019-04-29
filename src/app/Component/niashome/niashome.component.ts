import { Component, OnInit } from '@angular/core';
import {CanActivate} from "@angular/router";
import { VideoLectures } from 'src/app/Entity/video Lectures';
import { VideoLecturesService } from 'src/app/Services/VideoLectures/video-lectures.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationmasterService } from 'src/app/Services/NotificationMaster/notificationmaster.service';
@Component({
  selector: 'app-niashome',
  templateUrl: './niashome.component.html',
  styleUrls: ['./niashome.component.css']
})
export class NIASHomeComponent implements OnInit {
  Lecture = {} as VideoLectures;
  Result: any;
  VideoList:Array<string>;
  NotificationResult:any;
 
  constructor(private _service: VideoLecturesService,private _Notificationmasterservice:NotificationmasterService) {
    class AlwaysAuthGuard implements CanActivate {
      canActivate() {
        console.log("AlwaysAuthGuard");
        return true;
      }
    }
   }

  ngOnInit() {
    this.GetNotification();
    // this._service.getLectureInfo().subscribe(
    //   res => this.Result = res);
    //  (err: HttpErrorResponse) => {
    // if (err.error instanceof Error) {
    //   console.log("Server Side Error....!");
    // } else {
    //   console.log("Client Side Error !");
    // }
    // };
  }


  GetNotification()
  {
    this._Notificationmasterservice.getNotificationInfo().subscribe(res => this.NotificationResult = res);
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Server Side Error !");
      } else {
        console.log("Client Side Error   !");
      }
    }
  }

}

