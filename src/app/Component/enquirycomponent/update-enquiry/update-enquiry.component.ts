import { Component, OnInit } from '@angular/core';
import { EnquiryModel } from 'src/app/Entity/EnquiryModel';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { EnquiryServiceService } from './../../../Services/EnquiryServices/enquiry-service.service';
import { first } from 'rxjs/operators';
import { NumberValueAccessor } from '@angular/forms/src/directives';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-enquiry',
  templateUrl: './update-enquiry.component.html',
  styleUrls: ['./update-enquiry.component.css']
})
export class UpdateEnquiryComponent implements OnInit {
  enquiry: EnquiryModel;
  UpdateForm: NgForm;
  EnqID : number;
  busy: Promise<any>;
  constructor(private router: Router,private route: ActivatedRoute, private _Service:EnquiryServiceService ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.EnqID=params.enquiryID ;
    });
debugger;
    this.busy =this._Service.getEnquiryById(this.EnqID).subscribe(res=>this.enquiry=res);
    (err:HttpErrorResponse)=>{
    if(err.error instanceof Error){
    console.log("Server Side Error !");
    }else{
    console.log("Client Side Error !");
    }
    }

    // this.enquiry = this._Service.getEnquiryById(+this.EnqID)
    // .subscribe( data => {
    //   this.UpdateForm.setValue(data.result);
    // });
      alert("params.enquiryID : " + this.EnqID);
  
    //let enquiryId = window.localStorage.getItem("updateenquiryID");
    if(!this.EnqID) {
      alert("Invalid action.")
      this.router.navigate(['admin/get-enquiry']);
      return;
    }
    
    
  }

  onSubmit() {
    debugger;
    this._Service.updateEnquiry(this.enquiry)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('User updated successfully.');
            this.router.navigate(['./admin/admin/getEnquiry']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
