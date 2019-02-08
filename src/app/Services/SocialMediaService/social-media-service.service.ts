import { Component, OnInit, NgModule, Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { SocialMediaModel } from '../../Entity/SocialMediaModel';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaServiceService {

  BaseURL: string = "http:// NIAS.codelovertechnology.com";

  
  constructor(private _http:HttpClient){}
  
  
  public getSocialMediaInfo():any{
    return this._http.get(this.BaseURL+"api/SocialMediaMasters/SocialMediaMastersList");
  }

  public postSocialMedia(SocialMediaModel : SocialMediaModel){
    return this._http.post<any>(this.BaseURL+"api/SocialMediaMasters/CreateSocialMediaMasters",SocialMediaModel);
  }
}
