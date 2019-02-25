import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BatchTopicDetails} from "../../Entity/batch-topic details";
@Injectable({
  providedIn: 'root'
})
export class BatchTopicDetailsService {

  BaseURL: string = "http://NIAS.codelovertechnology.com/api/";

  
  constructor(private _http:HttpClient){}
  
  
  public getBatchdetailInfo():any{
    return this._http.get(this.BaseURL+"BatchTopicDetails/BatchTopicDetailsList");
  }

  public postBatchdetail(BatchTopic : BatchTopicDetails){
    return this._http.post<any>(this.BaseURL+"BatchTopicDetails/CreateBatchTopicDetails",BatchTopic);
  }
}

