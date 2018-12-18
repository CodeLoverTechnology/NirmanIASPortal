import { Component, OnInit } from '@angular/core';
import { EnquiryModel } from '../enquiry-model';
import { EnquiryServicesService } from '../enquiry-services.service';

@Component({
  selector: 'app-niasinsert-enquiry',
  templateUrl: './niasinsert-enquiry.component.html',
  styleUrls: ['./niasinsert-enquiry.component.css']
})
export class NIASInsertEnquiryComponent implements OnInit {
  TypeOfEnquiry = ['Student','Class','Faculty'];
  TopicHasError=true;
  enquiry = new EnquiryModel(0,'Harsh','abc@gmail.com',9865327412,'Faculty Test By Dev Team.',null,'Admin',new Date(),'Admin',new Date(),true);
  constructor(private InsertEnq :EnquiryServicesService) { }

  ngOnInit() {
  }

  validateTopic(value){
    if(value==='default'){
      this.TopicHasError=true;
    }
    else
    {
      this.TopicHasError=false;
    }
  }

  onSubmit()
  {
    this.InsertEnq.SubmitEnquiry(this.enquiry).subscribe(
      data => console.log('Success !!!.',data),
      error => console.error('Error!.',error)
    );
    console.log(this.enquiry);
  }

}
