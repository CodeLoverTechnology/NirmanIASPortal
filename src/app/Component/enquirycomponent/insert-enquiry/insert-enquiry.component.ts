import { Component, OnInit } from '@angular/core';
import { EnquiryModel } from 'src/app/Entity/EnquiryModel';
import { EnquiryServiceService } from 'src/app/Services/EnquiryServices/enquiry-service.service';
import { HttpErrorResponse } from '@Angular/common/http';

@Component({
  selector: 'app-insert-enquiry',
  templateUrl: './insert-enquiry.component.html',
  styleUrls: ['./insert-enquiry.component.css']
})
export class InsertEnquiryComponent implements OnInit {
  private var_one:string;
  enquiry :EnquiryModel = {};

constructor(private _service:EnquiryServiceService) { }
ngOnInit(){ }
onSubmit()
{
  debugger;
  
this._service.postEnquiry(this.enquiry).subscribe(
  result => console.log('Success !!!.',result),
    (err:HttpErrorResponse)=>{
   if(err.error instanceof Error){
          console.log("Server Side Error....!");
        }else{
          console.log("Client Side Error   !");
        }
      })
    console.log(this.enquiry);
  }

}
