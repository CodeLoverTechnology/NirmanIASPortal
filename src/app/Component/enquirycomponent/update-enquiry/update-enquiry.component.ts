import { Component, OnInit } from '@angular/core';
import { EnquiryModel } from 'src/app/Entity/EnquiryModel';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { EnquiryServiceService } from './../../../Services/EnquiryServices/enquiry-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-update-enquiry',
  templateUrl: './update-enquiry.component.html',
  styleUrls: ['./update-enquiry.component.css']
})
export class UpdateEnquiryComponent implements OnInit {
  enquiry: EnquiryModel;
  UpdateForm: NgForm;
  constructor(private router: Router, private _Service:EnquiryServiceService ) { }

  ngOnInit() {
    let enquiryId = window.localStorage.getItem("updateenquiryID");
    if(!enquiryId) {
      alert("Invalid action.")
      this.router.navigate(['admin/get-enquiry']);
      return;
    }
    
    this._Service.getEnquiryById(+enquiryId)
      .subscribe( data => {
        this.UpdateForm.setValue(data.result);
      });
  }

  onSubmit() {
    this._Service.updateEnquiry(this.UpdateForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('User updated successfully.');
            this.router.navigate(['admin/admin/getEnquiry']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
