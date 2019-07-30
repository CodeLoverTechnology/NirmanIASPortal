import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FacultyMaster } from 'src/app/Entity/FacultyMaster';
import { WINDOW } from '@ng-toolkit/universal';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultyMasterService } from 'src/app/Services/FacultyMaster/faculty-master.service';
import { HttpErrorResponse } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-delete-faculty-master',
  templateUrl: './delete-faculty-master.component.html',
  styleUrls: ['./delete-faculty-master.component.css']
})
export class DeleteFacultyMasterComponent implements OnInit {
  busy: Promise<any>;
  UpdateForm: NgForm;
  Faculty = {} as FacultyMaster;
  Result: any;
  FacultyID : number;
  constructor(@Inject(WINDOW) private _service: FacultyMasterService,private router: Router,
  private route: ActivatedRoute) { }
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.FacultyID=params.facultyID ;    
   });

   this.busy =this._service.getFacultyById(this.FacultyID).subscribe(res=>this.FacultyID=res);
    (err:HttpErrorResponse)=>{
    if(err.error instanceof Error){
    console.log("Server Side Error !");
    }else{
    console.log("Client Side Error !");
    }
    }
   alert("params.enquiryID : " + this.FacultyID);
    if(!this.FacultyID) {
      alert("Invalid action.")
      this.router.navigate(['admin/get-enquiry']);
      return;
    }
    
    
  }

  onFormSubmit() {
    this._service.FacultyDeleteEnquiry(this.FacultyID)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('Faculty information deleted successfully.');
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

