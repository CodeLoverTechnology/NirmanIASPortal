import { Component, OnInit } from '@angular/core';
import {BatchTopicDetailsService} from "../../../Services/BatchTopicDetails/batch-topic-details.service";
import {BatchTopicDetails} from "../../../Entity/batch-topic details";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-insert-batch-topic-details',
  templateUrl: './insert-batch-topic-details.component.html',
  styleUrls: ['./insert-batch-topic-details.component.css']
})
export class InsertBatchTopicDetailsComponent implements OnInit {
batchTopic = {} as BatchTopicDetails;
  constructor(private _service:BatchTopicDetailsService) { }

  ngOnInit() {
  }
  onFormSubmit()
  {
    debugger;
  this._service.postBatchdetail(this.batchTopic).subscribe(
    result => console.log('Success !!!.',result),
      (err:HttpErrorResponse)=>{
     if(err.error instanceof Error){
            console.log("Server Side Error....!");
          }else{
            console.log("Client Side Error   !");
          }
        })
      console.log(this.batchTopic);
    }}

