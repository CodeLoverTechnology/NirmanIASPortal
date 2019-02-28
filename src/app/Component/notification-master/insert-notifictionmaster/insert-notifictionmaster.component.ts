import { Component, OnInit } from '@angular/core';
import {NotificationMaster} from "../../../Entity/notification-master";
import {NotificationmasterService} from "../../../Services/NotificationMaster/notificationmaster.service";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-insert-notifictionmaster',
  templateUrl: './insert-notifictionmaster.component.html',
  styleUrls: ['./insert-notifictionmaster.component.css']
})
export class InsertNotifictionmasterComponent implements OnInit {

  notification = {} as NotificationMaster;

  constructor(private _service:NotificationmasterService) { }
  ngOnInit(){ }
  onFormSubmit()
  {
    debugger;
    this._service.postNotification(this.notification).subscribe(
   result => console.log('Success !!!.',result),
      (err:HttpErrorResponse)=>{
     if(err.error instanceof Error){
            console.log("Server Side Error....!");
          }else{
            console.log("Client Side Error   !");
          }
        }) 
        debugger;
      console.log(this.notification);
    }}

