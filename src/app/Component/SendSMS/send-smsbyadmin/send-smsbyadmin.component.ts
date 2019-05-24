import { Component, OnInit } from '@angular/core';
import { SMSMessageMaster } from 'src/app/Entity/SMSMessageMaster';
import { BatchDetailsService } from 'src/app/Services/BatchDetails/batch-details.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SMSMessageMasterServicesService } from 'src/app/Services/SMSMessageMaster/smsmessage-master-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-send-smsbyadmin',
  templateUrl: './send-smsbyadmin.component.html',
  styleUrls: ['./send-smsbyadmin.component.css']
})
export class SendSMSBYAdminComponent implements OnInit {
  busy: Promise<any>;
  Result : any;
  sMSMessage = {} as SMSMessageMaster;
  constructor(private _service:SMSMessageMasterServicesService,private router: Router) { }

  ngOnInit() {
  }

  onFormSubmit() {
    debugger;
    this.busy =this._service.postSMS(this.sMSMessage).subscribe(
      res => this.Result = res);
     (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {      
      alert(' server error');
    } else {
      alert('Client error');
    }
   };
   debugger;
  if(this.busy)
    {
      alert("SMS Send Successfully.");
      this.sMSMessage={} as SMSMessageMaster;
    }
    else{
      alert("SMS not Send.");
    }
    
  }

}
