import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@Angular/common/http';
import { SocialMediaModel } from 'src/app/Entity/SocialMediaModel';
import {SocialMediaServiceService} from '../../../Services/SocialMediaService/social-media-service.service';
import {FormGroup, FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';
import { Observable } from 'rxjs';
//import {ReactForm} from '@angular/forms';


  
@Component({
  selector: 'app-insert-social-media',
  templateUrl: './insert-social-media.component.html',
  styleUrls: ['./insert-social-media.component.css']
})
export class InsertSocialMediaComponent implements OnInit {
  busy: Promise<any>;
  privatevar_one: string;  
  socialmedia = {} as SocialMediaModel;
  datasaved=false;
  SocialMediaForm:FormGroup;
  allsocialmedias:Observable<SocialMediaModel[]>;

constructor(private formbuilder:FormBuilder,private _service: SocialMediaServiceService) { }
ngOnInit(){
  this.SocialMediaForm=this.formbuilder.group({
       SocialMediaName:['',[Validators.required]],
       Address:['',[Validators.required]],
       Notes:['',[Validators.required]],
     // SubTitle:['',[Validators.required]],
     //  Remark:['',[Validators.required]],
       CreatedBy:['',[Validators.required]],
       CreatedDate:['',[Validators.required]],
       ModifiedBy:['',[Validators.required]],
       ModifiedDate:['',[Validators.required]],
       Active:['',[Validators.required]]

  
  socialmedia = {} as SocialMediaModel;

})
 }
 getsocialmedia()
 {
   this.allsocialmedias=this._service.getSocialMediaInfo();
 }
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

