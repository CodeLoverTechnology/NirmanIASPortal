import { Injectable } from '@angular/core';
import {HttpClient, } from "@angular/common/http";
import {FacultyMaster } from '../../Entity/FacultyMaster';


@Injectable({
  providedIn: 'root'
})
export class FacultyMasterService { 

  BaseURL: string = "https://nias.nirmanias.com/api/";

constructor(private _http:HttpClient){}
  
  public getFacultyMasterInfo():any{
    return this._http.get(this.BaseURL+"FacultyMaster/FacultyMasterList");
  }

  public getFacultyById(facultyId: number):any{
    debugger;
    return this._http.get(this.BaseURL + "FacultyMaster/FacultyMasterDetails/" + facultyId);
  }

  public postFacultyMaster(faculty_master : FacultyMaster):any{
    return this._http.post<any>(this.BaseURL+"FacultyMaster/CreateFacultyMaster",faculty_master);
  }

  public  FacultyUpdateEnquiry(faculty_master : FacultyMaster):any{
    return this._http.put<any>(this.BaseURL + "FacultyMaster/UpdateFacultyMaster",faculty_master);
    }

    public  FacultyDeleteEnquiry(facultyId: number):any {
      return this._http.delete<any>(this.BaseURL + "FacultyMaster/DeleteFacultyMaster/" + facultyId);
    }
}
