import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NotificationMaster} from "../../Entity/notification-master";
@Injectable({
  providedIn: 'root'
})
export class NotificationmasterService {

  BaseURL: string = "http://NIAS.codelovertechnology.com/api/";

  constructor(private _http: HttpClient) { }
  

  public getNotificationInfo(): any {
    return this._http.get(this.BaseURL + "NotificationMaster/NotificationMasterList");
  }
  public postNotification(Notification: NotificationMaster) {
    return this._http.post<any>(this.BaseURL + "NotificationMaster/CreateNotificationMaster", Notification);
  }
}

