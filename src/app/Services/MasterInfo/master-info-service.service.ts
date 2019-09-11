import { Component, OnInit, NgModule, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MasterInfoModel} from "../../Entity/master-info-model";

@Injectable({
  providedIn: 'root'
})
export class MasterInfoServiceService {

  BaseURL: string = "https://nias.nirmanias.com/api/";

  selectedMaster: { MasterID: string; MasterValue: string; MasterTable: string; Sequence: string;};
  

  constructor(private _http:HttpClient){}
  
  
  public getMasterInfo():any{
    return this._http.get(this.BaseURL+"MasterInfo/MasterInfoList");
  }

  public postMasterInfo(MasterInfoModel : MasterInfoModel){
    return this._http.post<any>(this.BaseURL+"MasterInfo/CreateMasterInfo",MasterInfoModel);
  }
}
