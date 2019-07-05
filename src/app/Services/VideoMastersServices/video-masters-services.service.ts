import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { VideoMastersModel } from '../../Entity/VideoMastersModel';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class VideoMastersServicesService {

  BaseURL: string = "http://nias.codelovertechnology.com/api/";
  sanitizedUrl : any;
  constructor(private _http:HttpClient,private sanitizer:DomSanitizer){
    this.sanitizedUrl=this.sanitizer.sanitize(4,this.BaseURL);
  }

  getVideoMastersModelList(Current: VideoMastersModel):any{
  return this._http.get(this.sanitizedUrl+"VideoMasters/VideoMastersModelsList");
}

 postVideoMastersModel(Current: VideoMastersModel):any{   
  return this._http.post<any>(this.sanitizedUrl+"VideoMasters/CreateVideoMasters",Current);
}
}
