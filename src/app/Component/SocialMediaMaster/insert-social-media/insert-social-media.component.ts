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


  
  socialmedia = {} as SocialMediaModel;

constructor(private _service:SocialMediaServiceService) { }
ngOnInit(){ }
onSubmit()
{
  
this._service.postSocialMedia(this.socialmedia).subscribe(
  result => console.log('Success !!!.',result),
    (err:HttpErrorResponse)=>{
   if(err.error instanceof Error){
          console.log("Client Side Error....!");
        }else{
          console.log("Server Side Error   !");
        }
      })
    console.log(this.socialmedia);
  }}

