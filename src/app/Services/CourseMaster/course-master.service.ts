import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import {CourseMaster} from "../../Entity/course-master";
@Injectable({
  providedIn: 'root'
})
export class CourseMasterService {


    BaseURL: string = "http:// NIAS.codelovertechnology.com";
  
    constructor(private _http:HttpClient){}
    
    
    public getCourseMasterInfo():any{
      return this._http.get(this.BaseURL+"api/CourseMaster/CourseMasterList");
    }
  
    public postCourseMasterInfo(CourseMaster : CourseMaster){
      return this._http.post<any>(this.BaseURL+"api/CourseMaster/CourseMasterCreate",CourseMaster);
    }
  }

