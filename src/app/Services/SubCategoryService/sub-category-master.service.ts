import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { SubCategoryMaster } from '../../Entity/sub-category-master';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryMasterService {

  BaseURL: string = "http:// NIAS.codelovertechnology.com";

   
  constructor(private _http:HttpClient){}
  
  
  public getsubcategoryInfo():any{
    return this._http.get(this.BaseURL+"api/SubCategoryMaster/SubCategoryMasterList");
  }

  public postsubcategory(SubCategoryMaster: SubCategoryMaster){
    return this._http.post<any>(this.BaseURL+"api/SubCategoryMaster/CreateSubCategoryMaster",SubCategoryMaster);
  }
}
