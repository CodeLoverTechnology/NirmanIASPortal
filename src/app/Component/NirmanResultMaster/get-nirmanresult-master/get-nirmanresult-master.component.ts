import { Component, OnInit } from '@angular/core';
import {NirmanResultMasterService} from "../../../Services/NirmanResultMaster/nirman-result-master.service";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-get-nirmanresult-master',
  templateUrl: './get-nirmanresult-master.component.html',
  styleUrls: ['./get-nirmanresult-master.component.css']
})
export class GetNirmanresultMasterComponent implements OnInit {

  public result: any;
  constructor(private _service:NirmanResultMasterService) { }
  ngOnInit() {
    this._service.getNirmanResultsInfo().subscribe(res => this.result = res);
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Server Side Error !");
      } else {
        console.log("Client Side Error   !");
      }
    }
  }

}
