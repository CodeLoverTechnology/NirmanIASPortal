import { Component, OnInit } from '@angular/core';
import { EnquiryModel } from 'src/app/Entity/EnquiryModel';
import { EnquiryServiceService } from 'src/app/Services/EnquiryServices/enquiry-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-insert-enquiry',
    templateUrl: './insert-enquiry.component.html',
    styleUrls: ['./insert-enquiry.component.css']
})
export class InsertEnquiryComponent implements OnInit {
    busy: Promise<any>;
    privatevar_one: string;
    enquiry = {} as EnquiryModel;

    constructor(private _service: EnquiryServiceService) { }
    ngOnInit() { }
    onSubmit() {
        this.busy = this._service.postEnquiry(this.enquiry).subscribe(
            result => this.enquiry = result);
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log("Server Side Error....!");
            } else {
                console.log("Client Side Error !");
            }
        };
        alert('Dear Student Your Enquiry has Submited to NIRMAN IAS. We Well get back to you soon!!!...Enquiry ID : ' + this.enquiry["enquiryID"]);
        closeNav();
    }

}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}