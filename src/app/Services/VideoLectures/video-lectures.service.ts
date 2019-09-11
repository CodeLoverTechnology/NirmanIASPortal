import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { VideoLectures } from '../../Entity/video Lectures';


@Injectable({
  providedIn: 'root'
})
export class VideoLecturesService {

  BaseURL: string = "https://nias.nirmanias.com/api/";

   constructor(private _http:HttpClient) { }
  
    public getLectureInfo():any{
      return this._http.get(this.BaseURL+"VideoLectures/VideoLecturesList");
    }
    public postLecture(Lectures : VideoLectures):any{
       
      return this._http.post<any>(this.BaseURL+"VideoLectures/CreateVideoLectures",Lectures);
    }
}


