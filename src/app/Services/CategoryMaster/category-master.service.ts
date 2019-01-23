import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import {CategoryMaster} from "../../Entity/category-master";

@Injectable({
  providedIn: 'root'
})
export class CategoryMasterService {

  BaseURL: string = "http:// NIAS.codelovertechnology.com";

  
  constructor(private _http:HttpClient){}
  
  
  public getCategoryMasterInfo():any{
    return this._http.get(this.BaseURL+"api/CategoryMaster/CategoryMastersList");
  }

  public postCategoryMaster(CategoryMaster : CategoryMaster){
    return this._http.post<any>(this.BaseURL+"api/CategoryMaster/CreateCategoryMaster",CategoryMaster);
  }
}

