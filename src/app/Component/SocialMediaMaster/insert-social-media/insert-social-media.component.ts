import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SocialMediaModel } from 'src/app/Entity/SocialMediaModel';
import { SocialMediaServiceService } from '../../../Services/SocialMediaService/social-media-service.service';
//import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
//import { Observable } from 'rxjs';




@Component({
  selector: 'app-insert-social-media',
  templateUrl: './insert-social-media.component.html',
  styleUrls: ['./insert-social-media.component.css']
})
export class InsertSocialMediaComponent implements OnInit {
  socialmedia = {} as SocialMediaModel;
  Result: any;
    
  constructor(private _service: SocialMediaServiceService) { }
    ngOnInit() { }


     onFormSubmit() {
    this._service.postSocialMedia(this.socialmedia).subscribe(
      res => this.Result = res);
     (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
      console.log("Server Side Error....!");
    } else {
      console.log("Client Side Error !");
    }
    this.getsocialmedia();
  };
}
   
    



  getsocialmedia() {
    this.Result= this._service.getSocialMediaInfo();
  }



}


