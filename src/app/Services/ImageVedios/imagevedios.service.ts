import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Imagevedios} from "../../Entity/imagevedios";
@Injectable({
  providedIn: 'root'
})
export class ImagevediosService {

  BaseURL: string = "http://NIAS.codelovertechnology.com/api/";

  constructor(private _http: HttpClient) { }
  
  public getImagevediosInfo(): any {
    return this._http.get(this.BaseURL + "ImageVideoInfo/ImageVideoInfoList");
  }
  public postImagevedios(image: Imagevedios) {
    return this._http.post<any>(this.BaseURL + "ImageVideoInfo/CreateImageVideoInfo", image);
  }
}
