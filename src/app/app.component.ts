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
  enquiry = new EnquiryModel(0,'Harsh','abc@gmail.com',9865327412,'Faculty Test By Dev Team.',null,'Admin',new Date(),'Admin',new Date(),true);
}
