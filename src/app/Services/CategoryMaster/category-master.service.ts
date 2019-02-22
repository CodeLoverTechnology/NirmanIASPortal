import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CategoryMaster} from "../../Entity/category-master";
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class CategoryMasterService {

  BaseURL: string = "http://NIAS.codelovertechnology.com/api/";

  
  constructor(private http:HttpClient){}
  
  
  public getCategoryMasterInfo():any{
    return this.http.get(this.BaseURL+"CategoryMaster/CategoryMastersList");
  }
    
 public getEmployeeById(CategoryID :string): Observable<CategoryMaster> {  
  return this.http.get<CategoryMaster>(this.BaseURL + "CategoryMaster/CategoryMastersDetails/{id}" + CategoryID);  
}  
public postCategory(Category : CategoryMaster){
  console.log("Ts file call on submit"+ Category);
  return this.http.post<any>(this.BaseURL + "CategoryMaster/CreateCategoryMaster",Category);
};  
 public updateEmployee(employee: CategoryMaster): Observable<CategoryMaster> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.http.put<CategoryMaster>(this.BaseURL + 'CategoryMaster/UpdateCategoryMaster',  
  employee, httpOptions);  
}  
 public deleteEmployeeById(employeeid: string): Observable<number> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.http.delete<number>(this.BaseURL + 'CategoryMaster/DeleteCategoryMaster/{id}' +employeeid,  
httpOptions);  
}    
} 
