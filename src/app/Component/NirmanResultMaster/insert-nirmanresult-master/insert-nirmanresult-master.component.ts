import { Component, OnInit } from '@angular/core';
import {NirmanResultMasterService} from "../../../Services/NirmanResultMaster/nirman-result-master.service";
import {NirmanResultMasters} from "../../../Entity/NirmanResultMaster";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-insert-nirmanresult-master',
  templateUrl: './insert-nirmanresult-master.component.html',
  styleUrls: ['./insert-nirmanresult-master.component.css']
})
export class InsertNirmanresultMasterComponent implements OnInit {

  Results = {} as NirmanResultMasters;

  constructor(private _service:NirmanResultMasterService) { }
  ngOnInit(){ }
  onFormSubmit()
  {
    debugger;
    this._service.postNirmanResults(this.Results).subscribe(
   result => console.log('Success !!!.',result),
      (err:HttpErrorResponse)=>{
     if(err.error instanceof Error){
            console.log("Server Side Error....!");
          }else{
            console.log("Client Side Error   !");
          }
        }) 
        debugger;
      console.log(this.Results);
    }}
