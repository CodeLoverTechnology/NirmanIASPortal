import { Injectable } from '@angular/core';
import { EnquiryModel } from 'src/app/Entity/EnquiryModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnquiryServiceService {
  BaseURL: string = "https://nias.nirmanias.com/api/";

  selectedEnquiry: { Name: string; EmailID: string; Contact: string; EnquiryMessage: string; };
  constructor(private _http:HttpClient){}
  
  
  public getEnquiryInfo():any{
    return this._http.get(this.BaseURL+"Enquiry/EnquiryList");
  }

  public getEnquiryById(enquiryID: number):any{
    return this._http.get(this.BaseURL + "Enquiry/EnquiryDetails/" + enquiryID);
  }
  public postEnquiry(enquiry : EnquiryModel):any{
     return this._http.post<any>(this.BaseURL+"Enquiry/CreateEnquiry",enquiry);
  }

   public  updateEnquiry(Enquiry : EnquiryModel):any{
  return this._http.put<any>(this.BaseURL + "Enquiry/UpdateEnquiry",Enquiry);
  }
  public  deleteEnquiry(EnquiryID: number):any {
    return this._http.delete<any>(this.BaseURL + "Enquiry/DeleteEnquiry/" + EnquiryID);
  }
}
