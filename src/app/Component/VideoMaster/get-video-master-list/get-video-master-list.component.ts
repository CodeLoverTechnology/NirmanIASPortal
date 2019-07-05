import { Component, OnInit } from '@angular/core';
import { VideoMastersModel } from 'src/app/Entity/VideoMastersModel';
import { VideoMastersServicesService } from 'src/app/Services/VideoMastersServices/video-masters-services.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-video-master-list',
  templateUrl: './get-video-master-list.component.html',
  styleUrls: ['./get-video-master-list.component.css']
})
export class GetVideoMasterListComponent implements OnInit {
  public result: any;
  Current = {} as VideoMastersModel;
  constructor(private _service: VideoMastersServicesService) { }

  ngOnInit() {
    debugger;
    this._service.getVideoMastersModelList(this.Current).subscribe(res => this.result = res);
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Server Side Error !");
      } else {
        console.log("Client Side Error   !");
      }
    }
  }
}



