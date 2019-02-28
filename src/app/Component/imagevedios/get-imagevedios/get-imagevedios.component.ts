import { Component, OnInit } from '@angular/core';
import {ImagevediosService} from "../../../Services/ImageVedios/imagevedios.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-get-imagevedios',
  templateUrl: './get-imagevedios.component.html',
  styleUrls: ['./get-imagevedios.component.css']
})
export class GetImagevediosComponent implements OnInit {
  public result: any;
  constructor(private _service:ImagevediosService) { }
  ngOnInit() {
    this._service.getImagevediosInfo().subscribe(res => this.result = res);
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Server Side Error !");
      } else {
        console.log("Client Side Error   !");
      }
    }
  }

}

