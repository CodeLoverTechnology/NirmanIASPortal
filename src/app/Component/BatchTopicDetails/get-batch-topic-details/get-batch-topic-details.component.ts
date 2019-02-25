import { Component, OnInit } from '@angular/core';
import {BatchTopicDetailsService} from "../../../Services/BatchTopicDetails/batch-topic-details.service";
import {BatchTopicDetails} from "../../../Entity/batch-topic details";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-get-batch-topic-details',
  templateUrl: './get-batch-topic-details.component.html',
  styleUrls: ['./get-batch-topic-details.component.css']
})
export class GetBatchTopicDetailsComponent implements OnInit {

  public result:any;
  constructor(private _service:BatchTopicDetailsService) { }
ngOnInit() {
    this._service.getBatchdetailInfo().subscribe(res=>this.result=res);
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("Server Side Error !");
  }else{
      console.log("Client Side Error   !");
  }
}
}

}

