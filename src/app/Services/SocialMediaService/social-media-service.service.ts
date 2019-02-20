import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { SocialMediaModel } from '../../Entity/SocialMediaModel';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaServiceService {

  BaseURL: string = "http://NIAS.codelovertechnology.com/";

  selectedMedia: { SocialMediaID: string; SocialMediaName: string; Address : string; Notes: string; };
  
  constructor(private _http:HttpClient){}
  
  
  public getSocialMediaInfo():any{
    return this._http.get(this.BaseURL+"api/SocialMediaMasters/SocialMediaMastersList");
  }

  public postSocialMedia(socialMediaModel : SocialMediaModel):any{
    return this._http.post<any>(this.BaseURL+"api/SocialMediaMasters/CreateSocialMediaMasters",socialMediaModel);
  }
}
