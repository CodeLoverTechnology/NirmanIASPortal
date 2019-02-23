import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {CategoryMaster} from "../../Entity/category-master";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryMasterService {

  BaseURL: string = "http://NIAS.codelovertechnology.com/";

  selectedCategory: { CategoryID: number; CategoryCode: string; CategoryName : string; Description: string; Sequence: string;};
  
  constructor(private _http:HttpClient){}
  
  createCategoryMaster(category:CategoryMaster):Observable<CategoryMaster>{

    let httpheaders= new HttpHeaders().set('Content-Type','application/json');
    let options={
      headers:httpheaders
    };
    debugger;
    return this._http.post<CategoryMaster>(this.BaseURL+"api/CategoryMaster/CreateCategoryMaster",CategoryMaster,options);
  }
  
  
  public getCategoryMaster():any{
    return this._http.get(this.BaseURL+"api/CategoryMaster/CategoryMastersList");
  }

  public postCategoryMaster(category : CategoryMaster):any{
    return this._http.post<any>(this.BaseURL+"api/CategoryMaster/CreateCategoryMaster",category);
  }
}

