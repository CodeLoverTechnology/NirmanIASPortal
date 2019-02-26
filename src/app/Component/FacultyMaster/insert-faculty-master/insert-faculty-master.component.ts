import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FacultyMaster } from "../../../Entity/FacultyMaster";
import { FacultyMasterService} from '../../../Services/FacultyMaster/faculty-master.service';


@Component({
  selector: 'app-insert-faculty-master',
  templateUrl: './insert-faculty-master.component.html',
  styleUrls: ['./insert-faculty-master.component.css']
})
export class InsertFacultyMasterComponent implements OnInit {
  Faculty = {} as FacultyMaster;
  Result: any;
  constructor(private _service: FacultyMasterService) { }
  ngOnInit() { }

  onFormSubmit() {
    this._service.postFacultyMaster(this.Faculty).subscribe(
      res => this.Result = res);
     (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
      console.log("Server Side Error....!");
    } else {
      console.log("Client Side Error !");
    }
    this.getFaculty();
    };
}
getFaculty() {
  this.Result= this._service.getFacultyMasterInfo();
}
}
