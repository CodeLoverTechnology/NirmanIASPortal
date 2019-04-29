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
  busy: Promise<any>;
  constructor(private _service:NirmanResultMasterService) { }
  ngOnInit(){ }
  onFormSubmit()
  {
    this.Results.IsNew=true;
    this.busy = this._service.postNirmanResults(this.Results).subscribe(
   result => this.Results = result);
      (err:HttpErrorResponse)=>{
     if(err.error instanceof Error){
            console.log("Server Side Error....!");
          }else{
            console.log("Client Side Error   !");
          }
        };
        if(this.busy)
        {
          alert("NIrman IAS Result Added Successfully.");
          this.Results = {} as NirmanResultMasters;
        //this.router.navigate(['/get-current']);
        }
        else{
          alert("NIrman IAS Result not Added.");
        }
    
    }
  }
