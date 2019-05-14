import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { CurrentAffairsMasters} from '../../Entity/CurrentAffairsMaster';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CurrentAffairsService {

  BaseURL: string = "http://nias.codelovertechnology.com/api/";
  sanitizedUrl : any;
  constructor(private _http:HttpClient,private sanitizer:DomSanitizer){
    this.sanitizedUrl=this.sanitizer.sanitize(4,this.BaseURL);
  }
  
   getCurrentAffairsInfo():any{
      
    return this._http.get(this.sanitizedUrl+"CurrentAffairsMasters/CurrentAffairsMastersList");
  }

   postCurrentAffairs(Current: CurrentAffairsMasters):any{
     
    return this._http.post<any>(this.sanitizedUrl+"CurrentAffairsMasters/CreateCurrentAffairsMasters",Current);
  }
}
