import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { CurrentAffairsMasters} from '../../Entity/CurrentAffairsMaster';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CurrentAffairsService {

  BaseURL: string = "https://nias.nirmanias.com/api/";
  sanitizedUrl : any;
  constructor(private _http:HttpClient,private sanitizer:DomSanitizer){
    this.sanitizedUrl=this.sanitizer.sanitize(4,this.BaseURL);
  }
  
   getCurrentAffairsInfo(Current: CurrentAffairsMasters):any{
      // let params1 = new HttpParams().append("SubCategory",Current.SubCategory);
      // params1 = new HttpParams().append("Category",Current.Category);
    return this._http.get(this.sanitizedUrl+"CurrentAffairsMasters/CurrentAffairsMastersList?SubCategory="+Current.SubCategory+"&Category="+Current.Category);
  }

   postCurrentAffairs(Current: CurrentAffairsMasters):any{
     
    return this._http.post<any>(this.sanitizedUrl+"CurrentAffairsMasters/CreateCurrentAffairsMasters",Current);
  }
}
