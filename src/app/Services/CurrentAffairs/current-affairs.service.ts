import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { CurrentAffairsMasters} from '../../Entity/CurrentAffairsMaster';
//import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CurrentAffairsService {

  BaseURL: string = "http://nias.codelovertechnology.com/api/";
  // selectedCurrent: {  CurrentAffairsID: number; Category: string; SubCategory: string; Title: string;  Summary: string;
  //    PDFPath: string; CurrentAffairsImgPath: string; IsNew : boolean;  NoOfView: number;  SpecialRemarks:  string; };
  
  constructor(private _http:HttpClient){}
  
  // createCurrentAffairs(Current:CurrentAffairsMasters):Observable<CurrentAffairsMasters>{
  //   let httpheaders= new HttpHeaders().set('Content-Type','application/json');
  //   let options={
  //   headers:httpheaders
  //   };
  //   return this._http.post<CurrentAffairsMasters>(this.BaseURL+"CurrentAffairsMasters/CreateCurrentAffairsMasters",Current,options);
  // }
  
  
   getCurrentAffairsInfo():any{
    return this._http.get(this.BaseURL+"CurrentAffairsMasters/CurrentAffairsMastersList");
  }

   postCurrentAffairs(Current: CurrentAffairsMasters):any{
     debugger;
    return this._http.post<any>(this.BaseURL+"CurrentAffairsMasters/CreateCurrentAffairsMasters",Current);
  }
}
