import { Injectable } from '@angular/core';
import { EnquiryModel } from 'src/app/Entity/EnquiryModel';
import { HttpClient } from '@Angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnquiryServiceService {
  BaseURL: string = "http://nias.codelovertechnology.com/api/";

  selectedEnquiry: { Name: string; EmailID: string; Contact: string; EnquiryMessage: string; };
  constructor(private _http:HttpClient){}
  
  
  public getEnquiryInfo():any{
    return this._http.get(this.BaseURL+"Enquiry/EnquiryList");
  }

  public postEnquiry(enquiry : EnquiryModel){
    return this._http.post<any>(this.BaseURL+"Enquiry/CreateEnquiry",enquiry);
  }
}
