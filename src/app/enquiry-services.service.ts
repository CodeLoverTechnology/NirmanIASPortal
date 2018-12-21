import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EnquiryModel } from './enquiry-model';

@Injectable({
  providedIn: 'root'
})

export class EnquiryServicesService {
  _url ='http://nias.codelovertechnology.com/api/EnquiryInfo/3';
  constructor(private _http:HttpClient) { }

public getEnquiry():any{
  return this._http.get("http://nias.codelovertechnology.com/api/EnquiryInfo");
}
  public SubmitEnquiry(Enq : EnquiryModel)
  {
    return this._http.post<any>(this._url,Enq);
  }

  // public GetEnquiryList() : Observable<EnquiryModel[]>
  // {
  //   return this._http.get<EnquiryModel[]>(this._url);
  // }

}
