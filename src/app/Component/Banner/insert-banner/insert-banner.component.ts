import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BannerMasterService } from 'src/app/Services/Banner/banner-master.service';
import { BannerModel } from 'src/app/Entity/banner-model';

@Component({
  selector: 'app-insert-banner',
  templateUrl: './insert-banner.component.html',
  styleUrls: ['./insert-banner.component.css']
})
export class InsertBannerComponent implements OnInit {
  private var_one:string;
  Banner = {} as BannerModel;


  constructor(private _service:BannerMasterService) { }
  ngOnInit(){ }
  onSubmit()
  {
    this._service.postBannerMaster(this.Banner).subscribe(
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

