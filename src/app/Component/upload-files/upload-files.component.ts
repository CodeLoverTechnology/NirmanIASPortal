import { Component, OnInit, VERSION } from '@angular/core';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';

// const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {
  BaseURL: string = "https://nias.nirmanias.com/assets/CurrentAffairs/CurrentAffairsTheHindu/";
  percentDone: number;
  uploadSuccess: boolean;
  // fileToUpload: File = null;
  constructor( private http: HttpClient) { }
  version = VERSION
  
  ngOnInit() {
  }

  upload(files: File[]){
    //pick from one of the 4 styles of file uploads below
    this.uploadAndProgress(files);
  }

  basicUpload(files: File[]){
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f))
    this.http.post(this.BaseURL, formData)
      .subscribe(event => {  
        console.log('done')
      })
  }
 
  basicUploadSingle(file: File){    
    this.http.post(this.BaseURL, file)
      .subscribe(event => {  
        console.log('done')
      })
  }
  
  uploadAndProgress(files: File[]){
    console.log(files)
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file',f))
    
    this.http.post(this.BaseURL, formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
    });
  }
  
  uploadAndProgressSingle(file: File){    
    this.http.post(this.BaseURL, file, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
    });
  }

// uploadFileToActivity() {
//   // this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
//   //   // do something, if upload success
//   //   }, error => {
//   //     console.log(error);
//   //   });
// }

  

}
