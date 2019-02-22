import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CourseMaster} from "../../Entity/course-master";
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseMasterService {


    BaseURL: string = "http://NIAS.codelovertechnology.com";
  
    constructor(private http:HttpClient){}
    
    public getCourceMasterInfo():any{
  return this.http.get(this.BaseURL + "CourseMaster/CourseMasterList");
} 
  getEmployeeById(employeeId: string): Observable<CourseMaster> {  
    return this.http.get<CourseMaster>(this.BaseURL + '/api/CourseMaster/CourseMasterDetails/{id}' + employeeId);  
  }  
  public postCategory(Cource : CourseMaster){
    console.log("Ts file call on submit"+ Cource);
    return this.http.post<any>(this.BaseURL + "Banner/CreateBanner",Cource);
  };  
   
  updateEmployee(employee: CourseMaster): Observable<CourseMaster> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<CourseMaster>(this.BaseURL + '/api/CourseMaster/CourseMasterUpdate',  
    employee, httpOptions);  
  }  
  deleteEmployeeById(employeeid: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.BaseURL + '/api/CourseMaster/DeleteCourseMaster/{id}' +employeeid,  
 httpOptions);  
  }  
}  
    
   