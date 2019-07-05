import { WINDOW } from '@ng-toolkit/universal';

import { Component, OnInit , Inject} from '@angular/core';
import { EnquiryServiceService } from 'src/app/Services/EnquiryServices/enquiry-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { EnquiryModel } from '../../../Entity/EnquiryModel';

@Component({
selector:'app-get-enquiry',
templateUrl:'./get-enquiry.component.html',
styleUrls: ['./get-enquiry.component.css']
})
export class GetEnquiryComponent implements OnInit {
    busy: Promise<any>;
    enquiries: EnquiryModel []
public result:any;
constructor(@Inject(WINDOW) private window: Window, private _service:EnquiryServiceService, private router:Router) { }
ngOnInit() {
    this.busy =this._service.getEnquiryInfo().subscribe(res=>this.result=res);
(err:HttpErrorResponse)=>{
if(err.error instanceof Error){
console.log("Server Side Error !");
}else{
console.log("Client Side Error !");
}
}
}
deleteEnquiry(enquiry: EnquiryModel): void {
    this._service.deleteEnquiry(enquiry.enquiryID)
      .subscribe( data => {
        this.enquiries = this.enquiries.filter(e => e !== enquiry);
      })
  };
  
  editUser(Enquiry: EnquiryModel): void {
    this.window.localStorage.removeItem("EnquiryId");
    this.window.localStorage.setItem("EnquiryId", Enquiry.enquiryID.toString());
    this.router.navigate(['admin/update-enquiry']);
  };
 
  }

