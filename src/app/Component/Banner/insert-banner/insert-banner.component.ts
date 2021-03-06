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
  onFormSubmit()
  {
    
  this._service.postBannerDetails(this.Banner).subscribe(
    result => console.log('Success !!!.',result),
      (err:HttpErrorResponse)=>{
     if(err.error instanceof Error){
            console.log("Server Side Error....!");
          }else{
            console.log("Client Side Error   !");
          }
        })
      console.log(this.Banner);
    }}
