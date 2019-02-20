import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@Angular/common/http';
import { SocialMediaModel } from 'src/app/Entity/SocialMediaModel';
import { SocialMediaServiceService } from 'src/app/Services/SocialMediaService/social-media-service.service';

@Component({
  selector: 'app-insert-social-media',
  templateUrl: './insert-social-media.component.html',
  styleUrls: ['./insert-social-media.component.css']
})
export class InsertSocialMediaComponent implements OnInit {
  busy: Promise<any>;
  privatevar_one: string;  
  SocialMediaModel ={} as SocialMediaModel;

constructor(private _service: SocialMediaServiceService) { }
ngOnInit(){ }
onSubmit()
{
 var Result = this._service.postSocialMedia(this.SocialMediaModel).subscribe(
           result =>{
             this.SocialMediaModel =result ? result : undefined ;
             this.SocialMediaModel;              
            } ,
            // this.busy = this._service.postSocialMedia(this.SocialMediaModel).subscribe(
            //   result => this.SocialMediaModel = result);  
(err:HttpErrorResponse)=>{
 if(err.error instanceof Error){
  console.log("Server Side Error....!");
      }
      else{
        console.log("Client Side Error   !");
      }
    })

  }

}


