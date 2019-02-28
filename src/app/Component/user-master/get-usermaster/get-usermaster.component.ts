import { Component, OnInit } from '@angular/core';
import {UsermasterService} from "../../../Services/UserMaster/usermaster.service";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-get-usermaster',
  templateUrl: './get-usermaster.component.html',
  styleUrls: ['./get-usermaster.component.css']
})
export class GetUsermasterComponent implements OnInit {

  public result: any;
  constructor(private _service:UsermasterService) { }
  ngOnInit() {
    this._service.getUser().subscribe(res => this.result = res);
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Server Side Error !");
      } else {
        console.log("Client Side Error   !");
      }
    }
  }

}
