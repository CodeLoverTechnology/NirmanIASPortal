import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders, } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  BaseURL: string = "http://NIAS.codelovertechnology.com/assets/CurrentAffairs/CurrentAffairsTheHindu/";
 // HeaderName : HttpHeaders;
  
  constructor(private _http:HttpClient) { }


//   postFile(fileToUpload: File): Observable<boolean> {
    
//     const endpoint = 'http://NIAS.codelovertechnology.com/assets/CurrentAffairs/CurrentAffairsTheHindu/';
//     const formData: FormData = new FormData();
//     // formData.append('fileKey', fileToUpload, fileToUpload.name);
//     // return this._http.post(endpoint, formData, {headers : any})
//     //   .map(() => { return true; })
//     //   .catch((e) => this.handleError(e));
// }
}
