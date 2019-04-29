import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FacultyMaster } from "../../../Entity/FacultyMaster";
import { FacultyMasterService} from '../../../Services/FacultyMaster/faculty-master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-faculty-master',
  templateUrl: './insert-faculty-master.component.html',
  styleUrls: ['./insert-faculty-master.component.css']
})
export class InsertFacultyMasterComponent implements OnInit {
  busy: Promise<any>;
  Faculty = {} as FacultyMaster;
  Result: any;
  constructor(private _service: FacultyMasterService,private router: Router) { }
  ngOnInit() { }

  onFormSubmit() {
    this.busy ==this._service.postFacultyMaster(this.Faculty).subscribe(
      res => this.Result = res);
     (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
      console.log("Server Side Error....!");
    } else {
      console.log("Client Side Error !");
    }
    };
    if(!this.busy)
    {
      alert("Faculty Info Added Successfully.") 
    this.router.navigate(['/admin/get-facultyMaster']);
    }
    else{
      alert("Faculty Info not Added Successfully..")
    }
}
}