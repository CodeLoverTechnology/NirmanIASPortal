import { Component, OnInit, Inject, DebugNode } from '@angular/core';
import { FacultyMaster } from 'src/app/Entity/FacultyMaster';
import { FacultyMasterService } from 'src/app/Services/FacultyMaster/faculty-master.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WINDOW } from '@ng-toolkit/universal';
import { first } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-update-faculty-master',
  templateUrl: './update-faculty-master.component.html',
  styleUrls: ['./update-faculty-master.component.css']
})
export class UpdateFacultyMasterComponent implements OnInit {
  busy: Promise<any>;
  UpdateForm: NgForm;
  Faculty = {} as FacultyMaster;
  Result: any;
  FacultyID : number;
  constructor(@Inject(WINDOW) private _service: FacultyMasterService,private router: Router,
  private route: ActivatedRoute) { }
  ngOnInit(){
    debugger;
    this.route.queryParams.subscribe(params => {
      this.FacultyID=params.facultyID ;    
   });
   this.busy =this._service.getFacultyById(this.FacultyID).subscribe(res=>this.Faculty=res);
    (err:HttpErrorResponse)=>{
    if(err.error instanceof Error){
    console.log("Server Side Error !");
    }else{
    console.log("Client Side Error !");
    }
    }
   alert("params.FacultyID : " + this.FacultyID);
   debugger;
    if(!this.FacultyID) {
      alert("Invalid action.")
      this.router.navigate(['admin/get-enquiry']);
      return;
    }
    else
    {
      alert("this.Faculty : " + this.Faculty);
    }
    
    
  }

  onFormSubmit() {
    this._service.FacultyUpdateEnquiry(this.Faculty)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('Faculty updated successfully.');
            this.router.navigate(['./admin/admin/get-facultyMaster']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }
}
