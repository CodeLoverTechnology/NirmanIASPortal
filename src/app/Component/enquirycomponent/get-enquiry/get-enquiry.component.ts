
import { Component, OnInit } from '@angular/core';
import { EnquiryServiceService } from 'src/app/Services/EnquiryServices/enquiry-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
selector:'app-get-enquiry',
templateUrl:'./get-enquiry.component.html',
styleUrls: ['./get-enquiry.component.css']
})
export class GetEnquiryComponent implements OnInit {
    busy: Promise<any>;
public result:any;
constructor(private _service:EnquiryServiceService) { }
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
}
