import { Component, OnInit } from '@angular/core';
import { EnquiryServicesService } from '../enquiry-services.service';
import {EnquiryModel} from "../enquiry-model";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-niasenquiry',
  templateUrl: './niasenquiry.component.html',
  styleUrls: ['./niasenquiry.component.css']
})
export class NIASEnquiryComponent implements OnInit {
private result:any;
title = 'NirmanIASWeb';
  enquiry = new EnquiryModel(1,'Harsh','abc@gmail.com',1234567890,'type message','reply message',null,'Harsh','2018-12-21','Harsh','2018-12-21',true);
  constructor(private _service :EnquiryServicesService) { }

  ngOnInit() {
    // this.InsertEnq.GetEnquiryList().subscribe(data=> this.EnquiryList = data)
    // console.log("Get Function Call."+ this.EnquiryList);
    this._service.getEnquiry().subscribe(res=>this.result=res);
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("Client Side Error  !");
}else{
  console.log("Server Side Error  !");
}
    }
  }

}
