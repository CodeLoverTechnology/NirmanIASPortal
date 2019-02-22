import { Component, OnInit, NgModule } from '@angular/core';
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
    
  this._service.postBanner(this.Banner).subscribe(
    result => console.log('Success !!!.',result),
      (err:HttpErrorResponse)=>{
     if(err.error instanceof Error){
            console.log("Client Side Error....!");
          }else{
            console.log("Server Side Error   !");
          }
        })
      console.log(this.Banner);
    }}
