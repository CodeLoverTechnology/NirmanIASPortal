import { Component, OnInit } from '@angular/core';
import {StudentmasterService} from "../../../Services/StudentMaster/studentmaster.service";
import {StudentMaster} from "../../../Entity/student-master";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-get-studentmaster',
  templateUrl: './get-studentmaster.component.html',
  styleUrls: ['./get-studentmaster.component.css']
})
export class GetStudentmasterComponent implements OnInit {

  public result: any;
  constructor(private _service:StudentmasterService) { }
  ngOnInit() {
    this._service.getStudentInfo().subscribe(res => this.result = res);
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Server Side Error !");
      } else {
        console.log("Client Side Error   !");
      }
    }
  }

}

