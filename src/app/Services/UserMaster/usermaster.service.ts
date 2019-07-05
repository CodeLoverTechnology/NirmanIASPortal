import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserMaster } from '../../Entity/user-master';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
@Injectable({
  providedIn: 'root'
})
export class UsermasterService {

  BaseURL:string = 'http://NIAS.codelovertechnology.com/api/';
  result: any;
  constructor(private _http: HttpClient, private router: Router, private localSt: SessionStorageService) { }

  public getUser(): any {
    return this._http.get(this.BaseURL + 'UserMaster/UserMasterList');
  }
  public postUser(user: UserMaster): any {
     
    return this._http.post<any>(this.BaseURL + 'UserMaster/CreateUserMaster', user);
  }

  public LoginUser(user: UserMaster): any {
   return this._http.post<any>(this.BaseURL + 'UserMaster/UserLogin', user);
  }

  public Logout() {
      this.localSt.clear('UserEmailID');
      this.localSt.clear('UserID');
      this.localSt.clear('UserName');
      this.localSt.clear('Department');
      this.localSt.clear('Designation');
      //this.isloggedIn = false;
    this.router.navigate(['/logIn']);
  }
}

