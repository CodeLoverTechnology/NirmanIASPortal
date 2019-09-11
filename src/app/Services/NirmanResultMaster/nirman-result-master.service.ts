import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NirmanResultMasters} from "../../Entity/NirmanResultMaster";
@Injectable({
  providedIn: 'root'
})
export class NirmanResultMasterService {

  BaseURL: string = "https://nias.nirmanias.com/api/";

  
  constructor(private _http:HttpClient){}
  
  
  public getNirmanResultsInfo():any{
    return this._http.get(this.BaseURL+"NirmanResultMasters/NirmanResultMastersList");
  }

  public postNirmanResults(Results : NirmanResultMasters):any{
    return this._http.post<any>(this.BaseURL+"NirmanResultMasters/CreateNirmanResultMasters",Results);
  }
}