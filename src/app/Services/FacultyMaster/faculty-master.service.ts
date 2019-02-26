import { Injectable } from '@angular/core';
import {HttpClient, } from "@angular/common/http";
import {FacultyMaster } from '../../Entity/FacultyMaster';


@Injectable({
  providedIn: 'root'
})
export class FacultyMasterService { 

  BaseURL: string = "http://NIAS.codelovertechnology.com/api/";

constructor(private _http:HttpClient){}
  
  public getFacultyMasterInfo():any{
    return this._http.get(this.BaseURL+"FacultyMaster/FacultyMasterList");
  }

  public postFacultyMaster(faculty_master : FacultyMaster):any{
    return this._http.post<any>(this.BaseURL+"FacultyMaster/CreateFacultyMaster",faculty_master);
  }
}
