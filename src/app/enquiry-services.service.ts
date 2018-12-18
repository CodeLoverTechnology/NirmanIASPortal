import { Injectable } from '@angular/core';
import { HttpClient} from '@Angular/common/http';
import { EnquiryModel } from './enquiry-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EnquiryServicesService {
  _url ='http://nias.codelovertechnology.com/api/EnquiryInfo';
  constructor(private _http:HttpClient) { }

  SubmitEnquiry(Enq : EnquiryModel)
  {
    return this._http.post<any>(this._url,Enq);
  }

  GetEnquiryList() : Observable<EnquiryModel[]>
  {
    return this._http.get<EnquiryModel[]>(this._url);
  }

}
