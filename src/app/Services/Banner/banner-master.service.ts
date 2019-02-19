import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BannerModel } from 'src/app/Entity/banner-model';
// import { BannerModel } from '../../Entity/banner-model';

@Injectable({
  providedIn: 'root'
})
export class BannerMasterService {
 
  BaseURL: string = "http://NIAS.codelovertechnology.com/api/";

  
  constructor(private _http:HttpClient){}
  
  
  public getBannerInfo():any{
    return this._http.get(this.BaseURL+"Banner/BannerList");
  }

  public postBannerMaster(Banner : BannerModel){
    return this._http.post<any>(this.BaseURL+"Banner/CreateBanner",Banner);
  }
}

