import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NotificationMaster} from "../../Entity/notification-master";
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class NotificationmasterService {

  BaseURL: string = "http://NIAS.codelovertechnology.com/api/";
  sanitizedUrl : any;
  constructor(private _http:HttpClient,private sanitizer:DomSanitizer){
    this.sanitizedUrl=this.sanitizer.sanitize(4,this.BaseURL);
  }
  

  public getNotificationInfo(): any {
    return this._http.get(this.sanitizedUrl + "NotificationMaster/NotificationMasterList");
  }
  public postNotification(Notification: NotificationMaster) {
    return this._http.post<any>(this.sanitizedUrl + "NotificationMaster/CreateNotificationMaster", Notification);
  }
}

