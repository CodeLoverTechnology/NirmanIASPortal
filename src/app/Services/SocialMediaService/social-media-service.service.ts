import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { SocialMediaModel } from '../../Entity/SocialMediaModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaServiceService {

  BaseURL: string = "http://NIAS.codelovertechnology.com/";

  selectedMedia: { SocialMediaID: string; SocialMediaName: string; Address : string; Notes: string; };
  
  constructor(private _http:HttpClient){}
  
  // createSocialMedia(socialmedia:SocialMediaModel):Observable<SocialMediaModel>{

  //   let httpheaders= new HttpHeaders().set('Content-Type','application/json');
  //   let options={
  //     headers:httpheaders
  //   };
  //   debugger;
  //   return this._http.post<SocialMediaModel>(this.BaseURL+"api/SocialMediaMasters/CreateSocialMediaMasters",socialmedia,options);
  // }
  
  
  public getSocialMediaInfo():any{
    return this._http.get(this.BaseURL+"api/SocialMediaMasters/SocialMediaMastersList");
  }

  public postSocialMedia(socialmedia : SocialMediaModel):any{
    return this._http.post<any>(this.BaseURL+"api/SocialMediaMasters/CreateSocialMediaMasters",socialmedia);
  }
}
