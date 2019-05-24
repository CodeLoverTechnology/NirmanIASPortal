import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SMSMessageMaster } from '../../Entity/SMSMessageMaster';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class SMSMessageMasterServicesService {

  BaseURL:string =  "http://nias.codelovertechnology.com/api/";
  result: any;
  constructor(private _http: HttpClient, private router: Router, private localSt: SessionStorageService) { }

  public getSMSList(): any {
    return this._http.get(this.BaseURL + 'SMSMessage/SMSMessageList');
  }
  public postSMS(sMSMessageMaster: SMSMessageMaster): any {     
    return this._http.post<any>(this.BaseURL + 'SMSMessage/CreateSMSMessage', sMSMessageMaster);
  } 
}
