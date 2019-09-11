import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StudentMaster} from "../../Entity/student-master";
@Injectable({
  providedIn: 'root'
})
export class StudentmasterService {

  BaseURL: string = "https://nias.nirmanias.com/api/";

  constructor(private _http: HttpClient) { }
  

  public getStudentInfo(): any {
    return this._http.get(this.BaseURL + "StudentMasterInfo/StudentMasterList");
  }
  public postStudentMaster(student: StudentMaster) {
    return this._http.post<any>(this.BaseURL + "StudentMasterInfo/CreateStudentMaster", student);
  }
}


