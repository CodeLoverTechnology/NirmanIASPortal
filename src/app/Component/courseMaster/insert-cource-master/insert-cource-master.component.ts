import { Component, OnInit, NgModule } from '@angular/core';
import { CourseMaster } from 'src/app/Entity/course-master';
import { CourseMasterService } from 'src/app/Services/CourseMaster/course-master.service';
import { HttpErrorResponse } from '@Angular/common/http';

@Component({
  selector: 'app-insert-cource-master',
  templateUrl: './insert-cource-master.component.html',
  styleUrls: ['./insert-cource-master.component.css']
})
export class InsertCourceMasterComponent implements OnInit {

  Course ={} as CourseMaster;

  constructor(private _service:CourseMasterService) { }
  ngOnInit(){ }
  onSubmit()
  {
    
  this._service.postCategory(this.Course).subscribe(
    result => console.log('Success !!!.',result),
      (err:HttpErrorResponse)=>{
     if(err.error instanceof Error){
            console.log("Client Side Error....!");
          }else{
            console.log("Server Side Error   !");
          }
        })
      console.log(this.Course);
    }}

