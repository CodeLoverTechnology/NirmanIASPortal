import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import {MasterInfoModel} from "../../Entity/master-info-model";

@Injectable({
  providedIn: 'root'
})
export class MasterInfoServiceService {

  BaseURL: string = "http:// NIAS.codelovertechnology.com";

  constructor(private _http:HttpClient){}
  
  
  public getMasterInfo():any{
    return this._http.get(this.BaseURL+"api/MasterInfo/MasterInfoList");
  }

  public postMasterInfo(MasterInfoModel : MasterInfoModel){
    return this._http.post<any>(this.BaseURL+"api/MasterInfo/CreateMasterInfo",MasterInfoModel);
  }
}
