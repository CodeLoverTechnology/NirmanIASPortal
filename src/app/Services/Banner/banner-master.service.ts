import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BannerModel } from '../../Entity/banner-model';
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
@Injectable({
  providedIn: 'root'
})
export class BannerMasterService{

 
  BaseURL: string = "http://NIAS.codelovertechnology.com/api/";

  selectedBanner: { BannerID: string; BannerTitle : string; BannerImagesPath : string; SubTitle: string; Remarks: string;};
  
  constructor(private http:HttpClient){}
  
  
  public getBannerInfo():any{
    return this._http.get(this.BaseURL+"Banner/BannerList");
  }

  public postBannerMaster(Banner : BannerModel){
    return this._http.post<any>(this.BaseURL+"Banner/CreateBanner",Banner);
  }
}

  getEmployeeById(BannerID :string): Observable<BannerModel> {  
    return this.http.get<BannerModel>(this.BaseURL + "Banner/BannerDetails/" + BannerID);  
  }  
  public postBanner(banner : BannerModel){
    console.log("Ts file call on submit"+ banner);
    return this.http.post<any>(this.BaseURL + "Banner/CreateBanner",banner);
  };  
  
  updateEmployee(employee: BannerModel): Observable<BannerModel> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<BannerModel>(this.BaseURL + 'Banner/UpdateBanner',  
    employee, httpOptions);  
  }  
  deleteEmployeeById(employeeid: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.BaseURL + 'Banner/DeleteBanner/' +employeeid,  
 httpOptions);  
  }    
} 