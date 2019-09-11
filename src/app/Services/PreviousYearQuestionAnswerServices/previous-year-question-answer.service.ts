import { PreviousYearQuestionAnswerModels } from 'src/app/Entity/PreviousYearQuestionAnswerModels';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreviousYearQuestionAnswerService {

  BaseURL: string = "https://nias.nirmanias.com/api/";
  sanitizedUrl : any;
  constructor(private _http:HttpClient,private sanitizer:DomSanitizer){
    this.sanitizedUrl=this.sanitizer.sanitize(4,this.BaseURL);
  }

  getPreviousYearQuestionAnswerList(Current: PreviousYearQuestionAnswerModels):any{
    return this._http.get(this.sanitizedUrl+"PreviousYearQuestionAnswerModels/PreviousYearQuestionAnswerModelsList");
}

 postPreviousYearQuestionAnswerDetails(Current: PreviousYearQuestionAnswerModels):any{   
  return this._http.post<any>(this.sanitizedUrl+"PreviousYearQuestionAnswerModels/CreatePreviousYearQuestionAnswer",Current);
}
 }
