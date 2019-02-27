import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserMaster } from "../../Entity/user-master";
@Injectable({
  providedIn: 'root'
})
export class UsermasterService {

  BaseURL: string = "http://NIAS.codelovertechnology.com/api/";

  constructor(private _http: HttpClient) { }


  public getUser(): any {
    return this._http.get(this.BaseURL + "UserMaster/UserMasterList");
  }
  public postUser(user: UserMaster) {
    return this._http.post<any>(this.BaseURL + "UserMaster/CreateUserMaster", user);
  }
}

