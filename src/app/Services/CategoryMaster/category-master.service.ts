import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {CategoryMaster} from "../../Entity/category-master";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryMasterService {

  BaseURL: string = "http://NIAS.codelovertechnology.com/api/";

  selectedCategory: { CategoryID: number; CategoryCode: string; CategoryName : string; Description: string; Sequence: string;};
  
  constructor(private _http:HttpClient){}
  
  createCategoryMaster(category:CategoryMaster):Observable<CategoryMaster>{

    let httpheaders= new HttpHeaders().set('Content-Type','application/json');
    let options={
      headers:httpheaders
    };
     
    return this._http.post<CategoryMaster>(this.BaseURL+"CategoryMaster/CreateCategoryMaster",category,options);
  }
  
  
  public getCategoryMaster():any{
    return this._http.get(this.BaseURL+"CategoryMaster/CategoryMastersList");
  }

  
}

