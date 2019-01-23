import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { BannerModel } from '../Entity/banner-model';

@Injectable({
  providedIn: 'root'
})
export class BannerMasterService {
 
  BaseURL: string = "http:// NIAS.codelovertechnology.com";

  
  constructor(private _http:HttpClient){}
  
  
  public getBannerInfo():any{
    return this._http.get(this.BaseURL+"api/Banner/BannerList");
  }

  public postBannerMaster(Banner : BannerModel){
    return this._http.post<any>(this.BaseURL+"api/Banner/CreateBanner",Banner);
  }
}

