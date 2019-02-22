import {  Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { SocialMediaModel } from '../../Entity/SocialMediaModel';
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class SocialMediaServiceService {

  BaseURL: string = "http://NIAS.codelovertechnology.com";

  selectedMedia: { SocialMediaID: string; SocialMediaName: string; Address : string; Notes: string; };
  
  constructor(private http:HttpClient){}
  
    
 getAllEmployee(): Observable<SocialMediaModel[]> {
  return this.http.get<SocialMediaModel[]>(this.BaseURL + "/api/SocialMediaMasters/SocialMediaMastersListt");
  
} 

getEmployeeById(CategoryID :string): Observable<SocialMediaModel> {  
return this.http.get<SocialMediaModel>(this.BaseURL + "/api/SocialMediaMasters/SocialMediaMastersDetails/" + CategoryID);   
}  
public postSocialMedia(socialmedia : SocialMediaModel){
  console.log("Ts file call on submit"+ socialmedia);
  return this.http.post<any>(this.BaseURL + "/api/SocialMediaMasters/CreateSocialMediaMasters",socialmedia);
};  
updateEmployee(employee:SocialMediaModel): Observable<SocialMediaModel> {  
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
return this.http.put<SocialMediaModel>(this.BaseURL + '/api/SocialMediaMasters/UpdateSocialMediaMasters',  
employee, httpOptions);  
}  
deleteEmployeeById(employeeid:string): Observable<number> {  
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
return this.http.delete<number>(this.BaseURL + '/api/SocialMediaMasters/DeleteSocialMediaMasters/' +employeeid,  
httpOptions);  
}    
} 

 
