import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BranchMaster } from 'src/app/Entity/branch-master';

@Injectable({
  providedIn: 'root'
})
export class BranchMasterService {

 
  BaseURL: string = "http://NIAS.codelovertechnology.com/api/";

  
  constructor(private _http:HttpClient){}
  
  
  public getBranchInfo():any{
    return this._http.get(this.BaseURL+"BranchMaster/BranchMasterList");
  }

  public postBranchMaster(BranchMaster : BranchMaster){
    return this._http.post<any>(this.BaseURL+"BranchMaster/CreateBranch",BranchMaster);
  }
}

