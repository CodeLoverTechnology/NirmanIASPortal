import { Component, OnInit } from '@angular/core';
import { BannerMasterService } from 'src/app/Services/Banner/banner-master.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-banner',
  templateUrl: './get-banner.component.html',
  styleUrls: ['./get-banner.component.css']
})
export class GetBannerComponent implements OnInit {

  public result: any;
  constructor(private _service: BannerMasterService) { }
  ngOnInit() {
    this._service.getBannerInfo().subscribe(res => this.result = res);
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Server Side Error !");
      } else {
        console.log("Client Side Error   !");
      }
    }
  }

}


