import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EnquiryServiceService } from 'src/app/Services/EnquiryServices/enquiry-service.service';
import { EnquiryModel } from 'src/app/Entity/EnquiryModel';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete-enquiry',
  templateUrl: './delete-enquiry.component.html',
  styleUrls: ['./delete-enquiry.component.css']
})
export class DeleteEnquiryComponent implements OnInit {
  enquiry: EnquiryModel;
  EnqID : number;
  busy: Promise<any>;
  constructor(private router: Router,private route: ActivatedRoute, private _Service:EnquiryServiceService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.EnqID=params.enquiryID ;
    });
    this.busy =this._Service.getEnquiryById(this.EnqID).subscribe(res=>this.enquiry=res);
    (err:HttpErrorResponse)=>{
    if(err.error instanceof Error){
    console.log("Server Side Error !");
    }else{
    console.log("Client Side Error !");
    }
    }
    if(!this.EnqID) {
      alert("Invalid action.")
      this.router.navigate(['admin/get-enquiry']);
      return;
    }
  }

  onSubmit() {    
    debugger;
    this._Service.deleteEnquiry(this.enquiry.enquiryID)
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
