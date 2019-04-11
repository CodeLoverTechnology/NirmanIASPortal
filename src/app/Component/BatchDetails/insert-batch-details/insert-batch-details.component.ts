import { Component, OnInit } from '@angular/core';
import { BatchDetails } from 'src/app/Entity/batch-details';
import { BatchDetailsService } from 'src/app/Services/BatchDetails/batch-details.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-insert-batch-details',
  templateUrl: './insert-batch-details.component.html',
  styleUrls: ['./insert-batch-details.component.css']
})
export class InsertBatchDetailsComponent implements OnInit {    
  busy: Promise<any>;
  privatevar_one: string;
  Result : any;
  batchDetails = {} as BatchDetails;
  constructor(private _service: BatchDetailsService) { }

  ngOnInit() {
  }

  onSubmit() {
     this.busy = this._service.postBatchDetails(this.batchDetails).subscribe(
        result => this.Result = result);
    (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
            console.log("Server Side Error....!");
        } else {
            console.log("Client Side Error !");
        }
    };
    alert('Dear Student Your Enquiry has Submited to NIRMAN IAS. We Well get back to you soon!!!...Enquiry ID : ' + this.Result);
}

}
