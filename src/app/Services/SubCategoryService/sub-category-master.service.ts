import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { SubCategoryMaster } from '../../Entity/sub-category-master';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryMasterService {

  BaseURL: string = "http://NIAS.codelovertechnology.com/api/";

   
  constructor(private _http:HttpClient){}
  
  
  public getsubcategoryInfo():any{
    return this._http.get(this.BaseURL+"SubCategoryMaster/SubCategoryMasterList");
  }

  public postsubcategory(SubCategory: SubCategoryMaster):any{
    return this._http.post<any>(this.BaseURL+"SubCategoryMaster/CreateSubCategoryMaster",SubCategory);
  }
}
