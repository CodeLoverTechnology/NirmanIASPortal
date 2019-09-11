import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestStudentResult } from 'src/app/Entity/TestStudentResult';


@Injectable({
  providedIn: 'root'
})
export class TestStudentResultService {
  BaseURL: string = "https://nias.nirmanias.com/api/";
  constructor(private _http:HttpClient) { }

  public getTestStudentResult():any{
    return this._http.get(this.BaseURL+"TestStudentResult/TestStudentResultList");
  }

  public postTestStudentResult(testStudentResult: TestStudentResult):any{
    
    return this._http.post<any>(this.BaseURL+"TestStudentResult/CreateTestStudentResult",testStudentResult);
  }

  public getTestStudentResultById(testResultID: number):any{
    return this._http.get(this.BaseURL + "Enquiry/EnquiryDetails/" + testResultID);
  }
  public  updateTestStudentResult(testStudentResult : TestStudentResult):any{
  return this._http.put<any>(this.BaseURL + "Enquiry/UpdateEnquiry",testStudentResult);
  }
  public  deleteTestStudentResult(testResultID: number):any {
    return this._http.delete<any>(this.BaseURL + "Enquiry/DeleteEnquiry/" + testResultID);
  }
}

