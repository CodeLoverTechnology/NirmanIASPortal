import { Component, OnInit } from '@angular/core';
import { EnquiryModel } from '../enquiry-model';
import { EnquiryServicesService } from '../enquiry-services.service';

@Component({
  selector: 'app-niasinsert-enquiry',
  templateUrl: './niasinsert-enquiry.component.html',
  styleUrls: ['./niasinsert-enquiry.component.css']
})
export class NIASInsertEnquiryComponent implements OnInit {
  // TypeOfEnquiry = ['Student','Class','Faculty'];
  // TopicHasError=true;
  private result:any;
  enquiry = new EnquiryModel(1,'Harsh','abc@gmail.com',1234567890,'type message','reply message',null,'Harsh','2018-12-21','Harsh','2018-12-21',true);
  constructor(private InsertEnq :EnquiryServicesService) { }

  ngOnInit() {
  }

//   validateTopic(value){
//     if(value==='default'){
//       this.TopicHasError=true;
//     }
//     else
//     {
//       this.TopicHasError=false;
//     }
//   }

  onSubmit()
  {
    this.InsertEnq.SubmitEnquiry(this.enquiry).subscribe(
     data => console.log('Success !!!.',data),
     error => console.error('Error!.',error)
   );
   console.log(this.enquiry);
}
}