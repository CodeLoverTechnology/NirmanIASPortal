import { Component, OnInit } from '@angular/core';
import {BatchDetailsService} from "../../../Services/BatchDetails/batch-details.service";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-get-batch-details',
  templateUrl: './get-batch-details.component.html',
  styleUrls: ['./get-batch-details.component.css']
})
export class GetBatchDetailsComponent implements OnInit {
public Result:string;
  constructor(private _service:BatchDetailsService) { }

  ngOnInit() {
    this._service.getBatchInfo().subscribe(res=> this.Result =res);
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("Client Side Error  !");
      }else{
        console.log("Server Side Error   !");
      }
    }
    
  }

}
