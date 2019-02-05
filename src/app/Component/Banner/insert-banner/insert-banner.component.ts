import { Component, OnInit } from '@angular/core';
import { BannerModel } from 'src/app/Entity/banner-model';
import { BannerMasterService } from 'src/app/Services/Banner/banner-master.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-insert-banner',
  templateUrl: './insert-banner.component.html',
  styleUrls: ['./insert-banner.component.css']
})
export class InsertBannerComponent implements OnInit {
  Banner = {} as BannerModel;

  constructor(private _service:BannerMasterService) { }
  ngOnInit(){ }
  onSubmit()
  {
  var Result = this._service.postBannerMaster(this.Banner).subscribe(
            result =>{
              this.Banner =result ? result : undefined ;
              this.Banner;              
              } ,
    (err:HttpErrorResponse)=>{
   if(err.error instanceof Error){
    console.log("Server Side Error....!");
        }else{
          console.log("Client Side Error   !");
        }
      })
  
  }

}
