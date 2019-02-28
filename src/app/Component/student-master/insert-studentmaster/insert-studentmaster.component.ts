import { Component, OnInit } from '@angular/core';
import {StudentmasterService} from "../../../Services/StudentMaster/studentmaster.service";
import {StudentMaster} from "../../../Entity/student-master";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-insert-studentmaster',
  templateUrl: './insert-studentmaster.component.html',
  styleUrls: ['./insert-studentmaster.component.css']
})
export class InsertStudentmasterComponent implements OnInit {

  student = {} as StudentMaster;

  constructor(private _service:StudentmasterService) { }
  ngOnInit(){ }
  onFormSubmit()
  {
    debugger;
    this._service.postStudentMaster(this.student).subscribe(
   result => console.log('Success !!!.',result),
      (err:HttpErrorResponse)=>{
     if(err.error instanceof Error){
            console.log("Server Side Error....!");
          }else{
            console.log("Client Side Error   !");
          }
        }) 
        debugger;
      console.log(this.student);
    }}

