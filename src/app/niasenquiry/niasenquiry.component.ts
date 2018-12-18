import { Component, OnInit } from '@angular/core';
import { EnquiryServicesService } from '../enquiry-services.service';

@Component({
  selector: 'app-niasenquiry',
  templateUrl: './niasenquiry.component.html',
  styleUrls: ['./niasenquiry.component.css']
})
export class NIASEnquiryComponent implements OnInit {
public EnquiryList = [];
  constructor(private InsertEnq :EnquiryServicesService) { }

  ngOnInit() {
    this.InsertEnq.GetEnquiryList().subscribe(data=> this.EnquiryList = data)
    console.log("Get Function Call."+ this.EnquiryList);
  }

}
