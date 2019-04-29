import { Component, OnInit } from '@angular/core';
import {UsermasterService} from "../../../Services/UserMaster/usermaster.service";
import {UserMaster} from "../../../Entity/user-master";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-insert-usermaster',
  templateUrl: './insert-usermaster.component.html',
  styleUrls: ['./insert-usermaster.component.css']
})
export class InsertUsermasterComponent implements OnInit {

  Objuser = {} as UserMaster;
  public Response : any;
  busy: Promise<any>;
  constructor(private _service:UsermasterService) { }
  ngOnInit(){ }

  onFormSubmit()
  {
    debugger;
    this.busy == this._service.postUser(this.Objuser).subscribe(
   result => this.Response = result);
      (err:HttpErrorResponse)=>{
     if(err.error instanceof Error){
            console.log("Server Side Error....!");
          }else{
            console.log("Client Side Error   !");
          }
        };
        debugger;
      console.log(this.Response);
    }}

