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

  CourseMaster ={} as CourseMaster;

  constructor(private _service:CourseMasterService) { }
  ngOnInit(){ }
  onSubmit()
  {
  var Result = this._service.postCourseMasterInfo(this.CourseMaster).subscribe(
            result =>{
              this.CourseMaster =result ? result : undefined ;
              this.CourseMaster;              
              } ,
    (err:HttpErrorResponse)=>{
   if(err.error instanceof Error){
    console.log("Server Side Error....!");
        }else{
          console.log("Client Side Error   !");
        }
      })
  
  }
  

}
