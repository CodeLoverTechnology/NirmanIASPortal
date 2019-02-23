import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CourseMaster} from "../../Entity/course-master";
@Injectable({
  providedIn: 'root'
})
export class CourseMasterService {


    BaseURL: string = "http://NIAS.codelovertechnology.com/";
  
    selectedCource: { CourseID: number; CourseType : string; CourseCode : string; CourseName: string; Remarks: string;};
    constructor(private _http:HttpClient){}
    
    
    public getCourseMasterInfo():any{
      return this._http.get(this.BaseURL+"api/CourseMaster/CourseMasterList");
    }
  
    public postCourseMasterInfo(Course : CourseMaster){
      return this._http.post<any>(this.BaseURL+"api/CourseMaster/CourseMasterCreate",Course);
    }
  }

