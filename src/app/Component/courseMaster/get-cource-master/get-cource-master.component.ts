import { Component, OnInit, NgModule } from '@angular/core';
import { CourseMasterService } from 'src/app/Services/CourseMaster/course-master.service';
import { HttpErrorResponse } from '@Angular/common/http';

@Component({
  selector: 'app-get-cource-master',
  templateUrl: './get-cource-master.component.html',
  styleUrls: ['./get-cource-master.component.css']
})
export class GetCourceMasterComponent implements OnInit {
  public result:any;
  constructor(private _service:CourseMasterService) { }
ngOnInit() {
    this._service.getCourseMasterInfo().subscribe(res=>this.result=res);
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("Server Side Error !");
  }else{
      console.log("Client Side Error   !");
  }
}
}

}
