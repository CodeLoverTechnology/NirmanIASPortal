import { Component, OnInit } from '@angular/core';
import {NotificationmasterService} from "../../../Services/NotificationMaster/notificationmaster.service";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-get-notifictionmaster',
  templateUrl: './get-notifictionmaster.component.html',
  styleUrls: ['./get-notifictionmaster.component.css']
})
export class GetNotifictionmasterComponent implements OnInit {

  public result: any;
  constructor(private _service:NotificationmasterService) { }
  ngOnInit() {
    this._service.getNotificationInfo().subscribe(res => this.result = res);
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Server Side Error !");
      } else {
        console.log("Client Side Error   !");
      }
    }
  }

}

