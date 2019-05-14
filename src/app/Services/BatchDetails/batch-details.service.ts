import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BatchDetails } from 'src/app/Entity/batch-details';

@Injectable({
  providedIn: 'root'
})
export class BatchDetailsService {
  BaseURL: string = "http://nias.codelovertechnology.com/api/";

  constructor(private _http:HttpClient){}

  public getBatchInfo():any{
    return this._http.get(this.BaseURL+"BatchDetails/BatchDetailsList");
  }

  public postBatchDetails(btcDetails : BatchDetails):any{
     
    return this._http.post<any>(this.BaseURL+"BatchDetails/CreateBatchDetails",btcDetails);
  }
}
