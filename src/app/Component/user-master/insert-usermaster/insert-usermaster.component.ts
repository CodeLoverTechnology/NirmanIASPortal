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

  usermaster = {} as UserMaster;

  constructor(private _service:UsermasterService) { }
  ngOnInit(){ }
  onFormSubmit()
  {
    debugger;
    this._service.postUser(this.usermaster).subscribe(
   result => console.log('Success !!!.',result),
      (err:HttpErrorResponse)=>{
     if(err.error instanceof Error){
            console.log("Server Side Error....!");
          }else{
            console.log("Client Side Error   !");
          }
        }) 
        debugger;
      console.log(this.usermaster);
    }}

