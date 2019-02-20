import { Component, OnInit } from '@angular/core';
import { SocialMediaServiceService } from "../../../Services/SocialMediaService/social-media-service.service";
import { HttpErrorResponse } from '@Angular/common/http';

@Component({
  selector: 'app-get-social-media',
  templateUrl: './get-social-media.component.html',
  styleUrls: ['./get-social-media.component.css']
})
export class GetSocialMediaComponent implements OnInit {

  public result:any;
  constructor(private _service:SocialMediaServiceService) { }
ngOnInit() {
    this._service.getSocialMediaInfo().subscribe(res=>this.result=res);
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("Server Side Error !");
  }else{
      console.log("Client Side Error   !");
  }
}
}


}
