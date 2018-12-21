import { Component } from '@angular/core';
import { EnquiryModel } from './enquiry-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  TypeOfEnquiry = ['Student','Class','Faculty'];
  title = 'NirmanIASWeb';
  enquiry = new EnquiryModel(1,'Harsh','abc@gmail.com',1234567890,'type message','reply message',null,'Harsh','2018-12-21','Harsh','2018-12-21',true);
}
