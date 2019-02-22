import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BranchMaster } from 'src/app/Entity/branch-master';
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
@Injectable({
  providedIn: 'root'
})
export class BranchMasterService {

 
  BaseURL: string = "http://NIAS.codelovertechnology.com/api/";

  
  constructor(private http:HttpClient){}
  
  
  public getbranchInfo():any{
    return this.http.get(this.BaseURL+"BranchMaster/BranchMasterList");
  } 

  getEmployeeById(BranchCode :string): Observable<BranchMaster> {  
    return this.http.get<BranchMaster>(this.BaseURL + "BranchMaster/BranchDetails/" + BranchCode);  
  }  
  public postBranch(branch : BranchMaster){
    console.log("Ts file call on submit" +branch);
    return this.http.post<any>( this.BaseURL +"BranchMaster/CreateBranch",branch);
  }  
  updateEmployee(employee: BranchMaster): Observable<BranchMaster> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<BranchMaster>(this.BaseURL + '/BranchMaster/UpdateBranchMaster/',  
    employee, httpOptions);  
  }  
  deleteEmployeeById(employeeid: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.BaseURL + '/BranchMaster/DeleteBranch/' +employeeid,  
 httpOptions);  
  }    
} 